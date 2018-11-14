<template>
    <div class="outer" :class="$mq">
        <div class="container officers">
            <h1 class="header">2018-2019 Officers</h1>
            <div class="container-inner" v-for="item in officers" v-bind:key="item.name">
                <card :data-image="item.img">
                    <h1 slot="header">{{item.name}}</h1>
                    <p slot="content">{{item.intro}}</p>
                </card>
            </div>
        </div>
        <div class="container staffs" :class="$mq">
            <h1 class="header">2018-2019 Staffs</h1>
            <div class="container-inner" v-for="item in staffs" v-bind:key="item.name">
                <card :data-image="item.img">
                    <h1 slot="header">{{item.name}}</h1>
                    <p slot="content">{{item.intro}}</p>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Card from "./Card";
import { db } from "../Firebase.js";

export default {
  components: {
    card: Card
  },
  data() {
    return {
      officers: [],
      staffs: []
    };
  },
  created: function() {
    db.ref("karutas").once("value", karutas => {
      karutas.forEach(item => {
        if (item.child("position").val() == "Staff") {
          this.staffs.push({
            name: item.key,
            img: item.child("img").val(),
            intro: item.child("intro").val(),
            major: item.child("major").val(),
            year: item.child("year").val(),
            position: item.child("position").val()
          });
        } else {
          this.officers.push({
            name: item.key,
            img: item.child("img").val(),
            intro: item.child("intro").val(),
            major: item.child("major").val(),
            year: item.child("year").val(),
            position: item.child("position").val()
          });
        }
      });
    });
  }
};
</script>

<style scoped lang="scss">
.outer {
  background-color: #bcaaa4;
  &.phone {
    padding-top: 80px;
    .header {
      font-size: 8vw;
    }
    .staffs {
        margin-top: 80px;
    }
  };
  &.tablet {
    padding-top: 120px;
    .header {
      font-size: 5vw;
    }
    .staffs {
        margin-top: 80px;
    }
  };
  &.laptop {
    padding-top: 60px;
    .header {
      font-size: 4vw;
    }
    .staffs {
        margin-top: 80px;
    }
  };
  &.desktop {
    .header {
      font-size: 2vw;
    }
    .staffs {
        margin-top: 80px;
    }
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  * {
    color: white;
  }
  box-sizing: border-box;
  &-inner {
    height: 100%;
  }
  .header {
    font-size: 40px;
    position: absolute;
    transform: translateY(-60px);
  }
}

.officers {
  padding: 15vw 5vw 4vw;
}
.staffs {
  padding: 5vw 5vw 8vw;
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: #5d4037;
  text-align: center;
}

p {
  line-height: 1.5em;
}

h1 + p,
p + p {
  margin-top: 10px;
}
</style>
