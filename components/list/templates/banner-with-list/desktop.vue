<template>
  <section class="section-main"  v-if="data">
    <div class="container">
      <div class="banner-with-list">
        <ul class="banner-with-list__list">
          <li class="banner-with-list__item" v-for="item in data?.data" :key="item.id">
              <cards-banner-with-text-card-default :data="item"></cards-banner-with-text-card-default>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import listApi from "~/services/list/list.api.js";

const {data} = await listApi.GET_LIST_BANNER_WITH_TEXT();

</script>

<style lang="scss" scoped>
.banner-with-list{
  &__list{
    display: flex;
    gap: 24px;
  }

  &__item{
    height: 380px;
  }
}
</style>