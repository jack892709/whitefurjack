<template>
    <main>
        <div class="page">
            <div class="max-width-1400">
                <div class="mt-2 px-2 px-md-4">
                    <nav
                        class="text-skinny-m"
                        style="--bs-breadcrumb-divider: '>';"
                        aria-label="breadcrumb"
                    >
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item ">
                                <router-link to="/shop">All Artworks</router-link>
                            </li>
                            <li class="breadcrumb-item ">
                                <router-link :to="`/shop/${currentCategory}`" class="text-capitalize">{{currentCategory}}</router-link>
                            </li>
                            <!-- <li class="breadcrumb-item active" aria-current="page">product</li> -->
                        </ol>
                    </nav>
                </div>
                <div class="px-2 px-md-4 py-3">
                    <span class="fs-4 fw-bold text-capitalize">prints</span>
                </div>

                <div class="d-flex">
                    <div class="d-none d-lg-flex px-3">
                        <div
                            class="filter-width ps-3"
                        >
                            <div class=" sticky-top top-15 px-2">
                                <form
                                    action=""
                                    id="product-filter"
                                    class="text-caption filter"
                                    aria-label="filter"
                                >
                                    <fieldset
                                        class="mb-2"
                                        aria-label="filter-special-offer"
                                    >
                                        <legend>
                                            <h3
                                                class="text-caption-title text-capitalize mb-0"
                                            >
                                                Special Offers
                                            </h3>
                                        </legend>
                                        <div>
                                            <div
                                                class="ps-2 mb-2 d-flex align-items-center"
                                            >
                                                <div class="checkbox">
                                                    <input
                                                        type="checkbox"
                                                        name="free_shipping"
                                                        id="special-offer-free-shipping"
                                                    />
                                                    <label
                                                        class="ps-2"
                                                        for="special-offer-free-shipping"
                                                        >FREE Shipping</label
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                class="ps-2 mb-2 d-flex align-items-center"
                                            >
                                                <div class="checkbox">
                                                    <input
                                                        type="checkbox"
                                                        name="on_sale"
                                                        id="special-offer-on-sale"
                                                    />
                                                    <label
                                                        class="ps-2"
                                                        for="special-offer-on-sale"
                                                        >On Sale</label
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset
                                        class="mb-2"
                                        aria-label="filter-price"
                                    >
                                        <legend>
                                            <h3
                                                class="text-caption-title text-capitalize mb-0"
                                            >
                                                Special Offers
                                            </h3>
                                        </legend>
                                        <div>
                                            <div
                                                class="ps-2 mb-2 d-flex align-items-center"
                                            >
                                                <div class="radio">
                                                    <input
                                                        type="radio"
                                                        name="price"
                                                        id="price-any"
                                                        value="0"
                                                        checked
                                                    />
                                                    <label
                                                        class="ps-2"
                                                        for="price-any"
                                                        >Any price</label
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                class="ps-2 mb-2 d-flex align-items-center"
                                            >
                                                <div class="radio">
                                                    <input
                                                        type="radio"
                                                        name="price"
                                                        id="price-under-500"
                                                        value="500"
                                                    />
                                                    <label
                                                        class="ps-2"
                                                        for="price-under-500"
                                                        >Under NT$500</label
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                class="ps-2 mb-2 d-flex align-items-center"
                                            >
                                                <div class="radio">
                                                    <input
                                                        type="radio"
                                                        name="price"
                                                        id="price-500-1000"
                                                        value="1000"
                                                    />
                                                    <label
                                                        class="ps-2"
                                                        for="price-500-1000"
                                                        >NT$500 to
                                                        NT$1000</label
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                class="ps-2 mb-2 d-flex align-items-center"
                                            >
                                                <div class="radio">
                                                    <input
                                                        type="radio"
                                                        name="price"
                                                        id="price-1000-5000"
                                                        value="5000"
                                                    />
                                                    <label
                                                        class="ps-2"
                                                        for="price-1000-5000"
                                                        >NT$1000 to
                                                        NT$5000</label
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                class="ps-2 mb-2 d-flex align-items-center"
                                            >
                                                <div class="radio">
                                                    <input
                                                        type="radio"
                                                        name="price"
                                                        id="price-over-5000"
                                                        value="10000"
                                                    />
                                                    <label
                                                        class="ps-2"
                                                        for="price-over-5000"
                                                        >Over NT$5000</label
                                                    >
                                                </div>
                                            </div>
                                            <div>
                                                <div
                                                class="ps-2 mb-2 d-flex align-items-center"
                                                >
                                                    <div class="radio">
                                                        <input
                                                            type="radio"
                                                            name="price"
                                                            id="price-custom"
                                                            value="10000"
                                                        />
                                                        <label
                                                            class="ps-2"
                                                            for="price-custom"
                                                            >Custom</label
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset
                                        class="mb-2"
                                        aria-label="filter-subject"
                                    >
                                        <legend>
                                            <h3
                                                class="text-caption-title text-capitalize mb-0"
                                            >
                                                Subject
                                            </h3>
                                        </legend>
                                        <div>
                                            <div>
                                                <div
                                                    class="ps-2 mb-2 d-flex align-items-center"
                                                >
                                                    <div class="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="landscape"
                                                            id="subject-landscape"
                                                        />
                                                        <label
                                                            class="ps-2"
                                                            for="subject-landscape"
                                                            >Landscape</label
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    class="ps-2 mb-2 d-flex align-items-center"
                                                >
                                                    <div class="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="urban"
                                                            id="subject-urban"
                                                        />
                                                        <label
                                                            class="ps-2"
                                                            for="subject-urban"
                                                            >Urban</label
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    class="ps-2 mb-2 d-flex align-items-center"
                                                >
                                                    <div class="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="cafe"
                                                            id="subject-cafe"
                                                        />
                                                        <label
                                                            class="ps-2"
                                                            for="subject-cafe"
                                                            >Cafe</label
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    class="ps-2 mb-2 d-flex align-items-center"
                                                >
                                                    <div class="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="bar"
                                                            id="subject-bar"
                                                        />
                                                        <label
                                                            class="ps-2"
                                                            for="subject-bar"
                                                            >Bar</label
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    class="ps-2 mb-2 d-flex align-items-center"
                                                >
                                                    <div class="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="motorcycle"
                                                            id="subject-motorcycle"
                                                        />
                                                        <label
                                                            class="ps-2"
                                                            for="subject-motorcycle"
                                                            >Motorcycle</label
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    class="ps-2 mb-2 d-flex align-items-center"
                                                >
                                                    <div class="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="europe"
                                                            id="subject-europe"
                                                        />
                                                        <label
                                                            class="ps-2"
                                                            for="subject-europe"
                                                            >Europe</label
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="filter-expandable"
                                                :class="{
                                                    active: isShowSubject,
                                                }"
                                            >
                                                <div
                                                    class="ps-2 mb-2 d-flex align-items-center"
                                                >
                                                    <div class="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="100mountain"
                                                            id="subject-100mountain"
                                                        />
                                                        <label
                                                            class="ps-2"
                                                            for="subject-100mountain"
                                                            >100
                                                            Mountains</label
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    class="ps-2 mb-2 d-flex align-items-center"
                                                >
                                                    <div class="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="hiking"
                                                            id="subject-hiking"
                                                        />
                                                        <label
                                                            class="ps-2"
                                                            for="subject-hiking"
                                                            >Hiking</label
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    class="ps-2 mb-2 d-flex align-items-center"
                                                >
                                                    <div class="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="food_and_drink"
                                                            id="subject-food-and-drink"
                                                        />
                                                        <label
                                                            class="ps-2"
                                                            for="subject-food-and-drink"
                                                            >Food &amp;
                                                            Drink</label
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    class="ps-2 mb-2 d-flex align-items-center"
                                                >
                                                    <div class="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="animal"
                                                            id="subject-animal"
                                                        />
                                                        <label
                                                            class="ps-2"
                                                            for="subject-animal"
                                                            >Animal</label
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                class="filter-expander btn-basic rounded-pill"
                                                type="button"
                                                aria-label="Show more"
                                                v-if="!isShowSubject"
                                                @click="isShowSubject = true"
                                            >
                                                <span
                                                    class="filter-expander-icon"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                    >
                                                        <path
                                                            d="M20,11H13V4a1,1,0,0,0-2,0v7H4a1,1,0,0,0,0,2h7v7a1,1,0,0,0,2,0V13h7A1,1,0,0,0,20,11Z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span class="text-skinny-s ps-2"
                                                    >Show more</span
                                                >
                                            </button>
                                            <button
                                                class="filter-expander btn-basic rounded-pill"
                                                type="button"
                                                aria-label="Show fewer"
                                                v-if="isShowSubject"
                                                @click="isShowSubject = false"
                                            >
                                                <span
                                                    class="filter-expander-icon"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                    >
                                                        <path
                                                            d="M20 13H4c-.553 0-1-.447-1-1s.447-1 1-1h16c.553 0 1 .447 1 1s-.447 1-1 1z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span class="text-skinny-s ps-2"
                                                    >Show fewer</span
                                                >
                                            </button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-grow-1 pe-1">
                        <div class="px-3 w-100">
                            <div aira-label="active filter label">

                            </div>
                            <div class="pb-3" aira-label="product list">
                                <div class="container-fluid px-0">
                                    <ul class="row list-unstyled m-0">
                                        <!-- <li class="col-4 d-block p-2 listing-card">
                                            <a href="#" class="d-block">
                                                <div class="image-square">
                                                    <picture>
                                                        <img src="../assets/images/print-shizen.png" alt="" />
                                                    </picture>
                                                    <div class="alternative-pic">
                                                        <img src="../assets/images/print-shizen-02.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="pt-1 info">
                                                    <h3 class="listing-card-title text-truncate m-0">Shizen | Taipei 111111111111111111111111123456789</h3>
                                                    <div>
                                                        <p class="text-caption text-gray text-truncate mb-0">sub info</p>
                                                    </div>
                                                    <div class="listing-card-price">
                                                        <p class="m-0 pe-1">
                                                            <span class="currency-symbol">NT$</span>
                                                            <span class="currency-value">500</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li> -->
                                        <li class="col-4 d-block p-2 listing-card"
                                            v-for="item in productList"
                                            :key="item.id"
                                        >
                                            <router-link :to="`/product/${item.alias}`" class="d-block">
                                                <div class="image-square">
                                                    <picture>
                                                        <img :src="item.img_url" alt="" />
                                                    </picture>
                                                    <div class="alternative-pic" v-show="item.images[0]">
                                                        <img :src="item.images[0]" alt="" />
                                                    </div>
                                                </div>
                                                <div class="pt-1 info">
                                                    <h3 class="listing-card-title text-truncate m-0" :title="item.title">{{item.title}}</h3>
                                                    <div>
                                                        <p class="text-caption text-gray text-truncate text-capitalize mb-0">{{item.media}}</p>
                                                    </div>
                                                    <div class="listing-card-price">
                                                        <p class="m-0 pe-1">
                                                            <span class="currency-symbol">{{item.currency}}$</span>
                                                            <span class="currency-value">{{item.price}}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div aira-label="pagination">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
