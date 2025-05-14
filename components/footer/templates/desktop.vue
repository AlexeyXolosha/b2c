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
                <div class="number">
                  <h3 class="number">+7 727 339 70 10</h3>
                  <span>+7 727 339 70 10</span>
                </div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <span>Задать вопрос или оформить покупку.</span>
            </div>
            <div class="social">

            </div>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import footerApi from "~/services/footer/footer.api.js";




</script>

<style lang="scss" src="./sass/style.scss" scoped></style>