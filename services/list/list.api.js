import {useFetchHook} from "~/composables/useFetchHook.js";

export default {
    async GET_LIST_HIT() {
        return useFetchHook('/api/proxy/include/mainpage/hit/hit/', {method: "GET"}, "LIST_HIT", {server: false})
    },

    async GET_LIST_POPULAR_CATEGORY() {
        return useFetchHook('/api/proxy/include/mainpage/popular-category/', {method: "GET"}, "LIST_POPULAR_CATEGORY", {server: false})
    },

    async GET_LIST_BANNER_WITH_TEXT() {
        return useFetchHook('/api/proxy/include/banners/banner-with-text/', {method: "GET"}, "LIST_BANNER_WITH_TEXT", {server: false})
    },

    async GET_LIST_BRANDS() {
        return useFetchHook('/api/proxy/include/mainpage/brands/', {method: "GET"}, "LIST_BRANDS", {server: false})
    },

    async GET_LIST_STOCK() {
        return useFetchHook('/api/proxy/include/mainpage/hit/stock/', {method: "GET"}, "LIST_STOCK", {server: false})
    },

    async GET_LIST_EVENT() {
        return useFetchHook('/api/proxy/include/mainpage/sale/', {method: "GET"}, "LIST_EVENT", {server: false})
    },

    async GET_LIST_RECOMMENDED() {
        return useFetchHook('/api/proxy/include/mainpage/hit/recommend/', {method: "GET"}, "LIST_RECOMMEND", {server: false})
    },

    async GET_LIST_BLOG() {
        return useFetchHook('/api/proxy/include/mainpage/blog/', {method: "GET"}, "LIST_BLOG", {server: false})
    }
}
