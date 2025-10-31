import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css"; // Tailwind სტილები

createApp(App).use(router).mount("#app");
