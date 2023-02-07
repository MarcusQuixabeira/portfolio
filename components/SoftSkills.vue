<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      softSkills:  {
        title: 'SOFT SKILLS'
      }
    }
  }
})
</script>

<template>
  <section class="about-me">
    <h2>{{ softSkills.title }}</h2>
  </section>
</template>

<style lang="scss" scoped>
.about-me {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h2 {
    margin: 0px;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
  }
}
</style>