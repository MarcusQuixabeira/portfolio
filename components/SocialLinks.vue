<script setup lang="ts">
const data = reactive(await fetchSocials())
</script>

<template>
  <div class="social-links">
    <a :href="data.linkedinUrl" target="_blank"><nuxt-icon name="mdi_linkedin" /></a>
    <a :href="data.githubUrl" target="_blank"><nuxt-icon name="jam_github" /></a>
    <a :href="`mailto:${data.email}`" target="_blank"><nuxt-icon name="mdi_email" /></a>
  </div>
</template>

<style lang="scss" scoped>
.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  a {
    color: $golden;
    font-size: 30px;
    color: $golden;
    text-decoration: none;
  }
}
</style>