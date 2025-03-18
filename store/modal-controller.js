import { defineStore } from "pinia";

export const useModalsDispatcher = defineStore("useModalsDispatcher", () => {
    const activeModal = ref(null);
    const modalProps = ref({});

    const open = (component, payload = {}) => {
        activeModal.value = component;
        modalProps.value = payload;
    };

    const close = () => {
        activeModal.value = null;
        modalProps.value = {};
    };

    return { activeModal, modalProps, open, close };
});
