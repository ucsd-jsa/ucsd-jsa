<template>
    <div id="box">
        <h4>{{eventInfos.name}}</h4>
        <h5>{{eventInfos.date}}</h5>
        <h5>{{eventInfos.time}}</h5>
        <h5>{{eventInfos.location}}</h5>
        <a v-bind:href=eventInfos.link>Link to fbpage</a>
    </div>
</template>

<script>
export default {
  props: ["eventInfos"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
    #box {
        background: white;
        border: 1px solid #C9C9C9;
        border-radius: 40px;
        width: 240px;
        height: 300px;
    }

</style>
