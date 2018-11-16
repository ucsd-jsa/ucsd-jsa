<template>
    <div class="container">
        <div class="container-inner event-list">
        </div>
        <div class="container-inner manga">
            <div class="manga-content manga-content--1 img-1"></div>
            <div class="manga-content manga-content--1 left top">something</div>
            <div class="manga-content manga-content--1 top right">something</div>
            <div class="manga-content manga-content--1 right bottom">something</div>
            <div class="manga-content manga-content--1 bottom left">something</div>
            <div class="manga-content manga-content--2 img-2"></div>
            <div class="manga-content manga-content--2 left top">something</div>
            <div class="manga-content manga-content--2 top right">something</div>
            <div class="manga-content manga-content--2 right bottom">something</div>
            <div class="manga-content manga-content--2 bottom left">something</div>
            <div class="manga-content manga-content--3 img-3"></div>
            <div class="manga-content manga-content--3 left top">something</div>
            <div class="manga-content manga-content--3 top right">something</div>
            <div class="manga-content manga-content--3 right bottom">something</div>
            <div class="manga-content manga-content--3 bottom left">something</div>
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
  background-image: url("https://i0.wp.com/aikidowave.com/wp-content/uploads/2015/02/24374071-seamless-retro-japanese-pattern-texture-background.jpg");
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
.manga {
  &-content {
    height: 75vh;
    width: 43vw;
    position: absolute;
    background-color: rgba(255, 255, 255, 1);
    &--1 {
      clip-path: polygon(0 0, 100% 0%, 100% 57%, 0 41%);
      background-size: 100%;
    }
    &--2 {
      // -webkit-clip-path: polygon(0 43%, 49% 51%, 49% 100%, 0 100%);
      clip-path: polygon(0 43%, 49% 51%, 49% 100%, 0 100%);
      background-size: 100%;
      background-position: center 100%;
    }
    &--3 {
      clip-path: polygon(51% 51.3%, 100% 59%, 100% 100%, 51% 100%);
      background-position: 0 350px;
    }
  }

  $manga-border: 4px;
  .left,
  .bottom,
  .top,
  .right {
    background-color: black;
    z-index: -100;
  }
  .left {
    margin-left: -1 * $manga-border;
  }
  .right {
    margin-left: $manga-border;
  }
  .top {
    margin-top: -1 * $manga-border;
  }
  .bottom {
    margin-top: $manga-border;
  }

  .img {
    animation: cyclist 1s infinite steps(2);
    &-1 {
      &::after {
        transition: background-image 0.5s;
        content: " ";
        background-image: url("https://firebasestorage.googleapis.com/v0/b/ucsd-jsa.appspot.com/o/img-1-2.jpg?alt=media&token=60f715f6-c524-4e8c-8ffc-535c16e842bc");
        top: 0;
        width: 100%;
        height: 57%;
        background-size: cover;
        position: absolute;
      }
      &:hover {
        &::after {
          content: " ";
          background-image: url("https://firebasestorage.googleapis.com/v0/b/ucsd-jsa.appspot.com/o/img-1.jpg?alt=media&token=6f91467a-d2c5-466c-b277-c225abfa7aac");
          top: 0;
          width: 100%;
          height: 57%;
          background-size: cover;
          position: absolute;
        }
      }
    }
    &-2 {
      &::after {
        transition: background-image 0.5s;
        content: " ";
        background-image: url("https://firebasestorage.googleapis.com/v0/b/ucsd-jsa.appspot.com/o/img-2-2.jpg?alt=media&token=da06726e-8124-47a1-88e6-322b239d872d");
        height: 57%;
        width: 50%;
        background-size: cover;
        background-position-x: 50%;
        bottom: 0;
        position: absolute;
      }

      &:hover {
        &::after {
          content: " ";
          background-image: url("https://firebasestorage.googleapis.com/v0/b/ucsd-jsa.appspot.com/o/img-2.jpg?alt=media&token=903c6766-b168-4855-a75d-761b5405458d");
          height: 57%;
          width: 50%;
          background-size: cover;
          background-position-x: 50%;
          bottom: 0;
          position: absolute;
        }
      }
    }
    &-3 {
      transition: all 0.2s ease;
      &::after {
        transition: background-image 0.5s;
        content: " ";
        background-image: url("https://firebasestorage.googleapis.com/v0/b/ucsd-jsa.appspot.com/o/img-3-2.jpg?alt=media&token=57557724-4b15-41b7-b3ec-d797027a79af");
        height: 50%;
        width: 50%;
        background-size: cover;
        background-position-x: 50%;
        bottom: 0;
        right: 0;
        position: absolute;
      }
      &:hover {
        &::after {
          content: " ";
          background-image: url("https://firebasestorage.googleapis.com/v0/b/ucsd-jsa.appspot.com/o/img-3.jpg?alt=media&token=9a15797d-8b92-4c46-828e-bc0621481147");
          height: 50%;
          width: 50%;
          background-size: cover;
          background-position-x: 50%;
          bottom: 0;
          right: 0;
          position: absolute;
        }
      }
    }
  }
}
</style>
