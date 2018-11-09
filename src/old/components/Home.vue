<template>
    <div class="home-body fullpage-container">
        <ul class="nav-group">
            <li class="nav-prev" @click="movePrev">
                <img src="../assets/arrow_up.png" alt="">
            </li>
            <li class="nav-dots" v-bind:class="{active:index == 0}" @click="moveTo(0)"></li>
            <li class="nav-dots" v-bind:class="{active:index == 1}" @click="moveTo(1)"></li>
            <li class="nav-dots" v-bind:class="{active:index == 2}" @click="moveTo(2)"></li>
            <li class="nav-next" @click="moveNext">
                <img src="../assets/arrow_down.png" alt="">
            </li>
        </ul>
        <div class="fullpage-wp" v-fullpage='opts' ref='homePage'>
            <div class="page-1 page">
                <div class="page-1-content">
                    <carousel 
                    v-animate="{value: 'fadeIn'}" 
                    :per-page="1" 
                    :autoplay='true'
                    :autoplayTimeout= 5000 
                    :autoplayHoverPause='true' 
                    :loop='true'
                    paginationActiveColor='#cb7aa4'>
                        <slide>
                            <div class="img-holder">
                                <img class="slide-show-img" src="../assets/JSAFBbannerattempt.jpg" alt=""> 
                            </div>
                        </slide>
                        <slide>
                            <div class="img-holder">
                                <img class="slide-show-img" src="../assets/RMW00468.jpg" alt="">   
                            </div>
                        </slide>
                        <slide>
                            <div class="img-holder">
                                <img class="slide-show-img" src="../assets/JSAFBbannerattempt.jpg" alt="">  
                            </div>
                        </slide>
                    </carousel>
                </div>
                
            </div>
            <div class="page-2 page">
                <div class="page-2-content">
                    <h1>Upcoming Events</h1>
                    <img id="event-machine" src="../assets/Machine_Full.png" alt="Events">
                    <event-list v-bind:allEvents="upcomingEvents"></event-list>   
                </div>
            </div>
            <div class="page-3 page">
                <div class="page-3-content">
                    <h1>Past Events</h1>
                    <event-list v-bind:allEvents="pastEvents"></event-list>
                </div>   
                <app-footer></app-footer>
            </div>
        </div>
        
    </div>
    
</template>

<script>
import Footer from "./Footer.vue";
import EventList from "./EventList.vue";
export default {
  components: {
    "app-footer": Footer,
    "event-list": EventList
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
      upcomingEvents: [
        {
          name: "test1",
          date: "somedate1",
          time: "sometime1",
          location: "somewhere1",
          link: "https://www.google.com"
        },
        {
          name: "test2",
          date: "somedate2",
          time: "sometime2",
          location: "somewhere2",
          link: "https://www.google.com"
        },
        {
          name: "test3",
          date: "somedate3",
          time: "sometime3",
          location: "somewhere3",
          link: "https://www.google.com"
        },
        {
          name: "test4",
          date: "somedate4",
          time: "sometime4",
          location: "somewhere4",
          link: "https://www.google.com"
        }
      ],
      pastEvents: [
        {
          name: "test1",
          date: "somedate1",
          time: "sometime1",
          location: "somewhere1",
          link: "https://www.google.com"
        },
        {
          name: "test2",
          date: "somedate2",
          time: "sometime2",
          location: "somewhere2",
          link: "https://www.google.com"
        },
        {
          name: "test3",
          date: "somedate3",
          time: "sometime3",
          location: "somewhere3",
          link: "https://www.google.com"
        },
        {
          name: "test4",
          date: "somedate4",
          time: "sometime4",
          location: "somewhere4",
          link: "https://www.google.com"
        }
      ]
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
  }
};
</script>

<style scoped lang="scss">
#event-machine {
  position: absolute;
  top: 40vh;
  left: 10vw;
  height: 40%;
}
.app-footer {
  position: fixed;
}
.slide-show-img {
  vertical-align: middle;
  max-width: 100%;
  margin: auto 0;
}

.img-holder {
  height: 75vh;
  overflow: hidden;
  display: flex;
  object-fit: contain;
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

  max-height: 32vh;
  width: 35px;
  border-radius: 20px;
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 2vw;
  background-color: rgba(#bfbfbf, 0);
  &:hover {
      transition: 600ms;
      background-color: rgba(#bfbfbf, 0.4);
      .nav-dots {
        border: #ffffff 1.5px solid;        
        background: #ffffff;
      }
      .nav-prev,
      .nav-next {
        img {
            opacity: 0.9;
        }
      }
  }

  .nav-prev,
  .nav-next {
    width: 20px;
    height: 14.2857143px;
    img {
      max-width: 100%;
      object-fit: contain;
      opacity: 0.5;
    }
    &:active {
      img {
        opacity: 1;
      }
    }
  }

  li {
    margin: auto;
    width: 10px;
    height: 10px;
  }

  .nav-dots {
    border-radius: 50%;
    border: #ffffff70 1.5px solid;

    &.active {
      background: #da6f6f;
      border: #da6f6f 1px solid;
    }
  }
}

.page {
  display: block;
  text-align: center;
  font-size: 26px;
}
.page-1 {
  padding-top: 170px;
  .page-1-content {
      background-color: #ebebeb;
  }
}
.page-2 {
  padding-top: 170px;
  padding-bottom: 20px;
  .page-2-content {
    background-color: #ffd5d5;
    height: 100%;
    h1 {
      margin: 170px 10vw 0 0;
      float: right;
    }
    ul {
      left: 25vw;
      right: 10vw;
    }
  }
}
.page-3 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 170px;
  .page-3-content {
    background-color: #e1f2fe;
    height: 100%;
    margin-bottom: 20px;
    h1 {
      margin: 170px 0 0 10vw;
      float: left;
    }
    ul {
      left: 10vw;
      right: 25vw;
    }
  }
}
h3,
p {
  font-size: 16px;
}
</style>
