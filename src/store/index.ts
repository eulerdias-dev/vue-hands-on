import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

export class RootState {}

const vuexLocal = new VuexPersistence<RootState>({
  key: "app-filmes-series",
  storage: window.localStorage
})

const store = new Vuex.Store<{}>({
  modules: {
    filmes: {},
    series: {},
  },
  plugins: [vuexLocal.plugin]
});

Object.assign(window, { $store: store });

export default store;
export const vxm = {
  localStorage: {
    filme: {},
    serie: {}
  },
}
