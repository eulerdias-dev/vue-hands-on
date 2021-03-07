import _Vue from "vue";
import axios from "axios";
import qs from "qs";

export function AxiosPlugin<AxiosPlugOptions>(Vue: typeof _Vue, options?: AxiosPluginOptions): void {
    axios.defaults.paramsSerializer = (params: any) => {
        return qs.stringify(params, { arrayFormat: "indices" });
    };
    axios.defaults.baseURL = "/api";
    
    Vue.prototype.$http = axios;
}

export class AxiosPluginOptions {
}