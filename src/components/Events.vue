<template>
    <div class="container">
        <div class="container-inner event-list">
            <div class="event-list-content">
                <div class="filters">
                    <p @click="switchPast(0)">Past</p>
                    <p @click="switchPast(1)">Upcoming</p>
                </div>
                <div class="event-container" v-for="item in sorted" v-bind:key="item.name" @click="selectEvent(item.name)"  v-if="isPast" :style="{ 'background-image': 'url(' + item.img + ')'}">
                    <div class="hole"/>
                    <p class="event-name" >{{item.name}}</p>
                    <p class="event-date">
                        <Zondicon icon='time' class="icon"/>
                        {{ item.date | moment('MMM Do, h:mm a') }}
                    </p>
                    <p class="event-location">
                        <Zondicon icon='location' class="icon"/>
                        {{item.location}}
                    </p>
                </div>
                <div class="event-container" v-for="item in sorted" v-bind:key="item.name" @click="selectEvent(item.name)" v-if="!isPast" :style="{ 'background-image': 'url(' + item.img + ')'}">
                    <div class="hole"/>
                    <p class="event-name">{{item.name}}</p>
                    <p class="event-date">
                        <Zondicon icon='time' class="icon"/>
                        {{ item.date | moment('MMM Do, h:mm a') }}
                    </p>
                    <p class="event-location">
                        <Zondicon icon='location' class="icon"/>
                        {{item.location}}
                    </p>
                </div>
            </div>
        </div>
        <div class="container-inner manga">
            <div class="manga-content manga-content--1 img-1">
                <div class="image" @mouseover='onHover1' @mouseout='notOnHover1' :style='image_1'></div>
            </div>
            <div class="manga-content manga-content--2 img-2">
                <div class="image" @mouseover='onHover2' @mouseout='notOnHover2' :style='image_2'></div>
            </div>
            <div class="manga-content manga-content--3 img-3">
                <div class="image" @mouseover='onHover3' @mouseout='notOnHover3' :style='image_3'></div>
            </div>
            <div class="manga-content manga-content--1 left top"></div>
            <div class="manga-content manga-content--1 top right"></div>
            <div class="manga-content manga-content--1 right bottom"></div>
            <div class="manga-content manga-content--1 bottom left"></div>
            <div class="manga-content manga-content--2 left top"></div>
            <div class="manga-content manga-content--2 top right"></div>
            <div class="manga-content manga-content--2 right bottom"></div>
            <div class="manga-content manga-content--2 bottom left"></div>
            <div class="manga-content manga-content--3 left top"></div>
            <div class="manga-content manga-content--3 top right"></div>
            <div class="manga-content manga-content--3 right bottom"></div>
            <div class="manga-content manga-content--3 bottom left"></div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Zondicon from "vue-zondicons";
