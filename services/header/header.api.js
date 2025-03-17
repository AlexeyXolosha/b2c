import { useFetchHook } from "~/composables/useFetchHook.js";

export default {
    async GET_MENU() {
        return useFetchHook('/api/proxy/include/menu/main', { method: "GET" }, "MAIN_MENU");
    }
};
