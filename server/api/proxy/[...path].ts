export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const pathParam = event.context.params?.path;

    // Преобразуем path в строку (если массив — соединяем, если строка — используем как есть)
    const path = Array.isArray(pathParam) ? pathParam.join('/') : pathParam || '';

    const query = getQuery(event);
    const targetUrl = `${config.public.API_URL}/${path}?${new URLSearchParams(query as any)}`;

   // console.log("🔗 Запрос к API:", targetUrl); // 👉 ЛОГ URL запроса


    try {
        const response = await $fetch(targetUrl, {
            method: 'GET',
            headers: {
                'Authorization': getRequestHeader(event, 'Authorization') || '',
                'Content-Type': 'application/json'
            }
        });

        //console.log("✅ Ответ от API:", response); // 👉 ЛОГ ответа

        return response;
    } catch (error) {
      //  console.error("Ошибка при запросе к API:", error);
    }
});
