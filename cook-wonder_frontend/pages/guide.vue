<template>
  <div class="guide">
    <div class="guide-container">
      <GuideHeader></GuideHeader>
      <GuideContent id="guide-content"></GuideContent>
      <Carousel style="display: none"></Carousel>
      <Products style="display: none"></Products>
      <GuideFooter style="display: none" id="guide-footer"></GuideFooter>
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
    }
  },
  mounted() {
    document.addEventListener('click', this.scroll)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.scroll)
  }
}
</script>

<style lang="scss" scoped>

.guide {
  background-color: #2C2720;
  width: 100%;
  display: flex;
  justify-content: center;

  @media #{$mobile} {

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
