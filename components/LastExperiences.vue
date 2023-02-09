<script setup lang="ts">
import { reactive } from 'vue'

interface Experience {
  cover: string,
  remote: boolean,
  jobTitle: string,
  company: string,
  startDate: Date,
  endDate: Date,
  jobDescription: string
}

const experiences: Experience[] = reactive(
  [
    {
      cover: 'R',
      remote: true,
      jobTitle: 'Fullstack Software Engineer',
      company: 'Rapchat Inc',
      startDate: new Date('2022-07-01'),
      endDate: new Date('2023-01-27'),
      jobDescription: `
        Developed and evolved high performance APIs to support mobile and web
        clients, using Express, Mongoose and Mongodb. Designed and implemented
        microservices using Javascript or Python on Google Cloud Platform. Developed
        and integrated public and private decoupled web applications to support the
        product using NUXT.JS as the main web framework.
      `
    },
    {
      cover: 'A',
      remote: true,
      jobTitle: 'Senior Software Engineer Supervisor',
      company: 'Anchor Loans',
      startDate: new Date('2022-04-01'),
      endDate: new Date('2022-06-31'),
      jobDescription:`
        Managed teams in specific Business areas, coaching developers on their careers
        and in good development practices. Worked recruiting new talents as well.
      `
    },
    {
      cover: 'A',
      remote: true,
      jobTitle: 'Senior Software Engineer',
      company: 'Anchor Loans',
      startDate: new Date('2017-10-01'),
      endDate: new Date('2022-03-27'),
      jobDescription: `
        Developed and evolved public and internal web applications using Python,
        Pyramid, Flask, Vue.js, GraphQL, Mongodb and other technologies. Redesigned
        and Rewrote some legacy web applications in order to enhance usability,
        performance and maintainability.
      `
    },
    {
      cover: 'C',
      remote: true,
      jobTitle: 'Tech Lead and Scrum Master',
      company: 'Caverna Labs',
      startDate: new Date('2018-12-01'),
      endDate: new Date('2022-08-01'),
      jobDescription: `
        Mediated line of business and engineering team in order to create and evolve
        accurate solutions as much as possible. Managed engineering team, mentoring
        and helping developers on best design, developing practices and agile
        methodologies. Recruited and trained new talents as well.
      `
    },
    {
      cover: 'C',
      remote: false,
      jobTitle: 'Web System Developer',
      company: 'Caverna Labs',
      startDate: new Date('2014-01-01'),
      endDate: new Date('2017-09-01'),
      jobDescription: `
        Developed and evolved public and internal web applications using Ruby on Rails.
        Developed progressive web applications and hybrid mobile apps using Ionic
        (Angular) and Quasar (Vue.js) Frameworks.
      `
    },
  ]
)

function getColor(index: number): string {
  const colors: string[] = ['deep-grey', 'light-green', 'deep-blue', 'deep-green', 'light-blue'];
  return getItemInSequence(index, colors);
}
</script>

<template>
  <section class="last-experiences">
    <Experience
      v-for="(experience, index) in experiences"
      v-bind:key="`${experience.company}_${index}`"
      :experience="experience" :color="getColor(index)"
    />
  </section>
</template>

<style lang="scss" scoped>
.last-experiences {
  min-height: 800px;
  width: 100%;
  display: flex;
}
</style>