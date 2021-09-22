<template>
    <!-- <div class="shop">
        <h1>This is an shop page</h1>
    </div> -->
    <div class="container-fluid">
        <div class="page-content pt-md-5">
            <h2 class="headline text-uppercase text-center fw-light pt-5 mt-4 mt-md-5">Shop</h2>
            <div class="">
            </div>
        </div>
    </div>
    <ShopNav/>
    <keep-alive>
    <router-view/>
    </keep-alive>
    <!-- <h1>category: {{ $route.params.productCategory }}</h1> -->
</template>

<style lang="scss" scoped>
.headline {
    &::after {
        content: '';
        display: block;
        background: #2f2f2f;
        width: 100px;
        height: 3px;
        // margin: 2rem auto;
        margin: 2.5rem auto 1.5rem auto;
    }
}
</style>

<script>
import ShopNav from '@/components/shop_navbar.vue';

export default {
    name: 'Shop',
    components: {
        ShopNav,
    },
    setup() {
        console.log('shop loaded');
    },
};
</script>
