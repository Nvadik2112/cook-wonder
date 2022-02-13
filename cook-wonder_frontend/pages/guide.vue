<template>
  <div class="guide">
    <div class="guide-container">
      <GuideHeader :is-mobile="isMobile"></GuideHeader>
      <GuideContent :is-mobile="isMobile" id="guide-content"></GuideContent>
      <Carousel :is-mobile="isMobile"></Carousel>
      <Products :is-mobile="isMobile"></Products>
      <GuideFooter :is-mobile="isMobile" id="guide-footer"></GuideFooter>
    </div>
  </div>
</template>

<script>
import SvgStore from "../components/SvgStore";
import GuideHeader from "../components/Guide/containers/GuideHeader";
import Properties from "../components/Guide/containers/Properties";
import GuideContent from "../components/Guide/containers/GuideContent";
import GuideFooter from "../components/Guide/containers/GuideFooter";
import Carousel from "../components/Guide/containers/Carousel";
import Products from "../components/Guide/containers/Products";

export default {

  name: "guide",
  components: {Products, SvgStore,Carousel, Properties, GuideHeader, GuideContent, GuideFooter},
  data() {
    return {
      isMobile: false
    }
  },
  methods: {
    scroll(e) {
      if (e.target.closest('a[href^="#"]')) {
        e.preventDefault();
        let href = e.target.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition + 120;

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    },
    setIsMobile() {
      this.isMobile = window.innerWidth < 1100;
    }
  },
  mounted() {
    this.setIsMobile()
    document.addEventListener('click', this.scroll)
    window.addEventListener('resize', this.setIsMobile)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.scroll)
    window.removeEventListener('resize', this.setIsMobile)
  }
}
</script>

<style lang="scss" scoped>

.guide {
  background-color: #2C2720;
  width: 100%;
  min-width: 360px;
  display: flex;
  justify-content: center;

  @media #{$mobile} {
    overflow: hidden;
  }

  &-container {
    max-width: 1110px;
    width: 100%;
    overflow: visible;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
}





</style>
