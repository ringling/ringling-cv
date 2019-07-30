<template>
  <Layout>

    <div class="flex  flex-wrap">
      
      <div class="flex-1 text-gray-700 px-10 py-1 m-1">
        <Introduction class="section" />
        <Experiences class="section" :items="newerExperiences"/>
        <ItemList class="section" :items="olderExperiences"/>
        <Items itemType="Courses" :items="courses" class="section" align="sm:text-right"/>
      </div>
           
      <div class="line flex-none text-gray-800 text-center px-0 py-0 m-0 invisible sm:invisible md:visible lg:visible xl:visible"></div>

      <div class="flex-1 text-gray-700 px-10 py-1 m-1">
        <Skills class="section"/>
        <Educations class="section"/>
        <ItemList class="section" :items="languages" title="Languages"/>
        <Items itemType="Certifications" :items="certifications" class="section" align="sm:text-left" />
      </div>

    </div>

  </Layout>
</template>

<script>

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
  data () {
    return {
      certifications: [
        {title: "Professional Scrum Master - PSM I", subtitle: "2013 - scrum.org"},
        {title: "Certified SAFe Agilist", subtitle: "2016 - SAFe Alliance"},
        {title: "Agile Foundation – Leadership Focus", subtitle: "2012 - DSDM"}
      ],
      courses: [
        {title: "Product Owner 360", subtitle: "2016, 2019 - goAgile "},
        {title: "Graphical Facilitation", subtitle: "2016, Future Factory"},
        {title: "Stillwater Leadership", subtitle: "2016, Stillwater"},
        {title: "Lead for Greatness", subtitle: "2018, goAgile"},
        {title: "Agile Project Leadership", subtitle: "2012, goAgile"}
      ],
      languages: [
        {title: "Danish", subtitle: "Native speaker"},
        {title: "German", subtitle: "Native speaker"},
        {title: "English", subtitle: "Fluent"}
      ],
      olderExperiences: [
        {title: "Forsvaret", subtitle: "Developer", period: "2001 - 2003", summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat inv debitis enim deserunt tenetur tempora, voluptates, ipsum sed quis necessitatibus magni illum repudiandae at deleniti temporibus est soluta odit", },
        {title: "Omada", subtitle: "Developer", period: "2001 - 2003", summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat inv debitis enim deserunt tenetur tempora, voluptates, ipsum sed quis necessitatibus magni illum repudiandae at deleniti temporibus est soluta odit", },
        {title: "Forsvaret", subtitle: "Developer", period: "2001 - 2003", },
        {title: "Nokia", subtitle: "Developer", period: "2001 - 2003", },
        {title: "Ericsson", subtitle: "Developer", period: "2001 - 2003", summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat inv debitis enim deserunt tenetur tempora, voluptates, ipsum sed quis necessitatibus magni illum repudiandae at deleniti temporibus est soluta odit", },
        {title: "XPonCard", subtitle: "Developer", period: "2001 - 2003", },
        {title: "Forca", subtitle: "Developer", period: "2001 - 2003"}
      ],
      newerExperiences: [
        {
          title: "Agile coach | Danske Spil",
          period: "april 2018 - june 2019",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat inv debitis enim deserunt tenetur tempora, voluptates, ipsum sed quis necessitatibus magni illum repudiandae at deleniti temporibus est soluta odit"   
        },
        {
          title: "Agile coach | Danske Spil", 
          period: "april 2018 - june 2019",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat inv debitis enim deserunt tenetur tempora, voluptates, ipsum sed quis necessitatibus magni illum repudiandae at deleniti temporibus est soluta odit"   
        },
        {
          title: "Agile coach | Danske Spil", 
          period: "april 2018 - june 2019",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat inv debitis enim deserunt tenetur tempora, voluptates, ipsum sed quis necessitatibus magni illum repudiandae at deleniti temporibus est soluta odit"   
        }
        ,
        {
          title: "Agile coach | Danske Spil", 
          period: "april 2018 - june 2019",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat inv debitis enim deserunt tenetur tempora, voluptates, ipsum sed quis necessitatibus magni illum repudiandae at deleniti temporibus est soluta odit"   
        }
      ]
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
