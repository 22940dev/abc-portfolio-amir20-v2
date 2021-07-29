<template>
  <div class="w-auto md:w-3/4 lg:w-1/2">
    <h1 class="mb-8 text-5xl">Hi there, my name is Amir.</h1>
    <p class="text-lg font-light">
      I am a software engineer, mentor and parent in San Francisco. I am currently an engineering manager at
      <a href="https://about.google" target="_blank" rel="noopener">Google</a>. Previously, I have worked at
      <a target="_blank" rel="noopener" href="https://www.oracle.com/industries/utilities/products/what-is-opower.html"> Opower</a>, Capital One and a few other
      start ups.
    </p>
    <div class="flex flex-wrap mt-8 -m-2">
      <a class="bg-purple-500 btn hover:bg-purple-600" href="https://github.com/22940dev">
        <i class="w-4 h-4 mr-2 fab fa-github"></i>
        <span>GitHub</span>
      </a>
      <a class="bg-blue-500 btn hover:bg-blue-600" href="https://www.linkedin.com/in/doc22940">
        <i class="w-4 h-4 mr-2 fab fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      <a class="bg-green-600 btn hover:bg-green-700" href="https://twitter.com/users/alec">
        <i class="w-4 h-4 mr-2 fab fa-stack-overflow"></i>
        <span>Twitter</span>
      </a>
    </div>
  </div>
</template>
<script>
import { multipier } from "../components/Waves.vue";
import { useHead } from "@vueuse/head";
export default {
  created() {
    useHead({
      title: "This is Amir | AmirRaminfar.me",
    });
  },
  mounted() {
    multipier.value = 9;
  },
};
</script>
<style scoped lang="postcss">
.btn {
  @apply text-white py-2 px-4 m-2 rounded-3xl inline-flex items-center no-underline bg-opacity-90 hover:bg-opacity-100 transition-colors;
}
</style>
