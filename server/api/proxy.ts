export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const pathParam = event.context.params?.path;

    // Преобразуем path в строку (если массив — соединяем, если строка — используем как есть)
    const path = Array.isArray(pathParam) ? pathParam.join('/') : pathParam || '';

    const query = getQuery(event);
    const targetUrl = `${config.public.apiBase}/${path}?${new URLSearchParams(query as any)}`;

    try {
        const response = await $fetch(targetUrl, {
            method: getMethod(event),
            body: await readBody(event),
            headers: {
                'Authorization': getRequestHeader(event, 'Authorization') || '',
                'Content-Type': 'application/json'
            }
        });

        return response;
    } catch (error) {
        console.error("Ошибка при запросе к API:", error);
    }
});
