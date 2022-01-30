<template>
  <section class="carousel">
    <div class="slider">
      <img v-if="!isMobile" class="slider__pic slider__pic--side"
           :src="list[prevKey].url">
      <button v-if="!isMobile" @click="clickPrev" class="slider__arrow slider__arrow--prev">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5312 15.0312C30.5312 6.7301 23.8012 0 15.5 0C7.19885 0 0.46875 6.7301 0.46875 15.0312C0.46875
          23.3324 7.19885 30.0625 15.5 30.0625C23.8012 30.0625 30.5312 23.3324 30.5312 15.0312ZM12.3203
          7.20705L21.7213 15.0312L12.3203 22.8554V7.20705Z" fill="#FBB900"/>
        </svg>
      </button>
      <img ref="slide" class="slider__pic slider__pic--center" :src="list[key].url"
           @touchstart="touchStart">
      <button v-if="!isMobile" @click="clickNext" class="slider__arrow slider__arrow--next">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5312 15.0312C30.5312 6.7301 23.8012 0 15.5 0C7.19885 0 0.46875 6.7301
           0.46875 15.0312C0.46875 23.3324 7.19885 30.0625 15.5 30.0625C23.8012 30.0625 30.5312
           23.3324 30.5312 15.0312ZM12.3203 7.20705L21.7213 15.0312L12.3203 22.8554V7.20705Z" fill="#FBB900"/>
        </svg>
      </button>
      <img v-if="!isMobile" class="slider__pic slider__pic--side"
           :src="list[nextKey].url">
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
      prevKey: 0,
      key: 1,
      nextKey: 2,
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
        this.key = this.nextKey
          this.prevKey === this.list.length - 1 ? this.prevKey = 0 : this.prevKey = this.prevKey + 1
          this.nextKey === this.list.length - 1 ? this.nextKey = 0 : this.nextKey = this.nextKey + 1
          this.$refs.slide.removeAttribute('style')
        },
        400)
    },

    clickPrev() {
      this.$refs.slide.style.opacity = `0.3`
      setTimeout(()=> {
        this.key = this.prevKey
        this.nextKey === 0 ? this.nextKey = this.list.length - 1 : this.nextKey = this.nextKey - 1
        this.prevKey === 0 ? this.prevKey = this.list.length - 1 : this.prevKey = this.prevKey - 1
        this.$refs.slide.removeAttribute('style')
      }, 400)
    }
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
    padding-bottom: 145px;
  }

  &:before {
    @media #{$mobile} {
      content: '';
      position: absolute;
      background-color: #2C2720;
      top: 35px;
      left: -30%;
      width: 150%;
      height: 490px;
      transform: rotate(8deg);
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
    padding-top: 82px;
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
        margin-top: 20px;
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

</style>
