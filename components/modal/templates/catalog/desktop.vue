<template>
  <section class="section-modal">
    <div class="modal-catalog">
      <div class="container">
        <div class="content">
          <div class="chapter">
            <ul class="list">
              <li class="item" :class="{'item--active': isHovered}" @mouseover="isHovered = true"
                  @mouseleave="isHovered = false">
                <a href=""> Смартфоны и гаджеты</a>
              </li>
            </ul>
          </div>
          <div class="subsection">
            <ul class="list">
              <li class="item">
                <a href=""> Смартфоны и гаджеты</a>
              </li>
              <li class="item">
                <a href=""> Смартфоны и гаджеты</a>
              </li>
              <li class="item">
                <a href=""> Смартфоны и гаджеты</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useModalsDispatcher} from "~/store/modal-controller.js";

const modals = useModalsDispatcher();
const isHovered = ref(false)

</script>

<style lang="scss" scoped src="./sass/style.scss"></style>