a {
    color: #2f2f2f;
}
.breadcrumb {
    a:hover {
        color: #727272;
    }
}
.top-15 {
    top: 15%;
}
.btn-basic {
    display: inline-block;
    font-weight: 400;
    /* line-height: 1.5; */
    color: #2f2f2f;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    /* padding: 0.375rem 0.75rem; */
    font-size: 1rem;
    border-radius: 0.25rem;
}
.text-skinny {
    &-s {
        font-weight: 300;
        font-size: 0.8rem;
        // line-height: 0.8rem;
    }
    &-m {
        font-weight: 300;
        font-size: 0.9rem;
    }
}
.text-caption {
    font-weight: 300;
    font-size: 0.8rem;
    // line-height: 0.8rem;
    &-title {
        font-weight: 700;
        font-size: 0.8rem;
    }
}
// .list-unstyled {
//     list-style: none;
//     padding-left: 0;
//     margin-bottom: 0;
// }
.max-width-1400 {
    max-width: 1400px;
    margin: 0 auto;
}
a.text-link-no-underline {
    text-decoration: none;
    color: inherit;
    // transition: opacity 200ms ease-out;
}
.page {
    padding-left: 5px;
    padding-right: 5px;
}
.filter-width {
    width: 250px;
}
.filter {
    .checkbox,
    .radio {
        position: relative;
        display: flex;
        line-height: 0.8rem;
        font-size: 0.7rem;
        &:hover {
            text-decoration: underline;
        }
    }

    input[type='checkbox'],
    input[type='radio'],
    label {
        cursor: pointer;
    }

    input[type='checkbox'], input[type='radio'] {
        width: 0.8rem;
        height: 0.8rem;
    }

    label:before,
    label:after {
        content: '';
        position: absolute;
    }

    input[type='checkbox']:checked {
        +label:before {
            left: 0;
            top: 0;
            width: 0.8rem;
            height: 0.8rem;
            // height: 18px;
            // width: 18px;
            // min-width: 18px;
            border-radius: 3px;
            background: #2f2f2f;
        }
        +label:after {
            top: 2px;
            left: 2px;
            height: 12px;
            width: 12px;
            background-size: cover;
            background-repeat: no-repeat;
            // background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 24 24%22%3E%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M9.17,21.71L0.86,13.4a2,2,0,1,1,2.76-2.76L9,16,20.28,2.93a2,2,0,1,1,2.95,2.56Z%22 %2F%3E%3C%2Fsvg%3E");
            // background-image: url('data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 24 24%22%3E%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M 9.17 21.71 L 0.86 13.4 a 2 2 0 1 1 4.14 -4.4 L 9 13 L 18 3 a 2 2 0 1 1 5 4 Z%22 %2F%3E%3C%2Fsvg%3E');
            background-image: url('data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 24 24%22%3E%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M 9.17 21.71 L 0.86 13.4 l 4.14 -4.4 L 9 13 L 19 2 l 4.674 4.339 Z%22 %2F%3E%3C%2Fsvg%3E');
            // -webkit-transform: scale(0.5);
            // -ms-transform: scale(0.5);
            // -moz-transform: scale(0.5);
            // transform: scale(0.5);
            // transition: all 200ms ease-out;
        }
    }

    input[type='radio']:checked {
        + label:before {
            left: 0;
            top: 0;
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 100px;
            background: #2f2f2f;
        }
        + label:after {
            left: 5px;
            top: 5px;
            width: 6px;
            height: 6px;
            border-radius: 3px;
            background: #fff;
        }
    }

    &-expandable {
        display: none;
        &.active {
            display: block;
        }
    }
    &-expander {
        display: inline-block;
        line-height: 0.8rem;
        padding: 0.5rem;
        // &:hover {
        //     background-color: #EEEFEF;
        // }

        span {
            vertical-align: middle;
        }
        &-icon {
            display: inline-block;
            width: 0.8rem;
            height: 0.8rem;
            vertical-align: middle;
            svg {
                display: block;
            }
        }

        position: relative;
        &:before,
        &:after {
            content: '';
            background: inherit;
            // border: inherit;
            border-radius: inherit;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        &:before {
            background-color: #eeefef;
            opacity: 0;
            -webkit-transform: scale(0.7) perspective(1px);
            -ms-transform: scale(0.7) perspective(1px);
            -moz-transform: scale(0.7) perspective(1px);
            transform: scale(0.7) perspective(1px);
            transition: transform 200ms cubic-bezier(0.345, 0.115, 0.135, 1.42),
                opacity 150ms ease-out;
        }
        &:hover:before {
            opacity: 1;
            -webkit-transform: scale(1.035) perspective(1px);
            -ms-transform: scale(1.035) perspective(1px);
            -moz-transform: scale(1.035) perspective(1px);
            transform: scale(1.035) perspective(1px);
        }
    }
}
.listing-card {
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
            // object-fit: cover;
            object-fit: scale-down;
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
        .alternative-pic {
            display: none;
            img {
                object-fit: cover;
            }
        }
        &:hover {
            .shade {
                display: flex;
            }
            .alternative-pic {
                display: block;
            }
        }
    }
    a {
        text-decoration: none;
    }

    .info {
        .listing-card-title {
            font-size: 0.9rem;
            line-height: 1.5rem;
        }
        .listing-card-price {
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 700;
        }
    }
}

