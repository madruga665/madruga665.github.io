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
  height: 2.5rem;
  background: rgb(46, 204, 113);
  background: linear-gradient(
    90deg,
    rgba(46, 204, 113, 1) 0%,
    rgba(39, 174, 96, 1) 50%,
    rgba(46, 204, 113, 1) 100%
  );
  border-radius: 30px;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
}

button:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  transform: scale(1.04);
}

img {
  position: absolute;
  left: 20px;
  width: 38px;
  height: 38px;
}
</style>
