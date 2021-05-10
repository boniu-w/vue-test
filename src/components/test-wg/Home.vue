<template>
  <div>
    <a-row>
      <a-col span="6" style="{background: red, height: 400px}">
        <router-link to="/home/message">message</router-link>
      </a-col>

      <a-col span="6">
        <router-link to="/home/news">news</router-link>
      </a-col>
    </a-row>
    <a-row>
      <router-view />
    </a-row>
  </div>
</template>


<script>
export default {
  components: {},

  methods: {},
};
</script>