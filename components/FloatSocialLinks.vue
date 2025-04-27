<script setup lang="ts">
const data = reactive(await fetchSocials())

const colapsed = ref(true);

function toggleMenu() {
  colapsed.value = !colapsed.value;
}

const menuIcon = computed(() => {
  return colapsed.value ? "mdi_dots_vertical" : "mdi_close";
})
</script>

<template>
  <div class="float-social-links-container">
    <div v-if="!colapsed" class="social-links-options-container">
      <a
        :href="data.linkedinUrl"
        target="_blank"
        :title="data[getLanguage()].linkedinTitle"
        class="social-links-option-button"
      >
        <nuxt-icon name="mdi_linkedin" />
      </a>
      <a
        :href="data.githubUrl"
        target="_blank"
        :title="data[getLanguage()].githubTitle"
        class="social-links-option-button"
      >
        <nuxt-icon name="jam_github" />
      </a>
      <a
        :href="data.resumeUrl"
        target="_blank"
        :title="data[getLanguage()].resumeTitle"
        class="social-links-option-button"
      >
        <nuxt-icon name="mdi_file_document" />
      </a> 
      <a
        :href="`mailto:${data.email}`"
        target="_blank"
        :title="data[getLanguage()].emailTitle"
        class="social-links-option-button"
      >
        <nuxt-icon name="mdi_email" />
      </a>
    </div>
    <button class="social-links-menu-button" :class="{'pulse': colapsed}" @click="toggleMenu">
      <nuxt-icon :name="menuIcon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.float-social-links-container {
  height: 300px;
  width: 60px;
  margin-bottom: 20px;
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: flex-end;
  gap: 10px;
  position: fixed;
  bottom: 0;
  right: 0;

    .social-links-options-container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      gap: 10px;
      animation-name: smoothly-appear;
      animation-duration: 500ms;

      @keyframes smoothly-appear {
        from {opacity: 0}
        to {opacity: 1}
      }
    }
  
    .social-links-menu-button {
      border: solid 1px $white;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: $base-color;
      color: $deep-blue;
      font-size: 30px;
      box-shadow: 1px 1px 10px $deep-blue;
      cursor: pointer;
    }

    .social-links-option-button {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      border: solid 1px $white;
      height: 38px;
      width: 38px;
      border-radius: 50%;
      background-color: $base-color;
      color: $deep-blue;
      font-size: 20px;
      box-shadow: 1px 1px 10px $deep-blue;
      cursor: pointer;
    }
}
.pulse {
  @keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
  }

  animation: pulse 2s infinite;
}
</style>