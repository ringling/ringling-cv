
<template>
  <div class="items">
    <h2 :class="align">{{itemType}}</h2>
    <Item v-for="item in items" :title="item.title" :subtitle="item.subtitle" :align="align" v-bind:key="item.title"/>
  </div>
</template>

<script>

import Item from '~/components/Item.vue'

export default {
  props: ['itemType', 'items', 'align'],
  components: {
    Item
  }
}
</script>
<style>

  .items > h2 {
    @apply mb-4;
  }

  .items > p {
    @apply mb-2;
  }
</style>

