<template>
  <div class="advantages">
    <ul class="advantages__list" >
      <li class="advantages__item"v-for="item in data" :key="item.id">
        <img :src="apiURL + item.attributes.image" alt="">
        <p v-html="item?.attributes?.text"></p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const apiURL = config.public.API_URL;

const props = defineProps({
  props: Array,
})

const data = props.props
</script>

<style src="./sass/style.scss" lang="scss" scoped></style>