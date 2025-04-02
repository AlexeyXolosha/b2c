<template>
  <div v-if="data" class="banner">
    <img :src="apiURL + data.attributes?.images?.preview" alt="" class="image">
    <div class="detail">
      <div class="top">
        <span>{{ data.attributes?.name }}</span>
        <h3 class="title" v-html="data?.attributes?.text?.text || ''"></h3>
      </div>
      <div class="bottom">
        <ul class="button-list">
          <li class="button-item" v-for="(button, index) in data?.attributes?.buttons"
              :key="index">
            <a :href="button.link" v-if="button && button.text" class="link">{{ button?.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const apiURL = config.public.API_URL;

const {data} = defineProps(["data"]);
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 4px;
    transition-duration: 0.3s;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .detail {
    position: absolute;
    bottom: 0;
    z-index: 112;
    padding: 32px 32px 36px;

    .top {
      margin-bottom: 20px;
    }

    span {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #fff;
    }

    .title {
      font-size: 24px;
      line-height: 32px;
      font-weight: 400;
      color: $yellow-dark;
    }

    .bottom {
      .button-list {
        display: inline-flex;
        align-items: center;
        gap: 16px;

        .link {
          text-decoration: none;
          color: $white;

          border: 1px solid $white;
          border-radius: 4px;
          padding: 4px 16px;
          transition-duration: 0.2s;

          &:hover {
            background-color: $white;
            color: $black;
          }
        }
      }
    }
  }
}
</style>