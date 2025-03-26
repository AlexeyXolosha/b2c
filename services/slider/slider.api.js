import {useFetchHook} from "~/composables/useFetchHook.js";

export default {
    async GET_SLIDER() {
        return useFetchHook('/api/proxy/include/banners/slider/', { method: "GET" }, "MAIN_SLIDER", { server: true })
    }
}