<template>
  <footer class="footer">
    <div class="container">

      <div class="top">
        <div class="left">
          <h3 class="title">Подпишитесь на нашу рассылку</h3>
          <p>Вы первыми будите узнавать о наших акциях и эксклюзивных предложениях.</p>
        </div>
        <div class="right">
          <input type="email" placeholder="Укажите ваш email">
          <button class="button">Подписаться</button>
        </div>
      </div>

      <div class="center">
        <div class="inner">
          <div class="left">
            <div class="number-accordion">
              <div class="content">
                <div class="number" v-for="item in mobile.data" :key="item.id">
                  <h3 class="number">{{ item.attributes.name }}</h3>
                </div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <span>Задать вопрос или оформить покупку.</span>
            </div>
            <div class="footer__social">
              <ul class="list">
                <li class="item" v-for="item in social.data" :key="item.id">
                  <a :href="item.links.self" class="link" target="_blank">
                    <span class="visually-hidden">{{item.attributes.name}}</span>
                    <i :class="$iconClass(item.attributes.name)"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="stores">
              <h2 class="Магазины"></h2>
              <ul class="stores_list">
                <li class="stores_item"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>



    </div>
  </footer>
</template>

<script setup>
import footerApi from "~/services/footer/footer.api.js";

const {data: stores} = await footerApi.GET_STORES();
const {data: menu} = await footerApi.GET_FOOTER_MENU();
const {data: info} = await footerApi.GET_FOOTER_INFO();
const {data: social} = await footerApi.GET_FOOTER_SOCIAL();
const {data: mobile} = await footerApi.GET_FOOTER_TELEPHONE()

</script>

<style lang="scss" src="./sass/style.scss" scoped></style>