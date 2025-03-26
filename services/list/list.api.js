import {useFetchHook} from "~/composables/useFetchHook.js";

export default {
    async GET_LIST_HIT() {
        return useFetchHook('/api/proxy/include/mainpage/hit/hit/', { method: "GET" }, "LIST_HIT",  { server: false })
    }
}