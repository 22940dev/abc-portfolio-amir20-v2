<template>
  <div class="w-auto md:w-3/4 lg:w-1/2">
    <h1 class="mb-8 text-5xl">Hello there.</h1>
    <p class="text-lg font-light">
      I am a software engineer and entrepreneur. 
    </p>
    <br />

    <p class="text-lg font-light">
      I was born in Iran and moved to Seattle at a young age. 
    </p>
    <br />

    <p class="text-lg font-light">
      I currently live in the South Bay and work at Google building their internal CRM. I am a husband and father of one. I enjoy playing with my daughter,
      listening to music, reading books, cycling and weight training.
    </p>
  </div>
</template>
<script>
import { multipier } from "../components/Waves.vue";
import { useHead } from "@vueuse/head";
export default {
  created() {
    useHead({
      title: "About | AmirRaminfar.me",
    });
  },
  mounted() {
    multipier.value = 2;
  },
};
</script>
<style scoped></style>
