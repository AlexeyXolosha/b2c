import {useFetchHook} from "~/composables/useFetchHook.js";

export default {
    async GET_COMPANY() {
        return useFetchHook('/api/proxy/company/', {method: "GET"}, "COMPANY", {server: false})
    }
}