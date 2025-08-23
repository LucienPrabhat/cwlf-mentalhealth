<script setup lang="ts">
import TitleSection from './components/TitleSection.vue'
</script>

<template>
  <div id="app">
    <TitleSection />
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Microsoft JhengHei', 'PingFang TC', 'Helvetica Neue', Arial, sans-serif;
}
</style>
