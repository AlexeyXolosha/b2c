<script setup>
import { useDeviceController } from '~/store/device-controller.js';
import  useFetchHook from '~/composables/useFetchHook.js';

import mobile from './templates/mobile.vue';
import desktop from './templates/desktop.vue';
import headerApi from "~/services/header/header.api.js";

const deviceController = useDeviceController();
const menu = useFetchHook("menu", headerApi.GET_HEADER_MENU.GET_MENU);
</script>

<template>
  <component :is="deviceController.isMobile ? mobile : desktop"></component>
</template>
