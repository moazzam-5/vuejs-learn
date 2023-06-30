import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { VuelidatePlugin } from "vuelidate";
import "./assets/tailwind.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VuelidatePlugin);

app.mount("#app");
