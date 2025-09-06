import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import DesktopMainPage from "./pages/DesktopMainPage.vue";
import Po from "./pages/po.vue";
import Xin from "./pages/xin.vue";
import Yu from "./pages/yu.vue";
import Yan from "./pages/yan.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "DesktopMainPage",
    component: DesktopMainPage,
  },
  {
    path: "/garden",
    name: "Garden",
    component: DesktopMainPage,
    meta: {
      scrollTo: "garden"
    }
  },
  {
    path: "/po",
    name: "Po",
    component: Po,
  },
  {
    path: "/xin",
    name: "Xin",
    component: Xin,
  },
  {
    path: "/yu",
    name: "Yu",
    component: Yu,
  },
  {
    path: "/yan",
    name: "Yan",
    component: Yan,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.meta.scrollTo) {
      // Use setTimeout to ensure component is fully rendered
      setTimeout(() => {
        const element = document.getElementById(to.meta.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
      return { top: 0 }; // Return top: 0 to prevent Vue Router's default behavior
    }
    return { top: 0 };
  },
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
