<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

interface SocialLinks {
  linkedinUrl: string,
  githubUrl: string,
  email: string
}

const socialLinks: Ref<SocialLinks> = ref({
  linkedinUrl: 'https://www.linkedin.com/in/marcus-vinicius-q-b-dos-santos-5954bb140/',
  githubUrl: 'https://github.com/MarcusQuixabeira',
  email: 'mquixaba@gmail.com'
})
</script>

<template>
  <div class="social-links">
    <a :href="socialLinks.linkedinUrl" target="_blank"><nuxt-icon name="mdi_linkedin" /></a>
    <a :href="socialLinks.githubUrl" target="_blank"><nuxt-icon name="jam_github" /></a>
    <a :href="`mailto:${socialLinks.email}`" target="_blank"><nuxt-icon name="mdi_email" /></a>
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