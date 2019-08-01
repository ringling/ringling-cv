<template>
  <div class="listItems">
    <h2>{{title}}</h2>

    <div class="w-full">
      <div class="flex flex-wrap justify-between">
        <div class="listItem flex-none" v-for="item in items">
          <h3>{{item.title}}</h3>
          <h4>{{item.subtitle}}</h4>
          <p>{{item.period}}</p>
          <a href="#" @click=" openModal(item)" class="m-0 text-xs text-blue-700" v-if="item.summary!=null">details</a>

        </div>
      </div>
    </div>
    <Modal v-show="showModal" @close="showModal = false" :item="activeItem"/>

  </div>
</template>

<script>

import Modal from '~/components/Modal.vue'
import MagnifyerIcon from '~/components/MagnifyerIcon.vue'


export default {
  props: ['items', 'title'],
  components: {
    Modal,
    MagnifyerIcon
  },
  data () {
    return {
      activeItem: {title: ""},
      showModal: false
    }
  },
  methods: {
    openModal: function(item)  {
      this.activeItem = item;
      this.showModal = true;
    }
  }
}
</script>

<style>

  .listItem > p { 
    @apply text-xs text-gray-500 mb-0;
  }

  .listItem > h3 {
    text-transform: uppercase;
    @apply text-left mb-1 text-gray-700 text-sm font-semibold;
  }

   .listItem > h4  {
     text-transform: uppercase;
     @apply text-left mb-1 text-gray-600 text-xs font-semibold;
   }

   .listItem,  .listItems > h2{
     @apply mb-4;
   }

   .listItem {
     @apply mr-4;
   }

</style>