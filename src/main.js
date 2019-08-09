// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/styles.css'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)


  head.meta.push({
    name: 'keywords',
    content: 'CV,Curriculum Vitae,Thomas Ringling,Scrum Master,Product Owner,Developer,Elixir,Software,Programmer,Agile,XP,VueJS'
  })
}





