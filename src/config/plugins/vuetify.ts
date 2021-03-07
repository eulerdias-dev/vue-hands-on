import '@mdi/font/css/materialdesignicons.css';
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import pt from "vuetify/src/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1c313a",
        secondary: "#37474f",
        accent: "#fbc02d",
        error: "#FF5252",
        info: "#718792",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    },
  },
  lang: {
    locales: { pt },
    current: "pt"
  },
  icons: {
    iconfont: 'mdi',
  },
});
