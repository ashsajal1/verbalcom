import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import "./style.css";
import "primeicons/primeicons.css";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Practice from "./pages/Practice.vue";
import Vocabulary from "./pages/Vocabulary.vue";
import NotFound from "./pages/NotFound.vue";
import { createPinia } from 'pinia'

const routes = [
  { path: "/", name: 'home', component: Home },
  { path: "/about", component: About },
  { path: "/practice", component: Practice },
  { path: "/vocabulary", component: Vocabulary },
  { path: "/:patchMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia()
const app = createApp(App);

app.use(MotionPlugin);
app.use(router);
app.use(pinia)
app.mount("#app");
