<template>
  <header class="main-header">
    <svg-store name="main-logo" class="main-header__logo"></svg-store>
    <svg-store name="main-header-mask" class="main-header__mask"></svg-store>
      <div class="main-header__container col-7">
        <h3 class="main-header__subtitle">Ваш кулинарный гид</h3>
        <h3 class="main-header__title">РОмАН ВЕТРОВ</h3>
        <div class="achievements">

        </div>
      </div>
  </header>
</template>

<script>
import svgStore from '../../SvgStore'
export default {
  name: "Header",
  components: [svgStore],
  data() {
    return {
      achievements: [
        {svg: 'serving-dish', title: 'Накормил более 1 000 000 петербуржцев'},
        {svg: 'music-note', title: 'Если бы еда была музыкой, то я был бы Бетховеном'},
        {svg: 'cooking', title: 'Опыт работы более 13 лет'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.main-header {
  position: relative;
  height: 488px;
  width: 100%;

  &__logo {
    position: absolute;
    top: 2px;
    left: 15px;
    width: 92px;
    height: 19px;
  }

  &__mask {
    position: absolute;
    right: 15px;
    top: 0;
    width: 800px;
    height: 487px;
  }

  &__container {
    margin-top: 184px;
  }

  &__subtitle {
    font: {
      weight: 300;
      size: 27px;
    }
    line-height: 32px;
    color: #FCB44F
  }

  &__title {
    margin-top: 35px;
    font: {
      size: 40px;
      weight: 700;
    }
    line-height: 47px;
    text-transform: uppercase;
    color: #FFFFFF
  }
}

.achievements {
  width: 569px;
  height: 123px;
}

</style>
