<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

interface Footer {
  createdAt: Date,
  text: string
}

const footer: Ref<Footer> = ref({
  createdAt: new Date('2023-02-01'),
  text: 'Crafted with love by Marcus Quixabeira'
})

function getCopyWriteVerbiage() {
  const start: String = formatDate(new Date(footer.value.createdAt), 'YYYY');
  const now: String = formatDate(new Date(), 'YYYY');
  const verbiage: String = 'All right reserved';
  if (start == now) {
    return `&#169; ${start} ${verbiage}`
  }
  return `&#169; ${start} - ${now} ${verbiage}`
}
</script>

<template>
  <footer class="deep-blue">
    <div class="copywrite" v-html="getCopyWriteVerbiage()"></div>
    <div class="text">{{ footer.text }}</div>
    <SocialLinks />
  </footer>
</template>

<style lang="scss" scoped>
footer {
  min-height: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: $golden;
}
</style>