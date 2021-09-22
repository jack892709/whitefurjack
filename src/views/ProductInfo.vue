<template>
    <!-- <suspense> -->
    <main>
        <div class="loading" v-if="!isLoaded">
            <div class="d-flex justify-content-center align-items-center h-100">
                <!-- <span>Loading...</span> -->
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div v-if="isLoaded">
            <div class="pt-4">
                <div class="body-max-width">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8 mb-3">
                                <div>
                                    <!-- <button></button> -->
                                    <div class="image-carousel">
                                        <div class="image-carousel-container">
                                            <div class="image-holder">
                                                <img class="complete" :src="productInfo.images[activeImageIndex]" v-show="productInfo.images[0]" alt="">
                                            </div>
                                            <div class="image-ctrl-wrap image-ctrl-wrap--l" data-action="prev"
                                                @click="prevImage"
                                            >
                                                <span class="arrow"></span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <path d="M0 0h12v12H0z"></path>
                                                        <path fill="#29242D" d="M7.787 11.707L2.08 5.999 7.787.293l1.414 1.414-4.293 4.292 4.293 4.294z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div class="image-ctrl-wrap image-ctrl-wrap--r" data-action="next"
                                                @click="nextImage"
                                            >
                                                <span class="arrow"></span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12">
                                                <g fill="none" fill-rule="evenodd">
                                                    <path d="M0 0h12v12H0z"></path>
                                                    <path fill="#29242D" d="M4.214 11.707L2.8 10.293l4.293-4.294L2.8 1.707 4.214.293l5.707 5.706z"></path>
                                                </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="image-carousel-pagination my-3">
                                            <!-- <div class="position-left"></div>
                                            <div class="position-right"></div> -->
                                            <div class="overflow-scroll scroll-container-no-scrollbar">
                                                <ul>
                                                    <!-- <li>
                                                        <img class="extend" src="https://lh3.googleusercontent.com/vxUJVI98AijR9XVOzAN208kQ2SdkeCGq5DD-oAO9fvw7qWBdCySfOQPUNRPIwPxdrnlWyJt0GzcDDDaL5RwPJz69jPcRv4ar4FEBLrMClxWZBf1K8qvce9gQzksH9Is3q-KpTMw6pfU=w2400" alt="">
                                                    </li> -->
                                                    <li v-for="item,index in productInfo.images" :key="'product_img_' + index"
                                                        @click="setActiveImage(index)"
                                                        :class="{'active': index===activeImageIndex}"
                                                    >
                                                        <img :src="item" alt="" class="extend">
                                                    </li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="d-flex flex-column">
                                    <div class="mb-2">
                                        <h1 class="mytext-title">{{productInfo.title}}</h1>
                                    </div>
                                    <div data-purchase-box class="">
                                        <div data-purchase-box-region="price" class="mb-2">
                                            <div class="d-flex">
                                                <div class="align-items-center">
                                                    <p class="mytext-title-l me-3" aria-label="final price">{{productInfo.currency}}${{productInfo.price}}</p>
                                                    <p class="mytext-caption text-decoration-line-through" aria-label="original price"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-purchase-box-region="basic info" class="mb-2">
                                            <p class="mytext-caption">{{productInfo.basic}}</p>
                                        </div>
                                        <div data-purchase-box-region="variation" class="mb-3">

                                            <div class="mb-3">
                                                <div class="mb-2">
                                                    <label class="mytext-caption" for="inventory-variation-select-0">Size</label>
                                                    <div class="myselect-container">
                                                        <select name="" id="inventory-variation-select-0" class="select-element">
                                                            <option value="" selected>Select an option</option>
                                                            <option value="option A" >Size A</option>
                                                            <option value="option B" >Size B</option>
                                                            <option value="option C" >Size C</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="mb-2">
                                                    <label class="mytext-caption" for="inventory-variation-select-1">Option</label>
                                                    <div class="myselect-container">
                                                        <select name="" id="inventory-variation-select-1" class="select-element">
                                                            <option value="" selected>Select an option</option>
                                                            <option value="option A" >option A</option>
                                                            <option value="option B" >option B</option>
                                                            <option value="option C" >option C</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="cart-control ml-md-auto mt-3 mt-md-0">
                                                <div class="cart-input-group mytext-body">
                                                    <div class="input-group-prepend">
                                                    <button type="button" class="" @click="reduceQuantity">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                                        </svg>
                                                    </button>
                                                    </div>
                                                    <input id="quantity" type="text" class="myform-control" :value="quantity" @change="updateQuantity">
                                                    <div class="input-group-append">
                                                    <button type="button" class="" @click="addQuantity">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                        </svg>
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-purchase-box-region="buttons" class="mb-2">
                                            <div class="validation">
                                                <!-- <form action=""> -->
                                                    <!-- <input type="hidden" name="listing_id" value="750758576">
                                                    <input type="hidden" name="quantity" value="1"> -->
                                                    <button class="mybtn w-100 btn-dark" @click="addToCart">
                                                        <div>Add To Cart</div>
                                                    </button>
                                                <!-- </form> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mytext-body">
                                <p>Description</p>
                                <p>{{productInfo.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- </suspense> -->
    <!-- <CartContent/> -->
</template>

<style lang="scss" scoped>
.loading {
    height: calc(100vh - 275px);
}
.body-max-width {
    max-width: 1400px;
    margin: 0 auto;
}
.mytext {
    &-title {
        font-size: 1.3rem;
        line-height: 1.6rem;
    }
    &-title-l {
        font-size: 1.4rem;
        line-height: 1.8rem;
        font-weight: 700;
    }
    &-caption {
        font-size: 0.7rem;
        line-height: 0.9rem;
    }
    &-body {
        font-size: 0.8rem;
        line-height: 1.4rem;
    }
}
.image-carousel {
    &-container {
        position: relative;
        width: 100%;
        padding-top: 50%;

        .image-holder {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            img.complete {
                max-width: 100%;
                max-height: 100%;

                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
            }
        }

    }
    img.extend {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .image-ctrl-wrap {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 36px;
        height: 64px;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        opacity: .8;
        background-color: #fff;
        cursor: pointer;
    }
    .image-ctrl-wrap--l {
        left: 0;
        border-radius: 0 4px 4px 0;
        -webkit-box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
    .image-ctrl-wrap--r {
        border-radius: 4px 0 0 4px;
        right: 0;
        -webkit-box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.1);
        box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.1);
    }

    &-pagination {
        position: relative;
        ul {
            display: flex;
            flex-wrap: no-wrap;
            list-style: none;
            padding: 0;
            li {
                flex-shrink: 0;
                width: 60px;
                height: 60px;
                border: 2px solid rgba(34, 34, 34, 0.15);
                margin-right: 10px;
                cursor: pointer;
                img {
                    width: 100%;
                    // height: 100%;
                    object-fit: cover;
                }
                &.active {
                    border: 2px solid #2f2f2f;
                }
            }
        }
    }
}
.scroll-container-no-scrollbar::-webkit-scrollbar {
    display: none;
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
            // padding-top: 15px;
            // padding: 15px;
            // height: calc(1rem + 30px + 2px);
            // padding-left: 5px;
            // padding-right: 5px;
            // height: calc(1rem + 10px + 2px);
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
        }
        button {
            display: inline-block;
            padding: 0.375rem 0.75rem;
            background-color: #E5E5E5;
            // border: 1px solid transparent;
            border: 1px solid #E5E5E5;
            &:hover {
                background-color: #d8d8d8;
            }
        }
    }
}
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
.myselect-container {
    position: relative;
    width: 100%;
    transition: all 200ms ease-out;
    &::after {
        content: "";
        background-image: url('data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 24 24%22%3E%3Cpolygon fill%3D%22%23222222%22 points%3D%2216.5 10 12 16 7.5 10 16.5 10%22%2F%3E%3C%2Fsvg%3E');
        width: 24px;
        height: 24px;
        pointer-events: none;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    .select-element {
        transition: border-color 200ms ease-out,box-shadow 200ms ease-out;
        -webkit-appearance: none;
        -ms-appearance: none;
        -moz-appearance: none;
        appearance: none;
        box-shadow: 0 1px 6px 0 rgba(34, 34, 34 , 0.15);
        display: block;
        font-family: inherit;
        font-size: 16px;
        height: 48px;
        padding-left: 12px;
        padding-right: 36px;
        width: 100%;
        border-radius: 6px;
        background: #FFFFFF;
        border-color: rgba(34, 34, 34, 0.15);
        border-style: solid;
        border-width: 1px;
        color: #222222;
        text-indent: 0.01px;
        text-overflow: "";
        cursor: pointer;
    }
}
</style>

<script>
import {
    ref, computed,
} from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

const shopAPI = 'https://script.google.com/macros/s/AKfycby8tdRFZgjpT2mbLGB-eyOCgvRszhkwGP0IZjrWw3EN7NeOV1TAio2BrBdNOvaSTq3G0w/exec'; // 20210914

export default {
    name: 'ProductPage',
    props: ['productAlias'],
    components: {
        // CartContent,
    },
    setup(props) {
        console.log('props:', props.productAlias);
        const isLoaded = ref(false);

        const productInfo = ref({
            alias: '',
            basic: '',
            category: '',
            currency: '',
            description: '',
            discount: 0,
            id: 0,
            images: [],
            img_url: '',
            media: '',
            option: [],
            price: 0,
            subcategory: '',
            tags: [],
            title: '',
        });
        // const productInfo = ref({
        //     alias: 'tcrc',
        //     basic: '40cm x 25cm',
        //     category: 'prints',
        //     currency: 'NT',
        //     description: 'Original Art Print by ©whitefurjack\nSigned and dated',
        //     discount: 0,
        //     id: 1,
        //     images: [
        //         'https://lh3.googleusercontent.com/aLsqOuC7ldtrP5DqSjVKsJmNyPrp8ae9x5HBQU_XkmViqlnwtLtN2-mlow1j5IHgKTDx0mCJXOeUKT_5RHIll_uWmT5DqcYtHOb7E6OMbX-5dnNRyq9dIzMKB4Ss6Iepg9wDjuvfDzA=w2400',
        //         'https://lh3.googleusercontent.com/vxUJVI98AijR9XVOzAN208kQ2SdkeCGq5DD-oAO9fvw7qWBdCySfOQPUNRPIwPxdrnlWyJt0GzcDDDaL5RwPJz69jPcRv4ar4FEBLrMClxWZBf1K8qvce9gQzksH9Is3q-KpTMw6pfU=w2400',
        //         'https://lh3.googleusercontent.com/okaGQP0iAWlvhqUxl3nflneFUNX1Ndp1a1Y2os8UQk0LN06yPv_FPaWN5HzKjvWO65xxA3CiNI_YB8jQDG1BJ52O7ZBZjvvXYbF8qr8T9kKsw2JdWTStfXDKQeaYKFMLgvdcDyZk4cA=w2400',
        //     ],
        //     img_url: 'https://lh3.googleusercontent.com/aLsqOuC7ldtrP5DqSjVKsJmNyPrp8ae9x5HBQU_XkmViqlnwtLtN2-mlow1j5IHgKTDx0mCJXOeUKT_5RHIll_uWmT5DqcYtHOb7E6OMbX-5dnNRyq9dIzMKB4Ss6Iepg9wDjuvfDzA=w2400',
        //     media: 'watercolor',
        //     option: [''],
        //     price: 1000,
        //     subcategory: 'none',
        //     tags: ['bar', 'tainan'],
        //     title: 'Bar TCRC | Tainan',
        // });

        // const productInfo = ref();

        async function fetchProductsByAlias(alias) {
            const result = await fetch(
                `${shopAPI}?searchby=alias&value=${alias}`,
                {
                    headers: { 'Content-Type': 'text/plain' },
                },
            )
                .then((response) => response.json())
                .then((data) => {
                    // console.log('product data: ', data);
                    // eslint-disable-next-line prefer-destructuring
                    productInfo.value = data[0];
                    return data;
                });
            return result;
        }
        fetchProductsByAlias(props.productAlias)
            .then(() => {
                isLoaded.value = true;
            });

        const activeImageIndex = ref(0);
        const setActiveImage = (index) => {
            activeImageIndex.value = index;
        };
        const nextImage = () => {
            if (activeImageIndex.value < productInfo.value.images.length - 1) activeImageIndex.value += 1;
            else activeImageIndex.value = 0;
        };
        const prevImage = () => {
            if (activeImageIndex.value > 0) activeImageIndex.value -= 1;
            else activeImageIndex.value = productInfo.value.images.length - 1;
        };

        const quantity = ref(1);
        const addQuantity = () => {
            quantity.value += 1;
        };
        const reduceQuantity = () => {
            if (quantity.value > 1) quantity.value -= 1;
        };
        const updateQuantity = (event) => {
            // quantity.value = parseInt(document.getElementById('quantity').value, 10);
            const num = parseInt(event.target.value, 10);
            if (!num.isNaN()) quantity.value = num;
        };

        // Vuex Storage // testing
        const store = useStore();
        const tobuy = computed(() => ({
            id: productInfo.value.id,
            alias: productInfo.value.alias,
            title: productInfo.value.title,
            img_url: productInfo.value.img_url,
            price: productInfo.value.price,
            currency: productInfo.value.currency,
            options: productInfo.value.options,
            option_selected: 'optionA',
            quantity: quantity.value,

        }));
        const addToCart = () => {
            store.commit('addTobuy', tobuy.value);
            Swal.fire({
                // position: 'top-end',
                icon: 'success',
                title: 'Product has been added to your cart',
                showConfirmButton: false,
                timer: 2500,
            });
        };

        return {
            isLoaded,

            productInfo,
            activeImageIndex,
            setActiveImage,
            nextImage,
            prevImage,
            quantity,
            addQuantity,
            reduceQuantity,
            updateQuantity,

            addToCart,
        };
    },
};
</script>
