<script setup lang="ts">
import { reactive } from 'vue'

interface Header {
  imageUrl: string,
  imageAlt: string,
  name: string,
  title: string
}

const header: Header = reactive({
  imageUrl: '/images/mquixaba.jpeg',
  imageAlt: 'Marcus Quixabeira wishing make some awesome code again',
  name: 'Marcus Vinicius Quixabeira Bezerra dos Santos',
  title: 'Fullstack Senior Software Developer and Javascript Lover'
})
</script>

<template>
  <header class="header">
    <div class="portrait">
      <img :src="header.imageUrl" :alt="header.imageAlt" width="320">
    </div>
    <div class="credentials">
      <div class="name">{{ header.name }}</div>
      <div class="title">{{ header.title }}</div>
      <SocialLinks />
      <div class="languages">
        <a href="#" class="disabled">PT-BR</a>
        <a href="#">EN-US</a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: $deep-blue;
  min-height: 400px;
  color: $white;
  display: flex;
  justify-content: center;
  gap: 300px;
  align-items: center;

  .portrait {
    img {
      border: 3px solid $golden;
      border-radius: 4px;
    }
  }

  .credentials {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    .name {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      max-height: 87px;
      max-width: 507px;
      text-align: center;
    }

    .title {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: $golden;
    }

    .languages {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

        a {
          padding: 3px 5px;
          border: 1px solid $golden;
          color: $golden;
          font-size: 10px;
          font-weight: 700;
          text-decoration: none;
        }
    }
  }
  .disabled {
    cursor: not-allowed;
    color: $deep-grey !important;
    border: 1px solid $deep-grey !important;
  }
}
</style>