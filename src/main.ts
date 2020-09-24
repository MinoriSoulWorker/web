import App from "@/app.vue";
import router from "@/router";
import { createApp } from "vue";
import { i18n } from "@/i18n";

createApp(App).use(i18n).use(router).mount("#app");
