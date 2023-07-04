<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style lang="scss">
</style>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>
