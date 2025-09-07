<template>
  <router-view />
  <div class="floating-icon">
    <a href="https://lihi.cc/uz3sB" class="floating-icon-link">
      <img src="/icon-sun.png" alt="前往外部連結" />
      <span class="overlay-text">立即<br>行動</span>
    </a>
  </div>

  <div v-if="loadingState.isLoading" class="loading-mask">
    <img class="loading-gif" src="/cwlf_mentalhealth_blossom_animate.gif" alt="Loading" />
  </div>
</template>

<script setup>
import { loadingState } from "./utils/loading";
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
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.loading-gif {
  width: 150px;
  max-width: 60vw;
  height: auto;
}
</style>
