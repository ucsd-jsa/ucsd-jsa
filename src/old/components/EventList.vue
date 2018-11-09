<template>
    <ul>
        <li v-for="anEvent in allEvents" :key=anEvent.name>
            <event-box v-bind:eventInfos=anEvent></event-box>
        </li>
    </ul>
</template>

<script>
import EventBox from "./Event.vue";
export default {
  components: {
    "event-box": EventBox
  },
  props: ["allEvents"],
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
    ul {
        margin-top: 250px;
        list-style: none;
        display: flex;
        position: fixed;
        overflow:auto;
        li {
            margin: 0 25px 0 0;
        }
    }
</style>
