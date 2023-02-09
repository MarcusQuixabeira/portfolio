<script setup lang="ts">
import { reactive, ref } from 'vue'

const hardSkills = reactive(
  [
    [
      {
        cover: 'J',
        name: 'Javascript',
        years: 5
      },
      {
        cover: 'V',
        name: 'Vue.js',
        years: 5
      },
    ],
    [
      {
        cover: 'P',
        name: 'Python',
        years: 5
      },
      {
        cover: 'G',
        name: 'Git',
        years: 5
      },
      {
        cover: 'N',
        name: 'Nuxt.js',
        years: 5
      },
    ],
    [
      {
        cover: 'S',
        name: 'SASS',
        years: 5
      },
      {
        cover: 'G',
        name: 'Mongodb',
        years: 5
      },
      {
        cover: 'E',
        name: 'Express',
        years: 5
      },
      {
        cover: 'G',
        name: 'GraphQL',
        years: 5
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
  min-height: 800px;
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