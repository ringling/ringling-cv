<template>
  <Layout>

    <div class="flex flex-wrap">
      
      <div class="flex-1 text-gray-700 px-10 py-1 m-1">
        <Introduction class="section" :cv="myCV" />
        <Skills class="section"/>
        <Experiences class="section"/>
      </div>
           
      <div class="line flex-none text-gray-800 text-center px-0 py-0 m-0 invisible sm:invisible md:visible lg:visible xl:visible"></div>

      <div class="flex-1 text-gray-700 px-10 py-1 m-1">
                 
        <Educations class="section"/>
        
        <img class="sectionImg" src="../assets/languages.png" alt="">
        <ItemList class="section" :items="languages" title="Languages"/>
       
        <img class="sectionImg" src="../assets/courses.png" alt="">
        <ItemList class="section" :items="courses" title="Courses"/>

        <img class="sectionImg" src="../assets/certifications.png" alt="">
        <ItemList class="section" :items="certifications" title="Certifications"/>

        <img v-if="showTechnologies" class="sectionImg" src="../assets/technologies.png" alt="">
        <ItemList v-if="showTechnologies" title="Technologies" class="section" :items="technologies"/>

        <img class="sectionImg" src="../assets/conference.png" alt="">
        <ItemList class="section" :items="conferences" title="Conferences"/>

        <img class="sectionImg" src="../assets/teaching.png" alt="">
         <ItemList class="section" :items="teaching" title="Teaching"/>

      </div>
  
    </div>

  </Layout>

</template>
<page-query>
  query Technologies {
    technologies: allSkills(filter: {active: {eq: true}}) {
      edges {
        node {
          active
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

let skillMapper =  (edge) => {
    return {
      title: edge.node.name,
      period: edge.node.firstUsed + " - " + edge.node.lastUsed,
      summary: edge.node.description
    }
  };

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

    conferences: function() {
      const achievements = this.myCV.achievements.list;
      let filter = (ach) => { return ach.type == "conferences"; }
      let mapper = (cert) => {
        return { title: cert.title, subtitle: cert.description };
      }
      return achievements.filter(filter).map(mapper);
    },
    technologies: function() {
      return this.$page.technologies.edges.map(skillMapper).reverse();   
    },

    languages: function() {
      const languages = this.myCV.languages;
      let mapper = (lang) => {
        return { title: lang.language, subtitle: lang.fluency };
      }
      return languages.map(mapper); 
    },
    teaching: function() {
      const achievements = this.myCV.achievements.list;
      let filter = (ach) => { return ach.type == "teaching"; }
      let mapper = (course) => {
        return { title: course.title, subtitle: course.description };
      }
      return achievements.filter(filter).map(mapper);
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
  background: linear-gradient(to bottom, rgb(156,184,204), #EFAED6);
  width: 3px;
}
</style>
