<template>
  <div class="product-card">
    <a :href="data?.links?.self" class="product-card__preview">
      <img :src="apiURL + data?.attributes?.image" alt="" class="product-card__image">
    </a>
    <div class="product-card__detail">
      <div class="product-card__stars">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
          <path
              d="M12.5625 4.30246C12.8542 4.34783 13 4.46377 13 4.65028C13 4.76118 12.9323 4.88217 12.7969 5.01323L9.96094 7.68998L10.6328 11.4707C10.638 11.506 10.6406 11.5564 10.6406 11.6219C10.6406 11.7278 10.6133 11.8173 10.5586 11.8904C10.5039 11.9635 10.4245 12 10.3203 12C10.2214 12 10.1172 11.9698 10.0078 11.9093L6.5 10.1248L2.99219 11.9093C2.8776 11.9698 2.77344 12 2.67969 12C2.57031 12 2.48828 11.9635 2.43359 11.8904C2.37891 11.8173 2.35156 11.7278 2.35156 11.6219C2.35156 11.5917 2.35677 11.5413 2.36719 11.4707L3.03906 7.68998L0.195312 5.01323C0.0651042 4.87713 0 4.75614 0 4.65028C0 4.46377 0.145833 4.34783 0.4375 4.30246L4.35938 3.75047L6.11719 0.310019C6.21615 0.10334 6.34375 0 6.5 0C6.65625 0 6.78385 0.10334 6.88281 0.310019L8.64062 3.75047L12.5625 4.30246Z"
              fill="#FFCA00"/>
        </svg>
        <span></span>
      </div>
      <a :href="data?.links?.self" class="product-card__title">{{data?.attributes?.name}}</a>
      <div class="product-card__count" v-if="storeCount > 0">В наличии в <span> {{storeCount}} магазинах </span></div>
      <div class="product-card__count" v-else>Нет в наличии</div>
      <div class="product-card__price">
        <h4>{{data?.attributes?.product.price.valueFormatted}}</h4>
      </div>
    </div>
    <div class="product-card__footer">
      <button class="product-card__button">
        <i class="fa-regular fa-plus"></i>
        <span>В корзину</span>
      </button>
      <div class="product-card__icons">
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-layer-plus"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const apiURL = config.public.API_URL;

const { data } = defineProps(["data"]);

const storeCount = computed(() => {
  return Object.keys(data?.attributes?.product?.stores?.items ?? {}).length;
});
</script>

<style src="./sass/style.scss" lang="scss" scoped></style>