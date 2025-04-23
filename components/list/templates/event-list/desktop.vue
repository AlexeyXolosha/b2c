<template>
  <div class="section-main">
    <div class="container">
      <shared-title :data="data"></shared-title>
      <div class="event-list">
        <ul class="list">
          <li class="item" v-for="item in data?.data.slice(0, 4)">
            <cards-event-card-default :data="item"></cards-event-card-default>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import listApi from "~/services/list/list.api.js";

const {data} = await listApi.GET_LIST_EVENT()
</script>

<style lang="scss" scoped>
.event-list{

  .list{
    display: flex;
    gap: 24px;
    align-items: center;
  }
}
</style>