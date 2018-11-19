<template>
    <header ref='refHeader' class='header-original' :class="$mq">
        <img id='logo' src='../assets/JSAlogoattemptred.png' alt='UCSD_JSA_LOGO'>
        <ul class='tabs'>
            <li class='tab'><router-link to="/" :style='{"color":"#CB7AA4"}'>Home</router-link></li>
            <li class='tab'><router-link to="/about">About</router-link></li>
            <li class='tab'><router-link to="/events">Events</router-link></li>
            <li class='tab'><router-link to="/board">Board</router-link></li>
            <li class='tab'><router-link to="/contact">Contact</router-link></li>
        </ul>
    </header>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  },
  created() {
    console.log("created scroll listener");
    window.addEventListener("mousewheel", this.resizeHeaderOnScroll);
  },
  methods: {
    resizeHeaderOnScroll: function() {
      const distanceY =
        window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 200;
      console.log("header is" + this.$refs.refHeader);
    }
  }
};
</script>

<style scoped lang='scss'>
.header-original {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  background: rgba(#eeeeee, 0.2);
  border-bottom: rgba(#000, 0.1) solid 1px;
  box-sizing: border-box;
  &:hover {
    background: rgba(#eeeeee, 0.5);
  }
  img {
    margin: auto 0;
  }

  .tabs {
    box-sizing: border-box;
    list-style: none;
    display: flex;
    .tab {
      cursor: pointer;
      font-weight: bold;
      a {
        text-decoration: none;
      }
    }
  }

  &.phone {
    padding: 0 5vw;
    height: 70px;
    img {
      width: 50px;
      height: 50px;
    }
    .tabs {
      padding-bottom: 2px;
      .tab {
        margin: auto 5px 0 5px;
        a {
          font-size: 1em;
        }
      }
    }
  }
  &.tablet {
    padding: 0 5vw;
    height: 150px;
    img {
      width: 120px;
      height: 120px;
    }
    .tabs {
      padding-bottom: 10px;
      .tab {
        margin: auto 15px 0 15px;
        a {
          font-size: 1.4em;
        }
      }
    }
  }
  &.laptop {
    padding: 0 7vw;
    height: 150px;
    img {
      width: 120px;
      height: 120px;
    }
    .tabs {
      padding-bottom: 10px;
      .tab {
        margin: auto 20px 0 20px;
        a {
          font-size: 1.4em;
        }
      }
    }
  }
  &.desktop {
    padding: 0 8vw;
    height: 150px;
    img {
      width: 120px;
      height: 120px;
    }
    .tabs {
      padding-bottom: 10px;
      .tab {
        margin: auto 30px 0 30px;
        a {
          font-size: 1.6em;
        }
      }
    }
  }
}
</style>
