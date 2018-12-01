<template>
    <div class="container" :class="$mq">
        <div class="container-inner event-list" :class="$mq">
            <div class="filters" :class="$mq">
                <p @click="switchPast(0)" :class="{active: isPast}">Past</p>
                <p @click="switchPast(1)" :class="{active: !isPast}">Upcoming</p>
            </div>
            <div class="event-list-content" :class="$mq">
                <div class="event-container" v-for="item in sorted" v-bind:key="item.name" @click="selectEvent(item.name, 0)"  v-if="isPast" :class="{active:item.name == selectedEventName}">
                    <div class="hole-container" :class="$mq">
                        <div class="hole" :class="$mq"/>
                    </div>
                    <div class="info-container" >
                        <p class="event-name" >{{item.name}}</p>
                        <p class="event-date">
                            <v-Icon class="icon" name="calendar-alt" scale="1" />
                            {{ item.date | moment('MMM Do, h:mm a') }}
                        </p>
                        <p class="event-location">
                            <v-Icon class="icon" name="map-marker-alt" scale="1" />
                            {{item.location}}
                        </p>
                        <p class="event-link" @click="openLink(item.fbLink)">
                            <v-Icon class="icon" name="brands/facebook" scale="1" />
                            Event Page
                        </p>
                    </div>
                    <div class="img-container">
                        <div class="img-content" :style="{ 'background-image': 'url(' + item.img + ')'}"> </div>
                    </div>
                </div>
                <div class="event-container" v-for="item in sorted" v-bind:key="item.name" @click="selectEvent(item.name, 1)"  v-if="!isPast" :class="{active:item.name == selectedEventName}">
                    <div class="hole-container" :class="$mq">
                        <div class="hole" :class="$mq"/>
                    </div>
                    <div class="info-container" >
                        <p class="event-name" >{{item.name}}</p>
                        <p class="event-date">
                            <v-Icon class="icon" name="calendar-alt" scale="1" />
                            {{ item.date | moment('MMM Do, h:mm a') }}
                        </p>
                        <p class="event-location">
                            <v-Icon class="icon" name="map-marker-alt" scale="1" />
                            {{ item.location }}
                        </p>
                        <p class="event-link" @click="openLink(item.fbLink)">
                            <v-Icon class="icon" name="brands/facebook" scale="1" />
                            Event Page
                        </p>
                    </div>
                    <div class="img-container">
                        <div class="img-content" :style="{ 'background-image': 'url(' + item.img + ')'}"> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-inner manga" :class="$mq">
            <div class="manga-content manga-content--1 img-1" :class="$mq">
                <div class="image" @mouseover='onHover1' @mouseout='notOnHover1' :style='image_1'></div>
            </div>
            <div class="manga-content manga-content--2 img-2" :class="$mq">
                <div class="image" @mouseover='onHover2' @mouseout='notOnHover2' :style='image_2'></div>
            </div>
            <div class="manga-content manga-content--3 img-3" :class="$mq">
                <div class="image" @mouseover='onHover3' @mouseout='notOnHover3' :style='image_3'></div>
            </div>
            <div class="manga-content manga-content--1 left top" :class="$mq"></div>
            <div class="manga-content manga-content--1 top right" :class="$mq"></div>
            <div class="manga-content manga-content--1 right bottom" :class="$mq"></div>
            <div class="manga-content manga-content--1 bottom left" :class="$mq"></div>
            <div class="manga-content manga-content--2 left top" :class="$mq"></div>
            <div class="manga-content manga-content--2 top right" :class="$mq"></div>
            <div class="manga-content manga-content--2 right bottom" :class="$mq"></div>
            <div class="manga-content manga-content--2 bottom left" :class="$mq"></div>
            <div class="manga-content manga-content--3 left top" :class="$mq"></div>
            <div class="manga-content manga-content--3 top right" :class="$mq"></div>
            <div class="manga-content manga-content--3 right bottom" :class="$mq"></div>
            <div class="manga-content manga-content--3 bottom left" :class="$mq"></div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Zondicon from "vue-zondicons";

import { db } from "../Firebase.js";
import "vue-awesome/icons/map-marker-alt";
import "vue-awesome/icons/calendar-alt";
import "vue-awesome/icons/brands/facebook";
import Icon from "vue-awesome/components/Icon";

