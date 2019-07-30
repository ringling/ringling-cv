<template>
<div class="experiences">

    <h2 class="sm:text-right">Experience</h2>
    <Experience :title="item.title" :period="item.period" :summary="item.summary" v-for="item in items" />
  
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