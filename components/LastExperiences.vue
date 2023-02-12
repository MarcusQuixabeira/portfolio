<script setup lang="ts">
defineProps<{ data: Experience[] }>()

function getColor(index: number): string {
  const colors: string[] = ['deep-grey', 'light-green', 'deep-blue', 'deep-green', 'light-blue'];
  return getItemInSequence(index, colors);
}
</script>

<template>
  <section class="last-experiences">
    <Experience
      v-for="(experience, index) in data"
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

@media (max-width: 1080px) {
  .last-experiences {
    flex-direction: column;
  }
}
</style>