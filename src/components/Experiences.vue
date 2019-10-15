<template>
<div>

<div class="experiences">


    <img class="sectionImg" src="../assets/experience.png" alt="">
    <h2 class="sm:text-right">Experience</h2>
    <Experience :experience="experience" v-for="experience in newExperiences" v-bind:key="expKey(experience)" />
  
  </div>

  <ItemList class="section olderExperiences" :items="olderExperiences"/>
  
</div>
  
</template>
<static-query>
query Experiences {
  newExperiences: allExperiences(sortBy: "year", order: DESC, filter: { year: { gte: "2013" }}) {
    edges {
      node { 
        year
        companyName
        summary
        startDate
  			endDate
  			companyName
  			companyLogo
  			website
  			title
  			roles
  			highlights
  			summary
        full
      }
    }
  }
  oldExperiences: allExperiences(sortBy: "year", order: DESC, filter: { year: { lt: "2013" }}) {
    edges {
      node { 
        year
        companyName
        summary
        startDate
  			endDate
  			companyName
  			companyLogo
  			website
  			title
  			roles
  			highlights
  			summary
        full
      }
    }
  }
}
</static-query>
<script>

import Experience from '~/components/Experience.vue'
import ItemList from '~/components/ItemList.vue'

let itemListMapper = (edge) => {
    return { 
      title: edge.node.companyName, 
      subtitle: edge.node.title, 
      period: edge.node.startDate + " - " + edge.node.endDate, 
      summary: edge.node.summary ,
      full: edge.node.full
      };
  };

export default {
  components: {
    Experience,
    ItemList
  },
  methods: {
    expKey: function(exp) {
      return exp.summary + '-' + exp.startDate + '-' + exp.endDate
    }
  },
  computed: {
    newExperiences: function() {
      return this.$static.newExperiences.edges.map((edge) => { return edge.node; });
    },
    olderExperiences: function() {
      return this.$static.oldExperiences.edges.map(itemListMapper);
    }
  }
}
</script>

<style>
  .experiences > h2 {
    @apply mb-4;
  }

  li {
    list-style-type: disc;
  }
</style>