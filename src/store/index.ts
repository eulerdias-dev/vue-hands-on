import Vue from "vue";
import Vuex from "vuex";
import { getModule } from "vuex-module-decorators";
import VuexPersistence from "vuex-persist";
import FavoritosStore from "../features/_crosscutting/store/favoritosStore";

Vue.use(Vuex);

export class RootState {}

const vuexLocal = new VuexPersistence<RootState>({
  key: "app-filmes-series",
  reducer: (state: any) => ({ favoritos: state.favoritos}),
  storage: window.sessionStorage,
})

const store = new Vuex.Store<{}>({
  modules: {
    filmes: {},
    series: {},
    favoritosPersist: FavoritosStore,
  },
  plugins: [vuexLocal.plugin]
});

Object.assign(window, { $store: store });

export default store;
export const vxmPersistent = {
  persistent: {
    favoritos: getModule(FavoritosStore, store),
  }
}
