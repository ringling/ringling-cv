<template>
  <div class="experience">
    <h3 class="sm:text-right">{{experience.title + ' | ' + experience.companyName}}</h3>
    <h4 class="sm:text-right">{{experience.startDate + ' - ' + experience.endDate}}</h4>
    <p v-html="experience.summary"></p>
  </div>
</template>



<style>

  .experience > p > h5 {
    @apply mb-2 mt-2 text-gray-700 text-sm font-semibold;
  }
    .experience > p > h6 {
     @apply mb-2 mt-2 text-gray-700 text-xs font-semibold;
  }
  .experience > h3 {
    @apply mb-1 text-gray-700 text-sm font-semibold;
    text-transform: uppercase;
  }

   .experience > h4  {
     @apply mb-1 text-gray-600 text-xs font-semibold;
    text-transform: uppercase;
   }

  .experience > p {
    @apply mb-3;
  }


</style>

<script>

export default {
  props: ['experience']
}
</script>