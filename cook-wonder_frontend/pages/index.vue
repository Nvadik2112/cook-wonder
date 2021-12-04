<template>
  <div class="main">
    <main class="main-container">
      <MainHeader></MainHeader>
    </main>
  </div>
</template>

<script>
import MainHeader from "../components/Main/containers/MainHeader";


export default {
  name: 'Main',
  components: [MainHeader]
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #0C0F14;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;


  &-container {
    margin-top: 22px;
    max-width: 1140px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
