<template>
  <div class="w-auto md:w-3/4 lg:w-1/2">
    <h1 class="mb-8 text-5xl">Hello there.</h1>
    <p class="text-lg font-light">
      I am a software engineer and entrepreneur. I have started two companies in my life which has shaped me in more ways that I can imagine. I enjoy using new
      technology and learning about new patterns. I mostly specialize in web technologies but also focus on ML, big data and real-time architecture. You can
      find some of my projects on Github.
    </p>
    <br />

    <p>
      I was born in Iran and moved to Seattle at a young age. I started programming in high school and studied computer science at the George Washington
      University in Washington DC. After graduating, I worked at AOL on aol.com which taught me a lot about scalability. I left to join Opower in Arlington, VA.
      Opower started my career in management. I left to start my own in Los Angeles and eventually moved to San Francisco where I joined Opower for their IPO in
      2014. I led teams at Quid, Capital One labs in SF and data and infrastructure at UJET.
    </p>
    <br />

    <p>
      I currently live in the South Bay and work at Google building their internal CRM. I am a husband and father of one. I enjoy playing with my daughter,
      listening to music, reading books, cycling and weight training.
    </p>
  </div>
</template>
<script>
import { multipier } from "../components/Waves.vue";
export default {
  mounted() {
    multipier.value = 2;
  },
};
</script>
<style scoped></style>
