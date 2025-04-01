import {useFetchHook} from "~/composables/useFetchHook.js";

export default {
    async GET_LIST_HIT() {
        return useFetchHook('/api/proxy/include/mainpage/hit/hit/', { method: "GET" }, "LIST_HIT",  { server: false })
    },

    async GET_LIST_POPULAR_CATEGORY() {
        return useFetchHook('/api/proxy/include/mainpage/popular-category/', { method: "GET" }, "LIST_POPULAR_CATEGORY",  { server: false })
    }
}



