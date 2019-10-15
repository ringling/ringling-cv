<template>
<div class="container">

  <header class="header">

    <div class="flex flex-col">

      <div class="flex justify-center text-center text-gray-700  px-4 py-2 m-2">
        <div class="name">Software professional<br></div>
      </div>

      <div class="px-4 py-1 m-2">        
        <Portrait/>        
      </div>
      <div class="text-gray-900 text-center px-4 py-1 m-2">
        <h1 class="print-name">Thomas Ringling</h1>
      </div>
      <div class="text-gray-700 text-center px-4 py-1 m-2">
        <div class="year-birth">Anno 1972</div>
      </div>
      <div class="text-gray-700 text-center px-4 py-1 m-2">
        <div class="title">Curriculum Vitae</div>
      </div>
      
    </div>
    
  </header>

  <div class="layout">
    <slot/>
  </div>

  <footer class="footer flex justify-center align-bottom h-32">
    <span class="inline-block align-baseline self-end">Nærum Hovedgade 15 st th D, 2850 Nærum | +45 61 69 93 51 | <a class="email-link" href="mailto:cv@ringling.info">cv@ringling.info</a> | <a class="www-link" target="_blank" href="http://cv.ringling.info">cv.ringling.info</a> </span>
  </footer>

</div>
</template>

<script>

import Portrait from '~/components/Portrait.vue'

export default {
  components: {
    Portrait
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
header {
  padding-top: 10px;
  background: linear-gradient(to bottom, rgb(156,184,204), white);
}

footer {
  /* background: linear-gradient(to top, rgb(156,184,204), white); */
  padding-bottom: 10px;
  @apply text-gray-700 p-2 text-sm;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.name {
  background: transparent;
  min-width: 320px;
  padding: 1rem;
  border: 2px solid rgb(156,184,204);
  @apply text-2xl;
}

.title {
  @apply text-lg;
}

.year-birth {
  @apply text-sm;
}

.year-birth, .title, .name {
  text-transform: uppercase;
  @apply text-gray-700;
}

</style>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>