</style>

<script>
import { ref, computed, watch } from 'vue';

// const shopAPI = 'https://script.google.com/macros/s/AKfycbyk-aNYfg2SgjwLus7jh_iORw9FYI0oODP66QWahFELqaRBV1jvjkS7EVcSbLX-gUGf7Q/exec'; //20210913
const shopAPI = 'https://script.google.com/macros/s/AKfycby8tdRFZgjpT2mbLGB-eyOCgvRszhkwGP0IZjrWw3EN7NeOV1TAio2BrBdNOvaSTq3G0w/exec'; // 20210914

export default {
    name: 'ProductCategory',
    props: ['productCategory'],
    components: {
    },
    setup(props) {
        const isShowSubject = ref(false);

        const productList = ref([]);
        const activeList = ref([]);
        const storeInProductList = (data) => {
            productList.value = [];
            for (let i = 0; i < data.length; i += 1) {
                if (data[i].id) productList.value.push(data[i]);
                // artList.value.push(data[i]);
            }
        };
        async function fetchProducts() {
            const result = await fetch(shopAPI, {
                headers: { 'Content-Type': 'text/plain' },
            })
                .then((response) => response.json())
                .then((data) => {
                    storeInProductList(data);
                    return data;
                });
            return result;
        }

        async function fetchProductsByCategory(category) {
            // console.log('fetching data by category...');
            const result = await fetch(
                `${shopAPI}?searchby=category&value=${category}`,
                {
                    headers: { 'Content-Type': 'text/plain' },
                },
            )
                .then((response) => response.json())
                .then((data) => {
                    storeInProductList(data);
                    return data;
                });
            return result;
        }
        if (props.productCategory) {
            fetchProductsByCategory(props.productCategory);
        } else {
            fetchProducts();
        }

        const currentCategory = computed(() => props.productCategory);
        watch(currentCategory, () => {
            if (currentCategory.value) {
                fetchProductsByCategory(currentCategory.value);
            } else {
                fetchProducts();
            }
        });

        return {
            isShowSubject,
            currentCategory,
            productList,
            activeList,
        };
    },
};
</script>
