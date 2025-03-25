<template>
  <section class="section-modal">
    <div class="container">
      <div class="modal-catalog">

      </div>
    </div>
  </section>
</template>

<script setup>
import { useModalsDispatcher } from "~/store/modal-controller.js";

const modals = useModalsDispatcher();
</script>

<style lang="scss" scoped>


</style>