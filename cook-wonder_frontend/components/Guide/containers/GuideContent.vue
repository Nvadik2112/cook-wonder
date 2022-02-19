<template>
  <section class="guide-content">
    <div v-if="!isMobile" class="guide-content__main row">
      <div class="guide-content__mask col-6">
        <div class="guide-content__round"></div>
      </div>
      <div class="guide-content__empty col-1"></div>
      <div class="guide-content__left col-3">
        <img class="guide-content__content" src="content.png" alt="content" draggable="false">
        <img class="guide-content__cover" src="cover.png" alt="cover" draggable="false">
      </div>
      <div class="guide-content__empty col-2"></div>
      <div class="guide-content__right col-6">
        <h3 class="guide-content__title">о чем руководство</h3>
        <div class="content-list">
          <div class="content-list__item" v-for="item in contents">
            <h4 class="content-list__text content-list__text--title">
              {{item.title}}
            </h4>
            <p class="content-list__text">{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="guide-content__main">
      <div class="content-list">
        <div class="content-list__item" v-for="item in contents">
          <div class="content-list__pic">
            <img :style="{width: item.width, height: item.height}" :src="item.url" alt="pic" draggable="false">
          </div>
          <h4 class="content-list__text content-list__text--title">
            {{item.title}}
          </h4>
          <p class="content-list__text">{{item.text}}</p>
        </div>
      </div>
    </div>
    <SvgStore v-if="isMobile" class="guide-content__vector" name="vector-mobile"></SvgStore>
    <Phrase v-if="isMobile"></Phrase>
    <Cat v-if="isMobile"></Cat>
    <div v-if="!isMobile" class="guide-content__question">
      <p>что внутри</p><span>?</span>
    </div>
    <div v-if="!isMobile" class="guide-content__footer">
      <div class="guide-content__footer-title">можно узнать уже сегодня</div>
      <!--      <div class="guide-content__comma">“</div>-->
    </div>
  </section>
</template>

<script>
import SvgStore from "../../SvgStore";
import Cat from "../../../components/Guide/UI/Cat"
import Phrase from "../../../components/Guide/UI/Phrase"
export default {
  name: "Content",
  components: {SvgStore, Cat, Phrase},
  props: {
    isMobile: Boolean
  },
  data() {
    return {
      contents: [
        {title: 'Роль и важность маринадов',
          text: 'Правильный маринад может спасти даже старое мясо, сделав его нежным и соным',
          url: 'content/content_1.svg',
          width: '55px',
          height: '55px'},
        {title: 'Ошибаются даже лучшие',
          text: 'Важно знать ошибки из кулинарной практики, чтобы не совершать их дома  ',
          url: 'content/content_2.svg',
          width: '55px',
          height: '55px',
        },
        {title: 'вечная классика',
          text: 'Проверенные годами и опытом рецептуры',
          url: 'content/content_3.svg',
          width: '64px',
          height: '50px',
          },
        {title: 'схемы разруба мяса',
          text: 'Лучшие виды вырезок для шашлыка',
          url: 'content/content_4.svg',
          width: '70px',
          height: '55px'},
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.guide-content {
  padding: 0;
  width: 100%;
  color: white;
  margin-top: -176px;
  position: relative;

  @media #{$mobile} {
    margin-top: 0;
    padding-bottom: 50px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__main {
    padding: 0;
    margin: 0;
    width: 100%;

    @media #{$desktop} {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 79%);
      z-index: 1;
      height: 750px;
    }

    @media #{$mobile} {
      height: fit-content;
      padding: 0 40px;
    }
  }

  &__left {
    margin-top: 140px;
    position: relative;
    height: fit-content;
  }

  &__mask {
    position: absolute;
    height: 572px;
  }

  &__round {
    position: absolute;
    width: 807px;
    height: 807px;
    border-radius: 405px;
    background-color: #FFFFFF;
    top: 0;
    left: -252px;
  }

  &__question {
    position: absolute;
    width: 185px;
    height: 185px;
    border-radius: 93px;
    background-color: #FBB900;
    top: 520px;
    left: 370px;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    text-transform: uppercase;
    transform: rotate(7.45deg);
    z-index: 2;

    @media #{$mobile} {
      top: 255px;
      left: 215px;
      width: 76px;
      height: 76px;
      padding-top: 35px;
      transform: rotate(15deg);
    }

    & p {
      font: {
        family: 'Montserrat', sans-serif;
        weight: 700;
        size: 20px;
      }
      line-height: 24px;

      @media #{$mobile} {
        font-size: 10px;
        line-height: 12px;
        color: white;
        z-index: 3;
      }
    }

    & span {
      position: absolute;
      top: -5px;
      right: -50px;
      font: {
        family: 'Ruda', sans-serif;
        size: 199px;
        weight: 700
      }
      transform: rotate(20deg);
      line-height: 252px;

      @media #{$mobile} {
        font-size: 72px;
        line-height: 88px;
        right: 2px;
        transform: rotate(2deg);
      }
    }
  }

  &__cover {
    position: absolute;
    width: 172px;
    height: 310px;
    transform: matrix(0.99, 0.11, -0.1, 0.99, 0, 0);
    top: 64px;
    right: -15px;
  }

  &__content {
    position: absolute;
    width: 185px;
    height: 332px;
    transform: matrix(0.95, -0.32, 0.31, 0.95, 0, 0);
    top: 109px;
    left: 15px;
  }

  &__right {
    margin-top: 140px;
    height: fit-content;
    padding: 0 0 0 30px;

    @media #{$mobile} {
      margin-top: 27px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  &__title {
    font: {
      weight: 700;
      size: 30px
    };
    text-transform: uppercase;
    line-height: 35px;

    @media #{$mobile} {
      font-size: 18px;
      line-height: 21px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }

  &__footer {
    box-sizing: content-box;
    padding-top: 0;
    margin-top: -110px;
    width: 100%;
    height: 193px;
    position: relative;
    overflow: hidden;
  }

  &__footer-title {
    width: calc(100% + 13px);
    position: absolute;
    display: flex;
    justify-content: flex-end;
    font: {
      size: 25px;
      weight: 600;
    }
    text-transform: uppercase;
    line-height: 50px;
    top: 30px;
    left: 0;
    color: white;
    padding-right: 110px;
    padding-bottom: 10px;
    transform: rotate(9.5deg);
    border-top: 2px solid #FED240;
  }

  &__vector {
    position: absolute;
    width: 32px;
    height: 32px;
    bottom: 240px;
    right: 22px;
    z-index: 2;
  }

  &__comma {
    position: absolute;
    top: -20px;
    left: 330px;
    color: white;
    font: {
      weight: 700;
      size: 239px;
      family: 'Ruda', sans-serif;
    }
    line-height: 303px;
    height: 151px;
    width: 167px;
    transform: rotate(-20.44deg);
    z-index: 5;
  }
}
.content-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto 1fr;
  grid-column-gap: 33px;
  grid-row-gap: 146px;
  margin-top: 62px;

  @media #{$mobile} {
    display: flex;
    flex-direction: column;
    grid-row-gap: 40px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 96px;
    width: 100%;

    @media #{$mobile} {
      align-items: center;
      height: fit-content;
    }
  }

  &__pic {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: #2C2720;
    margin-bottom: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    font: {
      family: 'Montserrat', sans-serif;
      size: 14px;
      weight: 300;
    }
    line-height: 17px;

    @media #{$mobile} {
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
    }

    &--title {
      text-transform: uppercase;
      font-weight: 700;

      @media #{$mobile} {
        margin-bottom: 15px;
      }
    }
  }
}

</style>
