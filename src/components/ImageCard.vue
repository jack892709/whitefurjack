<template>
  <div class="image-box">
    <div
      class="image-square"
      :class="{'cursor-pointer': clickable}"
      @click="onImageClick"
    >
      <picture>
        <img
          :src="info.img_url"
          alt=""
        />
      </picture>
      <div class="shade">#{{ info.title }}</div>
    </div>
    <div class="details">
      <div class="title">{{ info.title }}, {{ info.year }}</div>
      <div class="tags">{{ info.tags }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    info: Object,
    clickable: Boolean,
  },
  emits: ['image-click'],
  setup(props, { emit }) {
    function onImageClick() {
      emit('image-click');
    }

    return {
      onImageClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.image-box {
  .image-square {
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .shade {
      display: none;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      background-color: #00000085;
      font-size: 1.5rem;
      z-index: 1;
    }
    &:hover {
      .shade {
        display: flex;
      }
    }
  }
  a {
    text-decoration: none;
  }
}

.details {
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
  .title {
    display: inline-block;
    color: #2f2f2f;

    width: 60%;
    overflow: hidden;
    font-size: 0.7rem;
  }
  .tags {
    color: rgba(0, 0, 0, 0.5);

    display: inline-block;
    width: 38%;
    text-align: right;
    overflow: hidden;
    font-size: 0.6rem;
  }
}

.cursor-pointer {
  cursor: pointer;
}
</style>
