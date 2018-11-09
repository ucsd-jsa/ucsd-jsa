<template>
    <transition name="fade">
        <div v-if="mask_show" class="mask-container">
            <transition name="fade">   
                <img v-if="logo_show" src="../assets/JSAlogoattemptred.png" alt="logo">
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
  data () {
    return {
        logo_show: false,
        mask_show: true
    }
  },
  mounted: function () {
      this.logo_show = true;
      setTimeout(()=> {
          this.mask_show = false;
      }
      , 1000);
  }
}
</script>

<style scoped lang="scss">
    .fade-enter-active{
        transition: opacity .8s;
    }

    .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    .mask-container {
        position: absolute;
        z-index: 1000;
        background-color: white;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
    }
    img {
        width: 60%;
        max-height: 70vh;
        object-fit: contain;
        margin: auto auto;
    }
</style>
