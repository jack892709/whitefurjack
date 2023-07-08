<template>
  <!-- <div>
        <h1>This is a product</h1>
    </div> -->
  <div
    class="cart-popup"
    :class="{active: isActive}"
  >
    <div
      class="curtain"
      @click="closeCart"
    >

    </div>
    <div class="minicart">
      <!-- <button @click="closeCart">close</button> -->
      <header class="d-flex p-2">
        <div
          id="closeCartButton"
          class="btn-right p-2"
          @click="closeCart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 12 12"
            data-v-220f4773=""
          >
            <g
              fill="none"
              fill-rule="evenodd"
              data-v-220f4773=""
            >
              <path
                d="M0 0h12v12H0z"
                data-v-220f4773=""
              ></path>
              <path
                fill="#29242D"
                d="M4.214 11.707L2.8 10.293l4.293-4.294L2.8 1.707 4.214.293l5.707 5.706z"
                data-v-220f4773=""
              ></path>
            </g>
          </svg>
        </div>
        <span class="title ps-3 d-inline-block mt-auto mb-auto">Cart</span>
      </header>
      <section class="px-2 flex-grow-1 overflow-scroll scroll-container-no-scrollbar">
        <div
          class="h-100 d-flex justify-content-center align-items-center"
          v-if="!tobuyCount"
        >
          <span>Your cart is empty.</span>
        </div>
        <div
          class="cart-container"
          v-show="tobuyCount"
        >
          <div class="cart-labels py-2">
            <div class="cart-labels-item">
              <span>item</span>
            </div>
            <div class="cart-labels-quantity d-none">
              <span>quantity</span>
            </div>
            <div class="cart-labels-price me-2">
              <span>price</span>
            </div>
            <div class="cart-labels-remove"></div>
          </div>
          <div
            class="cart-item py-3"
            v-for="item in tobuys"
            :key="item.id"
          >
            <div class="cart-item-image image-box me-3">
              <a
                href="#"
                class="d-block"
              >
                <div class="image-square">
                  <picture>
                    <img
                      class="complete"
                      :src="item.img_url"
                      :alt="item.title"
                    />
                  </picture>
                </div>
              </a>
            </div>
            <div class="cart-item-combo">
              <div class="cart-item-desc mb-1">
                <div class="cart-text-title mb-1">
                  <router-link :to="`/product/${item.alias}`">{{item.title}}</router-link>
                </div>
                <div class="cart-text">
                  <span>{{item.option}}</span>
                </div>
              </div>
              <div class="cart-item-quantity">
                <div class="cart-control">
                  <div class="cart-input-group mytext-body">
                    <div class="input-group-prepend">
                      <button
                        type="button"
                        class=""
                        @click="reduceTobuyQuantity(item.id)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                      </button>
                    </div>
                    <input
                      type="text"
                      class="myform-control"
                      :value="item.quantity"
                      disabled
                      @change="updateTobuyQuantity"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class=""
                        @click="addTobuyQuantity(item.id)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cart-item-price me-2">
              <span>{{item.currency}}${{item.price}}</span>
            </div>
            <div class="cart-item-remove">
              <button
                class="mybtn rounded-pill"
                @click="removeTobuy(item.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.077 0L12 .923 6.923 6 12 11.077l-.923.923L6 6.923.923 12 0 11.077 5.076 6 0 .923.923 0 6 5.077 11.077 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        class="px-3 py-2 text-end"
        v-if="tobuySubtotal"
      >
        <span class="me-2 mytext">Subtotal</span>
        <span class="fw-bold">NT${{tobuySubtotal}}</span>
      </section>
      <footer class="p-3">
        <router-link
          to="/cart"
          class="mybtn w-100 btn-dark"
        >
          <div>View Cart</div>
        </router-link>
      </footer>
    </div>
  </div>
  <div
    class="cart-bar fixed-bottom d-lg-none"
    v-if="tobuyCount"
  >
    <router-link
      to="/cart"
      class="d-flex p-2"
    >
      <div class="flex-grow-1">
        <div class="icon d-inline-block mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
        </div>
        <div class="count d-inline-block mytext">
          <span>{{tobuyCount}}</span>
          <span> Items</span>
        </div>
      </div>
      <div class="price d-inline-block mytext my-auto">
        <span class="me-1">Subtotal</span>
        <span class="fw-bold">NT${{tobuySubtotal}}</span>
      </div>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
$base-width: 400px;
.mytext {
  font-size: 0.8rem;
}
.scroll-container-no-scrollbar::-webkit-scrollbar {
  display: none;
}
.cart-popup {
  position: fixed;
  width: 100%;
  height: 0%;
  // height: 100%;
  z-index: 1030;
  .curtain {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: 0.6;
    // z-index: 101;
  }
  .minicart {
    position: absolute;
    top: 0;
    right: 0;
    // z-index: 101;
    height: 100vh;
    width: 100%;
    transform: translate(100vw);
    // transition: transform 0.8s ease-in-out;
    background: #fff;
    display: flex;
    flex-direction: column;
    // section {
    //     flex-grow: 1;
    // }
  }

  .btn-right {
    cursor: pointer;
    transform: rotate(180deg);
    transition: transform 0.5s ease-in-out;
  }
  .title {
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 700;
  }

  &.active {
    // display: block;
    height: 100%;
    .minicart {
      transform: translateX(0);
    }
    .btn-right {
      transform: rotate(0deg);
    }
  }
}
// button {
.mybtn {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  text-align: left;
  outline: none;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Droid Sans',
    'Segoe UI', 'Helvetica', Arial, sans-serif;
  /* border-radius: 24px; */
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  min-height: 48px;
  min-width: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  position: relative;
  text-align: center;
  vertical-align: middle;

  &.btn-dark {
    background: #2f2f2f;
    color: #fff;
  }
}
// }

