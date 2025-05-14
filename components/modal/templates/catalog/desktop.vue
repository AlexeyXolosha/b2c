<template>
  <section class="section-modal">
    <div class="modal-catalog">
      <div class="container">
        <div class="content" @mouseenter="isHovered = true"
             @mouseleave="isHovered = false">

          <!-- Родительские элементы -->
          <div class="chapter">
            <ul class="list">
              <li
                  v-for="category in categoryTree"
                  :key="category.id"
                  class="item"
                  :class="{ 'item--active': hoveredCategory?.id === category.id }"
                  @mouseover="hoveredCategory = category"
              >
                <a :href="category.links.self">
                  {{ category.attributes.name }}
                </a>
              </li>

            </ul>
          </div>

          <!-- Дочерние элементы -->
          <div class="subsection" v-if="hoveredCategory?.children?.length">
            <ul class="list">
              <li
                  v-for="child in hoveredCategory.children"
                  :key="child.id"
                  class="item"
              >
                <a :href="child.links.self">
                  {{ child.attributes.name }}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue';
import {useModalsDispatcher} from '~/store/modal-controller.js';
import {useCategoryTree} from "~/composables/catalog/useCategoryTree.js";
import catalogApi from '~/services/catalog/catalog.api.js';

const {data} = await catalogApi.GET_CATALOG();
const {categoryTree} = useCategoryTree(data);

const hoveredCategory = ref(null);
const isHovered = ref(false);

const modals = useModalsDispatcher();
</script>

<style lang="scss" scoped src="./sass/style.scss"></style>