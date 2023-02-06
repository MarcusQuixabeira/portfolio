<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  }
})
</script>

<template>
  <section class="last-experiences">
    <div class="experience deep-grey">
      <div class="cover"><span>R</span></div>
    </div>
    <div class="experience light-green">
      <div class="cover"><span>A</span></div>
    </div>
    <div class="experience deep-blue">
      <div class="cover"><span>A</span></div>
      <div class="content">
        <div class="job-title">Senior Software Engineer</div>
        <div class="company">Anchor Loans</div>
        <div class="date-interval">2015 OCT - 2022 JUN</div>
        <div class="time">4 years, 8 months</div>
        <div class="job-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, quam ut condimentum interdum, nisl nibh pretium magna, at vehicula massa sem at elit. Aliquam porttitor leo eu cursus vulputate. Integer commodo faucibus nibh eget sagittis. Aliquam nunc nibh, viverra sollicitudin la facilisi. Mauris nec feugiat libero, vitae luctus mi. Ut a odio nec mi porttitor venenatis.
        </div>
      </div>
    </div>
    <div class="experience deep-green">
      <div class="cover"><span>C</span></div>
    </div>
    <div class="experience light-blue">
      <div class="cover"><span>C</span></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.last-experiences {
  min-height: 800px;
  display: flex;
  .experience {
    width: 100%;
    cursor: pointer;
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
      padding-inline: 20px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      height: 100%;
      color: $white;
      text-align: center;
      display: none;
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
    }
  }

  .experience:hover {
    transform: scale(1.25);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    .cover {
      display: none;
    }
    .content {
      display: flex;
    }
  }
}
</style>