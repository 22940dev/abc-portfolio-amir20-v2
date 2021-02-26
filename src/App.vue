<template>
  <Waves></Waves>
  <router-view v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </router-view>
</template>
<script setup>
import Waves from "./components/Waves.vue";
</script>
