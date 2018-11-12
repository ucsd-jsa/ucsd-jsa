<template>
     <agile :arrows= false :speed=1000 :autoplay=true :autoplaySpeed=5000 pauseOnDotsHover=true>
        <div class="slide slide--1"><h1>slide1</h1></div>
        <div class="slide slide--2"><h1>slide2</h1></div>
        <div class="slide slide--3"><h1>slide3</h1></div>
        <div class="slide slide--4"><h1>slide4</h1></div>
        <div class="slide slide--5"><h1>slide5</h1></div>
    </agile>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.agile {
  width: 100%;
  height: 100%;

  &__list {
    height: 100%;
  }

  &__track {
    height: 100%;
  }

  &__dots {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  &__dot {
    button {
      border: 1px solid transparent;
      background-color: rgba(255, 255, 255, 0.3);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 20px;

      &:hover {
        background-color: #fff;
      }
    }

    &--current {
      button {
        background-color: #fff;
      }
    }
  }
}

.slide {
  background: {
    position: center;
    size: cover;
  }
  width: 100%;
  height: 100%;

  h1 {
    color: rgb(192, 192, 192);
    left: 50%;
    transform: translateX(-50%);
    position: fixed;
    bottom: 50px;
  }
}

.slide--1 {
  background: {
    image: url("../assets/JSAFBbannerattempt.jpg");
  }
}

.slide--2 {
  background: {
    image: url("../assets/RMW00468.jpg");
  }
}

.slide--3 {
  background: {
    color: rgb(143, 143, 204);
  }
}

.slide--4 {
  background: {
    color: rgb(238, 111, 111);
  }
}

.slide--5 {
  background: {
    color: rgb(252, 252, 114);
  }
}
</style>
