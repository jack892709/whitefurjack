<template>
    <!-- <div class="min-vh-100 d-flex">
        <h1 class="d-block m-auto">Under Counstruction</h1>
    </div> -->
    <main>
        <div class="max-body-width min-body-height">
            <div class="cart-empty" v-if="!tobuyCount">
                <h3 class="cart-title mb-4">Your cart is empty.</h3>
                <router-link to="/shop">Continue Shopping</router-link>
            </div>
            <div class="container-fluid px-2 px-sm-3 px-md-4 py-4"  v-if="tobuyCount">
                <div class="row">
                    <div class="col-lg-8 mb-4">
                        <h2 class="cart-title mb-4">Shopping Cart</h2>
                        <CartContent/>
                    </div>
                    <div class="col-lg-4">
                        <h2 class="cart-title mb-4">Order Summary</h2>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.max-body-width {
    max-width: 1400px;
    margin: 0 auto;
}
.min-body-height {
    height: calc(100vh - 200px);
}
.cart-title {
    font-size: 1.4rem;
    font-weight: 300;
}
.cart-empty {
    padding: 175px 0;
    text-align: center;
    a {
        color: #2f2f2f;
        &:hover {
            color: #727272;
        }
    }
}
</style>

<script>
import {
    computed,
} from 'vue';
import { useStore } from 'vuex';
import CartContent from '@/components/CartContent.vue';

export default {
    name: 'Cart',
    components: {
        CartContent,
    },
    setup() {
        // Vuex Storage
        const store = useStore();

        return {
            tobuyCount: computed(() => store.getters.tobuyCount),
        };
    },
};
</script>
