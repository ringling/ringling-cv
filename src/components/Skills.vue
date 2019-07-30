<template>
  <div class="skills">
    <h2>Skills</h2>

    <div class="w-full">
      <div class="flex flex-wrap justify-between">
        <Skill level="100" title="agile principles"/>
        <Skill level="100" title="programming"/>
        <Skill level="80" title="web technologies"/>
        <Skill level="70" title="architecture"/>
        <Skill level="60" title="dev ops"/>
        <Skill level="50" title="UI design"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Skill from '~/components/Skill.vue'

  export default {
    components: {
      Skill
    }
  }
</script>


<style>

  .skills > h2 {
    @apply text-left mb-4;
  }

  .skill-text {
    text-transform: uppercase;
    @apply text-gray-700 text-sm font-semibold;
  }

  .skill {
    min-width: 200px;
  }
</style>
