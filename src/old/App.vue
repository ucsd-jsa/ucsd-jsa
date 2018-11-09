<template>
  <div id="app">
      <app-mask></app-mask>
      <app-header></app-header> 
      <home></home>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Mask from "./components/Mask.vue";

export default {
  components: {
    "app-header": Header,
    home: Home,
    "app-mask": Mask
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #707070;
}

</style>