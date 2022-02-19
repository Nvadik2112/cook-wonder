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
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    z-index: 2;

    @media #{$desktop} {
      font-size: 15px;
      width: 153px;
      transform: rotate(21.83deg);
      top: 630px;
      left: -10px;
    }

    @media #{$mobile} {
      right: 8px;
      bottom: 200px;
      display: block;
      font-size: 10px;
      line-height: 12px;
      width: 98px;
      height: 35px;
      transform: rotate(12deg);
    }
  }
</style>
