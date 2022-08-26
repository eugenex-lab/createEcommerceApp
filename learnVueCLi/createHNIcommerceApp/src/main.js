import { createApp } from 'vue';
import App   from "@/App";
import router from "./router.js";

createApp(App)
    .use(router)    // router is a global variable
    .mount('#app');
