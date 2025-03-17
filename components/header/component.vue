<script setup>
import { useDeviceController } from '~/store/device-controller.js';
import mobile from './templates/mobile.vue';
import desktop from './templates/desktop.vue';
import headerApi from "~/services/header/header.api.js";

const deviceController = useDeviceController();

const { data: main_menu, pending, error } = await headerApi.GET_MENU();
const data = computed(() => main_menu.value.data);
</script>

<template>
  <component :is="deviceController.isMobile ? mobile : desktop" :props="data"></component>
</template>
