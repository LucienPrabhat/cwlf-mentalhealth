<template>
  <div :class="$style.a">
    <h1>組件 A</h1>
    <p>這是一個新的組件</p>
  </div>
</template>

<script setup>
// 組件邏輯
</script>

<style module>
.a {
  padding: 20px;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 10px;
}

p {
  color: #666;
}
</style>
