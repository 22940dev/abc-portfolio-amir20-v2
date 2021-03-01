<template>
  <div id="content">
    <section class="hero is-fullheight">
      <div class="hero-body">this is a test</div>
    </section>
  </div>
</template>
<script>
import { multipier } from "../components/Waves.vue";
export default {
  mounted() {
    multipier.value = 2.5;
  },
};
</script>
<style scoped></style>
