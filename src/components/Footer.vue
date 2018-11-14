<template>
    <footer :class="$mq">
        <ul>
            <li>Support</li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><a target="_blank" href="https://www.facebook.com/groups/ucsdjsa/">Facebook</a></li>
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
  padding: 3px 1.5vw 3px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  opacity: 0.3;
  transition: 200ms;

  * {
    color: rgb(70, 70, 70);
    font-size: 1.35vh;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      margin: 0 20px 0 0;
      cursor: pointer;
      a {
        text-decoration: none;
      }
    }
  }
  &:hover {
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.507);
  }
  &.phone {
    display: none;
  }
}
</style>
