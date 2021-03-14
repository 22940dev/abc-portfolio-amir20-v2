<template>
  <div class="w-auto md:w-4/5 lg:w-2/3">
    <h1 class="mb-8 text-5xl">Projects</h1>
    <div class="font-light">
      <ul>
        <li class="md:flex md:mt-8">
          <div class="md:flex-shrink-0">
            <img src="/src/images/clashleaders.png" alt="Clashleaders screenshot" width="320" height="165" class="object-cover w-full rounded h-50 md:w-60" />
          </div>
          <div class="p-8 md:pt-0">
            <a class="mt-1 text-lg font-medium leading-tight" href="https://www.clashleaders.com/">Clashleaders.com</a>
            <p class="mt-2">
              Clashleaders is a website dedicated to <a href="https://supercell.com/en/games/clashofclans/">Clash of Clans</a> game. This website shows trending
              leaderboards across the world for 6 million players. Each clan has insights that are ranked against all other clans. Data is visualized using
              beautiful charts and graphs.
            </p>
          </div>
        </li>

        <li class="md:flex md:mt-8">
          <div class="md:flex-shrink-0">
            <img src="/src/images/dozzle.png" alt="Dozzle screenshot" width="320" height="165" class="object-cover w-full rounded h-50 md:w-60" />
          </div>
          <div class="p-8 md:pt-0">
            <a class="mt-1 text-lg font-medium leading-tight" href="https://dozzle.dev/">Dozzle for Docker</a>
            <p class="mt-2">
              Dozzle is a simple, lightweight application that provides you with a web based interface to monitor your
              <a href="https://www.docker.com/">Docker</a> container logs live. It doesn’t store log information, it is for live monitoring of your container
              logs only.
            </p>
          </div>
        </li>

        <li class="md:flex md:mt-8">
          <div class="md:flex-shrink-0">
            <img src="/src/images/phantom.png" alt="Phantom screenshot" width="320" height="165" class="object-cover w-full rounded h-50 md:w-60" />
          </div>
          <div class="p-8 md:pt-0">
            <a class="mt-1 text-lg font-medium leading-tight" href="https://github.com/amir20/phantomjs-node">PhantomJS integration for NodeJS</a>
            <p class="mt-2">
              Phantom is a module for integrating <a href="https://phantomjs.org/">PhantomJs</a> with Node. This project is no longer maintained because
              PhantomJs has been deprecated.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { multipier } from "../components/Waves.vue";
export default {
  mounted() {
    multipier.value = 1.5;
  },
};
</script>
<style scoped></style>
