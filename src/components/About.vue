<template>
    <div class="outer">
        <div class="background"></div>
        <div class="content">
            <h1 class="main-header">Welcome to UCSD JSA!</h1>
            <h2 class="sub-header">Japanese Student Association</h2>
            <p class="description">JSA is a social org that promotes new connections for Japanese and other ethnicities alike, establishing new bonds and spreading japanese culture through various events held throughout the </p>
            <video controls>
                <source src="https://firebasestorage.googleapis.com/v0/b/ucsd-jsa.appspot.com/o/JSA%20Officer%20Intro%202018-2019.mp4?alt=media&token=99a5ceb4-b15c-4e06-9f62-91c982f387c8" type="video/mp4"/>
            </video>

        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.background {
  background-image: url("https://previews.123rf.com/images/ssstocker/ssstocker1506/ssstocker150600007/40832877-koi-chinese-carp-seamless-pattern-vector-blue-background-with-fish.jpg");
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
  padding: 150px 15% 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  .main-header {
    margin: 20px auto 0;
    font-size: 2.5em;
  }
  .sub-header {
    margin: 0 auto 20px;
    font-size: 1.7em;
  }
  .video-header {
    margin: 20px auto 0;
    font-size: 1.7em;
  }
  .description {
      font-size: 1.2em;
      font-weight: 590;
  }
  video {
    margin: 10px auto;
    width: 60%;
  }
}
</style>
