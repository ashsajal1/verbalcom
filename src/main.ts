import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import "./style.css";
import "primeicons/primeicons.css";
import { createRouter, createMemoryHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);

app.use(MotionPlugin);
app.use(router);

app.mount("#app");
