import {useFetchHook} from "~/composables/useFetchHook.js";

export default  {
    async GET_CATALOG() {
        return useFetchHook('api/proxy/catalog/', {method: "GET"}, "CATALOG", {server: false})
    }
}