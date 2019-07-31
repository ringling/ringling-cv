<template>
  <div class="educations">

    <img src="../assets/education.png" alt="">
    <h2>Education</h2>
    <Education title="Diploma in Information Technology" school="IT University, Copenhagen" period="2002 - 2005"/>
    <Education title="Datamatician" school="Lyngby uddannelsescenter" period="1998 - 2000"/>
    <Education title="High school" school="Deutsches Gymnasium für Nordschleswig" period="1998 - 2001"/>
  </div>
</template>

<script>

import Education from '~/components/Education.vue'

export default {
  components: {
    Education
  }
}
</script>
<style>

  .educations > h2 {
    @apply text-left mb-4;

  }

  .educations > p {
    @apply mb-2;
  }
</style>