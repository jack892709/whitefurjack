<template>
  <!-- <div>
    <h1>This is a footer</h1>
  </div> -->
  <footer class="main pt-4 pb-3 pb-md-5">
    <div class="up mb-2 text-center">
      <span @click="scrollToTop">Up</span>
    </div>
    <div class="d-flex flex-column flex-sm-row justify-content-between">
      <div class="links">
        <div class="items ps-0 ps-md-3">
          <span class="item ps-3 pt-3 ps-md-4">
            <a href="#" target="_blank" title="Facebook">Facebook</a>
          </span>
          <span class="item ps-3 pt-3 ps-md-4">
            <a
              href="https://www.instagram.com/whitefurjack/"
              target="_blank"
              title="Instagram"
              >Instagram</a
            >
          </span>
          <span class="item ps-3 pt-3 ps-md-4">
            <a
              href="https://www.youtube.com/channel/UCKxJJ4-2g1ArSKdJLp2-p_A"
              target="_blank"
              title="Youtube"
              >Youtube</a
            >
          </span>
        </div>
      </div>
      <div class="credits pt-3 pe-3 pe-md-5 text-right">
        © 2021 whitefurjack
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.main {
  font-size: 14px;
  color: #727272;
  a {
    color: #727272;
    text-decoration: none;
    &:hover {
      color: #2f2f2f;
    }
  }
  .up {
    span {
      padding: 20px;
      cursor: pointer;
      :hover {
        color: #2f2f2f;
      }
    }
  }
  .links {
    .items {
      // margin-left: -54px;
      .item {
        display: inline-block;
        // padding-top: 20px;
        // padding-left: 54px;
      }
    }
  }
  .credits {
    text-align: right;
  }
}
</style>
<script>
export default {
  name: 'Footer',
  setup() {
    const scrollToTop = () => {
      document.body.scrollIntoView(true);
    };
    return {
      scrollToTop,
    };
  },
};
</script>
