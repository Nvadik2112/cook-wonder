<template>
  <section class="guide-content">
    <div class="guide-content__main row">
      <div class="guide-content__mask col-6">
        <div class="guide-content__round"></div>
      </div>
      <div class="col-1"></div>
      <div class="guide-content__left col-3">
        <img class="guide-content__content" src="content.png" alt="content" draggable="false">
        <img class="guide-content__cover" src="cover.png" alt="cover" draggable="false">
      </div>
      <div class="col-2"></div>
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
    <div class="guide-content__question">что внутри</div>
    <div class="guide-content__footer">
      <div class="guide-content__footer-title">можно узнать уже сегодня</div>
      <div class="guide-content__comma">“</div>
    </div>
  </section>
</template>

<script>
import SvgStore from "../../SvgStore";
export default {
  name: "Content",
  components: {SvgStore},
  data() {
    return {
      contents: [
        {title: 'Роль и важность маринадов', text: 'Разберем какие маринады подходят к тому или иному виду мяса'},
        {title: 'Секреты приготовления идеального шашлыка', text: 'Разберем ошибки, совершаемые даже профессиональными поварами'},
        {title: 'схема разруба', text: 'Разберем виды вырезок, а также наиболее подходящие из них для шашлыка'},
        {title: 'Пошаговые рецепты шашлыков и маринадов', text: 'В руководство включены классические и авторские рецепты'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.guide-content {
  padding: 0;
  width: 100%;
  color: white;
  margin-top: -176px;
  position: relative;

  &__main {
    padding: 0;
    margin: 0;
    height: 740px;
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 82%);
    z-index: 1;
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
    top: 550px;
    left: 370px;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    align-items: center;
    flex-wrap: wrap;
    font: {
      family: 'Montserrat', sans-serif;
      weight: 700;
      size: 20px;
    }
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    transform: rotate(7.45deg);
    z-index: 2;

    & span {
      font: {
        size: 50px
      }
      line-height: 61px;
    }
  }

  &__cover {
    position: absolute;
    width: 172px;
    height: 310px;
    transform: matrix(0.99, 0.11, -0.1, 0.99, 0, 0);
    top: 74px;
    right: -15px;

  }

  &__content {
    position: absolute;
    width: 185px;
    height: 332px;
    transform: matrix(0.95, -0.32, 0.31, 0.95, 0, 0);
    top: 119px;
    left: 15px;
  }

  &__right {
    margin-top: 140px;
    height: fit-content;
    padding: 0 0 0 30px;
  }

  &__title {
    font: {
      weight: 700;
      size: 30px
    };
    text-transform: uppercase;
    line-height: 35px;
  }

  &__footer {
    box-sizing: content-box;
    padding-top: 0;
    margin-top: -100px;
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
      weight: 700;
    }
    text-transform: uppercase;
    line-height: 28px;
    top: 20px;
    left: -60px;
    color: white;
    padding-right: 60px;
    padding-bottom: 10px;
    transform: rotate(9.5deg)
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

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 96px;
    width: 100%;
  }

  &__text {
    font: {
      family: 'Montserrat', sans-serif;
      size: 14px;
      weight: 300;
    }
    line-height: 17px;


    &--title {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
}

</style>
