<template>
  <div class="w-auto md:w-4/5 lg:w-2/3">
    <h1 class="mb-8 text-5xl">Projects</h1>
    <div class="font-light">
      <ul class="space-y-8">
        <li class="md:flex" v-for="project in projects" :key="project.title">
          <div class="md:flex-shrink-0">
            <img :src="project.image" :alt="project.imageAlt" width="320" height="165" class="object-cover w-full rounded h-50 md:w-60" />
          </div>
          <div class="mt-8 md:mt-0 md:ml-8">
            <a class="mt-1 text-lg font-medium leading-tight" :href="project.link">{{ project.title }}</a>
            <p class="mt-2" v-html="project.description"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { multipier } from "../components/Waves.vue";

const images = import.meta.globEager("/src/images/*.png");

export default {
  data() {
    return {
      projects: [
        {
          title: "Clashleaders.com",
          link: "https://www.clashleaders.com/",
          image: images["/src/images/clashleaders.png"].default,
          imageAlt: "Clashleaders screenshot",
          description: `Clashleaders is a website dedicated to <a href="https://supercell.com/en/games/clashofclans/">Clash of Clans</a> game. This website shows trending
              leaderboards across the world for 6 million players. Each clan has insights that are ranked against all other clans. Data is visualized using
              beautiful charts and graphs.`,
        },
        {
          title: "Dozzle for Docker",
          link: "https://dozzle.dev/",
          image: images["/src/images/dozzle.png"].default,
          imageAlt: "Dozzle screenshot",
          description: `Dozzle is a simple, lightweight application that provides you with a web based interface to monitor your
              <a href="https://www.docker.com/">Docker</a> container logs live. It doesn’t store log information, it is for live monitoring of your container
              logs only.`,
        },
        {
          title: "PhantomJS integration for NodeJS",
          link: "https://github.com/amir20/phantomjs-node",
          image: images["/src/images/phantom.png"].default,
          imageAlt: "Phantom screenshot",
          description: `Phantom is a module for integrating <a href="https://phantomjs.org/">PhantomJs</a> with Node. This project is no longer maintained because
              PhantomJs has been deprecated.`,
        },
      ],
    };
  },
  mounted() {
    multipier.value = 1.5;
  },
};
</script>
<style scoped></style>
