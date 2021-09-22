<template>
    <Header/>
    <router-view />
    <Footer/>
</template>

<style lang="scss">

</style>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
};
</script>
