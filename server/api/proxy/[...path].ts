import {defineEventHandler, getQuery, getRequestHeader, createError} from 'h3';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const pathParam = event.context.params?.path;

    // Обрабатываем path
    const path = [pathParam].flat().join('/');

    // Получаем query параметры
    const query = getQuery(event);
    const queryString = new URLSearchParams(query as any).toString();
    const targetUrl = `${config.public.API_URL}/${path}${queryString ? '?' + queryString : ''}`;

    // console.log("🔗 Запрос к API:", targetUrl);

    try {
        const headers = {
            'Content-Type': 'application/json',
            ...(getRequestHeader(event, 'Authorization') && {
                Authorization: getRequestHeader(event, 'Authorization')
            })
        };

        const response = await $fetch(targetUrl, {method: 'GET', headers});

        // console.log("✅ Ответ от API:", response);
        // console.log("📋 Заголовки запроса:", headers);

        return response;
    } catch (error: any) {
        console.error("❌ Ошибка при запросе к API:", error);

        console.error("📌 Доп. информация:", {
            message: error?.message || "Неизвестная ошибка",
            stack: error?.stack || "Нет stack-trace",
            url: targetUrl,
            status: error?.status || "Неизвестный статус",
            response: error?.response || "Нет ответа"
        });

        return createError({statusCode: 500, statusMessage: "Ошибка сервера"});
    }
});
