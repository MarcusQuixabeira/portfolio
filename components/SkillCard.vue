<script setup lang="ts">
import { computed } from 'vue'

interface HardSkill {
  cover: string,
  name: string,
  years: number,
}

const props = defineProps<{ skill: HardSkill, color: string }>()

const timeVerbiage = computed<string>(() => `${props.skill.years} ${ props.skill.years && props.skill.years > 0 ? 'years' : 'year'}`)
</script>

<template>
  <ExpandableCard :color="color">
    <template v-slot:cover>
      <span> {{ skill.cover }}</span>
    </template>
    <template v-slot:content>
      <div class="name">{{ skill.name }}</div>
      <div class="time-label">Professional Experience Time</div>
      <div class="time">
        {{ timeVerbiage }}
      </div>
    </template>
  </ExpandableCard>
</template>

<style lang="scss" scoped>
.name {
  font-size: 30px;
  font-weight: 700;
}

.time-label {
  font-size: 24px;
  font-weight: 700;
}

.time {
  font-size: 18px;
  font-weight: 700;
}
</style>