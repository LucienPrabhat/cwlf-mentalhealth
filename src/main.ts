import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import A from "./pages/A.vue";
import B from "./pages/B.vue";
import C from "./pages/C.vue";
import D from "./pages/D.vue";
import E from "./pages/E.vue";
import "./global.css";

interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/",
    name: "A",
    component: A,
  },
  {
    path: "/b",
    name: "B",
    component: B,
  },
  {
    path: "/c",
    name: "C",
    component: C,
  },
  {
    path: "/d",
    name: "D",
    component: D,
  },
  {
    path: "/e",
    name: "E",
    component: E,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title as string;
  const metaDesc = toRoute?.meta?.description as string;

  window.document.title = metaTitle || "cwlf-mentalhealth";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value: string) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

createApp(App).use(router).mount("#app");

export default router;
