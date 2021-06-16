import "tailwindcss/tailwind.css";
import "./custom.css";

import App from "./App.vue";
import { createSSRApp } from "vue";
import { createHead } from "@vueuse/head";
import { createRouter } from "./router";

export function createApp() {
  const app = createSSRApp(App);
  const head = createHead();
  const router = createRouter();
  app.use(router);
  app.use(head);
  return { app, router, head };
}
