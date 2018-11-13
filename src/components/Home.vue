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
                <div class='page-2-content'>
                    <h1>Upcoming Events {{$mq}}</h1>
                    <img id='event-machine' src='../assets/Machine_Full.png' alt='Events' v-if="$mq != 'phone'">
                   <event-card v-bind:allEvents="upcomingEvents"></event-card>
                </div>
            </div>
            <div class='page-3 page'>
                <div class='page-3-content'>
                    <h1>Past Events</h1>
                    <event-card v-bind:allEvents="pastEvents"></event-card>
                </div>
                <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Footer from "./Footer";
import MyAgile from "./MyAgile";
import EventCard from "./EventCard";
import Firebase from "firebase";
var database = Firebase.initializeApp({
  apiKey: "AIzaSyDLW28ig83t3MkGlZFXXNaIQTgCcf-cQ2k",
  authDomain: "ucsd-jsa.firebaseapp.com",
  databaseURL: "https://ucsd-jsa.firebaseio.com",
  projectId: "ucsd-jsa",
  storageBucket: "ucsd-jsa.appspot.com",
  messagingSenderId: "784662637069"
})
  .database()
  .ref("events");

export default {
  components: {
    "app-footer": Footer,
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
          console.log("before", current, next);
          that.index = next;
        },
        afterChange: function(ele, current, next) {
          console.log("after", current);
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
    database.once("value", events => {
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
#event-machine {
  &.phone {
    display: none;
  }
  position: absolute;
  top: 40vh;
  left: 10vw;
  height: 40%;
}

.app-footer {
  position: fixed;
}

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
  .page-1-content {
    background-color: #ebebeb;

    height: 100%;
    width: 100%;
  }
}
.page-2 {
  .page-2-content {
    background-color: #ffd5d5;
    height: 100%;
    h1 {
      position: absolute;
      top: 250px;
      right: 10vw;
    }
    .card-carousel-wrapper {
      position: absolute;
      top: 40vh;
      right: 8vw;
    }
  }
}
.page-3 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .page-3-content {
    background-color: #e1f2fe;
    height: 100%;
    margin-bottom: 20px;
    h1 {
      position: absolute;
      top: 220px;
      left: 10vw;
    }
    .card-carousel-wrapper {
      position: absolute;
      top: 35vh;
      left: 8vw;
    }
  }
}
h3,
p {
  font-size: 16px;
}
</style>

