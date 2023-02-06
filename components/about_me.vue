<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      aboutMe: {
        title: 'ABOUT ME',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, quam ut condimentum interdum, nisl nibh pretium magna, at vehicula massa sem at elit. Aliquam porttitor leo eu cursus vulputate. Integer commodo faucibus nibh eget sagittis. Aliquam nunc nibh, viverra sollicitudin ligula sit amet, porttitor sodales velit. Maecenas at convallis velit. In hac habitasse platea dictumst. Curabitur mi ipsum, eleifend sit amet ornare facilisis, vestibulum nec est. Donec iaculis sed dolor non lobortis. Nulla facilisi. Mauris nec feugiat libero, vitae luctus mi. Ut a odio nec mi porttitor venenatis. Nunc iaculis sapien non nisl dapibus tincidunt.',
      }
    }
  }
})
</script>

<template>
  <section class="about-me">
    <h2>{{ aboutMe.title }}</h2>
    <p>{{ aboutMe.text }}</p>
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
  p {
    margin: 0px;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    padding-inline: 10%;
  }
}
</style>