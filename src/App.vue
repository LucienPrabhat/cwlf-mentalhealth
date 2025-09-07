<template>
  <router-view />
  <div class="floating-icon">
    <a href="https://lihi.cc/uz3sB" class="floating-icon-link">
      <img src="/icon-sun.png" alt="前往外部連結" />
      <span class="overlay-text">立即<br>行動</span>
    </a>
  </div>

  <div v-show="loadingState.isLoading" class="loading-mask">
    <img v-if="showGif" class="loading-gif" src="/cwlf_mentalhealth_blossom_animate.gif" alt="Loading" />
    <div v-show="lottieReady" ref="lottieEl" class="loading-lottie"></div>
    <div class="loading-text">載入中... ...</div>
  </div>
</template>

<script setup>
import { loadingState } from "./utils/loading";
import { ref, watch, onBeforeUnmount } from "vue";

const lottieEl = ref(null);
const showGif = ref(true);
const lottieReady = ref(false);
const lottieLoadedOnce = ref(false);
let lottieInstance = null;
let lottieModule = null;

const loadLottieIfNeeded = async () => {
  if (lottieLoadedOnce.value) return;
  try {
    const [mod, json] = await Promise.all([
      import("lottie-web"),
      fetch("/cwlf_mentalhealth_blossom_animate.json").then((r) => r.json()),
    ]);
    lottieModule = mod.default || mod;
    if (!lottieEl.value) return;
    lottieInstance = lottieModule.loadAnimation({
      container: lottieEl.value,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: json,
    });
    lottieReady.value = true;
    showGif.value = false;
    lottieLoadedOnce.value = true;
  } catch (err) {
    // Keep GIF if Lottie fails to load
  }
};

watch(
  () => loadingState.isLoading,
  (isLoading) => {
    if (isLoading) {
      // If already initialized, resume playback; else init (once)
      if (lottieInstance) {
        try { lottieInstance.play(); } catch { }
        return;
      }
      // When mask shows, kick off lottie load if not yet ready
      // Use microtask to ensure container exists in DOM
      Promise.resolve().then(() => {
        if (lottieEl.value) {
          loadLottieIfNeeded();
        }
      });
    } else {
      // Optional: stop animation when hidden to save CPU
      if (lottieInstance) {
        lottieInstance.stop();
      }
    }
  },
  { immediate: false }
);

onBeforeUnmount(() => {
  if (lottieInstance) {
    lottieInstance.destroy();
    lottieInstance = null;
  }
});
</script>

<style scoped>
.floating-icon {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 1000;
}

.floating-icon-link {
  position: relative;
  display: inline-block;
}

.floating-icon img {
  width: 124px;
  height: 124px;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #1E3648;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  line-height: 1.1;
  pointer-events: none;
}

@media (max-width: 768px) {
  .floating-icon img {
    width: 70px;
    height: 70px;
  }

  .overlay-text {
    font-size: 14px;
  }
}

.loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.loading-gif {
  width: 200px;
  max-width: 50vw;
  height: auto;
}

.loading-lottie {
  width: 200px;
  max-width: 50vw;
  height: auto;
}

.loading-text {
  margin: 20px 0 0 0;
  font-size: clamp(14px, 2vw, 20px);
  line-height: 150%;
  text-align: center;
  color: var(--color-cadetblue-300);
}
</style>
