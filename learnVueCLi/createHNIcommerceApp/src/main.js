import { createApp } from 'vue';
import App   from "@/App";
import router from "./router.js";
import MarqueeText from 'vue-marquee-text-component'

createApp(App)
    .use(router)    // router is a global variable
    .component('marquee-text', MarqueeText)
    .mount('#app');



