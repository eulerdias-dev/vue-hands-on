import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import qs from "qs";
import vuetify from "./config/plugins/vuetify";
import makeServer from "./config/miragejs";
import {
  LayoutPadrao,
  LayoutVazio,
} from "./features/_crosscutting/components/layouts"

Vue.config.productionTip = false;
axios.defaults.paramsSerializer = (params: any) => {
  return qs.stringify(params, { arrayFormat: "indices" });
};

Vue.component("layout-vazio", LayoutVazio);
Vue.component("layout-padrao", LayoutPadrao);

if (process.env.NODE_ENV === "development") {
  makeServer();
}

new Vue({
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
