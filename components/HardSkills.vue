<script setup lang="ts">
const hardSkills = defineProps( ['data'])
let colorIndex: number = 0

watch(
  () => hardSkills.data,
  ( data ) => {
    colorIndex = 0;
  }
)

function getSequencialColor(): string {
  const colors: string[] = ['deep-grey', 'light-green', 'deep-blue', 'purple', 'light-grey', 'light-blue', 'deep-green']
  const color = getItemInSequence(colorIndex, colors)
  colorIndex++
  return color
}
</script>

<template>
  <section class="hard-skills">
    <div v-for="(column, index) in hardSkills.data" v-bind:key="`column_${index}`" class="skills-row">
      <SkillCard v-for="(skill, index) in column" v-bind:key="`${skill.name}_${index}`" :skill="skill"
        :color="getSequencialColor()" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hard-skills {
  max-height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .skills-row {
    min-height: 200px;
    width: 100%;
    display: flex;
  }
}
@media (max-width: 1080px) {
  .hard-skills {
    flex-direction: column;
    .skills-row {
      width: 100%;
      flex-direction: column;
    }
  }
}
</style>