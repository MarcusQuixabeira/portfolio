
<script setup lang="ts">
defineProps<{ data: SoftSkills }>()
</script>

<template>
  <section class="soft-skills">
    <h2>{{ data.title }}</h2>
    <div class="list">
      <div class="skill" v-for="(skill, index) in data.skills" v-bind:key="`skill-${index}`">
        {{ skill }}
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.soft-skills {
  min-height: 400px;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 0px;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding-inline: 200px;

    .skill {
      padding: 10px;
      font-size: 20px;
      background: $base-color;
      background: linear-gradient(to left, $base-color 51%, $deep-blue 49%) right;
      background-size: 200% 100%;
      flex: 0 0 32%;
      text-align: center;
      transition: .3s ease-out;
    }
    .skill:hover {
      background-position: left;
      color: $white;
    }
  }
}
</style>