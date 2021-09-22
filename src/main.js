import { createApp } from 'vue';
import LoadScript from 'vue-plugin-load-script';
import VueLazyload from 'vue3-lazyload';
import App from './App.vue';
import router from './router';
import store from '@/store';
import 'bootstrap/scss/bootstrap.scss';

// lazyload options
const loadimage = require('./assets/images/loading.gif');
const errorimage = require('./assets/images/image_not_found.png');

const lazyLoadOptions = {
    error: errorimage,
    loading: loadimage,
    log: false,
    observerOptions: { rootMargin: '1000px', threshold: 0.1 },
};

// Running
const app = createApp(App);
app.use(LoadScript);
app.use(router);
app.use(VueLazyload, lazyLoadOptions);
app.use(store);
app.mount('#app');
// const loader = LoadScript;
// console.log(loader);
// console.log(LoadScript.install);
// LoadScript.install('https://smtpjs.com/v3/smtp.js')
//     .then(() => {
//     // Script is loaded, do something
//         console.log('smtp loaded');
//     })
//     .catch(() => {
//     // Failed to fetch script
//     });

// createApp(App).use(router).mount('#app');
