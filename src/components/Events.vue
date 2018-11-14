<template>
    <div class="container">
        <div class="container-inner event-list">
        </div>
        <div class="container-inner manga">
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url('https://i0.wp.com/aikidowave.com/wp-content/uploads/2015/02/24374071-seamless-retro-japanese-pattern-texture-background.jpg');
  background-size: 300px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-content: center;
  &-inner {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding: 200px 50px 50px;
  }
}
</style>
