<template>
  <section class="section__main">
    <div class="container">
      <shared-title :data="data"></shared-title>
      <div class="section-main__content">
        <div class="popular-brands">
          <ul class="popular-brands__list">
            <li class="popular-brands__item" v-for="item in data?.data.slice(0, 8)" :key="item.id">
              <a href="">
                <img :src="apiURL + item.attributes?.main_page?.image" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const apiURL = config.public.API_URL;
import listApi from "~/services/list/list.api.js";

const {data} = await listApi.GET_LIST_BRANDS()
</script>

<style lang="scss" scoped>


.popular-brands {
  &__list {
    display: flex;
    align-items: center;
    column-gap: 24px;
  }

  &__item {
    width: 24%;
    aspect-ratio: 25 / 16;

    background-color: rgba($blue, 0.05);
    border-radius: 4px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      img {

        width: 40%;
        height: 40%;
        object-fit: contain;
      }

      transition-duration: 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }

  }

}
</style>