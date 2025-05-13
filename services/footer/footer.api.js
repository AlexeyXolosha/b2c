import {useFetchHook} from "~/composables/useFetchHook.js";

export default {
    async GET_STORES() {
            return useFetchHook('/api/proxy/include/menu/footer/', {method: "GET"}, "FOOTER_STORES", { server: true })
    }
}