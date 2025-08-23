<template>
  <div :class="$style.frameParent">
    <img :class="$style.frameChild" alt="" :src="frame193" />
    <div :class="$style.wrapper" :style="frameDivStyle">
      <h3 :class="$style.h3">{{ prop }}</h3>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { StyleValue, computed } from "vue"

  const props = defineProps({
    frame193: { type: String },
    prop: { type: String },
    frameDivPadding: { type: [Object, Array, String, Number, Boolean] },
  })
  const frameDivStyle = computed(
    (): StyleValue => ({
      padding: props.frameDivPadding as string | number,
    })
  )
</script>
<style module>
  .frameChild {
    width: 364px;
    margin: 0 !important;
    position: absolute;
    top: -10px;
    left: -10px;
    max-height: 100%;
    z-index: 0;
  }
  .h3 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.04em;
    line-height: 157.24%;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
  }
  .wrapper {
    width: 344px;
    height: 84px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10);
    box-sizing: border-box;
    z-index: 1;
  }
  .frameParent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2) 0px;
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-10);
    max-width: 100%;
    z-index: 2;
    text-align: center;
    font-size: var(--font-size-20);
    color: var(--color-cadetblue-100);
    font-family: var(--font-gensenrounded2-tw);
  }

  @media screen and (max-width: 1150px) {
    .h3 {
      font-size: var(--font-size-16);
      line-height: 25px;
    }
  }
  @media screen and (max-width: 1050px) {
    .h3 {
      font-size: var(--font-size-16);
      line-height: 25px;
    }
  }
  @media screen and (max-width: 1050px) {
    .h3 {
      font-size: var(--font-size-16);
      line-height: 25px;
    }
  }
  @media screen and (max-width: 800px) {
    .h3 {
      font-size: var(--font-size-16);
      line-height: 25px;
    }
  }
</style>