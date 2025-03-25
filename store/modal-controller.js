import { defineStore } from "pinia"; // Импортируем модуль "Хранилище" из pinia

// Создаём хранилище useModalsDispatcher.
export const useModalsDispatcher = defineStore("useModalsDispatcher", () => {
    const activeModal = ref(null); //Здесь хранится текущий активный модальный компонент (имя / путь)
    const modalProps = ref({}); // Хранятся параметры, переданные в модальное окно.


    // Открытие модального компонента
    const open = (component, payload = {}) => {
        activeModal.value = component; // Запоминаем, какой модальный компонент открыть
        modalProps.value = payload; // Сохраняем переданные параметры
    };

    const close = () => {
        activeModal.value = null; //Сбрасываем активное модальное окно
        modalProps.value = {};
    };

    return { activeModal, modalProps, open, close };
});
