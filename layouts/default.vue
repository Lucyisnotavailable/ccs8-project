<template>
    <div class="app-wrapper">
      <Header />
      <main class="flex-1">
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
  <style scoped>
  .app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  </style>
  