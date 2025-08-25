<template>
  <div :class="$style.explorePanel" :style="explorePanelStyle">
    <div :class="$style.moreLinks">
      <h2 :class="$style.h2">{{ prop }}</h2>
    </div>
    <img
      :class="$style.explorePanelChild"
      loading="lazy"
      alt=""
      src="/frame-211.svg"
    />
  </div>
</template>
<script setup>
  import { computed } from "vue"

  const props = defineProps({
    prop: { type: String },
    explorePanelWidth: { type: [Object, Array, String, Number, Boolean] },
  })
  const explorePanelStyle = computed(() => ({
    width: props.explorePanelWidth,
  }))
</script>
<style module>
  .h2 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.04em;
    line-height: 157.24%;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
  }
  .moreLinks {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10) 9px;
  }
  .explorePanelChild {
    width: 76.7px;
    max-height: 100%;
  }
  .explorePanel {
    width: 502px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-24);
    text-align: left;
    font-size: var(--font-size-32);
    color: var(--color-white);
    font-family: var(--font-gensenrounded2-tw);
  }

  @media screen and (max-width: 401px) {
    .h2 {
      font-size: var(--font-size-19);
      line-height: 30px;
    }
  }
</style>
