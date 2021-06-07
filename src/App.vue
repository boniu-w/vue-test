<template>
  <div id="app">
    <a-row>
      <a-col span="2">
        <ul>
          <li>
            <router-link to="/home" class="list-group-item">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="list-group-item">about</router-link>
          </li>
        </ul>
      </a-col>

      <a-col span="10">
        <keep-alive v-if="keepAlive">
          <router-view />
        </keep-alive>
      </a-col>
    </a-row>

    <!-- <iframe src="http://datav.aliyun.com/screen/693468" frameborder="0" width="100%" height="900px">baidu</iframe> -->
  </div>
</template>

<script>
import "bootstrap-vue";

export default {
  name: "App",
  computed: {
    keepAlive() {
      return this.$route.meta.keepAlive;
    },
  },
};
</script>



<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
