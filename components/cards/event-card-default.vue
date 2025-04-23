<template>
  <a :href="data?.attributes.detail_page" class="event-card">
    <div class="event-card__inner">
      <img :src="apiURL + data?.attributes.image" :alt="data?.attributes.title" class="event-card__image">
      <div class="event-card__detail">
        <span class="discount" v-if="data?.attributes.discount">{{ data?.attributes.discount }}</span>
        <span class="active">{{ data?.attributes.active_period }}</span>
      </div>
    </div>
    <div class="event-card__external">
      <h3 class="title">{{ data?.attributes.title }}</h3>
    </div>
  </a>
</template>

<script setup>
const config = useRuntimeConfig()
const apiURL = config.public.API_URL;

const {data} = defineProps(["data"]);

</script>

<style lang="scss" scoped>
.event-card {
  display: flex;
  flex-direction: column;

  text-decoration: none;

  &__inner {
    position: relative;

    margin-bottom: 24px;
  }

  &__detail {
    position: absolute;
    bottom: 32px;
    left: 32px;

    .discount {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      color: $black;

      background: $yellow-dark;
      border-radius: 4px;

      padding: 0 8px;
      height: 24px;

      margin-right: 8px;
      text-decoration: none;

    }

    .active {
      background: $white;
      border-radius: 4px;

      padding: 0 10px;
      height: 24px;

      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      color: $black;
      text-decoration: none;

    }

  }

  &__image {
    max-width: 408px;
    height: 280px;

    width: 100%;
    object-fit: cover;

    border-radius: 6px;
  }

  &__external {

    .title {
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      color: #333;
      text-decoration: none;
    }
  }
}
</style>