<template>
  <NuxtLayout name="main">
    <slider-component namespace="slider" group="main"></slider-component>
    <list-component namespace="list" group="hit-list"></list-component>
    <list-component namespace="list" group="popular-categories"></list-component>
    <list-component namespace="list" group="banner-with-list"></list-component>
    <list-component namespace="list" group="popular-brands"></list-component>
    <list-component namespace="list" group="hit-stock"></list-component>
    <banners-banner-main-page></banners-banner-main-page>
    <list-component namespace="list" group="event-list"></list-component>
    <list-component namespace="list" group="recommended-list"></list-component>
    <list-component namespace="list" group="blog-list"></list-component>
    <company-components namespace="company"></company-components>
  </NuxtLayout>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>