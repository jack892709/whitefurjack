<template>
  <div
    class="container-fluid page"
    :class="{ 'd-none d-lg-block': $route.params.artworkId }"
  >
    <div
      class="row gx-2"
      id="outdoors-container"
    >
      <ImageCard
        clickable
        class="col-md-6 col-lg-4 col-xxl-3 pb-1"
        v-for="(item, itemIndex) in artList"
        :key="itemIndex"
        :info="item"
        @image-click="goToPage(item.id)"
      >
      </ImageCard>
    </div>
  </div>
  <router-view
    :artInfo="currentArtData"
    @switchPage="switchPage"
  />
</template>

<style lang="scss" scoped>
.page {
  padding-left: 5px;
  padding-right: 5px;

  min-height: calc(100vh - 200px);
}
</style>

<script>
import { openDB } from 'idb';
import {
  onMounted, onUnmounted, ref, computed, watch,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ImageCard from '../components/ImageCard.vue';

function makeObjectByFirstRow(multiArr) {
  const obj = [];
  const headers = multiArr.shift();
  for (let i = 0; i < multiArr.length; i += 1) {
    obj[i] = {};
    for (let j = 0; j < headers.length; j += 1) {
      if (headers[j]) {
        obj[i][headers[j]] = multiArr[i][j];
      } else {
        if (!obj[i].other) obj[i].other = [];
        obj[i].other.push(multiArr[i][j]);
      }
    }
  }
  return obj;
}

async function initDB() {
  const dbPromise = await openDB('whitefurjackData', 1, {
    upgrade(db) {
      // Create a store of objects
      db.createObjectStore('outdoors', {
        // The 'id' property of the object will be the key.
        keyPath: 'id',
        // If it isn't explicitly set, create a value by auto incrementing.
        autoIncrement: true,
      });
      // Create an index on the 'date' property of the objects.
      // store.createIndex('date', 'date');
    },
  });

  const idbOutdoors = {
    async get(key) {
      return (await dbPromise).get('outdoors', key);
    },
    async set(key, val) {
      return (await dbPromise).put('outdoors', val, key);
    },
    async delete(key) {
      return (await dbPromise).delete('outdoors', key);
    },
    async clear() {
      return (await dbPromise).clear('outdoors');
    },
    async keys() {
      return (await dbPromise).getAllKeys('outdoors');
    },
  };

  return { dbPromise, idbOutdoors };
}

// 大量資料的存取時使用transaction確保完整性
async function storeData(data, db) {
  const tx = db.transaction('outdoors', 'readwrite'); // 參數的部分單純取資料可用`readonly`

  const asyncList = (dataToStore) => dataToStore.map((item) => tx.store.add(item));

  await Promise.all([...asyncList(data), tx.done]); // 最後一步 call done method 來結束這次的transaction
}

export default {
  name: 'Outdoors',
  components: {
    ImageCard,
  },
  setup() {
    // Fetch Data //
    const artList = ref([]);
    function storeInArtList(data) {
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].id) artList.value.push(data[i]);
        // artList.value.push(data[i]);
      }
    }
    function removeBlankData(arr) {
      for (let i = 0; i < arr.length; i += 1) {
        if (!arr[i].id) {
          arr.splice(i, 1);
          i -= 1;
        }
      }
      return arr;
    }
    // getByQuantity 20210825
    const requestUrl = 'https://script.google.com/macros/s/AKfycbwJCgUlhtSzM9z4srQb9bH53UjwycLWd1IRAAIsAmtFgzw9qcZ2hMeVr-8de--Pcd5htQ/exec';
    // async function fetchArtInfo() {
    //     const result = await fetch(requestUrl, {
    //         headers: { 'Content-Type': 'text/plain' },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => makeObjectByFirstRow(json))
    //         .then((data) => {
    //             storeInArtList(data);
    //             return data;
    //         });
    //     return result;
    // }
    // fetchArtInfo();

    async function fetchDetailedArtInfoByQuantity(start, num) {
      const result = await fetch(
        `${requestUrl}?type=detail&searchby=quantity&start=${start}&value=${num}`,
        {
          headers: { 'Content-Type': 'text/plain' },
        },
      )
        .then((response) => response.json())
        .then((json) => makeObjectByFirstRow(json))
        .then((data) => {
          storeInArtList(data);
          return data;
        });
      return result;
    }

    // Load More //
    const isAllLoaded = ref(false);
    const checkAllLoaded = (data) => {
      for (let i = 0; i < data.length; i += 1) {
        if (!data[i].id) isAllLoaded.value = true;
      }
    };
    const loadMoreFactory = (startAt, numPerRequest) => {
      let start = startAt;
      const quantity = numPerRequest;
      let isLoading = false;
      return async () => {
        let result;
        if (!isLoading) {
          isLoading = true;
          result = await fetchDetailedArtInfoByQuantity(start, quantity)
            .then((data) => {
              checkAllLoaded(data);
              return data;
            })
            .then((data) => removeBlankData(data));

          isLoading = false;
          start += quantity;
        }
        return result;
      };
    };
    let loadMore = loadMoreFactory(1, 12);

    (async function initData() {
      const { dbPromise, idbOutdoors } = await initDB();
      const keys = await idbOutdoors.keys(); // 取出key值來確認 db 是否有cache資料了
      if (!keys.length) {
        const jsonData = await loadMore(); // api 取資料回來
        await storeData(jsonData, dbPromise); // 存進indexedDB
        // keys = await idbOutdoors.keys();
      } else {
        // Load from IndexedDB
        for (let i = 0; i < keys.length; i += 1) {
          idbOutdoors.get(keys[i]).then((item) => {
            artList.value.push(item);
          });
        }
        // Redefine loadMore function
        loadMore = loadMoreFactory(keys[keys.length - 1] + 1, 2);
      }
    }());

    async function storeMore(jsonData) {
      // eslint-disable-next-line no-unused-vars
      const { dbPromise, idbOutdoors } = await initDB();

      await storeData(jsonData, dbPromise); // 存進indexedDB
      // const keys = await idbOutdoors.keys();
      // console.log(keys);
    }

    function handleScroll() {
      if (window.scrollY + window.screen.height >= document.body.scrollHeight) {
        // loadMore();

        loadMore().then((data) => {
          if (data) storeMore(data);
        });
      }
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    watch(isAllLoaded, () => {
      if (isAllLoaded.value) window.removeEventListener('scroll', handleScroll);
    });

    // Control Pages //
    const route = useRoute();
    const artworkId = computed(() => route.params.artworkId);
    const router = useRouter();
    const currentPageIndex = computed(() => artList.value.findIndex(
      (item) => item.id === parseInt(artworkId.value, 10),
    ));
    const currentArtData = computed(
      () => artList.value[currentPageIndex.value],
    );
    function goToPage(id) {
      router.push({ name: 'artwork', params: { artworkId: id } });
    }
    function toNextPage() {
      let nextPageIndex = currentPageIndex.value + 1;
      nextPageIndex = nextPageIndex < artList.value.length ? nextPageIndex : 0;
      router.push(`/sketchbooks/outdoors/${artList.value[nextPageIndex].id}`);
    }
    function toLastPage() {
      let lastPageIndex = currentPageIndex.value - 1;
      lastPageIndex = lastPageIndex >= 0 ? lastPageIndex : artList.value.length - 1;
      router.push(`/sketchbooks/outdoors/${artList.value[lastPageIndex].id}`);
    }
    function switchPage(page) {
      switch (page) {
        case 'close': {
          router.push('/sketchbooks/outdoors');
          break;
        }
        case 'last': {
          toLastPage();
          break;
        }
        case 'next': {
          toNextPage();
          break;
        }
        default: {
          break;
        }
      }
    }

    return {
      artList,
      artworkId,
      currentArtData,
      // testingData,

      goToPage,
      switchPage,
      fetchDetailedArtInfoByQuantity,
    };
  },
};
</script>
