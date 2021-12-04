<template>
  <div :style="{width: width, height: height}" class="shape">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Shape",
  props: {
    width: String,
    height: String
  }

}
</script>

<style lang="scss" scoped>
.shape {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0);
  background-size: cover;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='76' height='46' viewBox='0 0 76 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M76 0L0 20.1837V46H76V0Z' fill='%230D0000'/%3e%3c/svg%3e ");
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
