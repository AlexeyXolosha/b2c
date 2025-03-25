<script setup>
import { useLoaderComponent } from "~/composables/useLoaderComponent.js";
import sliderApi from "~/services/slider/slider.api.js";
const props = defineProps({
  namespace: String,
  group: String
});

const loaderComponent = useLoaderComponent(props)

const {data: slider} = await sliderApi.GET_SLIDER();
const data = computed(() => slider.value.data);
</script>

<template>
  <component :is="loaderComponent" :props="data"></component>
</template>
