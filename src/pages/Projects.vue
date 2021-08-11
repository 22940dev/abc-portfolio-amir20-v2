<template>
  <div class="w-auto md:w-4/5 lg:w-2/3">
    <h1 class="mb-8 text-5xl">Projects</h1>
    <div class="font-light">
      <ul class="space-y-8">
        <li class="md:flex" v-for="project in projects" :key="project.title">
          <div class="md:flex-shrink-0">
            <img :src="project.image" :alt="project.imageAlt" width="320" height="165" class="object-cover w-full rounded shadow h-50 md:w-60" />
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
import { useHead } from "@vueuse/head";

const images = import.meta.globEager("/src/images/*.png");

export default {
  data() {
    return {
      projects: [
        {
          title: "MovieJs",
          link: "https://moviejs-search.vercel.app/",
          image: images["/src/images/moviejs.png"].default,
          imageAlt: "MovieJs screenshot",
          description: `MovieJs is a VueJs powered movie and entertainment search engine for people in a hurry.  It uses the OMDB Api for all the movie information
          from characters, plots, movie posters and short trailers for you to watch.  The search also allows for the user to rate each movie on a 1-5 scale.`,
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
  created() {
    useHead({
      title: "Projects | AmirRaminfar.me",
    });
  },
  mounted() {
    multipier.value = 1.5;
  },
};
</script>
<style scoped></style>
