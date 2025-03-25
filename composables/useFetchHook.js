// ~/composables/useFetchHook.js
export function useFetchHook(url, options = {}, key = null, optionsForAsyncData = {}) {
    return useAsyncData(
        key || url,
        () => $fetch(url, options),
        optionsForAsyncData
    );
}
