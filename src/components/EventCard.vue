<template>
    <div class="card-carousel-wrapper">
        <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
        <div class="card-carousel">
            <div class="card-carousel--overflow-container">
                <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
                    <div class="card-carousel--card" v-for="item in items" v-bind:key="item.name">
                        <img src="https://placehold.it/200x200" />
                        <div class="card-carousel--card--footer">
                            <p>{{ item.name }}</p>
                            <p>{{ item.tag }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  components: {},
  data() {
    return {
      currentOffset: 0,
      windowSize: 4,
      paginationFactor: 220,
      items: [
        { name: "Yakiimo1", tag: "date1" },
        { name: "Yakiimo2", tag: "date2" },
        { name: "Yakiimo3", tag: "date3" },
        { name: "Yakiimo4", tag: "date4" },
        { name: "Yakiimo5", tag: "date5" },
        { name: "Yakiimo6", tag: "date6" },
        { name: "Yakiimo7", tag: "date7" }
      ]
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
  }
};
</script>

<style scoped lang="scss">
$vue-navy: #2c3e50;
$vue-navy-light: #3a5169;
$vue-teal: #42b883;
$vue-teal-light: #42b983;
$gray: #666a73;
$light-gray: #f8f8f8;

body {
  background: $light-gray;
  color: $vue-navy;
  font-family: "Source Sans Pro", sans-serif;
  min-height: 1000px;
}

.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: $gray;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 880px;

  &--overflow-container {
    overflow: hidden;
    padding: 10px;
  }

  &--nav__left,
  &--nav__right {
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 10px;
    box-sizing: border-box;
    border-top: 2px solid $vue-teal;
    border-right: 2px solid $vue-teal;
    cursor: pointer;
    margin: 0 10px;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0.2;
      border-color: black;
    }
  }

  &--nav__left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }

  &--nav__right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
  overflow: visible;

  $card-radius: 30px;
  .card-carousel--card {
    margin: 0 10px;
    cursor: pointer;
    box-shadow: 0 2px 25px -4px rgba(0, 0, 0, 0.19);
    background-color: #fff;
    border-radius: $card-radius;
    z-index: 3;
    margin-bottom: 2px;
    transition: all .2s ease-out;

    &:hover {
      border: blacks solid 1px;
      box-shadow: 0 2px 5px -4px rgba(0, 0, 0, 0.59);
      transform: translateY(2px);
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    img {
      vertical-align: bottom;
      border-top-left-radius: $card-radius;
      border-top-right-radius: $card-radius;
      transition: opacity 150ms linear;
      user-select: none;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}

h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: $vue-teal;
}
</style>
