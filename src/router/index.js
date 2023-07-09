import { createRouter, createWebHistory } from 'vue-router';
// import { createRouter } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/sketchbooks',
    name: 'Sketchbooks',
    component: () => import(/* webpackChunkName: "sketchbooks" */ '../views/Sketchbooks.vue'),
    children:
      [
        // {
        //     path: '',
        //     component: () => import('../views/Sketchbooks.vue'),
        // },
        {
          path: 'outdoors',
          component: () => import(/* webpackChunkName: "outdoors" */ '../views/Outdoors.vue'),
          children:
            [
              {
                name: 'artwork',
                path: ':artworkId',
                component: () => import(/* webpackChunkName: "artwork" */ '../components/Artwork.vue'),
                props: true,
              },
            ],
        },
        {
          path: 'cafe',
          component: () => import(/* webpackChunkName: "cafe" */ '../views/Cafe.vue'),
        },
        {
          path: 'portrait',
          component: () => import(/* webpackChunkName: "portrait" */ '../views/Portrait.vue'),
        },
        {
          path: 'motorcycle',
          // component: () => import('../views/Cafe.vue'),
        },
        {
          path: 'urban',
          // component: () => import('../views/Cafe.vue'),
        },
      ],
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
    children:
      [
        {
          path: '',
          component: () => import(/* webpackChunkName: "product_category" */ '../views/ProductCategory.vue'),
        },
        {
          path: ':productCategory',
          component: () => import(/* webpackChunkName: "prodct_category" */ '../views/ProductCategory.vue'),
          props: true,
        },
      ],
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    children:
      [
        {
          path: ':productAlias',
          component: () => import(/* webpackChunkName: "product_info" */ '../views/ProductInfo.vue'),
          props: true,
        },
      ],
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
  },
  {
    path: '/commission',
    name: 'Commission',
    component: () => import(/* webpackChunkName: "comission" */ '../views/Comission.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
