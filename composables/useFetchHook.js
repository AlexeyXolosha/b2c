// ~/composables/useFetchHook.js
export function useFetchHook(url, options = {}, key = null) {
    return useAsyncData(
        key || url,
        () => $fetch(url, options)
    );
}
