<script setup lang="ts">
const mainContent = reactive(await fetchMainContent());
</script>

<template>
  <div>
    <Header :data="mainContent[getLanguage()].header" />
    <AboutMe :data="mainContent[getLanguage()].aboutMe"/>
    <LastExperiences :data="mainContent[getLanguage()].lastExperiences" />
    <SoftSkills :data="mainContent[getLanguage()].softSkills" />
    <HardSkills :data="mainContent[getLanguage()].hardSkills" />
    <OtherInfo :data="mainContent[getLanguage()].otherInfo "/>
    <Footer :data="mainContent[getLanguage()].footer" />
  </div>
</template>