<template>
<div class="container">

  <header class="header">

    <div class="flex flex-col">

      <div class="flex justify-center text-center text-gray-700  px-4 py-2 m-2">
        <div class="name">Thomas Ringling</div>
      </div>

      <div class="text-gray-700 text-center px-4 py-1 m-2">
        <div class="title">Software professional</div>
      </div>
      
      <div class="text-gray-700 px-4 py-1 m-2 text-center">
        <g-image src="~/assets/portrait.png" width="300" fit="contain"/>
      </div>
      
      <div class="text-gray-700 text-center px-4 py-1 m-2">
        <div class="year-birth">Anno 1972</div>
      </div>

    </div>
    
    
  </header>


  <div class="layout">
    <slot/>
  </div>


  <footer class="footer flex justify-center align-bottom h-32">
    
    <span class="inline-block align-baseline self-end">Nærum Hovedgade 15 st th D, 2850 Nærum | +45 61 69 93 51 | thomas@ringling.info | www.ringling.info </span>
  </footer>

</div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
header {
  padding-top: 10px;
  background: linear-gradient(to bottom, #AECAEF, white);
}

footer {
  background: linear-gradient(to top, #AECAEF, white);
  padding-bottom: 10px;
  @apply text-gray-700 p-2;
}


img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.module-border-wrap {
  background: linear-gradient(to right, #AECAEF, #EFAED6);
  padding: 2px;
}

.name {
  background: transparent;
  min-width: 350px;
  padding: 1rem;
  border: 2px solid #AECAEF;
  @apply text-2xl;
}

.title {
  @apply text-lg;
}

.year-birth {
  @apply text-sm;
}

.year-birth, .name, .title {
  text-transform: uppercase;
  @apply text-gray-600;
}


</style>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>


