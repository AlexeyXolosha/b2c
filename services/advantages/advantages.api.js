import { useFetchHook } from "~/composables/useFetchHook.js";

export default {
    async GET_ADVANTAGES() {
        return useFetchHook('/api/proxy/include/mainpage/advantages/', { method: "GET" }, "ADVANTAGES");
    }
};
