<script setup>
import companyApi from "~/services/company/company.api.js";

const config = useRuntimeConfig()
const apiURL = config.public.API_URL;

const {data} = await companyApi.GET_COMPANY();
</script>

<template>
  <section class="section-main">
    <div class="container">
      <div class="company">
        <div class="company__inner">
          <div class="left">
            <h2 class="title">{{ data?.data[0]?.attributes?.name }}</h2>
            <div class="description" v-html="data?.data[0]?.attributes?.preview_text"></div>
            <a :href="data?.data[0]?.links?.self" class="button">Подробнее</a>
          </div>
          <div class="right">
            <img :src="apiURL + data?.data[0]?.attributes?.images?.preview" alt="" class="image">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="./sass/style.scss"></style>