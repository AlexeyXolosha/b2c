<template>
  <section class="section-main">
    <div class="container">
      <h2 class="section-main__title">{{data?.meta?.title}}</h2>
      <div class="section-main__content">
        <ul class="category-list">
          <li class="category-list__item" v-for="category in data?.data.slice(0, 8)" :key="category.id">
            <cards-categories-card-default :data="category"></cards-categories-card-default>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import listApi from "~/services/list/list.api.js";

const {data} = await listApi.GET_LIST_POPULAR_CATEGORY()
const data_1 = await listApi.GET_LIST_POPULAR_CATEGORY()
console.log("log data_1", data_1)
</script>

<style lang="scss" scoped>
  .category-list{
    display: flex;
    gap: 24px;

    &__item{
      width: 11.5%;
    }
  }
</style>