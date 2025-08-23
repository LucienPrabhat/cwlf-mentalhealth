<template>
  <div :class="$style.book" :data-size="size">
    <img :class="$style.icon" alt="" />
  </div>
</template>
<script setup>
  defineProps({
    size: { type: Number, default: 48 },
  })
</script>
<style module>
  .icon {
    position: absolute;
    height: 83.33%;
    width: 66.67%;
    top: 8.33%;
    right: 16.67%;
    bottom: 8.33%;
    left: 16.67%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .book {
    width: 48px;
    height: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
</style>
