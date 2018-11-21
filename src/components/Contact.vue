<template>
    <div class="outer">
        <div class="background"></div>
        <div class="content">
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
.background {
  background-image: url("https://previews.123rf.com/images/tukkki/tukkki1410/tukkki141000124/33042129-vintage-hand-drawn-art-deco-pattern.jpg");
  background-size: 400px;
  filter: blur(1px);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -100;
}
.content {
  background-color: rgba(255, 255, 255, 0.4);
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15% 20% 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}
</style>
