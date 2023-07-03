<template>
    <div id="cart">
        <div class="position-relative">
            <!-- <h2 class="cart-title mb-4">Shopping Cart</h2> -->
            <div class="cart-container">
                <div class="cart-labels pb-2">
                    <div class="cart-labels-item">
                        <span>item</span>
                    </div>
                    <div class="cart-labels-quantity d-none d-md-block">
                        <span>quantity</span>
                    </div>
                    <div class="cart-labels-price me-2">
                        <span>price</span>
                    </div>
                    <div class="cart-labels-remove"></div>
                </div>
                <div class="cart-item py-3" v-for="item in tobuys" :key="item.id">
                    <div class="cart-item-image image-box me-3">
                        <a href="#" class="d-block">
                            <div class="image-square">
                                <picture>
                                    <img class="complete" :src="item.img_url" :alt="item.title" />
                                </picture>
                            </div>
                        </a>
                    </div>
                    <div class="cart-item-combo d-flex flex-column flex-md-row flex-grow-1">
                        <div class="cart-item-desc mb-1 mb-md-0">
                            <div class="cart-text-title mb-1 mb-md-2">
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
                                    <button type="button" class="" @click="reduceTobuyQuantity(item.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                        </svg>
                                    </button>
                                    </div>
                                    <input type="text" class="myform-control" :value="item.quantity" @change="updateTobuyQuantity">
                                    <div class="input-group-append">
                                    <button type="button" class="" @click="addTobuyQuantity(item.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
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
                        <button class="mybtn rounded-pill" @click="removeTobuy(item.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"><path fill-rule="evenodd" d="M11.077 0L12 .923 6.923 6 12 11.077l-.923.923L6 6.923.923 12 0 11.077 5.076 6 0 .923.923 0 6 5.077 11.077 0z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
button {
    &.mybtn {
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
        font-family: -apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
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
}
.cart-control {
    width: 144px;
    .cart-input-group {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: stretch;
        align-items: stretch;
        width: 100%;

        .input-group-prepend, .input-group-append {
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
            border: 1px solid #E5E5E5;
            outline: none;

            font-size: 0.8rem;
            line-height: 1.4rem;
        }
        button {
            display: inline-block;
            padding: 0.375rem 0.75rem;
            background-color: #fff;
            // border: 1px solid transparent;
            border: 1px solid #E5E5E5;
            &:hover {
                // background-color: #d8d8d8;
                background-color: #E5E5E5;
            }
        }
    }
}
.cart {
    // &-container {

    // }
    &-title {
        font-size: 1.4rem;
        font-weight: 300;
    }
    &-labels {
        display: flex;
        vertical-align: middle;
        text-transform: uppercase;
        font-size: 0.6rem;
        letter-spacing: 0.05em;
        opacity: 0.6;

        position: relative;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            border-bottom: 1px solid rgba(34, 34, 34, 0.15);
        }
        &-item, &-quantity, &-price, &-remove {
            display: inline-block;
        }
        &-item {
            flex-grow: 1;
        }
        &-quantity {
            width: 144px;
            text-align: center;
        }
        &-price {
            text-align: right;
            min-width: 20vw;
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
        font-size:1rem;
        line-height: 1.5rem;
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
        // &-combo {
        //     flex-grow: 1;
        // }
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
            min-width: 20vw;
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
@media (max-width: 432px) {
    .cart {
        &-text {
            font-size: 3vw;
        }
        &-text-title {
            font-size: 3.8vw;
            line-height: 1.1rem;
        }
        &-item {
            &-price {
                font-size: 3.8vw;
            }
        }
        &-control {
            width: 25vw;
            .cart-input-group {
                button {
                    padding: 1px 6px;
                }
                input {
                    font-size: 3.8vw;
                }
            }
        }
    }
}
</style>

<script>
import {
    computed,
} from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Product',
    components: {
    },
    setup() {
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

        return {
            tobuys: computed(() => store.getters.getTobuys),
            tobuyCount: computed(() => store.getters.tobuyCount),
            tobuySubtotal: computed(() => store.getters.tobuySubtotal),
            removeTobuy,
            addTobuyQuantity,
            reduceTobuyQuantity,
        };
    },
};
</script>
