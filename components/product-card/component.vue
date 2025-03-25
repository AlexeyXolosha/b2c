<template>
  <component :is="loaderComponent" ></component>
</template>

<script setup>
import {useLoaderComponent} from "~/composables/useLoaderComponent.js";

const props = defineProps({
  namespace: String,
  group: String
});

const loaderComponent = useLoaderComponent(props)
</script>

<style lang="scss" scoped>

</style>