<template>
  <section class="section-main">
    <div class="container">
      <Swiper :slides-per-view="6"
              :space-between="24">
        <SwiperSlide>
          <product-card-component namespace="product-card"></product-card-component>
        </SwiperSlide>
        <SwiperSlide>
          <product-card-component namespace="product-card"></product-card-component>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

</script>

<style lang="scss" scoped>

</style>