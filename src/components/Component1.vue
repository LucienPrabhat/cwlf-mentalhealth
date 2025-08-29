<template>
  <div :class="$style.component" :data-property1="property1">
    <div :class="$style.wrapper" ref="wrap" @mouseenter="pause" @mouseleave="resume">
      <div :class="$style.scrollInner" ref="inner">
        <p :class="$style.p">
          我以為只要我夠痛，就會被看見。<br />
          只是媽媽也太痛了，痛到顧不了我。
        </p>
        <p :class="$style.p">
          我有在努力好好生活，真的有。<br />
          只是有時候，晚上還是會想：<br />
          「我是不是又快要掉回去那個深淵？」
        </p>
        <p :class="$style.p">
          恐懼像影子一樣跟著我。
        </p>
        <p :class="$style.p">
          它不僅出現在夜晚，<br />
          也逐漸侵蝕了白天，<br />
          不論在家裡還是學校，<br />
          對我而言都是沒有盡頭的永夜。
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  property1: { type: Number, default: "Frame 8" },
})
</script>
<script>
export default {
  mounted() {
    this.startAutoScroll()
  },
  beforeUnmount() {
    this.stopAutoScroll()
  },
  data() {
    return {
      timer: null,
      index: 0,
      paused: false,
    }
  },
  methods: {
    startAutoScroll() {
      // measure first p height and scroll by that amount every interval
      this.$nextTick(() => {
        const inner = this.$refs.inner
        const wrap = this.$refs.wrap
        if (!inner || !wrap) return
        const ps = inner.querySelectorAll('p')
        if (!ps.length) return
        // make container height equal to first p's height so only first is visible
        const h = ps[0].getBoundingClientRect().height
        wrap.style.overflow = 'hidden'
        this.timer = setInterval(() => {
          if (this.paused) return
          this.index = (this.index + 1) % ps.length
          inner.style.transition = 'transform 600ms ease'
          inner.style.transform = `translateY(-${this.index * h}px)`
        }, 2500)
      })
    },
    stopAutoScroll() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    pause() {
      this.paused = true
    },
    resume() {
      this.paused = false
    },
  },
}
</script>
<style module>
/* paragraph tags use default styles; trivial .p* rules removed */

.wrapper {
  width: 100%;
  display: block;
  /* single clipped viewport for scrolling */
  box-sizing: border-box;
  z-index: 0;
  position: relative;
  /* for overlay mask */
  overflow: hidden;

  -webkit-mask-image: linear-gradient(to bottom,
      rgba(255, 255, 255, 0) 0%,
      /* 上方透明，內容隱藏 */
      rgba(255, 255, 255, 1) 12%,
      rgba(255, 255, 255, 1) 38%,
      /* 中間不透明，內容顯示 */
      rgba(255, 255, 255, 0) 62%,
      rgba(255, 255, 255, 0) 88%,
      /* 下方透明，內容隱藏 */
      rgba(255, 255, 255, 0) 100%);
  mask-image: linear-gradient(to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 12%,
      rgba(255, 255, 255, 1) 38%,
      rgba(255, 255, 255, 0) 62%,
      rgba(255, 255, 255, 0) 88%,
      rgba(255, 255, 255, 0) 100%);
}

.scrollInner {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 600ms ease;
  /* transform: translateY(200px); */
}

/* removed trivial p2,p3,p4 rules */

.component {
  min-width: 350px;
  width: clamp(350px, 30vw, 512px);
  aspect-ratio: 350 / 512;
  /* width / height -> keeps proportional height */
  min-height: 500px;
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

.p {
  margin: 0;
  padding: 20px 20px;
  /* predictable height */
  text-align: center;
  font-size: var(--font-size-20);
  color: var(--color-white);
  font-family: var(--font-gensenrounded2-tw);
  line-height: 190%;
  letter-spacing: 0.04em;
}
</style>
