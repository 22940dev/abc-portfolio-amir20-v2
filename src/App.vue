<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view> </router-view>
  <Waves></Waves>
</template>
<script setup>
import Waves from "./components/Waves.vue";
</script>
<script>
export default {
  data() {
    return {
      waves: 4,
    };
  },
  created() {
    // this.$router
  },
  watch: {
    $route(to, from) {
      console.log(this.waves);
    },
  },
};
</script>
<style scoped>
nav {
  z-index: 2;
  position: relative;
}
</style>
