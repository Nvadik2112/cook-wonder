<template>
  <section class="carousel">

    <div class="carousel__container slider">
      <div class="slider__pic" :style="{backgroundImage: `url(${list[prevKey].url})`}"></div>
      <button @click="clickPrev" class="slider__arrow slider__arrow--prev">
        <SvgStore name="arrow" style="width: 9px; height: 24px"></SvgStore>
      </button>
      <div class="slider__pic" :style="{backgroundImage: `url(${list[key].url})`}"></div>
      <button @click="clickNext" class="slider__arrow slider__arrow--next">
        <SvgStore name="arrow" style="width: 9px; height: 24px; transform: rotate(180deg)"></SvgStore>
      </button>
      <div class="slider__pic" :style="{backgroundImage: `url(${list[nextKey].url})`}"></div>
    </div>
  </section>
</template>

<script>
import svgStore from '../../SvgStore'
export default {
  name: "Carousel",
  components: {svgStore},
  data() {
    return {
      prevKey: 0,
      key: 1,
      nextKey: 2,
      list: [
        {url: 'guide/pic1.png'},
        {url: 'guide/pic2.png'},
        {url: 'guide/pic3.png'},
        {url: 'guide/pic4.png'},
        {url: 'guide/pic5.png'}
      ]
    }
  },
  methods: {
    clickNext() {
      this.key = this.nextKey
      this.prevKey === this.list.length - 1 ? this.prevKey = 0 : this.prevKey = this.prevKey + 1
      this.nextKey === this.list.length - 1 ? this.nextKey = 0 : this.nextKey = this.nextKey + 1
    },
    clickPrev() {
      this.key = this.prevKey
      this.nextKey === 0 ? this.nextKey = this.list.length - 1 : this.nextKey = this.nextKey - 1
      this.prevKey === 0 ? this.prevKey = this.list.length - 1 : this.prevKey = this.prevKey - 1
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  height: fit-content;
  width: 100%;
  padding-bottom: 34px;

  &__container {
    padding-top: 24px;
  }
}
.slider {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__pic {
    width: 260px;
    height: 458px;
    background-size: 260px 458px;
    transition: background-image 0.3s cubic-bezier(0.4, 0, 1, 1);

    & img {
      width: inherit;
      height: inherit;
    }
  }

  &__arrow {
    background-color: inherit;
    border: 1px solid #ffffff;
    min-width: 30px;
    width: 30px;
    min-height: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    &--prev {
      padding-right: 3px;
    }

    &--next {
      padding-top: 1px;
      padding-left: 3px;
    }
  }
}
</style>
