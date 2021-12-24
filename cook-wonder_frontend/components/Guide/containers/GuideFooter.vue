<template>
<section class="guide-footer">
 <div class="guide-footer__main"></div>
  <footer class="guide-footer__footer">
    <Menu class="guide-footer__menu"></Menu>
    <div class="guide-footer__logo">
      <h3>cook wonder</h3>
      <div class="guide-footer-mark">
        <p>© 2021 - cookwonder</p>
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
export default {
  name: "GuideFooter",
  components: {SvgStore, Menu, Shape},

}
</script>

<style lang="scss" scoped>

.guide-footer {
  margin-top: -200px;
  height: 850px;
  width: 100%;
  position: relative;

  &__main {
    height: 755px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: hidden;

    &:before {
      content: '';
      width: 783px;
      height: 783px;
      border-radius: 392px;
      background-color: #FED23F;
      z-index: 0;
    }
  }
  &__footer {
    height: 80px;
    padding-top: 34px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__menu {
    color: white!important;
  }

  &__logo {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    height: 100%;

    & h3 {
      font: {
        weight: 400;
        size: 16px;
      }
      line-height: 19px;
      text-transform: uppercase;
    }
  }

  &-mark {
    display: flex;
    justify-content: space-between;
    width: 180px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      left: 49%;
      height: 100%;
      width: 1px;
      background-color: white;
    }

    & p {
      font: {
        weight: 300;
        size: 8px;
      }
      line-height: 9px;
    }
  }

}
</style>
