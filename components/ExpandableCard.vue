<script setup lang="ts">
defineProps<{ color: string, coverClass?: string, contentClass?: string }>()
</script>

<template>
  <div class="card" :class="color">
    <div class="cover" :class="coverClass">
      <slot name="cover"></slot>
    </div>
    <div class="content" :class="contentClass">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  transition: all 0.1s ease-in;

  .cover {
    font-size: 96px;
    font-weight: 700;
    height: 100%;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: flex;
    padding: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
    color: $white;
    text-align: center;
    display: none;
  }
}
.card:hover {
  transform: scale(1.02);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  .cover {
    display: none;
  }

  .content {
    display: flex;
  }
}

@media (max-width: 1080px) {
  .card {
    pointer-events: none;
    .cover {
      display: none;
    }

    .content {
      display: flex;
    }
  }
}
</style>