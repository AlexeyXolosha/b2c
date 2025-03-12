<script setup>
import { useDeviceController } from '~/store/device-controller.js';
import mobile from './templates/mobile.vue';
import desktop from './templates/desktop.vue';

const deviceController = useDeviceController();
</script>

<template>
  <component :is="deviceController.isMobile ? mobile : desktop"></component>
</template>
