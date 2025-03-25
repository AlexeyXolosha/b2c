<template>
  <component :is="loaderComponent" :props="data"></component>
</template>

<script setup>
import { useLoaderComponent } from "~/composables/useLoaderComponent.js";
import advantagesApi from "~/services/advantages/advantages.api.js";

const props = defineProps({
  namespace: String,
  group: String
});

const loaderComponent = useLoaderComponent(props)


const {data: advantages} = await advantagesApi.GET_ADVANTAGES();
const data = computed(() => advantages.value.data);
</script>

<style lang="scss" scoped></style>