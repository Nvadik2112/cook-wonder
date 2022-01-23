<template>
  <div :style="{width: width, height: height}" class="shape">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Shape",
  props: {
    width: '',
    height: ''
  }

}
</script>

<style lang="scss" scoped>
.shape {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: black;
  clip-path: polygon(0 42%, 100% 0, 100% 100%, 0% 100%);
  user-select: none;
  position: relative;

  & h3 {
    text-align: center;
    transform: rotate(-12.67deg);
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  }
}

</style>
