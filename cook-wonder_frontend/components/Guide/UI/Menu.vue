<template>
  <div class="menu">
    <div v-for="item in menu" class="menu__item">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menu: [
        {name: 'Обо мне'},
        {name: "О чем руководство"},
        {name: "Заказать"},
        {name: 'Контакты'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.menu {
  padding-right: 0;
  display: flex;
  width: 445px;
  justify-content: space-between;
  z-index: 3;


  &__item {
    cursor: pointer;
    font: {
      weight: 400;
      size: 14px;
      family: 'Montserrat', sans-serif;
    }
    line-height: 17px;

    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
