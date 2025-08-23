<template>
  <div class="single-page-app">
    <!-- Page A Section -->
    <section class="page-section page-a">
      <div class="page-content">
        <h1>Page A - 我只是想被看見、被聽見</h1>
        <p>每次感到快無法呼吸時，我都不知道該怎麼辦...</p>
      </div>
    </section>

    <!-- Page B Section -->
    <section class="page-section page-b">
      <div class="page-content">
        <h1>Page B - 手腕上一道道紅色傷痕</h1>
        <p>是她唯一的出口</p>
        <p>國中的小漿和媽媽同住在一間狹小的套房裡，媽媽因為龐大的經濟壓力一度深陷情緒風暴中、開始會借酒澆愁，使小漿常得面對媽媽的情緒與酒後失序，親子衝突日益增加，想到每天放學回家，就要面對這一切，小漿覺得無力又想哭⋯⋯</p>
      </div>
    </section>

    <!-- Page C Section -->
    <section class="page-section page-c">
      <div class="page-content">
        <h1>Page C</h1>
        <p>Mental health support content</p>
      </div>
    </section>

    <!-- Page D Section -->
    <section class="page-section page-d">
      <div class="page-content">
        <h1>Page D</h1>
        <p>Mental health resources</p>
      </div>
    </section>

    <!-- Page E Section -->
    <section class="page-section page-e">
      <div class="page-content">
        <h1>Page E</h1>
        <p>Mental health information</p>
      </div>
    </section>

    <!-- Page F Section -->
    <section class="page-section page-f">
      <div class="page-content">
        <h1>Page F</h1>
        <p>Mental health services</p>
      </div>
    </section>

    <!-- Page G Section -->
    <section class="page-section page-g">
      <div class="page-content">
        <h1>Page G</h1>
        <p>Mental health contact</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Simplified version without complex page imports
</script>

<style scoped>
.single-page-app {
  width: 100%;
  min-height: 100vh;
}

.page-section {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-content {
  text-align: center;
  max-width: 800px;
  padding: 2rem;
}

.page-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.page-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
}

.page-a {
  background: linear-gradient(180deg, #5e6e7a, #4a5a6a);
  color: white;
}

.page-a .page-content h1,
.page-a .page-content p {
  color: white;
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


