<script setup lang="ts">
import SocialButton from "./components/SocialButton.vue";
</script>

<template>
  <main>
    <div class="profile-container">
      <img
        src="https://github.com/madruga665.png"
        alt="fotografia de Luciano"
      />
      <h1>Luciano Amâncio</h1>
      <p>{{"<Desenvolvedor Web />"}}</p>
    </div>
    <section>
      <SocialButton
        title="Github"
        link="http://github.com/madruga665"
        image="icons/icons8-github.svg"
      />
      <SocialButton
        image="icons/icons8-linkedin.svg"
        title="LinkedIn"
        link="https://www.linkedin.com/in/luciano-amâncio/"
      />
      <SocialButton
        image="icons/icons8-facebook.svg"
        title="Facebook"
        link="https://www.facebook.com/madruga665"
      />
      <SocialButton
        image="icons/icons8-instagram.svg"
        title="Instagram"
        link="https://www.instagram.com/madruga665"
      />
      <SocialButton
        image="icons/icons8-adobe-acrobat-reader.svg"
        title="Currículo"
        link="docs/curriculo.pdf"
      />
    </section>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  min-height: 100vh;
  background: #2c3e50;
}
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
}
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 5px solid #2ecc71;
}
h1 {
  color: #fff;
  font-size: 2rem;
  text-align: center;
}
p {
  color: #fff;
  font-size: 1rem;
  text-align: center;
}
section {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  gap: 1.5rem;
}
</style>
