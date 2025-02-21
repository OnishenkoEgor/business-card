<style lang="scss">
@use "~/style/reset.css";
@use "~/style/scss/main.scss";
</style>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<template>
  <div class="page">
    <glitch/>
  </div>
</template>
