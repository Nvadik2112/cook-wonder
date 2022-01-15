<template>
  <section class="properties">
    <h3 class="properties__title">шашлык - это:</h3>
    <div class="property-list">
      <div v-for="item in properties" class="property-list__item">
        <div class="property-list__icon">
          <img style="min-width: 19px; min-height: 19px" :src="item.url" alt="">
        </div>
        <h4 class="property-list__title" v-html="item.title"></h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Properties",
  data() {
    return {
      properties: [
        {url: 'properties/grill.svg', title: 'вечная классика'},
        {url: 'properties/love.svg', title: 'любовь с первого кусочка'},
        {url: 'properties/arm.svg', title: 'блюдо с характером'},
        {url: 'properties/bbq.svg', title: ' безупречный вкус'},
        {url: 'properties/cook.svg', title: 'переворот представления о<br> кулинарии дома'},
        {url: 'properties/meeting.svg', title: 'лишний повод встретиться'},
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.properties {
  width: 100%;
  color: white;
  text-transform: uppercase;
  min-height: 500px;

  &__title {
    margin-top: 33px;
    margin-left: 34px;
    font: {
      weight: 700;
      size: 30px;
    }
    line-height: 35px;

  }
}

.property-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 145px;
  margin-top: 64px;

  &__item {
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  &__icon {
    background-color: #FFFFFF;
    width: 68px;
    height: 68px;
    border-radius: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font: {
      family: 'Montserrat', sans-serif;
      size: 14px;
      weight: 700;
    };
    margin-top: 20px;
    line-height: 17px;
    text-transform: uppercase;
    text-align: center;

  }
}
</style>
