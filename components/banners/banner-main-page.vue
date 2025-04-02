<script setup>
import bannersApi from "~/services/banners/banners.api.js";

const config = useRuntimeConfig()
const apiURL = config.public.API_URL;

const {data} = await bannersApi.GET_BANNERS_WIDE()
</script>

<template>
  <section class="section__main">
    <div class="container">
      <div class="banner-main-wide">
        <div class="banner-main-wide__inner">
          <h3 class="banner-main-wide__title"> {{ data.data[0].attributes.name }}</h3>
          <img :src="apiURL + data.data[0].attributes?.images?.preview" alt="" class="banner-main-wide__image" />
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
.banner-main-wide {

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 180px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;

    &::before{
      content: "";
      position: absolute;
      z-index: -1;
      width: 60%;
      height: 100%;
      overflow: hidden;
      transform: skew(-17deg);
      top: 0;
      left: -100px;
      background-color: $yellow-dark;

    }
  }

  &__title{
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    color: $black;
    padding: 70px 70px 0;
  }

  &__image{
    width: 50%;
    height: 100%;
    object-fit: contain;
    z-index: -2;
    border-radius: 4px;

  }
}
</style>