export default {
  components: {
    Zondicon: Zondicon,
    "v-Icon": Icon
  },
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      selectedEventName: "",
      selectedEvent: {
        img_1_origin: "https://pbs.twimg.com/media/Cez9d3dWIAIFJD8.jpg",
        img_1_manga:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/1200px-Great_Wave_off_Kanagawa2.jpg",
        img_2_origin:
          "https://upload.wikimedia.org/wikipedia/commons/5/50/Miyagawa_Issh%C3%B4-Spring_Pastimes-H.jpg",
        img_2_manga:
          "http://1.bp.blogspot.com/-TUH3OGTTdaQ/VWfeJVm5Q5I/AAAAAAAAAa8/RyZMVpIzpeg/s1600/japanese_traditional_art__No_2_by_nadav613.jpg",
        img_3_origin:
          "https://www.artranked.com/images/49/495123ab14e4f0fe5b39e5c0d7b6e9d2.jpeg",
        img_3_manga:
          "http://cdn.shopify.com/s/files/1/1374/8369/files/Hiroshige_Shinagawa_Station_large.jpeg?v=1496699672"
      },
      pastEvents: [],
      upcomingEvents: [],
      isPast: true,
      noManga:
        "https://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg",
      noBookMark:
        "https://firebasestorage.googleapis.com/v0/b/ucsd-jsa.appspot.com/o/background%2Fbackground-3.png?alt=media&token=027a138f-18c2-4420-99e0-8dd895fc5c87"
    };
  },
  computed: {
    image_1: function(hover1) {
      var link = this.selectedEvent.img_1_manga;
      if (this.hover1) link = this.selectedEvent.img_1_origin;
      return {
        "background-image": "url(" + link + ")",
        "background-size": "100%",
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
    selectEvent(name, val) {
      var list;
      if (val == 0) {
        list = this.pastEvents;
      } else {
        list = this.upcomingEvents;
      }
      this.selectedEvent.img_1_origin = list.find(
        event => event.name == name
      ).manga.img_1_origin;
      this.selectedEvent.img_1_manga = list.find(
        event => event.name == name
      ).manga.img_1_manga;
      this.selectedEvent.img_2_origin = list.find(
        event => event.name == name
      ).manga.img_2_origin;
      this.selectedEvent.img_2_manga = list.find(
        event => event.name == name
      ).manga.img_2_manga;
      this.selectedEvent.img_3_origin = list.find(
        event => event.name == name
      ).manga.img_3_origin;
      this.selectedEvent.img_3_manga = list.find(
        event => event.name == name
      ).manga.img_3_manga;
      this.selectedEventName = name;
    },
    switchPast(val) {
      if (val == 0) {
        this.isPast = true;
      } else {
        this.isPast = false;
      }
    },
    filterManga(link) {
      if (link == "" || link == null) {
        return this.noManga;
      }
      return link;
    },
    filterBookmark(link) {
      if (link == "") {
        return this.noBookMark;
      }
      return link;
    },
    openLink(fbLink) {
      if (fbLink != "" && fbLink != null) {
        window.open(fbLink);
      } else {
        alert("Facebook event page is not up yet!");
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
            img: this.filterBookmark(event.child("img").val()),
            detail: event.child("detail").val(),
            manga: {
              img_1_origin: this.filterManga(
                event
                  .child("manga")
                  .child("img_1_origin")
                  .val()
              ),
              img_1_manga: this.filterManga(
                event
                  .child("manga")
                  .child("img_1_manga")
                  .val()
              ),
              img_2_origin: this.filterManga(
                event
                  .child("manga")
                  .child("img_2_origin")
                  .val()
              ),
              img_2_manga: this.filterManga(
                event
                  .child("manga")
                  .child("img_2_manga")
                  .val()
              ),
              img_3_origin: this.filterManga(
                event
                  .child("manga")
                  .child("img_3_origin")
                  .val()
              ),
              img_3_manga: this.filterManga(
                event
                  .child("manga")
                  .child("img_3_manga")
                  .val()
              )
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
              img_1_origin: this.filterManga(
                event
                  .child("manga")
                  .child("img_1_origin")
                  .val()
              ),
              img_1_manga: this.filterManga(
                event
                  .child("manga")
                  .child("img_1_manga")
                  .val()
              ),
              img_2_origin: this.filterManga(
                event
                  .child("manga")
                  .child("img_2_origin")
                  .val()
              ),
              img_2_manga: this.filterManga(
                event
                  .child("manga")
                  .child("img_2_manga")
                  .val()
              ),
              img_3_origin: this.filterManga(
                event
                  .child("manga")
                  .child("img_3_origin")
                  .val()
              ),
              img_3_manga: this.filterManga(
                event
                  .child("manga")
                  .child("img_3_manga")
                  .val()
              )
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
  overflow: auto;
  background-image: url("https://us.123rf.com/450wm/pauljune/pauljune1312/pauljune131200023/24374071-perfeita-retro-japon.jpg?ver=6");
  background-size: 300px;
  display: flex;
  box-sizing: border-box;
  align-content: center;
  &-inner {
    box-sizing: border-box;
    height: 100%;
    &.phone {
      width: 100%;
      padding: 100px 10px 10px;
    }

    &.tablet {
      width: 50%;
      padding: 200px 20px 20px;
    }

    &.laptop {
      width: 50%;
      padding: 200px 30px 30px;
    }

    &.desktop {
      width: 50%;
      padding: 200px 50px 50px;
    }
  }

  &.phone {
    flex-direction: column;
  }

  &.tablet {
    flex-direction: row;
  }

  &.laptop {
    flex-direction: row;
  }

  &.desktop {
    flex-direction: row;
  }
}
.manga {
  &-content {
    position: absolute;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;

    &.phone {
      height: 100%;
      width: 95vw;
    }

    &.tablet {
      height: 75vh;
      width: 40vw;
    }

    &.laptop {
      height: 75vh;
      width: 40vw;
    }

    &.desktop {
      height: 75vh;
      width: 40vw;
    }

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
  .filters {
    display: flex;
    text-align: center;

    &.phone {
      padding: 5px 0 5px 10px;
    }

    &.tablet {
      padding: 5px 0 5px 30px;
    }

    &.laptop {
      padding: 5px 0 5px 30px;
    }

    &.desktop {
      padding: 5px 0 5px 30px;
    }
    p {
      cursor: pointer;
      margin: auto 20px auto 0px;
      width: 100px;
      padding: 3px;
      box-sizing: border-box;
      border: 1.4px rgb(49, 49, 49) solid;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.61);
      font-weight: 600;
      border-radius: 5px;
    }
    .active {
      border-color: rgb(203, 122, 164);
      color: rgb(203, 122, 164);
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.61);
      transform: translateY(1px);
    }
  }
  &-content {
    box-sizing: border-box;
    overflow: auto;

    &.phone {
      padding: 5px 0 5px 10px;
      height: 90%;
      width: 95vw;
    }

    &.tablet {
      padding: 5px 0 5px 30px;
      height: 70vh;
      width: 45vw;
    }

    &.laptop {
      padding: 5px 0 5px 30px;
      height: 70vh;
      width: 43vw;
    }

    &.desktop {
      padding: 5px 0 5px 30px;
      height: 70vh;
      width: 43vw;
    }

    .event-container {
      box-sizing: border-box;
      cursor: pointer;
      height: 80px;
      width: 80%;
      margin: 10px 0;
      display: flex;
      overflow: hidden;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.61);
      .hole-container {
        overflow: hidden;
        display: flex;

        &.phone {
          width: 10%;
        }

        &.tablet {
          width: 10%;
        }

        &.laptop {
          width: 10%;
        }

        &.desktop {
          width: 7%;
        }

        .hole {
          margin: auto;
          border-radius: 50%;
          box-shadow: 0 0 0 99999px rgba($color: rgb(145, 120, 93), $alpha: 1);
          &.phone {
            width: 10px;
            height: 10px;
          }

          &.tablet {
            width: 12px;
            height: 12px;
          }

          &.laptop {
            width: 15px;
            height: 15px;
          }

          &.desktop {
            width: 15px;
            height: 15px;
          }
        }
      }
      .info-container {
        display: flex;
        overflow: hidden;
        width: 93%;
        p {
          margin: auto 10px;
        }

        .event-link {
          display: none;
        }
        .event-name {
          font-weight: bold;
        }
        background-image: url("https://previews.123rf.com/images/tukkki/tukkki1410/tukkki141000128/33042224-vintage-hand-drawn-art-deco-pattern.jpg");
        background-size: 150%;
      }
      .img-container {
        display: none;
        box-sizing: border-box;
        padding: 10px;
        vertical-align: middle;
        text-align: center;
        background-image: url("https://firebasestorage.googleapis.com/v0/b/ucsd-jsa.appspot.com/o/background%2Fbackground-3.png?alt=media&token=027a138f-18c2-4420-99e0-8dd895fc5c87");
        .img-content {
          box-sizing: border-box;
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
          border: 5px white solid;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }
      }

      &.active {
        transform: translateX(10px);
        width: 95%;
        height: 150px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.61);
        .hole-container {
          width: 7%;
        }
        .info-container {
          width: 58%;
          flex-direction: column;
          padding: 10px 0;
          font-size: 1.2em;
          p {
            transform: none;
          }
          .event-link {
            display: initial;
          }
        }
        .img-container {
          width: 35%;
          display: table-cell;
        }
      }
    }
  }
}
.icon {
  width: 1em;
  transform: translateY(2px);
}
</style>
