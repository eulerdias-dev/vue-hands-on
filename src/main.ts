import Vue from "vue";
import App from "./App.vue";
import router from "./config/router";
import store from "./store";
import { AxiosPlugin } from "./config/plugins/axios";
import vuetify from "./config/plugins/vuetify";
import makeServer from "./config/miragejs";
import {
  LayoutPadrao,
  LayoutVazio,
} from "./features/_crosscutting/components/layouts"

Vue.config.productionTip = false;

Vue.use(AxiosPlugin);
Vue.component("layout-vazio", LayoutVazio);
Vue.component("layout-padrao", LayoutPadrao);

if (process.env.NODE_ENV === "development") {
  makeServer();
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
