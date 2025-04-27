<script setup lang="ts">
const footer = defineProps<{ data: Footer }>()

function getCopyWriteVerbiage() {
  const start: String = formatDate(new Date(footer.data.createdAt), 'YYYY');
  const now: String = formatDate(new Date(), 'YYYY');
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
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding-inline: 400px;
  color: $golden;
}
@media (max-width: 1080px) {
  footer {
    min-height: 150px;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    padding: 10px;
    justify-content: space-around;
    gap: 0px;
    .copywrite {
      font-size: 1rem;
    }
    .text {
      font-size: 1rem;
    }
  }
}
</style>