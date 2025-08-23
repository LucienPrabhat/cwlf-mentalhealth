<template>
  <div :class="$style.playCircle" :data-size="size">
    <img :class="$style.icon" loading="lazy" alt="" />
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
    width: 83.33%;
    top: 8.33%;
    right: 8.33%;
    bottom: 8.33%;
    left: 8.33%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .playCircle {
    width: 48px;
    height: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
</style>
