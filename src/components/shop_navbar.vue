<template>
  <div id="desktop-category-nav">
    <div class="d-lg-block nav-tab-bar text-skinny-s position-relative pt-4">
      <div class="max-width-1400 px-2 px-md-4">
        <ul
          class="max-width-1400 list-unstyled d-flex justify-content-center overflow-hidden"
        >
          <li>
            <router-link :to="`/shop/original`" class="text-link-no-underline">
              <span>Original Artworks</span>
            </router-link>
          </li>
          <li>
            <router-link :to="`/shop/prints`" class="text-link-no-underline">
              <span>Prints</span>
            </router-link>
          </li>
          <li>
            <router-link :to="`/shop/postcards`" class="text-link-no-underline">
              <span>Postcards</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="`/shop/accessories`"
              class="text-link-no-underline"
            >
              <span>Accessories</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.text-skinny {
  &-s {
    font-weight: 300;
    font-size: 0.8rem;
    // line-height: 0.8rem;
  }
}
a.text-link-no-underline {
  text-decoration: none;
  color: inherit;
  // transition: opacity 200ms ease-out;
}
.nav-tab-bar {
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 2px solid rgba(34, 34, 34, 0.15);
  }
  li {
    margin-right: 1rem;
    padding-bottom: 0.6rem;
    &:last-child {
      margin-right: 0rem;
    }
  }
}
.max-width-1400 {
  max-width: 1400px;
  margin: 0 auto;
}
@media (max-width: 576px) {
  .nav-tab-bar {
    li {
      font-size: 0.7rem;
    }
  }
}
</style>
<script>
export default {
  name: 'ShopNav',
  components: {},
  setup() {},
};
</script>
