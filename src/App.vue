<template>
  <div id='app'>
      <app-mask></app-mask>
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "./components/Header";
import Home from "./components/Home";
import Mask from "./components/Mask";
import Footer from "./components/Footer";

export default {
  components: {
    "app-header": Header,
    home: Home,
    "app-mask": Mask,
    "app-footer": Footer
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