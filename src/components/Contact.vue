<template>
    <div class="outer" >
        <div class="background"></div>
        <div class="content" :class="$mq">
            <h1>Contact Us</h1>
            <a target = "_blank" class= "links" href="mailto:zec023@ucsd.edu"><v-Icon class="icon" name="envelope-square" scale="2" /><p>E-mail</p></a>
            <h1>Link</h1>
            <a target = "_blank" class= "links" href="https://www.facebook.com/groups/ucsdjsa/"><v-Icon class="icon" name="brands/facebook" scale="2" /><p>Facebook</p></a>
            <a target = "_blank" class= "links" href="https://www.instagram.com/ucsdjsa/?hl=en"><v-Icon class="icon" name="brands/instagram" scale="2" /><p>Instagram</p></a>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import "vue-awesome/icons/brands/facebook";
import "vue-awesome/icons/brands/instagram";
import "vue-awesome/icons/envelope-square";
import Icon from "vue-awesome/components/Icon";
export default {
  components: {
    "v-Icon": Icon
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.links {
  display: flex;
  font-size: 1.2em;
  margin: 20px;
  .icon {
    margin-right: 10px;
  }

  p {
    margin: auto 0;
  }
}
.background {
  background-image: url("https://previews.123rf.com/images/tukkki/tukkki1410/tukkki141000124/33042129-vintage-hand-drawn-art-deco-pattern.jpg");
  background-size: 400px;
  filter: blur(1px);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -100;
}
.content {
  background-color: rgba(255, 255, 255, 0.4);
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  &.phone {
    padding:150px 20% 10%;
  }
  &.tablet {
    padding:200px 20% 10%;
  }
  &.laptop {
    padding:200px 20% 10%;
  }
  &.desktop {
    padding:15% 20% 10%;
  }
}
</style>
