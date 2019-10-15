<template>

  <div class="skill">
    <div class="skill-text">
      {{title}}
      <div class="print-skill">
        {{level}}/100
      </div>
    </div>

    <div class="w-full bg-gray-400 mb-2 flex-grow">
      <div class="bg-gray-600 text-xs leading-none py-1 text-center text-black skill-text" :style="style()"></div>
    </div>

  </div>
</template>


<script>

export default {
  props: ['level', 'title'],
  methods: {
    style: function()  {
      return "width:"+this.level+"%";
    }
  }
}
</script>