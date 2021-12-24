<template>
  <div class="guide">
    <div class="guide-container">
      <GuideHeader></GuideHeader>
      <GuideContent></GuideContent>
      <Carousel></Carousel>
      <Products></Products>
      <GuideFooter></GuideFooter>
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
  components: {Products, SvgStore,Carousel, Properties, GuideHeader, GuideContent, GuideFooter}
}
</script>

<style lang="scss" scoped>
.guide {
  background-color: #2C2720;
  width: 100%;
  display: flex;
  justify-content: center;

  &-container {
    max-width: 1110px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

  }
}

</style>
