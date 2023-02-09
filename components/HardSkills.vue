<script setup lang="ts">
import { reactive, ref } from 'vue'

const hardSkills = reactive(
  [
    [
      {
        cover: 'J',
        name: 'Javascript',
        subs: ['Node', 'Npm', 'Gulp', 'Typescript'],
        years: 15
      },
      {
        cover: 'V',
        name: 'Vue.js',
        subs: ['Vue 2', 'Vue 3', 'Vue-cli', 'Webpack', 'Vuex', 'Vuetify', 'BootstrapVue'],
        years: 8
      },
    ],
    [
      {
        cover: 'P',
        name: 'Python',
        subs: ['Jinja', 'Pymongo', 'Graphene', 'Alenbic', 'Marshmallow', 'Pyramid', 'Flask', 'MongoEngine'],
        years: 6
      },
      {
        cover: 'G',
        name: 'Git',
        subs: ['Github', 'Github Actions', 'Bitbucket', 'Bitbucket Pipelines', 'Jira'],
        years: 10
      },
      {
        cover: 'N',
        name: 'Nuxt.js',
        subs: [],
        years: 1
      },
    ],
    [
      {
        cover: 'C',
        name: 'CSS',
        subs: ['SASS', 'SCSS'],
        years: 8
      },
      {
        cover: 'G',
        name: 'Mongodb',
        subs: [],
        years: 6
      },
      {
        cover: 'E',
        name: 'Express',
        subs: [],
        years: 1
      },
      {
        cover: 'G',
        name: 'GraphQL',
        subs: [],
        years: 4
      },
    ],
  ],
)
let colorIndex: number = 0

function getColor(): string {
  const colors: string[] = ['deep-grey', 'light-green', 'deep-blue', 'purple', 'light-grey', 'light-blue', 'deep-green']
  const color = getItemInSequence(colorIndex, colors)
  colorIndex++
  return color
}
</script>

<template>
  <section class="hard-skills">
    <div v-for="(column, index) in hardSkills" v-bind:key="`column_${index}`" class="skills-row">
      <SkillCard v-for="(skill, index) in column" v-bind:key="`${skill.name}_${index}`" :skill="skill"
        :color="getColor()" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hard-skills {
  min-height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .skills-row {
    min-height: 200px;
    width: 100%;
    display: flex;
  }
}
</style>