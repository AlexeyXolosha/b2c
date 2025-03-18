<template>
  <section class="modal-catalog">
    <div class="container">
      <div class="modal-catalog__inner">
        <p>Это модальное окно</p>
        <button @click="modals.close()">Закрыть</button>
      </div>
    </div>
  </section>
</template>

<script setup>

import { useModalsDispatcher } from "~/store/modal-controller.js";

const modals = useModalsDispatcher();

</script>

<style lang="scss" scoped>
.modal-catalog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-catalog__inner {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

</style>