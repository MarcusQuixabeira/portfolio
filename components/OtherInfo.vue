
<script setup lang="ts">
defineProps<{ data: OtherInfo}>()

</script>

<template>
  <section class="other-info">
    <h2>{{ data.title }}</h2>
    <div class="academic-formations">
      <div v-for=" (formation, index) in data.formations" v-bind:key="`formation_${index}`" class="formation">
        <div class="degree">{{ formation.degree }}</div>
        <div class="institution">{{ formation.institution }}</div>
        <div class="graduated-at"> {{ formation.graduatedAtVerbiage }} {{ formatDate(formation.graduatedAt, 'YYYY MMM', getLanguage()) }}</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.other-info {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 70px;
  h2 {
    font-size: 26px;
    padding: 0px;
    margin: 0px;
  }
  .academic-formations {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 100px;
    .formation {
      display: flex;
      padding: 20px;
      width: 650px;
      flex-direction: column;
      gap: 2px;
      border: 1px solid $deep-blue;
      .degree {
        font-weight: 700;
        font-size: 20px;
      }
      .institution {
        font-style: italic;
      }
      .graduated-at {
        margin-top: 5px;
        font-size: 12px;
        color: $deep-grey;
      }
      transition: 0.2s linear;
    }

    .formation:hover {
      scale: 1.03;
      color: white;
      background-color: $deep-blue;
      .graduated-at {
        margin-top: 5px;
        font-size: 12px;
        color: $light-grey;
      }
    }
  }
}

@media (max-width: 1080px) {
  .other-info {
    h2 {
      font-size: 1.2rem;
    }
    padding: 10px 30px;
    min-height: 350px;
    justify-content: space-around;
    .academic-formations {
      flex-direction: column;
      gap: 40px;
      justify-content: space-between;

      .formation {
        width: 100%;
        flex-wrap: wrap;
        pointer-events: none;
        .degree {
          font-size: 1rem;
        }
        .institution {
          font-size: .8rem;
        }
        .graduated-at {
          font-size: .6rem;
        }
      }
    }
  }
}
</style>