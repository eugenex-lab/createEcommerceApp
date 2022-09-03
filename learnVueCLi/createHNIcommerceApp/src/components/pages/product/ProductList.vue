<template>
  <section class="layout">
    <div id="imageSLide">
      <Slider />
    </div>
  </section>

  <section>
    FILTER PRODUCTS
  </section>
  <section>
    LIST OF PRODUCTS
  </section>
</template>

<script>

import Slider from '../../plugins/Slider.vue'

export default {
  name: "ProductList.vue",
  components: {
    Slider
  }
}
</script>

<style scoped>
#imageSLide {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.layout {
  width: auto;
  height: 410px;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr;

  justify-content: space-between;
  align-content: center;

  margin-top: 10px;
}
</style>