import { db } from "../Firebase.js";
export default {
  components: {
    Zondicon: Zondicon
  },
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      selectedEvent: {
        img_1_origin: "",
        img_1_manga: "",
        img_2_origin: "",
        img_2_manga: "",
        img_3_origin: "",
        img_3_manga: ""
      },
      pastEvents: [],
      upcomingEvents: [],
      isPast: true
    };
  },
  computed: {
    image_1: function(hover1) {
      var link = this.selectedEvent.img_1_manga;
      if (this.hover1) link = this.selectedEvent.img_1_origin;
      return {
        "background-image": "url(" + link + ")",
        top: 0,
        width: "100%",
        height: "57%"
      };
    },
    image_2: function(hover1) {
      var link = this.selectedEvent.img_2_manga;
      if (this.hover2) link = this.selectedEvent.img_2_origin;
      return {
        "background-image": "url(" + link + ")",
        bottom: 0,
        width: "50%",
        height: "57%",
        "background-position-x": "50%"
      };
    },
    image_3: function(hover1) {
      var link = this.selectedEvent.img_3_manga;
      if (this.hover3) link = this.selectedEvent.img_3_origin;
      return {
        "background-image": "url(" + link + ")",
        right: 0,
        bottom: 0,
        width: "50%",
        height: "50%",
        "background-position-x": "50%"
      };
    },
    sorted(val) {
      return this.isPast
        ? this.pastEvents.sort((a, b) => {
            var direction = 1;
            if (a.date < new Date()) direction = -1;
            if (a.date > b.date) return direction;
            if (a.date == b.date) return 0;
            if (a.date < b.date) return -direction;
          })
        : this.upcomingEvents.sort((a, b) => {
            var direction = 1;
            if (a.date < new Date()) direction = -1;
            if (a.date > b.date) return direction;
            if (a.date == b.date) return 0;
            if (a.date < b.date) return -direction;
          });
    }
  },
  methods: {
    onHover1() {
      this.hover1 = true;
    },
    notOnHover1() {
      this.hover1 = false;
    },
    onHover2() {
      this.hover2 = true;
    },
    notOnHover2() {
      this.hover2 = false;
    },
    onHover3() {
      this.hover3 = true;
    },
    notOnHover3() {
      this.hover3 = false;
    },
    selectEvent(name) {
      this.selectedEvent.img_1_origin = this.pastEvents.find(
        event => event.name == name
      ).manga.img_1_origin;
      this.selectedEvent.img_1_manga = this.pastEvents.find(
        event => event.name == name
      ).manga.img_1_manga;
      this.selectedEvent.img_2_origin = this.pastEvents.find(
        event => event.name == name
      ).manga.img_2_origin;
      this.selectedEvent.img_2_manga = this.pastEvents.find(
        event => event.name == name
      ).manga.img_2_manga;
      this.selectedEvent.img_3_origin = this.pastEvents.find(
        event => event.name == name
      ).manga.img_3_origin;
      this.selectedEvent.img_3_manga = this.pastEvents.find(
        event => event.name == name
      ).manga.img_3_manga;
    },
    switchPast(val) {
      if (val == 0) {
        this.isPast = true;
      } else {
        this.isPast = false;
      }
    }
  },
  created: function() {
    db.ref("events").once("value", events => {
      events.forEach(event => {
        var now = new Date();
        var eventDate = new Date(event.child("date").val());
        if (now < eventDate) {
          this.upcomingEvents.push({
            name: event.key,
            date: new Date(event.child("date").val()),
            location: event.child("location").val(),
            fbLink: event.child("fbLink").val(),
            img: event.child("img").val(),
            detail: event.child("detail").val(),
            manga: {
              img_1_origin: event
                .child("img")
                .child("img_1_origin")
                .val(),
              img_1_manga: event
                .child("img")
                .child("img_1_manga")
                .val(),
              img_2_origin: event
                .child("img")
                .child("img_2_origin")
                .val(),
              img_2_manga: event
                .child("img")
                .child("img_2_manga")
                .val(),
              img_3_origin: event
                .child("img")
                .child("img_3_origin")
                .val(),
              img_3_manga: event
                .child("img")
                .child("img_3_manga")
                .val()
            }
          });
        } else {
          this.pastEvents.push({
            name: event.key,
            date: new Date(event.child("date").val()),
            location: event.child("location").val(),
            fbLink: event.child("fbLink").val(),
            img: event.child("img").val(),
            detail: event.child("detail").val(),
            manga: {
              img_1_origin: event
                .child("img")
                .child("img_1_origin")
                .val(),
              img_1_manga: event
                .child("img")
                .child("img_1_manga")
                .val(),
              img_2_origin: event
                .child("img")
                .child("img_2_origin")
                .val(),
              img_2_manga: event
                .child("img")
                .child("img_2_manga")
                .val(),
              img_3_origin: event
                .child("img")
                .child("img_3_origin")
                .val(),
              img_3_manga: event
                .child("img")
                .child("img_3_manga")
                .val()
            }
          });
        }
      });
    });
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
    overflow: auto;
  }
}
.manga {
  &-content {
    height: 75vh;
    width: 40vw;
    position: absolute;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
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
  .image {
    position: absolute;
    transition: background-image 0.35s;
    background-size: cover;
  }
}

.event-list {
  &-content {
    height: 75vh;
    width: 43vw;
    box-sizing: border-box;
    position: relative;
    padding: 0 20px;
    overflow: auto;

    .filters {
      display: flex;
      padding: 5px 0;
      text-align: center;

      p {
        cursor: pointer;
        margin: auto 20px auto 0px;
        width: 100px;
        padding: 3px;
        box-sizing: border-box;
        border: 1.4px rgb(49, 49, 49) solid;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.31);
        font-weight: 600;
        border-radius: 5px;
      }
    }

    .event-container {
      box-sizing: border-box;
      cursor: pointer;
      height: 80px;
      width: 100%;
      margin: 10px 0;
      display: flex;
      overflow: hidden;
      .hole {
        margin: auto 20px auto 20px;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        box-shadow: 0 0 0 99999px rgba($color: white, $alpha: 1);
      }
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.61);
      p {
        margin: auto 10px;
      }
      .event-name {
        font-weight: bold;
      }
    }
  }
}
.icon {
  width: 1em;
  transform: translateY(2px);
}
</style>
