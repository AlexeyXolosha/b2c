<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__top">
        <a href="/" class="header__logo">
          <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.23057 4.97007L20.4472 4.97043V7.47221H5.23057C4.1559 7.47221 2.41883 8.89825 2.58207 10.1757L5.85633 35.3518C6.03318 36.709 7.21668 37.4979 8.57703 37.4979H37.43C38.7904 37.4979 39.9739 36.709 40.1507 35.3518L43.4173 10.1757C43.5805 8.89825 41.8512 7.47221 40.7765 7.47221H28.7423L28.1043 4.97007H40.7765C43.3203 4.97007 46.3367 7.67405 45.9694 10.4684L42.5993 35.6445C42.2593 38.2127 40.0283 40 37.43 40H8.57703C5.97876 40 3.74779 38.2127 3.40771 35.6445L0.0304843 10.4684C-0.33681 7.67405 2.68672 4.97007 5.23057 4.97007Z"
                fill="#0E6CDD"/>
            <path
                d="M19.765 7.4722V3.00423C19.765 0.382832 22.1578 -0.93452 24.1167 0.755417L31.7074 7.34218C33.2582 8.68615 33.163 10.1632 31.7482 11.3874L24.0759 18.054C22.1578 19.7173 19.7774 18.1072 19.7638 15.6455V13.7275H11.8179C10.0903 13.7142 9.95545 14.5943 10.1731 16.1245L12.6761 33.9288L10.1595 33.7292L7.73808 16.4439C7.31637 13.4366 8.51228 11.1855 11.8179 11.2254H22.2522V16.1911L30.3607 9.36478L22.253 2.56511V7.4722H19.765Z"
                fill="#0E6CDD"/>
          </svg>
          <div class="header__logo-name">
            <p>itl.b2c</p>
            <span>Готовый интернет-магазин</span>
          </div>
        </a>
        <div class="header__center">
          <button class="header__button">
            <i class="fa-regular fa-bars"></i>
            Каталог товаров
          </button>
          <form class="header__search">
            <input type="text" class="header__input" placeholder="Искать товар со скидками до 50% ">
          </form>
        </div>
        <div class="header__actions">
          <div class="header__login">
            <i class="fa-regular fa-circle-user"></i>
            <span>Войти</span>
          </div>
          <a href="" class="header__favourites">
            <i class="fa-regular fa-heart"></i>
            <span>Избранное</span>
          </a>
          <a href="" class="header__cart">
            <i class="fa-regular fa-cart-shopping"></i>
            <span>0 ₸</span>
          </a>
        </div>
      </div>
      <ul class="header__list">
        <li class="header__item" v-for="item in data.slice(0, 12)">
          <a :href="item.links.self" class="header__link" >
            {{item?.attributes?.name}}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  props: Object,
})

const data = props.props
</script>

<style lang="scss" scoped src="./sass/style.scss"></style>