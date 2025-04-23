<template>
  <div class="section-main">
    <div class="container">
      <shared-title :data="data"></shared-title>
      <div class="blog-list">
        <ul class="list">
          <li class="item" v-for="item in data?.data">
            <cards-blog-card-default :data="item"></cards-blog-card-default>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup>
import listApi from "~/services/list/list.api.js";

const {data} = await listApi.GET_LIST_BLOG();
</script>

<style lang="scss" scoped>

.blog-list{

  .list{
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .item{
    max-width: 264px;
    height: 192px;
  }
}


</style>