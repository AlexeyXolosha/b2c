<template>
  <section class="section-main">
    <div class="container">
      <div class="tabs">
        <h2 class="tabs__title">{{ data?.meta?.title }}</h2>
        <ul class="tabs__list">
          <li class="tabs__item" v-for="item in data?.data ?? []" :key="item.id" @click="handleClick(item)" :class="{ 'tabs__item--active': item.id == activeTab}">
            {{ item.attributes.name }}
          </li>
        </ul>
      </div>
      <Swiper :slides-per-view="6"
              :space-between="24">
        <SwiperSlide v-for="item in itemData?.data ?? []" :key="item.id">
          <product-card-component namespace="product-card" :data="item"></product-card-component>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import listApi from "~/services/list/list.api.js";

const itemData = ref(null);
const activeTab = ref(null);

const {data} = await listApi.GET_LIST_HIT();

const handleClick = async (clickedItem) => {
  const itemLink = clickedItem.links.self;
  activeTab.value = clickedItem.id;


  const targetUrl = `/api/proxy${itemLink}`;

  try {
    itemData.value = await $fetch(targetUrl);
    console.log(itemData.value);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
};

watch(
    () => data.value?.data,
    (newData) => {
      if (newData?.length) {
        const firstItem = newData[0];
        activeTab.value = firstItem.id;
        handleClick(firstItem);
      }
    },
    { immediate: true }
);
</script>

<style src="./scss/style.scss" lang="scss" scoped></style>

<style lang="scss" scoped>

.tabs {
  margin-bottom: 40px;
}
</style>