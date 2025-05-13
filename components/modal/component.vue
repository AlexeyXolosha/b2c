<script setup>
import { useModalsDispatcher } from "@/store/modal-controller.js";
import { useLoaderComponent } from "~/composables/useLoaderComponent.js";
const modals = useModalsDispatcher();

const props = defineProps({
  namespace: String,
  group: String
});

const loaderComponent = useLoaderComponent(props)

watch(
    () => modals.activeModal,
    (newVal) => {
      if (typeof document === 'undefined') return;
      document.body.style.overflow = newVal ? 'hidden' : '';
    }
);
</script>

<template>
  <component v-if="modals.activeModal" :is="loaderComponent"></component>
</template>
