<template>
  <header class="guide-header row">
    <div class="guide-header__logo">
      <img src="logo.svg" alt="cat" style="width: 38px; height: 34px; margin-right: 4px; margin-top: -2px">
      <div class="guide-header__logo-text">cook <span>wonder</span></div>
    </div>
    <Menu class="guide-header__menu"></Menu>
    <div v-if="!isMobile" class="guide-header__mask col-5">
      <div class="guide-header__round"></div>
    </div>
    <button class="guide-header__button">
      <Shape class="guide-header__button-shape">
        <h3 class="guide-header__personal-text">Меню</h3>
      </Shape>
    </button>
    <CatFace v-if="isMobile"></CatFace>
    <Paw></Paw>
    <div class="guide-header__container">
      <span class="guide-header__title guide-header__title--upper">
        {{!isMobile ? 'Кулинарное' : ''}} руководство
      </span>
      <div class="guide-header__container-lower">
        <div class="guide-header__slang">Это мощно. Это сочно. Это cookwonder</div>
        <span class="guide-header__title guide-header__title--pre">про</span>
        <span class="guide-header__title guide-header__title--main">шашлыки</span>
      </div>
      <div v-if="isMobile" class="guide-header__mobile-container">
<!--        <SvgStore class="guide-header__vector guide-header__vector&#45;&#45;mobile" name="vector"></SvgStore>-->
      </div>
    </div>
    <div v-if="isMobile" class="guide-header__mobile-pictures">
      <div class="guide-header__content-mobile">
        <img src="content.png" alt="content-mobile" draggable="false">
      </div>
      <div class="guide-header__cover-mobile">
        <img src="cover.png" alt="cover-mobile" draggable="false">
      </div>
      <div class="guide-header__iphone-mobile">
        <img src="phone.png" alt="iphone-mobile" draggable="false">
      </div>
      <button class="guide-header__button guide-header__button--buy">
        <Shape class="guide-header__button-shape guide-header__button-shape--buy">
          <h3 class="guide-header__buy">Купить</h3>
        </Shape>
      </button>
      <div class="guide-header__talk">
        о чем поговорим?
      </div>
    </div>
    <div v-if="!isMobile" class="guide-header__phone">
      <div class="guide-header__iphone">
        <img src="phone.png" alt="iphone" draggable="false">
      </div>
    </div>
    <button v-if="!isMobile" class="guide-header__button guide-header__button--buy">
      <Shape class="guide-header__button-shape guide-header__button-shape--buy">
        <h3 class="guide-header__buy">Купить</h3>
      </Shape>
    </button>
    <Cat v-if="!isMobile"></Cat>
    <Phrase v-if="!isMobile"></Phrase>
    <SvgStore v-if="!isMobile" class="guide-header__vector" name="vector"></SvgStore>
  </header>
</template>

<script>
import SvgStore from "../../SvgStore";
import Menu from "../../../components/Guide/UI/Menu"
import Shape from "../../../components/Guide/UI/Shape"
import Cat from "../../../components/Guide/UI/Cat"
import Paw from "../../../components/Guide/UI/Paw"
import Phrase from "@/components/Guide/UI/Phrase";
import CatFace from "@/components/Guide/UI/CatFace";
export default {
  name: "GuideHeader",
  components: {CatFace, Phrase, SvgStore, Menu, Shape, Cat, Paw},
  props: {
    isMobile: Boolean
  }
}
</script>

<style lang="scss" scoped>

