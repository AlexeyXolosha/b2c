import {defineStore} from "pinia"; //Импортируем функцию из Pinia, для создания хранилище

export const useModalsDispatcher = defineStore("useModalsDispatcher", () => {
    const activeModal = ref(null);
    const modalProps = ref({});

    const open = (component, payload) => {
        activeModal.value = component;
        modalProps.value = payload;
    };

    const close = (component, payload) => {
        activeModal.value = null;
        modalProps.value = {};
    };

    return { activeModal, modalProps, open, close };
})

