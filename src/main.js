import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import DesktopMainPage from "./pages/DesktopMainPage.vue";
import E1 from "./pages/E1.vue";
import E2 from "./pages/E2.vue";
import E3 from "./pages/E3.vue";
import E4 from "./pages/E4.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "DesktopMainPage",
    component: DesktopMainPage,
  },
  {
    path: "/E1",
    name: "E1",
    component: E1,
  },
  {
    path: "/E2",
    name: "E2",
    component: E2,
  },
  {
    path: "/E3",
    name: "E3",
    component: E3,
  },
  {
    path: "/E4",
    name: "E4",
    component: E4,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title;
  const metaDesc = toRoute?.meta?.description;

  window.document.title = metaTitle || "青春不該 emo 一樣｜兒少療心計畫";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

const vuetify = createVuetify({ components, directives });

createApp(App).use(router).use(vuetify).mount("#app");

export default router;
