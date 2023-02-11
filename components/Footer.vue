<script setup lang="ts">
const footer = defineProps<{ data: Footer }>()

function getCopyWriteVerbiage() {
  const start: String = formatDate(new Date(footer.data.createdAt), 'YYYY');
  const now: String = formatDate(new Date(), 'YYYY');
  const verbiage: String = 'All right reserved';
  if (start == now) {
    return `&#169; ${start} ${footer.data.copyRights}`
  }
  return `&#169; ${start} - ${now} ${footer.data.copyRights}`
}
</script>

<template>
  <footer class="deep-blue">
    <div class="copywrite" v-html="getCopyWriteVerbiage()"></div>
    <div class="text">{{ footer.data.developedBy }}</div>
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