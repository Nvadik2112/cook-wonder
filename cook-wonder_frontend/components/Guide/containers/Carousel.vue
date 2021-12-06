<template>
  <section class="carousel">
    <div class="carousel__container slider">
      <div class="slider__pic slider__pic--side" :style="{backgroundImage: `url(${list[prevKey].url})`}"></div>
      <button @click="clickPrev" class="slider__arrow slider__arrow--prev">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5312 15.0312C30.5312 6.7301 23.8012 0 15.5 0C7.19885 0 0.46875 6.7301 0.46875 15.0312C0.46875 23.3324 7.19885 30.0625 15.5 30.0625C23.8012 30.0625 30.5312 23.3324 30.5312 15.0312ZM12.3203 7.20705L21.7213 15.0312L12.3203 22.8554V7.20705Z" fill="#FBB900"/>
        </svg>
      </button>
      <div class="slider__pic slider__pic--center" :style="{backgroundImage: `url(${list[key].url})`}"></div>
      <button @click="clickNext" class="slider__arrow slider__arrow--next">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5312 15.0312C30.5312 6.7301 23.8012 0 15.5 0C7.19885 0 0.46875 6.7301 0.46875 15.0312C0.46875 23.3324 7.19885 30.0625 15.5 30.0625C23.8012 30.0625 30.5312 23.3324 30.5312 15.0312ZM12.3203 7.20705L21.7213 15.0312L12.3203 22.8554V7.20705Z" fill="#FBB900"/>
        </svg>
      </button>
      <div class="slider__pic slider__pic--side" :style="{backgroundImage: `url(${list[nextKey].url})`}"></div>
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

    &--side {
      width: 239px;
      height: 401px;
      background-size: 239px 401px;
      position: relative;
      opacity: 0.5;
    }

    &--center {
      width: 367px;
      height: 619px;
      background-size: 367px 619px;
      transition: background-image 0.5s cubic-bezier(0, 0, 0.7, 1);
    }
  }

  &__arrow {
    background-color: transparent;
    min-width: 30px;
    width: 30px;
    min-height: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    &--prev {
      transform: rotate(180deg);
    }

    &--next {

    }
  }
}
</style>
