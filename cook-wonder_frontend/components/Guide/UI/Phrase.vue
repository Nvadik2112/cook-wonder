<template>
 <div class="phrase">
   Эй, верни, воришка!
 </div>
</template>

<script>
export default {
  name: "Phrase"
}
</script>

<style lang="scss" scoped>
  .phrase {
    font: {
      size: 15px;
      weight: 500;
    }
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    width: 153px;
    transform: rotate(21.83deg);
    top: 630px;
    left: -10px;
    z-index: 2;

    @media #{$mobile} {
      left: -60px;
      top: 170px;
      display: block;
      bottom: 10px;
      font-size: 10px;
      line-height: 12px;
      width: 98px;
      height: 35px;
      transform: rotate(-6deg);
    }
  }
</style>
