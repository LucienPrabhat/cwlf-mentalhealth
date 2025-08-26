<template>
  <div :class="$style.component" :data-property1="property1">
    <div :class="$style.wrapper">
      <div :class="$style.div">
        <p>我以為只要我夠痛，就會被看見。</p>
        <p>只是媽媽也太痛了，痛到顧不了我</p>
      </div>
    </div>
    <div :class="$style.div1">
      <p>我有在努力好好生活，真的有。</p>
      <p>只是有時候，晚上還是會想：</p>
      <p>「我是不是又快要掉回去那個深淵？」</p>
    </div>
    <div :class="$style.div2">恐懼像影子一樣跟著我</div>
    <div :class="$style.div3">
      <p>它不僅出現在夜晚，</p>
      <p>也逐漸侵蝕了白天</p>
      <p>不論在家裡還是學校</p>
      <p>對我而言都是沒有盡頭的永夜。</p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  property1: { type: Number, default: "Frame 8" },
})
</script>
<style module>
/* paragraph tags use default styles; trivial .p* rules removed */

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

/* removed trivial p2,p3,p4 rules */

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

/* removed trivial p5-p8 rules */

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
  left: calc(50% - 179px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 33px;
  box-sizing: border-box;
  gap: 74px;
  text-align: center;
  font-size: var(--font-size-20);
  color: var(--color-white);
  font-family: var(--font-gensenrounded2-tw);
}
</style>
