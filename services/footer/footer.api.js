import {useFetchHook} from "~/composables/useFetchHook.js";

export default {
    async GET_STORES() {
        return useFetchHook('/api/proxy/include/menu/stores/', {method: "GET"}, "FOOTER_STORES", {server: true})
    },

    async GET_FOOTER_MENU() {
        return useFetchHook('/api/proxy/include/menu/footer/', {method: "GET"}, "FOOTER_MENU", {server: true})
    },

    async GET_FOOTER_INFO() {
        return useFetchHook('/api/proxy/include/menu/info/', {method: "GET"}, "FOOTER_INFO", {server: true})
    },

    async GET_FOOTER_TELEPHONE() {
        return useFetchHook('/include/static-info/phone/', {method: "GET"}, "FOOTER_TELEPHONE", {server: true})
    },

    async GET_FOOTER_SOCIAL() {
        return useFetchHook('/include/static-info/social-media/', {method: "GET"}, "FOOTER_SOCIAL", {server: true})
    }
}