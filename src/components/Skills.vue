<template>
  <div class="skills">
    <img class="sectionImg" src="../assets/skills.png" alt="">
    <h2 class="sm:text-right mb-4"> Skills</h2>
    <p class="mb-4">A short little self-assessment of my skills</p>


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



  .skill-text {
    text-transform: uppercase;
    @apply text-gray-700 text-sm font-semibold;
  }



  .skill {
    min-width: 200px;
  }

  @media (max-width: 640px) { 
    .skill {
      width: 100%;
      @apply text-center;
    }
  }


</style>

