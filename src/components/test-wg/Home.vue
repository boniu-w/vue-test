<template>
  <div>
    <a-row>
      <a-col span="3">
        <ul>
          <li>
            <router-link to="/home/message">message</router-link>
          </li>
          <li>
            <router-link to="/home/news">news</router-link>
          </li>
        </ul>
      </a-col>

      <a-col span="9">
        <router-view />
      </a-col>
    </a-row>
  </div>
</template>


<script>
export default {
  components: {},

  methods: {},
};
</script>