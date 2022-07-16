<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialButton",
  props: {
    title: String,
    link: String,
    image: String,
  },
  data() {
    const openLink = () => {
      window.open(this.link, "_blank");
    };
    return {
      openLink,
    };
  },
});
</script>

<template>
  <button @click="openLink">
    <img :src="image" :alt="title" />
    {{ title }}
  </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  max-width: 300px;
  height: 3rem;
  background: linear-gradient(90deg, #2ecc71 0%, #27ae60 50%, #2ecc71 100%);
  border-radius: 30px;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
}

img {
  position: absolute;
  left: 20px;
  width: 38px;
  height: 38px;
}
</style>