.cart-control {
  width: 100px;
  .cart-input-group {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;

    .input-group-prepend,
    .input-group-append {
      display: -ms-flexbox;
      display: flex;
    }
    .input-group-prepend {
      margin-right: -1px;
    }
    .input-group-append {
      margin-left: -1px;
    }

    .myform-control {
      text-align: center;
      position: relative;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      width: 1%;
      margin-bottom: 0;

      border-radius: 0;
    }
    input {
      border: 1px solid #e5e5e5;
      outline: none;

      font-size: 0.8rem;
      line-height: 1.4rem;
    }
    button {
      display: inline-block;
      padding: 0.375rem 0.75rem;
      background-color: #fff;
      // border: 1px solid transparent;
      border: 1px solid #e5e5e5;
      &:hover {
        // background-color: #d8d8d8;
        background-color: #e5e5e5;
      }
    }
  }
}
.cart {
  // &-container {
  // }
  &-labels {
    display: flex;
    vertical-align: middle;
    text-transform: uppercase;
    font-size: 0.6rem;
    letter-spacing: 0.05em;
    background-color: #fff;
    color: #969696;
    // opacity: 0.6;

    // position: relative;
    position: sticky;
    top: 0;
    z-index: 1020;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-bottom: 1px solid rgba(34, 34, 34, 0.15);
    }
    &-item,
    &-quantity,
    &-price,
    &-remove {
      display: inline-block;
    }
    &-item {
      flex-grow: 1;
    }
    &-quantity {
      width: 100px;
      text-align: center;
    }
    &-price {
      text-align: right;
      font-weight: 700;
      min-width: 80px;
    }
    &-remove {
      width: 26px;
    }
  }
  &-text {
    font-size: 0.7rem;
    line-height: 0.9rem;
  }
  &-text-title {
    font-size: 0.8rem;
    line-height: 1.1rem;
    a {
      text-decoration: none;
      color: #2f2f2f;
    }
  }
  &-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-bottom: 1px solid rgba(34, 34, 34, 0.15);
    }
    &-image {
      width: 100px;
      min-width: 80px;
      // margin-right: 1rem;
    }
    &-combo {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    &-desc {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    // &-quantity {

    // }
    &-price {
      font-size: 0.8rem;
      white-space: nowrap;
      text-align: right;
      min-width: 80px;
    }
    &-remove {
      line-height: 0;
      button {
        color: #727272;
        // border: 1px solid #727272;
        padding: 0;
        min-width: 26px;
        min-height: 26px;
        &:hover {
          color: #2f2f2f;
          // border: 1px solid #2f2f2f;
        }
      }
    }
  }
  &-control {
    .cart-input-group {
      button {
        padding: 1px 6px;
      }
    }
  }
}
.image-box {
  .image-square {
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      &.extend {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &.complete {
        max-width: 100%;
        max-height: 100%;

        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
  a {
    text-decoration: none;
  }
}

.cart-bar {
  background-color: #f8f8f8;
  a {
    color: #2f2f2f;
    text-decoration: none;
  }
  .icon {
    width: 24px;
    height: 24px;
    line-height: 0;
  }
}

@media (min-width: 576px) {
  .cart-popup {
    .minicart {
      width: $base-width;
      transform: translate($base-width);
      transition: transform 0.5s ease-in-out;
    }
  }
}
</style>

<script>
import {
  computed, watch, onMounted,
} from 'vue';
import { useStore } from 'vuex';

// localStorage persistence
const STORAGE_KEY = 'whitefurjack_cart';
const cartLocalStorage = {
  fetch() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    // todos.forEach((todo, index) => {
    //     todo.id = index;
    // });
    // todoStorage.uid = todos.length;
    return data;
  },
  save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },
};

export default {
  name: 'CartPopup',
  props: ['isCartActive'],
  emits: ['closeCart'],
  components: {
  },
  setup(props, { emit }) {
    const isActive = computed(() => props.isCartActive);
    const closeCart = () => {
      emit('closeCart');
    };

    // Vuex Storage
    const store = useStore();
    const removeTobuy = (id) => {
      store.commit('removeTobuy', id);
    };
    const addTobuyQuantity = (id) => {
      store.commit('addTobuyQuantity', id);
    };
    const reduceTobuyQuantity = (id) => {
      store.commit('reduceTobuyQuantity', id);
    };
    const updateTobuyQuantity = () => {
      // Not in use
    };
    const tobuys = computed(() => store.getters.getTobuys);

    onMounted(() => {
      console.log('fetch from local storage...');
      store.commit('setCart', cartLocalStorage.fetch());
    });
    watch(
      tobuys,
      () => {
        cartLocalStorage.save(tobuys.value);
      },
      {
        deep: true,
      },
    );

    return {
      isActive,
      closeCart,

      // tobuys: computed(() => store.getters.getTobuys),
      tobuys,
      tobuyCount: computed(() => store.getters.tobuyCount),
      tobuySubtotal: computed(() => store.getters.tobuySubtotal),
      removeTobuy,
      addTobuyQuantity,
      reduceTobuyQuantity,
      updateTobuyQuantity,
    };
  },
};
</script>
