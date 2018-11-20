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
import Mask from "./components/Mask";
import Footer from "./components/Footer";

export default {
  components: {
    "app-header": Header,
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
@import url('https://fonts.googleapis.com/css?family=Lato|Raleway');
* {
  transition: 0.5s;
  margin: 0;
  padding: 0;
  //font-family: "M PLUS Rounded 1c", sans-serif;
  //font-family: 'Lato', sans-serif;
  font-family: 'Raleway', sans-serif;
  color: #4b4b4b;
}
</style>