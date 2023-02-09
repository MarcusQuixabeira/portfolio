<script setup lang="ts">
import { computed } from 'vue'

interface HardSkill {
  cover: string,
  subs: string[],
  name: string,
  years: number,
}

const props = defineProps<{ skill: HardSkill, color: string }>()

const timeVerbiage = computed<string>(() => `${props.skill.years} ${ props.skill.years && props.skill.years > 1 ? 'years' : 'year'} of experience time`)
</script>

<template>
  <ExpandableCard :color="color">
    <template v-slot:cover>
      <span> {{ skill.cover }}</span>
    </template>
    <template v-slot:content>
      <div class="name">{{ skill.name }}</div>
      <div v-if="skill.subs && skill.subs.length > 0" class="subs">
        <span v-for="item in skill.subs" v-bind:key="item">{{ item }}</span>
      </div>
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

.time {
  font-size: 24px;
  font-weight: 700;
}

.time-label {
  font-size: 16px;
  font-weight: 700;
}

.subs {
  display: flex;
  gap: 10px;
}
</style>