<template>
  <div class="experience">


    <h3 class="sm:text-right">{{experience.title + ' | ' + experience.companyName}}</h3>
    <h4 class="sm:text-right">{{experience.startDate + ' - ' + experience.endDate}}</h4>
    <p v-html="experience.summary"></p>
    <button v-if="experience.full" class="accordion p-3 bg-transparent font-semibold py-1 px-1" @click="openExp($event)">details</button>
    <div class="panel" v-if="experience.full">
      <p class="bg-blue-100 p-1" v-html="experience.full"></p>
    </div>
  </div>
</template>


<script>
  export default {
    props: ['experience'],
    methods: {
      openExp: function(experience)  {
        experience.currentTarget.classList.toggle("active");
        var panel = experience.currentTarget.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      }
    }
  }


</script>

<style>

  .experience > div > p > h5 {
    @apply mb-2 mt-2 text-gray-700 text-sm font-semibold;
  }
    .experience > div > p > h6 {
     @apply mb-2 mt-2 text-gray-700 text-xs font-semibold;
  }
  .experience > h3 {
    @apply mb-1 text-gray-700 text-sm font-semibold;
    text-transform: uppercase;
  }

  .experience > div > p {

  }

   .experience > h4  {
     @apply mb-1 text-gray-600 text-xs font-semibold;
    text-transform: uppercase;
   }

  .experience > a {
    @apply mb-3;
  }

  .accordion {
    cursor: pointer;
    transition: 0.4s;
  }

  .accordion:after {
    content: '\002B';
    color: #777;
    font-weight: bold;
    float: right;
    margin-left: 5px;
    @apply text-blue-600;
  }

  .active:after {
    content: "\2212";
    @apply text-blue-600;
  }

  .panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }


  button.accordion {
  @apply text-blue-600;
  text-transform: none;
}

button.accordion:hover {
  @apply text-blue-800
}


</style>
