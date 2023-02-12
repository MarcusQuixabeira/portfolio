
<script setup lang="ts">
const props = defineProps<{ skill: HardSkill, color: string }>()

function getXpTimeVerbiage(skill: HardSkill) {
  let verbiage = isEnglish() ? 'years of experience' : 'anos de experiencia'
  
  if (skill.years === 1) {
    verbiage = verbiage.replace('years', 'year').replace('anos', 'ano')
  }

  return `${skill.years} ${verbiage}`
}
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
        {{ getXpTimeVerbiage(skill) }}
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
@media (max-width: 1080px) {
  .name {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .time {
    font-size: 1.3rem;
    font-weight: 700;
  }

  .time-lable {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .subs {
    flex-wrap: wrap;
    justify-content: center;
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
</style>