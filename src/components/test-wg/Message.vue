<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      message: "hello world ",
    };
  },
};
</script>