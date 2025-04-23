<template>
  <a href="data?.attributes.detail_page" class="blog-card-default">
    <div class="top">
      <img :src="apiURL + data?.attributes?.image" alt="" class="image">
    </div>
    <div class="bottom">
      <h3 class="title">{{data?.attributes?.title}}</h3>
      <p class="detail">
        <span>{{data?.attributes?.section_name}} {{data?.attirubtes?.date_active_to}}</span>
      </p>
    </div>
  </a>
</template>

<script setup>
const config = useRuntimeConfig()
const apiURL = config.public.API_URL;

const {data} = defineProps(["data"]);
</script>

<style lang="scss" scoped>

  .blog-card-default {

    flex-direction: column;
    text-decoration: none;

    .top{
      margin-bottom: 24px;
    }

    .image{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: $border-radius;
    }

    .title{
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      color: $black;
      margin-bottom: 10px;
    }

    .detail{
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      color: $black-80;
    }
  }

</style>