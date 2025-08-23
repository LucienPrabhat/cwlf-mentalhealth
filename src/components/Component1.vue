<template>
  <div :class="$style.component" :data-property1="property1">
    <div :class="$style.wrapper">
      <div :class="$style.div">
        <p :class="$style.p">我以為只要我夠痛，就會被看見。</p>
        <p :class="$style.p1">只是媽媽也太痛了，痛到顧不了我</p>
      </div>
    </div>
    <div :class="$style.div1">
      <p :class="$style.p2">我有在努力好好生活，真的有。</p>
      <p :class="$style.p3">只是有時候，晚上還是會想：</p>
      <p :class="$style.p4">「我是不是又快要掉回去那個深淵？」</p>
    </div>
    <div :class="$style.div2">恐懼像影子一樣跟著我</div>
    <div :class="$style.div3">
      <p :class="$style.p5">它不僅出現在夜晚，</p>
      <p :class="$style.p6">也逐漸侵蝕了白天</p>
      <p :class="$style.p7">不論在家裡還是學校</p>
      <p :class="$style.p8">對我而言都是沒有盡頭的永夜。</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  defineProps({
    property1: { type: Number, default: "Frame 8" },
  })
</script>
<style module>
  .p {
    margin: 0;
  }
  .p1 {
    margin: 0;
  }
  .div {
    width: 312px;
    position: relative;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    display: inline-block;
    text-shadow: 0px 1px 5.6px rgba(255, 255, 255, 0.47);
    opacity: 0;
  }
  .wrapper {
    width: 328px;
    height: 76px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-16);
    box-sizing: border-box;
    z-index: 0;
  }
  .p2 {
    margin: 0;
  }
  .p3 {
    margin: 0;
  }
  .p4 {
    margin: 0;
  }
  .div1 {
    width: 353px;
    position: relative;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    display: inline-block;
    text-shadow: 0px 1px 5.6px rgba(255, 255, 255, 0.47);
    opacity: 0;
    z-index: 1;
  }
  .div2 {
    width: 208px;
    position: absolute;
    margin: 0 !important;
    bottom: -70px;
    left: 69px;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    display: inline-block;
    text-shadow: 0px 1px 5.6px rgba(255, 255, 255, 0.47);
    opacity: 0;
    z-index: 2;
  }
  .p5 {
    margin: 0;
  }
  .p6 {
    margin: 0;
  }
  .p7 {
    margin: 0;
  }
  .p8 {
    margin: 0;
  }
  .div3 {
    width: 291px;
    position: absolute;
    margin: 0 !important;
    bottom: -296px;
    left: 30px;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    display: inline-block;
    text-shadow: 0px 1px 5.6px rgba(255, 255, 255, 0.47);
    opacity: 0;
    z-index: 3;
  }
  .component {
    position: absolute;
    top: 86px;
    left: calc(50% - 179px);
    width: 353px;
    height: 593px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 296px 0px 33px;
    box-sizing: border-box;
    gap: 74px;
    text-align: center;
    font-size: var(--font-size-20);
    color: var(--color-white);
    font-family: var(--font-gensenrounded2-tw);
  }
</style>
