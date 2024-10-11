<!-- layouts/default.vue -->
<template>
  <div class="layout">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  padding: 20px;
}
</style>
