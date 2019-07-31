<template>
<div class="experiences">

    <img src="../assets/developer.png" alt="">
    <h2 class="sm:text-right">Experience</h2>
    <Experience :title="item.title + ' | ' + item.companyName" :period="item.startDate + ' - ' + item.endDate" :summary="item.summary" v-for="item in items" />
  
  </div>
  
</template>

<script>

import Experience from '~/components/Experience.vue'

export default {
  props: ['items'],
  components: {
    Experience
  }
}
</script>

<style>

  .experiences > h2 {
    @apply mb-4;
  }



</style>