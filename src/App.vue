<template>
  <div id='app'>
      <app-mask></app-mask>
      <app-header></app-header>
      <home></home>
  </div>
</template>

<script>
/* eslint-disable */
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

<style lang='scss'>
@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c");
* {
  margin: 0;
  padding: 0;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #707070;
}
</style>