.guide-header {
  width: 100%;
  position: relative;
  height: 750px;
  background-color: #FFFFFF;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 578px, 0% 750px);
  z-index: 2;
  user-select: none;

  @media #{$mobile} {
    display: flex;
    align-items: flex-end;
    height: 700px;
    justify-content: center;
    clip-path: initial;
  }

  &__phrase {
    font: {
      size: 15px;
      weight: 500;
    }
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    width: 153px;
    transform: rotate(21.83deg);
    top: 630px;
    left: -10px;
    z-index: 2;

    &--mobile {
      left: -60px;
      top: 170px;
      display: block;
      bottom: 10px;
      font-size: 10px;
      line-height: 12px;
      width: 98px;
      height: 35px;
      transform: rotate(-6deg);
    }
  }

  &__vector {
    position: absolute;
    width: 43px;
    height: 46px;
    top: 670px;
    left: 2px;
    z-index: 2;

    &--mobile {
      display: block;
      bottom: 20px;
      transform: matrix(1, -0.01, -0.01, -1, 0, 0);
      left: -50px;
      top: 120px;
    }
  }

  &__logo {
    position: absolute;
    display: flex;
    top: 13px;
    left: 32px;
    user-select: none;

    @media #{$mobile} {
      width: 155px;
      height: 48px;
      top: 16px;
      left: 15px
    }

    &-text {
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 500;
      line-height: 18px;
      color: black;
      white-space: pre-wrap;
      width: 91px;

      & span {
        color: #FBB900;
      }
    }
  }

  &__menu {
    position: absolute;
    top: 22px;
    left: 175px;
    color: black
  }

  &__mask {
    position: absolute;
    right: 0;
    top: 0;
    height: 572px;
  }

  &__round {
    position: absolute;
    right: -265px;
    top: -146px;
    width: 807px;
    height: 807px;
    background-color: #FBB900;
    border-radius: 404px;
  }

  &__button {
    position: absolute;
    top: 11px;
    right: 16px;
    background: transparent;
    width: 76px;
    height: 46px;
    cursor: pointer;
    z-index: 3;

    @media #{$mobile} {
      width: 69px;
      height: 41px;
      top: 9px;
      right: 15px;
    }

    &-shape {
      width: 76px;
      height: 46px;

      @media #{$mobile} {
        width: 69px;
        height: 41px;
      }

      &--buy {
        width: 130px;
        height: 93px;

        @media #{$mobile} {
          width: inherit;
          height: inherit;
          background-color: #8391C8;
        }
      }
    }

    &--buy {
      top: 405px;
      right: 65px;
      width: 130px;
      height: 93px;

      @media #{$mobile} {
        width: 75px;
        height: 53px;
        top: 175px;
        right: 41px;
      }

      & h3 {
        @media #{$mobile} {
          font-family: Montserrat,sans-serif;
          font-weight: 700;
          font-size: 13px;
          line-height: 15px;
          margin-top: 10px;
          color: black;
        }
      }

      &-shape {
        width: 76px;
        height: 46px;

        @media #{$mobile} {
          width: 69px;
          height: 41px;
        }
      }
    }
  }

  &__personal-text {
    font-size: 10px;
    line-height: 12px;
    margin-top: 8px;
    margin-left: 1px;

    @media #{$mobile} {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
    }
  }
  &__container {
    position: absolute;
    width: 751px;
    height: 103px;
    top: 200px;
    left: 55px;
    transform: rotate(-15deg);
    user-select: text;

    @media #{$mobile} {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      top: 96px;
      left: 22px;
      transform: rotate(-9deg);
    }

    &-lower {
      display: flex;
      align-items: center;

      @media #{$mobile} {
        flex-direction: row;
        min-width: 243px;
        max-width: 243px;
        flex-wrap: wrap;

      }
    }
  }

  &__title {
    margin-bottom: 0;
    font: {
      family: 'Montserrat', sans-serif;
      size: 45px;
      weight: 700;
    }
    line-height: 55px;
    letter-spacing: 0.005em;
    text-transform: uppercase;

    @media #{$mobile} {
      font-size: 30px;
      line-height: 33px;
    }

    &--upper {
      @media #{$mobile} {
        min-width: 243px;
        max-width: 243px;
      }
    }

    &--pre {
      font-size: 17px;
      line-height: 21px;
      transform: rotate(90deg);

      @media #{$mobile} {
        //width: 9px;
        transform: rotate(-90deg);
        margin-left: 9px;
        font-size: 9px;
        line-height: 11px !important;
      }
    }

    &--main {
      font-size: 55px;
      line-height: 45px;

      @media #{$mobile} {
        font-size: 30px;
        line-height: 37px;
      }
    }
  }

  &__subtitle {
    margin-top: 12px;
    font: {
      weight: 300;
      size: 14px;
    }
    line-height: 16px;
  }

  &__slang {
    background-color: #020000;
    color: #FFFFFF;
    width: 347px;
    border-radius: 7px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    line-height: 18px;
    margin-top: 5px;
    font: {
      weight: 500;
      size: 15px
    }

    @media #{$mobile} {
      order: 1;
      width: 243px;
      height: 33px;
      font-size: 10px;
      font-family: Montserrat,sans-serif;
      line-height: 12px;
      border-radius: 2px;
      background-color: rgba(2, 0, 0, 0.8);
      text-align: center;
      padding: 0 40px;
    }
  }

  &__mobile-container {

    @media #{$mobile} {
      margin-top: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 330px;
      position: relative;
    }

    &:before {
      @media #{$mobile} {
        position: absolute;
        content: '';
        background-color: #FBB900;
        left: -30%;
        width: 140%;
        height: 330px;
      }

    }
  }

  &__mobile-pictures {
    width: 360px;
    height: 390px;
    position: absolute;
    top: 250px
  }

  &__content-mobile {
    object-fit: cover;
    position: absolute;
    top: 100px;
    left: 35px;
    width: 149px;
    height: 204px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 94px;
      height: 172px;
      transform: rotate(-19deg);
    }
  }

  &__cover-mobile {
    object-fit: cover;
    position: absolute;
    top: 88px;
    right: 135px;
    width: 108px;
    height: 177px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 85px;
      height: 161px;
      transform: rotate(6.21deg);
    }
  }

  &__iphone-mobile {
    object-fit: cover;
    position: absolute;
    top: 77px;
    right: 30px;
    width: 183px;
    height: 231px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      z-index: 2;
      width: 120px;
      height: 218px;
      transform: rotate(26.21deg);
    }
  }

  &__phone {
    position: absolute;
    top: 100px;
    right: 55px;
    width: 291px;
    height: 516px;
    transform: rotate(26.21deg);
  }

  &__iphone {
    position: relative;
    width: inherit;
    height: inherit;

    @media #{$mobile} {
      display: none;
    }

    & img {
      position: absolute;
      right: 29px;
      bottom: 0;
      width: inherit;
      height: inherit;
      z-index: 0
    }
  }

  &__talk {
    position: absolute;
    bottom: -43px;
    left: calc(50% - 77px);
    background-color: #FBB900;
    width: 154px;
    height: 154px;
    border-radius: 77px;
    transform: rotate(-9deg);
    font: {
      family: Montserrat, sans-serif;
      weight: 700;
      size: 17px;
    }
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF
  }

  &__buy {
    font-size: 21px;
    line-height: 25px;
    margin-top: 18px;
    color: #fff9f9;
  }
}

</style>
