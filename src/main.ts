import { createApp } from "vue";
import App from "./App.vue";
import "./global.css";

// Set default page title
window.document.title = "cwlf-mentalhealth";

const app = createApp(App);
app.mount("#app");