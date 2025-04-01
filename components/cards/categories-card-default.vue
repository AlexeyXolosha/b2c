<template>
  <a :href="data?.links.self">
    <div class="categories-card__inner">
      <img :src="apiURL + data?.attributes.images.preview" alt="" class="categories-card__image">
    </div>
    <p class="categories-card__name">{{ data?.attributes.name }}</p>
  </a>
</template>

<script setup>
const config = useRuntimeConfig()
const apiURL = config.public.API_URL;

const {data} = defineProps(["data"]);
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
}

.categories-card {

  &__inner {
    background-color: rgba($blue, 0.05);
    padding: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }

  &__image {
    width: 100%;
    height: 100%;
    max-width: 120px;
    max-height: 120px;
    object-fit: contain;
  }

  &__name {
    text-align: center;
    text-decoration: none;
    color: $black;
  }

}
</style>