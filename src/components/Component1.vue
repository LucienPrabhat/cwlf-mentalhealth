<template>
  <div :class="$style.component" :data-property1="property1">
    <div :class="$style.wrapper">
      <p>
        我以為只要我夠痛，就會被看見。</br>
        只是媽媽也太痛了，痛到顧不了我
      </p>
      <p>
        我有在努力好好生活，真的有。</br>
        只是有時候，晚上還是會想：</br>
        「我是不是又快要掉回去那個深淵？」
      </p>
      <p>
        恐懼像影子一樣跟著我</br>
        它不僅出現在夜晚，</br>
        也逐漸侵蝕了白天</br>
        不論在家裡還是學校</br>
        對我而言都是沒有盡頭的永夜。
      </p>
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

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  z-index: 0;
}

/* removed trivial p2,p3,p4 rules */

.component {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 33px;
  box-sizing: border-box;
  gap: 74px;
  text-align: center;
  font-size: var(--font-size-20);
  color: var(--color-white);
  font-family: var(--font-gensenrounded2-tw);
}

p {
  margin: 20px;
  padding: 0;
}
</style>
