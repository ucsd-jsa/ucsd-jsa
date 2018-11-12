<template>
     <agile :options="options">
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
    return {
      options: {
        arrows: false
      }
    };
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
      background-color: transparent;
      border: 1px solid #fff;
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
  &:before {
    background-color: rgba(#000, 0.2);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  h1 {
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
</style>
