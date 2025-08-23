<template>
  <div class="single-page-app">
    <!-- Page A Section -->
    <section class="page-section page-a">
      <PageA />
    </section>

    <!-- Page B Section -->
    <section class="page-section page-b">
      <PageB />
    </section>

    <!-- Page C Section -->
    <section class="page-section page-c">
      <PageC />
    </section>

    <!-- Page D Section -->
    <section class="page-section page-d">
      <PageD />
    </section>

    <!-- Page E Section -->
    <section class="page-section page-e">
      <PageE />
    </section>

    <!-- Page F Section -->
    <section class="page-section page-f">
      <PageF />
    </section>

    <!-- Page G Section -->
    <section class="page-section page-g">
      <PageG />
    </section>
  </div>
</template>

<script setup lang="ts">
import PageA from "../pages/A.vue"
import PageB from "../pages/B.vue"
import PageC from "../pages/C.vue"
import PageD from "../pages/D.vue"
import PageE from "../pages/E.vue"
import PageF from "../pages/F.vue"
import PageG from "../pages/G.vue"
</script>

<style scoped>
.single-page-app {
  width: 100%;
}

.page-section {
  width: 100%;
  position: relative;
}

.page-a {
  background: linear-gradient(180deg, var(--color-cadetblue-300), #5e6e7a);
}

.page-b {
  background: #ffffff;
}

.page-c {
  background: #f5f5f5;
}

.page-d {
  background: #ffffff;
}

.page-e {
  background: #f8f9fa;
}

.page-f {
  background: #ffffff;
}

.page-g {
  background: #f5f5f5;
}
</style>


