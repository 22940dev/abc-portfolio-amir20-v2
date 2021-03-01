<template>
  <Waves></Waves>
  <div class="flex flex-col z-10 relative min-h-screen">
    <nav class="flex justify-end space-x-2 m-4">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <main class="flex-1 flex items-center p-4 md:p-8">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>
<script setup>
import Waves from "./components/Waves.vue";
</script>
<script>
export default {};
</script>
<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
