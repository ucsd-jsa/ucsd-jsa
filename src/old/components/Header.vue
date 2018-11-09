<template>
    <header ref="refHeader" class="header-original">
        <img id="logo" src="../assets/JSAlogoattemptred.png" alt="UCSD_JSA_LOGO">
        <ul class="tabs">
            <li class="tab" :style="{'color':'#CB7AA4'}">About</li>
            <li class="tab">Events</li>
            <li class="tab">Board</li>
            <li class="tab">Contact</li>
        </ul>
    </header>
</template>

<script>
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

/*

      if (distanceY > shrinkOn) {
        this.$refs.refHeader.classList.remove("header-original");
        this.$refs.refHeader.classList.add("header-smaller");
      } else {
        this.$refs.refHeader.classList.remove("header-smaller");
        this.$refs.refHeader.classList.add("header-original");
      }
*/
    }
  }
};
</script>

<style scoped lang="scss">
$logo-w-and-h: 120px;
$logo-w-and-h-min: 50px;
$header-l-r-pad: 8vw;
.header-original {
  width: 100%;
  height: $logo-w-and-h + 30px;
  background: rgba(#eeeeee, 0.2);
  position: fixed;
  border-bottom: rgba(#000, 0.1) solid 1px;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  #logo {
    width: $logo-w-and-h;
    height: $logo-w-and-h;
    margin: 15px 0 15px $header-l-r-pad;
  }

  .tabs {
    list-style: none;
    display: flex;
    margin-right: $header-l-r-pad;
    .tab {
      position: relative;
      margin: 100px 1.5vw auto 1.5vw;
      font-size: 25px;
      cursor: pointer;
    }
  }
}
</style>