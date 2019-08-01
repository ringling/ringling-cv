<template>
  <Layout>

    <div class="flex flex-wrap">
      
      <div class="flex-1 text-gray-700 px-10 py-1 m-1">
        <Introduction class="section" :cv="myCV" />
        <Skills class="section"/>
        <Experiences class="section" :items="newestExperiences"/>
        <ItemList class="section" :items="olderExperiences"/>
      </div>
           
      <div class="line flex-none text-gray-800 text-center px-0 py-0 m-0 invisible sm:invisible md:visible lg:visible xl:visible"></div>

      <div class="flex-1 text-gray-700 px-10 py-1 m-1">
                 
        <Educations class="section"/>
        
        <img class="sectionImg" src="../assets/languages.png" alt="">
        <ItemList class="section" :items="languages" title="Languages"/>
        
        <img class="sectionImg" src="../assets/courses.png" alt="">
        <Items itemType="Courses" :items="courses" class="section" align="sm:text-left"/>

        <img class="sectionImg" src="../assets/certifications.png" alt="">
        <Items itemType="Certifications" :items="certifications" class="section" align="sm:text-left" />

        <img v-if="showTechnologies" class="sectionImg" src="../assets/technologies.png" alt="">
        <ItemList v-if="showTechnologies" title="Technologies" class="section" :items="technologies"/>

      </div>
  
    </div>

  </Layout>

</template>
<page-query>
query Skills {
  skills: allSkills {
    edges {
      node { 
        name
        type
        description
        firstUsed
        lastUsed
      }
    }
  }
}
</page-query>

<script>

import myCV from '~/data/cv.json'

import Introduction from '~/components/Introduction.vue'
import Skills from '~/components/Skills.vue'
import Educations from '~/components/Educations.vue'
import Experiences from '~/components/Experiences.vue'
import ItemList from '~/components/ItemList.vue'
import Items from '~/components/Items.vue'

export default {
  components: {
    Introduction,
    Skills,
    Educations,
    Experiences,
    ItemList,
    Items
  },
  mounted() {
    this.showTechnologies = this.$route.query.technologies;
  },
  computed: {


    technologies: function() {

      let mapper = (edge) => {
        return {
          title: edge.node.name,
          period: edge.node.firstUsed + " - " + edge.node.lastUsed,
          summary: edge.node.description
        }
      }

      const skills = this.$page.skills.edges.map(mapper);
      return skills;
    
    },

    olderExperiences: function() {

      const experiences = this.myCV.experiences;

      let yearFilter = (exp) => { return exp.year <= "2010"; }

      const sortByEndYear = (aExp, bExp) => {
        let aYear = aExp.year; // aExp.endDate.match(/(\d{4})/g);
        let bYear = bExp.year; //.endDate.match(/(\d{4})/g);

        if(aYear > bYear)
          return -1;
        else if(aYear < bYear)
          return 1;
        else
          return 0;
      }



      let expMapper = (exp) => {
        return { title: exp.companyName, subtitle: exp.title, period: exp.startDate + " - " + exp.endDate, summary: exp.summary };
      }

      return experiences.filter(yearFilter).sort(sortByEndYear).map(expMapper);

    },


    newestExperiences: function() {

      const experiences = this.myCV.experiences;

      let yearFilter = (exp) => { return exp.year > "2010"; }

      const sortByEndYear = (aExp, bExp) => {
        let aYear = aExp.year; // aExp.endDate.match(/(\d{4})/g);
        let bYear = bExp.year; //.endDate.match(/(\d{4})/g);

        if(aYear > bYear)
          return -1;
        else if(aYear < bYear)
          return 1;
        else
          return 0;
      }

      return experiences.filter(yearFilter).sort(sortByEndYear);

    },
    languages: function() {
      const languages = this.myCV.languages;
      let mapper = (lang) => {
        return { title: lang.language, subtitle: lang.fluency };
      }
      return languages.map(mapper); 
    },
    courses: function() {
      const achievements = this.myCV.achievements.list;
      let courseFilter = (ach) => { return ach.type == "courses"; }
      let courseMapper = (course) => {
        return { title: course.title, subtitle: course.description };
      }
      return achievements.filter(courseFilter).map(courseMapper);
    },
    certifications: function() {
      const achievements = this.myCV.achievements.list;
      let certFilter = (ach) => { return ach.type == "certifications"; }
      let certMapper = (cert) => {
        return { title: cert.title, subtitle: cert.description };
      }
      return achievements.filter(certFilter).map(certMapper);
    }
  },
  methods: {
   

  },
  data () {
    return {
      showTechnologies: false,
      myCV
    }
  },
  metaInfo: {
    title: 'CV'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.line {

  background: linear-gradient(to bottom, #AECAEF, #EFAED6);
  width: 3px;
}
</style>
