<template>
  <section class="guide-footer">
    <div class="guide-footer__main">
      <CatVision v-if="!isMobile"></CatVision>
      <div class="guide-footer__container">
        <h3 v-if="!isMobile" class="guide-footer__title">Приобрети руководство</h3>
        <div class="guide-footer__pictures">
          <img class="guide-footer__pic guide-footer__pic_1" src="footer/image_1.png" alt="content" draggable="false">
          <img class="guide-footer__pic guide-footer__pic_2" src="footer/image_2.png" alt="cover" draggable="false">
          <button class="guide-footer__button">
            <Shape class="guide-footer__shape">
              <h3>Купить</h3>
            </Shape>
          </button>
        </div>
      </div>
    </div>
    <footer class="guide-footer__footer">
      <Menu v-if="!isMobile" class="guide-footer__menu"></Menu>
      <div class="guide-footer__logo">
        <h3>{{!isMobile ? 'cook wonder' : 'COOKWONDER В СОЦСЕТЯХ'}}</h3>
        <div v-if="isMobile" class="guide-footer__contacts">
          <a href="/">
            <button class="guide-footer__contact">
              <img src="instagram.svg" alt="instagram" draggable="false">
            </button>
          </a>
          <a href="/">
            <button class="guide-footer__contact">
              <img src="whatsapp.svg" alt="instagram" draggable="false">
            </button>
          </a>
        </div>
        <a v-if="isMobile" class="guide-footer__email" href="mailto:cookwonder@gmail.com">cookwonder@gmail.com</a>
        <div v-if="isMobile" class="guide-footer__policy">
          <a href="/">Политика конфиденциальности</a>
          <a href="/">Договор оферты</a>
        </div>
        <div class="guide-footer-mark">
          <p>© 2022 - cookwonder</p>
          <p>Все права защищены</p>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import SvgStore from "../../SvgStore";
import Menu from "../../../components/Guide/UI/Menu"
import Shape from "../../../components/Guide/UI/Shape"
import CatVision from "@/components/Guide/UI/CatVision";
export default {
  name: "GuideFooter",
  components: {CatVision, SvgStore, Menu, Shape},
  props: {
    isMobile: Boolean
  }
}
</script>

<style lang="scss" scoped>

.guide-footer {
  margin-top: -200px;
  height: 850px;
  width: 100%;

  @media #{$mobile} {
    margin-top: 0;
    position: relative;
    background: white;
    height: fit-content;
  }

  &__main {
    position: relative;

    @media #{$mobile} {
      padding-top: 0;
      z-index: 2;
      transform: rotate(-12deg);
    }

    &:before {
      @media #{$mobile} {
        content: '';
        position: absolute;
        background-color: #2C2720;
        top: 0.5px;
        left: -30%;
        width: 150%;
        height: 320px;
      }
    }
  }

  &__container {
    height: 755px;
    width: 783px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    position: relative;

    @media #{$mobile} {
      width: 315px;
      height: 315px;
      overflow: hidden;
    }

    &:before {
      content: '';
      position: absolute;
      width: 783px;
      height: 783px;
      border-radius: 392px;
      background: #FED23F;
      z-index: 0;

      @media #{$mobile} {
        width: 304px;
        height: 304px;
        border-radius: 152px;
        transform: rotate(12deg);
        top: -30px;
        left: 10px;
        background: #FBB900;
      }
    }
  }

  &__title {
    margin-top: 150px;
    margin-left: -15%;
    z-index: 2;
    color: black;
    font: {
      size: 32px;
      weight: 700;
      family: 'Montserrat';
    }
    line-height: 28px;
    text-transform: uppercase;
    transform: rotate(-10deg);

    @media #{$mobile} {
      transform: rotate(-1deg);
      margin-top: 10px;
      font-size: 15px;
      line-height: 15px;
      margin-left: 30px;
      width: 128px;
      text-align: center;
    }
  }

  &__pictures {
    position: relative;
    margin-top: 80px;
    width: 638px;
    height: 611px;

    @media #{$mobile} {
      margin-top: 34px;
      transform: rotate(12deg);
      width: 242px;
      height: 206px;
    }
  }

  &__pic {
    position: absolute;
    width: 235px;
    height: 418px;

    &_1 {
      @media #{$desktop} {
        top: 0;
        width: 228px;
        height: 399px;
        left: 20%;
        transform: rotate(-10.61deg);
      }

      @media #{$mobile} {
        top: 12px;
        left: 27px;
        width: unset;
        height: 174px;
        transform: rotate(-20deg);
      }
    }

    &_2 {
      transform: rotate(20deg);

      @media #{$desktop} {
        width: 235px;
        height: 418px;
        top: 9px;
        left: 36%;
      }

      @media #{$mobile} {
        width: unset;
        height: 182px;
        top: 12px;
        right: 27px;
      }
    }
  }

  &__button {
    position: absolute;
    width: fit-content;
    height: fit-content;
    background: transparent;
    right: 22px;
    bottom: 176px;

    @media #{$mobile} {
      width: 88px;
      height: 63px;
      right: -12px;
      top: 71px
    }
  }

  &__shape {
    width: 228px;
    height: 163px;

    @media #{$mobile} {
      width: 88px;
      height: 63px;
      background-color: #8391C8;
    }

    & h3 {
      margin-top: 25px;

      @media #{$mobile} {
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        color: #2C2720;
        margin-top: 12px;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }

  &__footer {
    width: 100%;
    display: flex;
    position: relative;

    @media #{$desktop} {
      padding-top: 34px;
      height: 80px;
      align-items: flex-end;
      justify-content: space-between;
    }

    @media #{$mobile} {
      margin-top: -60px;
      z-index: 2;
      background-color: white;
      justify-content: center;
    }
  }

  &__menu {
    color: white!important;
  }

  &__logo {
    color: white;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    height: 100%;
    text-align: center;

    @media #{$desktop} {
      justify-content: space-between;
    }

    @media #{$mobile} {
      align-items: center;
      color: #0D0000;
      padding: 7.5px 0 11px 0;
      font-family: Montserrat, sans-serif;
    }

    & h3 {
      font: {
        weight: 400;
        size: 16px;
      }
      line-height: 19px;
      text-transform: uppercase;

      @media #{$mobile} {
        font: {
          weight: 700;
          size: 14px;
        }
      }
    }
  }

  &__contacts {
    margin: 28px 0;
    width: 176px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 42px;
  }

  &__contact {
    min-width: 42px;
    max-width: 42px;
    min-height: 42px;
    max-height: 42px;
    border-radius: 21px;
    background-color: #2C2720;
    cursor: pointer;

    & img {
      width: 24px;
      height: 24px;
    }
  }

  &__email {
    font-size: 14px;
    line-height: 19px;
    font-weight: 700;
    text-decoration: none;
    color: #2C2720;
  }

  &__policy {
    margin-top: 14px;
    margin-bottom: 11px;
    width: fit-content;
    height: 27px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;

    & a {
      font-size: 8px;
      line-height: 9px;
      color: #0D0000;
      text-decoration: underline;
    }
  }

  &-mark {
    display: flex;
    justify-content: space-between;
    width: 180px;
    position: relative;
    font-family: 'Roboto', sans-serif;


    &:after {
      content: '';
      position: absolute;
      left: 49%;
      height: 100%;
      width: 1px;
      background-color: white;

      @media #{$mobile} {
        background-color: #0D0000;
      }
    }

    & p {
      font: {
        weight: 300;
        size: 8px;
      }
      line-height: 9px;

      @media #{$mobile} {
        font-weight: 400;
        line-height: 14px;
      }
    }
  }
}
</style>
