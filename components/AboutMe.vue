<script setup lang="ts">
import { reactive } from 'vue'

interface AboutMe {
  title: string,
  text: string
}

const aboutMe: AboutMe = reactive({
  title: 'ABOUT ME',
  text: `
    Developing systems on web since 2007 (But never as a true web designer as you can see :D), I had the oportunity to work with a vast number of technologies.
    Everything started with Java EE, using pojos, jsp, css, html, javascript, struts, tomcat and hibernate. Later, around 2012, I started to study and work with Ruby on
    RubyOnRails framework. At 2016 still heavily working with RoR I had my first experiences with decoupled archtectures and I could create and evolve Rest APIs
    and also some clients like progressive webapps and hybrid apps using cool javascript frameworks like Ionic (Angular) and Quasar (Vue.js). At 2017 I had my
    first international experience working remotelly with Python, once more time working developing to web using Pyramid and Flask as main web frameworks.
    Big challenges everyday: huge data set, legacy code, poor testing coverage, high coupling, bottlenecks, but also a brilliant and diligent team working hard in
    search of constant learning improvement. In mid-2022, I decided to start a new tnternational adventure, I wanted to work more intensively with javascript,
    and I accepted an offer where I finally could work with javascript on back-end (Node, Express) and also on front-end (Vue.js, Nuxt.js), helping
    to create and evolve high demand APIs, microservices, and fancy web systems.
  `,
})
</script>

<template>
  <section class="about-me">
    <h2>{{ aboutMe.title }}</h2>
    <p>{{ aboutMe.text }}</p>
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
</style>