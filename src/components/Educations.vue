<template>
  <div class="educations">

    <img class="sectionImg" src="../assets/exams.png" alt="">
    <h2>Education</h2>
    <Education :title="education.studyType" :school="education.institution" :period="education.startDate + ' - ' +education.endDate" v-for="education in educations"/>
  </div>
</template>

<script>

import Education from '~/components/Education.vue'

export default {
  components: {
    Education
  },
  computed: {
    educations: function() {
      return this.$static.educations.edges.map((edge) => { return edge.node; });
    }
  }
}
</script>

<static-query>
query Educations {
  educations: allEducations(sortBy: "endDate", order: DESC) {
    edges {
      node { 
        institution
        area
        studyType
        startDate
        endDate
      }
    }
  }
}
</static-query>

<style>

  .educations > h2 {
    @apply text-left mb-4;
  }

  .educations > p {
    @apply mb-2;
  }
</style>