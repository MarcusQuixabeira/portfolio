<script setup lang="ts">
interface Experience {
  cover: string,
  remote: boolean,
  jobTitle: string,
  company: string,
  startDate: Date,
  endDate: Date,
  jobDescription: string
}

defineProps<{ experience: Experience, color: string }>()
</script>

<template>
  <ExpandableCard :color="color">
    <template v-slot:cover>
      <span> {{ experience.cover }}</span>
    </template>
    <template v-slot:content>
      <div class="job-title">{{ experience.jobTitle }}</div>
      <div class="company">{{ experience.company }}</div>
      <div class="date-interval">{{ formatDate(experience.startDate, 'YYYY MMM') }} - {{ formatDate(experience.endDate, 'YYYY MMM') }}</div>
      <div class="time">{{ readableDateInterval(experience.startDate, experience.endDate) }}</div>
      <div class="job-description">
        {{ experience.jobDescription }}
      </div>
    </template>
  </ExpandableCard>
</template>

<style lang="scss" scoped>
.job-title {
  font-size: 30px;
  font-weight: 700;
}

.company {
  font-size: 24px;
  font-weight: 700;
}

.date-interval {
  font-size: 18px;
  font-weight: 700;
}

.time {
  font-size: 14px;
}

.job-description {
  font-size: 22px;
}
</style>