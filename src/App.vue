<template>
  <Waves></Waves>
  <div class="flex flex-col z-10 relative min-h-screen">
    <main class="flex-1 flex items-center p-8">
      <router-view></router-view>
    </main>
  </div>
</template>
<script setup>
import Waves from "./components/Waves.vue";
</script>
<script>
export default {};
</script>
<style scoped></style>
