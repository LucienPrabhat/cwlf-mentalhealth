<template>
  <div :class="$style.volume2" :data-size="size">
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
    height: 58.96%;
    width: 83.33%;
    top: 20.63%;
    right: 8.33%;
    bottom: 20.42%;
    left: 8.33%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .volume2 {
    width: 48px;
    height: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
</style>
