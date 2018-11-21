<template>
    <div class='home-body fullpage-container'>
        <ul class='nav-group'>
            <li class='nav-dots' v-bind:class='{active:index == 0}' @click='moveTo(0)'></li>
            <li class='nav-dots' v-bind:class='{active:index == 1}' @click='moveTo(1)'></li>
            <li class='nav-dots' v-bind:class='{active:index == 2}' @click='moveTo(2)'></li>
        </ul>
        <div class='fullpage-wp' v-fullpage='opts' ref='homePage'>
            <div class='page-1 page'>
                <div class='page-1-content'>
                    <my-agile></my-agile>
                </div>
            </div>
            <div class='page-2 page'>
                <div class="page-2-background"></div>
                <div class='page-2-content' :class="$mq">
                    <h1>Upcoming Events</h1>
                    <img src='../assets/Machine_Full.png' alt='Events'>
                    <event-card v-bind:allEvents="upcomingEvents"></event-card>
                </div>
            </div>
            <div class='page-3 page'>
                <div class="page-3-background"></div>
                <div class='page-3-content' :class="$mq">
                    <h1>Past Events</h1>
                    <event-card v-bind:allEvents="pastEvents"></event-card>
                    <img src='../assets/Machine_Full.png' alt='Events'>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import MyAgile from "./MyAgile";
import EventCard from "./EventCard";
import { db } from "../Firebase.js";

export default {
  components: {
    "my-agile": MyAgile,
    "event-card": EventCard
  },
  data() {
    var that = this;
    return {
      index: 0,
      opts: {
        start: 0,
        dir: "v",
        duation: 500,
        beforeChange: function(ele, current, next) {
          //console.log("before", current, next);
          that.index = next;
        },
        afterChange: function(ele, current, next) {
          //console.log("after", current);
          that.index = current;
        }
      },
      pastEvents: [],
      upcomingEvents: []
    };
  },
  methods: {
    moveNext() {
      this.$refs.homePage.$fullpage.moveNext();
    },
    movePrev() {
      this.$refs.homePage.$fullpage.movePrev();
    },
    moveTo: function(index) {
      this.$refs.homePage.$fullpage.moveTo(index, true);
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
            detail: event.child("detail").val()
          });
        } else {
          this.pastEvents.push({
            name: event.key,
            date: new Date(event.child("date").val()),
            location: event.child("location").val(),
            fbLink: event.child("fbLink").val(),
            img: event.child("img").val(),
            detail: event.child("detail").val()
          });
        }
      });
    });
  }
};
</script>

<style scoped lang='scss'>
.slide {
  background: {
    position: center;
    size: cover;
  }
  height: 500px;

  &:before {
    background-color: rgba(#000, 0.2);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.nav-group {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-height: 18vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 1.5vw;
  background-color: rgba(#bfbfbf, 0);

  .nav-dots {
    margin: auto;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: #ffffffb6 4px solid;

    &.active {
      background: #da6f6f;
      border: #da6f6f 4px solid;
    }
  }
}

.page {
  display: block;
  text-align: center;
  font-size: 26px;
}
.page-1 {
  &-content {
    background-color: #ebebeb;

    height: 100%;
    width: 100%;
  }
}
.page-2 {
  box-sizing: border-box;
  &-background {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -100;
    filter: blur(1px);
    background-image: url("https://previews.123rf.com/images/favetelinguis/favetelinguis1507/favetelinguis150700133/42012790-vector-seamless-pattern-with-hand-drawn-japanese-symbols-including-geisha-sakura-bonsai-lantern-cute.jpg");
    background-size: 800px;
  }
  &-content {
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-content: center;
    &.phone {
      flex-direction: column;
      img {
        display: none;
      }
      h1 {
        font-size: 9vw;
        margin: 32vw 0 20px;
      }
      .card-carousel-wrapper {
        margin: 0 auto;
      }
    }
    &.tablet {
      padding-top: 10vh;
      h1 {
        position: absolute;
        top: 23vh;
        right: 10vw;
      }
      img {
        margin: auto 20px;
        height: 40%;
      }
    }
    &.laptop {
      padding-top: 10vh;
      h1 {
        position: absolute;
        top: 24vh;
        right: 10vw;
      }
      img {
        margin: auto 20px;
        height: 40%;
      }
    }
    &.desktop {
      padding-top: 10vh;
      h1 {
        position: absolute;
        top: 24vh;
        right: 10vw;
        font-size: 4vw;
      }
      img {
        margin: auto 20px auto 60px;
        height: 40%;
      }
    }
  }
}
.page-3 {
  box-sizing: border-box;
  &-background {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -100;
    filter: blur(1px);
    background-image: url("https://previews.123rf.com/images/favetelinguis/favetelinguis1507/favetelinguis150700130/42012788-travel-to-japan-concept-vector-seamless-pattern-with-hand-drawn-japanese-symbols-including-geisha-sa.jpg");
    background-size: 800px;
    background-position: 50%;
  }
  &-content {
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;
    &.phone {
      flex-direction: column;
      img {
        display: none;
      }
      h1 {
        font-size: 9vw;
        margin: 32vw 0 20px;
      }
      .card-carousel-wrapper {
        margin: 0 auto;
      }
    }
    &.tablet {
      padding-top: 10vh;
      h1 {
        position: absolute;
        top: 23vh;
        left: 10vw;
      }
      img {
        margin: auto 20px;
        height: 40%;
      }
    }
    &.laptop {
      padding-top: 10vh;
      h1 {
        position: absolute;
        top: 24vh;
        left: 10vw;
      }
      img {
        margin: auto 20px;
        height: 40%;
      }
    }
    &.desktop {
      padding-top: 10vh;
      h1 {
        position: absolute;
        top: 24vh;
        left: 10vw;
        font-size: 4vw;
      }
      img {
        margin: auto 50px auto 20px;
        height: 40%;
      }
      .card-carousel-wrapper {
        margin-left: 50px;
      }
    }
  }
}

h3,
p {
  font-size: 16px;
}
</style>

