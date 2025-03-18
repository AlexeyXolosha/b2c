<script setup>
import { useModalsDispatcher } from "@/store/modal-controller.js";
import { useLoaderComponent } from "~/composables/useLoaderComponent.js";
const modals = useModalsDispatcher();

const props = defineProps({
  namespace: String,
  group: String
});

const loaderComponent = useLoaderComponent(props)
</script>

<template>
  <component v-if="modals.activeModal" :is="loaderComponent"></component>
</template>
