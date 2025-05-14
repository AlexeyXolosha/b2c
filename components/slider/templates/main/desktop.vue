<template>
  <section class="section">
    <div class="banner-main">
      <div class="container">
        <Swiper class="banner-main__swiper"
            :slides-per-view="1"
            :space-between="10"
            :pagination="{ clickable: true }"
            :modules="[Pagination, Autoplay]"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: true
          }"
        >
          <SwiperSlide v-for="(item, index) in data" :key="item.id || index">
            <a :href="item?.links?.self" class="banner-main__link">
              <div class="banner-main__details">
                <h3 class="banner-main__title">{{ item?.attributes?.text?.title }}</h3>
                <p class="banner-main__description">{{ item?.attributes?.text?.text }}</p>
              </div>
              <img :src="apiURL + item?.attributes?.images?.preview" alt="" class="banner-main__image">
            </a>
          </SwiperSlide>
        </Swiper>
        <!--Информация о доставке-->
        <advantages-component namespace="advantages"></advantages-component>
      </div>
    </div>
  </section>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const config = useRuntimeConfig()
const apiURL = config.public.API_URL;

const props = defineProps({
  props: Array,
})

const data = props.props
</script>

<style src="./sass/style.scss" lang="scss" scoped></style>

<style>
.banner-main .swiper-slide{
  overflow: hidden;
}
</style>
