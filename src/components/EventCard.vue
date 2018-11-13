<template>
    <div class="card-carousel-wrapper">
        <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
        <div class="card-carousel" :class="$mq">
            <div class="card-carousel--overflow-container" :class="$mq">
                <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'vw' + ')'}">
                    <div class="card-carousel--card" v-for="item in sorted_items" v-bind:key="item.name">
                        <div class="card-content" :style="{ 'background-image': item.img}"></div>
                        <div class="card-carousel--card--footer" :style="{'background-color': item.color}">
                            <p class="event-name">{{ item.name }}</p>
                            <p class="event-date">{{ item.date | moment('MMM Do, h:mm a') }}</p>
                            <p class="event-location">{{ item.location }}</p>
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
  props: ["allEvents"],
  data() {
    return {
      currentOffset: 0,
      items: [],
      windowSize: 0,
      leftCounter: 0,
      colors: ["#FD8181", "#FDE689", "#FEFF99", "#BEFF95", "#A88EEA"]
    };
  },
  created: function() {
    if (this.$mq === "phone") this.windowSize = 1;
    if (this.$mq === "tablet") this.windowSize = 2;
    if (this.$mq === "laptop") this.windowSize = 3;
    if (this.$mq === "desktop") this.windowSize = 4;
  },
  computed: {
    atEndOfList() {
      return this.leftCounter == this.items.length - this.windowSize;
    },
    atHeadOfList() {
      return this.leftCounter == 0;
    },
    sorted_items() {
      return this.items.sort((a, b) => {
        var direction = 1;
        if (a.date < new Date()) direction = -1;
        if (a.date > b.date) return direction;
        if (a.date == b.date) return 0;
        if (a.date < b.date) return -direction;
      });
    }
  },
  methods: {
    moveCarousel(direction) {
      var paginationFactor = 0;
      if (this.$mq === "phone") paginationFactor = 70+2;
      if (this.$mq === "tablet") paginationFactor = 25 + 2;
      if (this.$mq === "laptop") paginationFactor = 17.2 + 2;
      if (this.$mq === "desktop") paginationFactor = 16 + 2;
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += paginationFactor;
      }
      if (!this.atHeadOfList && direction == -1) this.leftCounter--;
      if (!this.atEndOfList && direction == 1) this.leftCounter++;
    },
    handleResize(event) {
      var newSize;
      if (this.$mq === "phone") newSize = 1;
      if (this.$mq === "tablet") newSize = 2;
      if (this.$mq === "laptop") newSize = 3;
      if (this.$mq === "desktop") newSize = 4;
      if (this.windowSize != newSize) {
        this.windowSize = newSize;
        this.currentOffset = 0;
        this.leftCounter = 0;
      }
    }
  },
  beforeMount() {
    this.items = this.allEvents;
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  watch: {
    items: function() {
      this.items.forEach(item => {
        var c = this.colors[Math.floor(Math.random() * this.colors.length)];
        //item.color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
        item.color = c;
        if (item.location == null) item.location = "TBD";
        if (item.img != null && item.img[0] != "u") {
          item.img = "url(" + '"' + item.img + '"' + ")";
          console.log(item.img);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
$nav: #e06d6d;
$gray: #666a73;
$card-radius: 40px;

.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $gray;
  margin: 20px 0 40px;
}

.card-carousel {
  display: flex;
  justify-content: center;

  &--overflow-container {
    overflow: hidden;
    &.phone {
      padding: 3vw;
    }
    &.tablet {
      padding: 10px;
    }
    &.laptop {
      padding: 10px;
    }
    &.desktop {
      padding: 10px;
    }
  }

  &--nav__left,
  &--nav__right {
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 10px;
    box-sizing: border-box;
    border-top: 10px solid $nav;
    border-right: 10px solid $nav;
    border-radius: 3px;
    cursor: pointer;
    margin: 0 10px;
    transition: transform 150ms linear;
    &[disabled] {
      border-color: rgba(0, 0, 0, 0.2);
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
  transition: transform 300ms ease-out;
  transform: translatex(0px);
  overflow: visible;

  .card-carousel--card {
    cursor: pointer;
    box-shadow: 0 2px 25px -4px rgba(0, 0, 0, 0.19);
    background-color: rgba(255, 255, 255, 0.342);
    z-index: 3;
    margin-bottom: 2px;
    transition: all 0.2s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      border: blacks solid 1px;
      box-shadow: 0 2px 5px -4px rgba(0, 0, 0, 0.59);
      transform: translateY(2px);
    }

    .card-content {
      vertical-align: bottom;
      transition: opacity 150ms linear;
      user-select: none;
      background: {
        position: center;
        size: cover;
      }

      border-top-left-radius: $card-radius;
      border-top-right-radius: $card-radius;
      background-color: rgba(255, 255, 255, 0.5);
      &:hover {
        opacity: 0.5;
      }
    }
    &--footer {
      height: 40%;
      border-bottom-left-radius: $card-radius;
      border-bottom-right-radius: $card-radius;
      padding: 5px;

      p {
        color: rgb(48, 48, 48);
      }
    }
  }
}

$card-margin: 2vw;

.card-carousel {
  &.phone {
    $info-size: 6vw;
    .event-name {
      font-weight: bold;
      font-size: 1.1 * $info-size;
    }
    .event-date {
      font-size: 0.8 * $info-size;
    }
    .event-location {
      font-size: 0.8 * $info-size;
    }
    $card-width: 70vw;
    $card-height: 1.35 * $card-width;
    width: ($card-width + 1vw);

    .card-carousel-cards {
      .card-carousel--card {
        width: $card-width;
        height: $card-height;
        border-radius: $card-radius;
        margin: 0 1vw;
        .card-content {
          width: $card-width;
          height: $card-width * 0.85;
        }
        &:first-child {
          margin-left: -2.5vw;
        }
      }
    }
  }
  &.tablet {
    $info-size: 2.2vw;
    .event-name {
      font-weight: bold;
      font-size: 1.1 * $info-size;
    }
    .event-date {
      font-size: 0.8 * $info-size;
    }
    .event-location {
      font-size: 0.8 * $info-size;
    }
    $card-width: 25vw;
    $card-height: 1.35 * $card-width;
    width: 2 * ($card-margin + $card-width);
    .card-carousel-cards {
      .card-carousel--card {
        width: $card-width;
        height: $card-height;
        margin: 0 $card-margin/2;
        border-radius: $card-radius;
        .card-content {
          width: $card-width;
          height: $card-width * 0.85;
        }
        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  &.laptop {
    $info-size: 1.5vw;
    .event-name {
      font-weight: bold;
      font-size: 1.1 * $info-size;
    }
    .event-date {
      font-size: 0.8 * $info-size;
    }
    .event-location {
      font-size: 0.8 * $info-size;
    }
    $card-width: 17.2vw;
    $card-height: 1.35 * $card-width;
    width: 3 * ($card-margin + $card-width);
    .card-carousel-cards {
      .card-carousel--card {
        width: $card-width;
        height: $card-height;
        margin: 0 $card-margin/2;
        border-radius: $card-radius;
        .card-content {
          width: $card-width;
          height: $card-width * 0.85;
        }
        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  &.desktop {
    $info-size: 1.2vw;
    .event-name {
      font-weight: bold;
      font-size: 1.22 * $info-size;
    }
    .event-date {
      font-size: 1 * $info-size;
    }
    .event-location {
      font-size: 1 * $info-size;
    }
    $card-width: 16vw;
    $card-height: 1.35 * $card-width;
    width: 4 * ($card-margin + $card-width);
    .card-carousel-cards {
      .card-carousel--card {
        width: $card-width;
        height: $card-height;
        margin: 0 $card-margin/2;
        border-radius: $card-radius;
        .card-content {
          width: $card-width;
          height: $card-width * 0.85;
        }
        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
