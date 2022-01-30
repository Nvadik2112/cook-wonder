<template>
  <section class="guide-content">
    <div class="guide-content__main row">
      <div v-if="!isMobile" class="guide-content__mask col-6">
        <div class="guide-content__round"></div>
      </div>
      <div v-if="!isMobile" class="guide-content__empty col-lg-1"></div>
      <div v-if="!isMobile" class="guide-content__left col-lg-3">
        <img class="guide-content__content" src="content.png" alt="content" draggable="false">
        <img class="guide-content__cover" src="cover.png" alt="cover" draggable="false">
      </div>
      <div v-if="!isMobile" class="guide-content__empty col-lg-3 col-xl-2"></div>
      <div class="guide-content__right col-12 col-lg-5 col-xl-6">
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
    <div class="guide-content__question">
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
export default {
  name: "Content",
  components: {SvgStore},
  props: {
    isMobile: Boolean
  },
  data() {
    return {
      contents: [
        {title: 'Роль и важность маринадов',
          text: 'Разберем какие маринады подходят к тому или иному виду мяса'},
        {title: 'Секреты приготовления идеального шашлыка',
          text: 'Разберем ошибки, совершаемые даже профессиональными поварами'},
        {title: 'схема разруба',
          text: 'Разберем виды вырезок, а также наиболее подходящие из них для шашлыка'},
        {title: 'Пошаговые рецепты шашлыков и маринадов',
          text: 'В руководство включены классические и авторские рецепты'},
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
    background-color: white;
    color: black;
  }

  &__main {
    padding: 0;
    margin: 0;
    height: 750px;
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 79%);
    z-index: 1;

    @media #{$mobile} {
      height: 245px;
      clip-path: initial;
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
    margin-top: 28px;
    grid-column-gap: 18px;
    grid-row-gap: 29px;
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
      height: 61px;
    }
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
      font-size: 9px;
      font-weight: 400;
      line-height: 10px;
    }

    &--title {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
}

</style>
