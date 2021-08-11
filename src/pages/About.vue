<template>
  <div class="w-auto md:w-3/4 lg:w-1/2">
    <h1 class="mb-8 text-5xl text-blue-700">Hello there.</h1>
    <p class="text-lg font-light text-blue-500">
      I am a jack of all trades. <br /> Master of few.
    </p>
    <br />

    <p class="text-lg font-light">
      I was born in Virginia and attended University of Virginia.
    </p>
    <br />

    <p class="text-lg font-light">
      After college I spent time in the sports memorabilia authentication industry, before several years in landscape architecture and house flipping. 
      The past several years I have been learning various programming languages, while completeing various projects for happy customers.
    </p>
  </div>
</template>
<script>
import { multipier } from "../components/Waves.vue";
import { useHead } from "@vueuse/head";
export default {
  created() {
    useHead({
      title: "About | 22940dev",
    });
  },
  mounted() {
    multipier.value = 2;
  },
};
</script>
<style scoped></style>
