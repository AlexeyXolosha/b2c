import { useFetchHook } from "~/composables/useFetchHook.js";

export default {
    async GET_BANNERS_WIDE() {
        return useFetchHook('/api/proxy/include/banners/wide/', { method: "GET" }, "BANNERS_WIDE",  { server: true });
    }
};
