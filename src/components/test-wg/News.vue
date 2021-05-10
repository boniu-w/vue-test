<template>
  <div>
    <li v-for="news in newsData" :key="news.id">
      <a href="#">{{ news.content }}</a>
    </li>

    <li>sldjfsldjf</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsData: [
        {
          id: 0,
          content: "123123",
        },
        {
          id: 1,
          content: "sdfsdfsd",
        },
      ],
    };
  },
};
</script>