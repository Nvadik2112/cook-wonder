<template>
  <ul class="menu">
    <li v-for="item in menu" class="menu__item">
      <a :href="item.href">{{item.name}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menu: [
        {name: 'Обо мне', href: '/'},
        {name: "О чем руководство", href: '#guide-content'},
        {name: "Купить", href: '#guide-footer'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.menu {
  margin: 0;
  padding-right: 0;
  display: flex;
  width: 345px;
  justify-content: space-between;
  z-index: 3;


  &__item {
    list-style-type: none;
    cursor: pointer;
    font: {
      weight: 400;
      size: 14px;
      family: 'Montserrat', sans-serif;
    }
    line-height: 17px;

    & a {
      color: inherit
    }

    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
