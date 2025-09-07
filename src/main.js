import { createApp, nextTick } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { showLoading, hideLoading } from "./utils/loading";

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
    // Defer any special scrolling (e.g., /garden) until after loading mask hides
    return { top: 0 };
  },
});

router.beforeEach((toRoute, _, next) => {
  // Show loading mask at the start of navigation
  showLoading();
  // Store intended scroll target (e.g., for /garden)
  pendingScrollTarget = toRoute?.meta?.scrollTo || null;
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

// Track any deferred scroll target set in beforeEach
let pendingScrollTarget = null;

const waitForImagesToLoad = (root) => {
  const scope = root || document;
  const allImages = Array.from(scope.querySelectorAll('img'))
    // Exclude the loading GIF inside the mask itself
    .filter((img) => !img.classList.contains('loading-gif') && !img.closest('.loading-mask'));

  const pending = allImages.filter((img) => !img.complete);
  if (pending.length === 0) {
    return Promise.resolve();
  }
  const loadPromises = pending.map((img) => new Promise((resolve) => {
    const done = () => {
      img.removeEventListener('load', done);
      img.removeEventListener('error', done);
      resolve();
    };
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  }));
  // Safety timeout to avoid hanging indefinitely
  const timeout = new Promise((resolve) => setTimeout(resolve, 5000));
  return Promise.race([
    Promise.all(loadPromises),
    timeout,
  ]);
};

router.afterEach(async () => {
  // Wait for DOM updates of the new route
  await nextTick();
  // Wait for images within the app to finish loading
  const appRoot = document.getElementById('app');
  await waitForImagesToLoad(appRoot);

  // Hide the loading mask now that content is ready
  hideLoading();

  // After mask hides, perform any deferred scrolling (e.g., /garden)
  if (pendingScrollTarget) {
    // Wait a frame to ensure mask removal is rendered
    requestAnimationFrame(() => {
      const el = document.getElementById(pendingScrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      pendingScrollTarget = null;
    });
  }
});

export default router;
