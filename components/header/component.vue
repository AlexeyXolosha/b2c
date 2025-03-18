<script setup>
import {useLoaderComponent} from "~/composables/useLoaderComponent.js";
import headerApi from "~/services/header/header.api.js";

const {data: main_menu, pending, error} = await headerApi.GET_MENU();
const data = computed(() => main_menu.value.data);

const props = defineProps({
  namespace: String, group: String
});

const loaderComponent = useLoaderComponent(props)
</script>

<template>
  <component :is="loaderComponent" :props="data"></component>
</template>
