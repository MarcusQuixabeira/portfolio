<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

interface Experience {
  cover: string,
  remote: boolean,
  jobTitle: string,
  company: string,
  startDate: Date,
  endDate: Date,
  jobDescription: string
}

const experiences: Ref<Experience[]> = ref(
  [
    {
      cover: 'R',
      remote: true,
      jobTitle: 'Fullstack Software Engineer',
      company: 'Rapchat Inc',
      startDate: new Date('2022-07-01'),
      endDate: new Date('2023-01-27'),
      jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, quam ut condimentum interdum, nisl nibh pretium magna, at vehicula massa sem at elit. Aliquam porttitor leo eu cursus vulputate. Integer commodo faucibus nibh eget sagittis. Aliquam nunc nibh, viverra sollicitudin la facilisi. Mauris nec feugiat libero, vitae luctus mi. Ut a odio nec mi porttitor venenatis.'
    },
    {
      cover: 'A',
      remote: true,
      jobTitle: 'Senior Software Engineer Supervisor',
      company: 'Anchor Loans',
      startDate: new Date('2022-04-01'),
      endDate: new Date('2022-06-31'),
      jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, quam ut condimentum interdum, nisl nibh pretium magna, at vehicula massa sem at elit. Aliquam porttitor leo eu cursus vulputate. Integer commodo faucibus nibh eget sagittis. Aliquam nunc nibh, viverra sollicitudin la facilisi. Mauris nec feugiat libero, vitae luctus mi. Ut a odio nec mi porttitor venenatis.'
    },
    {
      cover: 'A',
      remote: true,
      jobTitle: 'Senior Software Engineer',
      company: 'Anchor Loans',
      startDate: new Date('2017-10-01'),
      endDate: new Date('2022-03-27'),
      jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, quam ut condimentum interdum, nisl nibh pretium magna, at vehicula massa sem at elit. Aliquam porttitor leo eu cursus vulputate. Integer commodo faucibus nibh eget sagittis. Aliquam nunc nibh, viverra sollicitudin la facilisi. Mauris nec feugiat libero, vitae luctus mi. Ut a odio nec mi porttitor venenatis.'
    },
    {
      cover: 'C',
      remote: true,
      jobTitle: 'Tech Lead and Scrum Master',
      company: 'Caverna Labs',
      startDate: new Date('2018-12-01'),
      endDate: new Date('2022-08-01'),
      jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, quam ut condimentum interdum, nisl nibh pretium magna, at vehicula massa sem at elit. Aliquam porttitor leo eu cursus vulputate. Integer commodo faucibus nibh eget sagittis. Aliquam nunc nibh, viverra sollicitudin la facilisi. Mauris nec feugiat libero, vitae luctus mi. Ut a odio nec mi porttitor venenatis.'
    },
    {
      cover: 'C',
      remote: false,
      jobTitle: 'Web System Developer',
      company: 'Caverna Labs',
      startDate: new Date('2014-01-01'),
      endDate: new Date('2017-09-01'),
      jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, quam ut condimentum interdum, nisl nibh pretium magna, at vehicula massa sem at elit. Aliquam porttitor leo eu cursus vulputate. Integer commodo faucibus nibh eget sagittis. Aliquam nunc nibh, viverra sollicitudin la facilisi. Mauris nec feugiat libero, vitae luctus mi. Ut a odio nec mi porttitor venenatis.'
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