import { createApp } from "vue";
// import { createVuetify } from 'vuetify';

import App from "./App.vue";
import router from "./router";
import store from "./store";

// import * as components from 'vuetify/components';
// import * as directives from 'vuetify/directives';
// import '@mdi/font/css/materialdesignicons.css';

// const vuetify = new createVuetify({
//   components,
//   directives,
//   icons: {
//     iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
//   },
// });

createApp(App)
  .use(store)
  .use(router)
  // .use(vuetify)
  .mount("#app");
