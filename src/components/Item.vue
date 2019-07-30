<template>
  <div class="item">
    <h3 :class="align">{{title}}</h3>
    <h4 :class="align">{{subtitle}}</h4>
  </div>
</template>


<style>

  .item > h3 {
    @apply mb-1 text-gray-700 text-sm font-semibold;
    text-transform: uppercase;
  }

   .item > h4  {
     @apply mb-1 text-gray-600 text-xs font-semibold;
    text-transform: uppercase;
   }

   .item {
     @apply mb-4;
   }

</style>

<script>
export default {
  props: ['subtitle', 'title', 'align']
}
</script>