// ~/composables/useFetchHook.js
export function useFetchHook(url, options = {}, key = null, optionsForAsyncData = {}) {
    const { server = false, ...asyncOptions } = optionsForAsyncData;

    return useAsyncData(
        key || url,
        () => $fetch(url, options),
        {
            server,
            lazy: !server,
            ...asyncOptions
        }
    );
}
