<template>
  <div :class="$style.home" :data-size="size">
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
    width: 75%;
    top: 8.33%;
    right: 12.5%;
    bottom: 8.33%;
    left: 12.5%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .home {
    height: 48px;
    width: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
</style>
