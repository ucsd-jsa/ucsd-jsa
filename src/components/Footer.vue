<template>
    <footer :class="$mq">
        <ul>
            <li>Support</li>
            <li>Contact Us</li>
        </ul>
        <p>&copy; {{date}} UCSD JSA</p>
    </footer>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>

<style scoped lang="scss">
footer {
  box-sizing: border-box;
  padding: 0 1.5vw 5px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0.3;
  transition: 200ms;
  * {
    color: rgb(255, 255, 255);
    font-size: 1.5vh;
  }
  ul {
      list-style: none;
      display: flex;
      li {
          margin: 0 20px 0 0;
          cursor: pointer;
      }
  }
  &:hover {
    opacity: 0.9;
  }
  &.phone {
    display: none;
  }
}
</style>
