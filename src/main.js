import { createApp } from "vue";
import { createPinia } from "pinia";
import { auth } from "./includes/firebase";

import App from "./App.vue";
import router from "./router";

import "./assets/base.css";
import "./assets/main.css";
import veeValidatePlugin from "@/includes/validation";
import "./includes/firebase";

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(veeValidatePlugin);

    app.mount("#app");
  }
});
