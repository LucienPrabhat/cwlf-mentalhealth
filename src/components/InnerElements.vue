<template>
  <div :class="$style.innerElements">
    <div :class="$style.group" :style="groupStyle">
      <a :class="$style.a" :href="href" target="_blank" :style="aStyle">
        {{ prop }}
      </a>
      <div :class="$style.expansionSign" :style="expansionSignStyle">
        <img
          :class="$style.keyboardArrowDownIcon"
          alt=""
          src="/keyboard-arrow-down-8@2x.png"
        />
      </div>
    </div>
    <div :class="$style.linelineYouthplusCwl">
      <span :class="$style.linelineYouthplusCwl1">
        <p :class="$style.p">專線電話： 0800-001769</p>
        <p :class="$style.p">LINE@線上聊：LINE搜尋 @youthplus_cwlf</p>
      </span>
    </div>
  </div>
</template>
<script setup>
  import { computed } from "vue"

  const props = defineProps({
    prop: { type: String },
    href: { type: String },
    groupWidth: { type: [Object, Array, String, Number, Boolean] },
    groupHeight: { type: [Object, Array, String, Number, Boolean] },
    groupAlignItems: { type: String },
    aWidth: { type: [Object, Array, String, Number, Boolean] },
    expansionSignJustifyContent: { type: String },
    expansionSignPadding: { type: [Object, Array, String, Number, Boolean] },
  })
  const groupStyle = computed(() => ({
    width: props.groupWidth,
    height: props.groupHeight,
    alignItems: props.groupAlignItems,
  }))
  const aStyle = computed(() => ({
    width: props.aWidth,
  }))
  const expansionSignStyle = computed(() => ({
    justifyContent: props.expansionSignJustifyContent,
    padding: props.expansionSignPadding,
  }))
</script>
<style module>
  .a {
    width: 83px;
    position: relative;
    text-decoration: underline;
    letter-spacing: 0.04em;
    line-height: 200%;
    text-transform: uppercase;
    color: inherit;
    display: inline-block;
  }
  .keyboardArrowDownIcon {
    width: 32px;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    z-index: 1;
  }
  .expansionSign {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4) 0px 0px;
    margin-left: -2px;
    position: relative;
  }
  .group {
    width: 113px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .p {
    margin: 0;
  }
  .linelineYouthplusCwl1 {
    width: 100%;
  }
  .linelineYouthplusCwl {
    width: 434px;
    height: 68px;
    position: relative;
    font-size: var(--font-size-16);
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
  .innerElements {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-14);
    text-align: left;
    font-size: var(--font-size-20);
    color: var(--color-white);
    font-family: var(--font-gensenrounded2-tw);
  }

  @media screen and (max-width: 450px) {
    .a {
      font-size: var(--font-size-16);
      line-height: 32px;
    }
  }
</style>
