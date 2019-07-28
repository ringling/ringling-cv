<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Hello, world!</h1>

    <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
      </div>
      <div class="ml-6 pt-1">
        <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
        <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
      </div>
    </div>
   
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
