<script setup lang="ts">

interface AboutMe {
  title: string,
  text: string
}

defineProps<{ data: AboutMe }>()
</script>

<template>
  <section class="about-me">
    <h2>{{ data.title }}</h2>
    <p>{{ data.text }}</p>
  </section>
</template>

<style lang="scss" scoped>
.about-me {
  min-height: 400px;
  display: flex;
  padding: 80px;
  gap: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 0px;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
  }
  p {
    margin: 0px;
    font-size: 22px;
    line-height: 26px;
    text-align: justify;
    padding-inline: 10%;
  }
}

@media (max-width: 1080px) {
  .about-me {
    gap: 27px;
    padding: 20px 10px;

    h2 {
      font-size: 1.2rem;
      text-align: center;
    }
    p {
      font-size: 1.0rem;
      padding-inline: 5%;
    }
  }
}
</style>