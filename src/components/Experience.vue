<template>
  <div class="experience">
    <h3 class="sm:text-right">{{title}}</h3>
    <h4 class="sm:text-right">{{period}}</h4>
    <p>{{summary}}</p>
  </div>
</template>


<style>

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
  props: ['period', 'title','summary']
}
</script>