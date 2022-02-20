<template>
  <section class="carousel">
    <div v-if="isMobile" class="carousel__title">Что внутри?</div>
    <div class="slider">
      <img v-if="!isMobile" class="slider__pic slider__pic--side"
           :src="list[prevKey].url">
      <button v-if="!isMobile" @click="clickPrev" class="slider__arrow slider__arrow--prev">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5312 15.0312C30.5312 6.7301 23.8012 0 15.5 0C7.19885 0 0.46875 6.7301 0.46875 15.0312C0.46875
          23.3324 7.19885 30.0625 15.5 30.0625C23.8012 30.0625 30.5312 23.3324 30.5312 15.0312ZM12.3203
          7.20705L21.7213 15.0312L12.3203 22.8554V7.20705Z" fill="white"/>
        </svg>
      </button>
      <img ref="slide" class="slider__pic slider__pic--center" :src="list[currentKey].url"
           @touchstart="touchStart">
      <button v-if="!isMobile" @click="clickNext" class="slider__arrow slider__arrow--next">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5312 15.0312C30.5312 6.7301 23.8012 0 15.5 0C7.19885 0 0.46875 6.7301
           0.46875 15.0312C0.46875 23.3324 7.19885 30.0625 15.5 30.0625C23.8012 30.0625 30.5312
           23.3324 30.5312 15.0312ZM12.3203 7.20705L21.7213 15.0312L12.3203 22.8554V7.20705Z" fill="white"/>
        </svg>
      </button>
      <img v-if="!isMobile" class="slider__pic slider__pic--side"
           :src="list[nextKey].url">
    </div>
    <div v-if="isMobile" class="dots">
      <div v-for="(item, k) in list" :key="k" class="dots__item" :class="{'dots__item--active': currentKey === k}"></div>
    </div>
    <div v-if="isMobile" class="carousel__title carousel__title--yellow">Преступно вкусно!
    </div>
  </section>
</template>

<script>
import svgStore from '../../SvgStore'
export default {
  name: "Carousel",
  components: {svgStore},
  props: {
    isMobile: Boolean
  },
  data() {
    return {
      prevKey: null,
      currentKey: 0,
      nextKey: 1,
      opacity: 0.1,
      y: null,
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
    touchStart (touchEvent) {
      if (touchEvent.changedTouches.length !== 1) {
        return;
      }
      this.y = touchEvent.touches[0].clientY

      const posXStart = touchEvent.changedTouches[0].clientX;
      addEventListener('touchmove', (touchEvent) => this.touchMove(touchEvent, posXStart),
        {once: true});
    },

    touchMove (touchEvent, posXStart) {
      if (touchEvent.changedTouches.length !== 1) {
        return;
      }
      if (Math.abs(this.y - touchEvent.touches[0].clientY) < 5) {
        const posXEnd = touchEvent.changedTouches[0].clientX;
        if (posXStart < posXEnd) {
          this.clickPrev(); // swipe right
        } else if (posXStart > posXEnd) {
          this.clickNext(); // swipe left
        }
      }
    },

    clickNext() {
      this.$refs.slide.style.opacity = `0.3`
      setTimeout(()=> {
        this.currentKey = this.nextKey
          this.prevKey === this.list.length - 1 ? this.prevKey = 0 : this.prevKey = this.prevKey + 1
          this.nextKey === this.list.length - 1 ? this.nextKey = 0 : this.nextKey = this.nextKey + 1
          this.$refs.slide.removeAttribute('style')
        },
        400)
    },

    clickPrev() {
      this.$refs.slide.style.opacity = `0.3`
      setTimeout(()=> {
        this.currentKey = this.prevKey
        this.nextKey === 0 ? this.nextKey = this.list.length - 1 : this.nextKey = this.nextKey - 1
        this.prevKey === 0 ? this.prevKey = this.list.length - 1 : this.prevKey = this.prevKey - 1
        this.$refs.slide.removeAttribute('style')
      }, 400)
    }
  },
  created() {
    this.prevKey = this.list.length - 1
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  height: fit-content;
  width: 100%;
  padding-bottom: 44px;

  @media #{$mobile} {
    background: white;
    position: relative;
    padding-bottom: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &:before {
    @media #{$mobile} {
      content: '';
      position: absolute;
      background-color: #2C2720;
      top: 75px;
      left: -30%;
      width: 150%;
      height: 540px;
      transform: rotate(8deg);
    }
  }

  &__title {
    position: absolute;
    width: 156px;
    height: 156px;
    border-radius: 78px;
    left: calc(50% - 78px);
    background-color: #2C2720;
    display: flex;
    justify-content: center;
    align-items: center;
    font: {
      family: Montserrat, sans-serif;
      size: 17px;
      weight: 700;
    }
    line-height: 21px;
    text-transform: uppercase;
    color: white;
    transform: rotate(12deg);

    &--yellow {
      background-color: #FBB900;
      bottom: 60px;
      color: #000000;
      text-align: center;
    }
  }
}

.slider {
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media #{$mobile} {
    justify-content: center;
    padding-top: 122px;
  }

  &__pic {
    opacity: 1;
    visibility: visible;
    background-color: gray;

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
      transition: opacity 0.4s cubic-bezier(0, 0, 0.7, 1);

      @media #{$mobile} {
        background-size: 220px 366px;
        width: 220px;
        height: 366px;
        z-index: 2;
      }
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
  }
}

.dots {
  display: grid;
  grid-auto-flow: column;
  height: 5px;
  width: fit-content;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fill, 5px);
  margin-top: 21px;
  z-index: 5;

  &__item {
    width: 5px;
    height: 5px;
    border-radius: 2.5px;
    background-color: #999595;
    transition: background-color 0.2s cubic-bezier(0, 0, 0.7, 1);

    &--active {
      background-color: white;
    }
  }
}

</style>
