<template>
  <div class="education">
    <h3>{{title}}</h3>
    <h4>{{school}}</h4>
    <h4>{{period}}</h4>
  </div>
</template>


<style>

  .education > h3 {
    @apply text-left mb-1 text-gray-700 text-sm font-semibold;
    text-transform: uppercase;
  }

   .education > h4  {
     @apply text-left mb-1 text-gray-600 text-xs font-semibold;
    text-transform: uppercase;
   }

   .education {
     @apply mb-4;
   }

</style>

<script>
export default {
  props: ['school', 'title','period']
}
</script>