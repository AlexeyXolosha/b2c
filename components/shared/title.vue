<template>
  <div class="title-section">
    <div class="title">{{ data?.meta?.title }}</div>
    <a href="">
      <i class="fa-regular fa-angle-right"></i>
    </a>
  </div>
</template>

<script setup>
const {data} = defineProps(["data"]);
</script>

<style lang="scss" scoped>
.title-section{
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-bottom: 40px;

  .title{
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    color: $black;
  }

  a{
    text-decoration: none;
    color: $black;
  }
  i{
    background-color: rgba($blue, 0.05);
    padding: 9px 6px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    cursor: pointer;

  }
}
</style>