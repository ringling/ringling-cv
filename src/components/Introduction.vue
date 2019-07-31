<template>
  <div class="introduction">
    <img src="../assets/profile.png" alt="">
    <h2 class="sm:text-right mb-4">Introduction</h2>

    <p v-for="line in cv.basics.summary">
      {{line}}
    </p>
      

  </div>
</template>

<script>
export default {
  props: ['cv']
}
</script>


<style>

  .introduction > p {
    @apply mb-2;
  }
</style>