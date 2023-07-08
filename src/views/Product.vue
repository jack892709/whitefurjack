<template>
  <ShopNav />
  <router-view />
</template>
<style lang="scss" scoped>
</style>

<script>
import ShopNav from '@/components/shop_navbar.vue';

export default {
  name: 'Product',
  components: {
    ShopNav,
  },
  setup() {},
};
</script>
