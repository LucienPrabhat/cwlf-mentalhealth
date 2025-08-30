<template>
  <div :class="$style.frameWrapper">
    <div :class="$style.frameParent">
      <section :class="$style.frameGroup">
        <div :class="$style.wrapper">
          <h2 :class="$style.h2">三級處遇</h2>
        </div>
        <div :class="$style.container">
          <div :class="$style.div">
            <p :class="$style.p">
              兒福聯盟透過
              <span :class="[$style.span, $style.interactiveText]" @mouseenter="handleHover('qingshaonianxinli.png')"
                @mouseleave="handleLeave" @click="handleClick('qingshaonianxinli.png')">「青少年心理健康服務」</span>
              ，針對情緒困擾青少年及其家庭提供服務，由專業社工進行定期的訪視與陪伴，協助家庭修復親子關係，並串聯醫療、教育等外部資源，協助少年穩定身心狀況、重建生活節奏。同時，
              <span :class="[$style.span, $style.interactiveText]" @mouseenter="handleHoverErtongchuangshang"
                @mouseleave="handleLeave" @click="handleClickErtongchuangshang">「兒童創傷療癒中心」</span>
              針對曾經歷或目睹家庭暴力及其他創傷事件的兒少與照顧者，提供以創傷復原為核心的多元支持服務，在安全與信任的氛圍中，陪伴他們逐步走向療癒與重建。
            </p>
          </div>
        </div>
      </section>
      <div :class="$style.groupDiv">
        <div :class="$style.imageWrapper">
          <transition name="fade-slide" mode="out-in">
            <img :class="$style.frameChild" alt="" :src="currentImage" :key="currentImage" />
          </transition>
        </div>
        <div :class="$style.wrapper2">
          <img :class="$style.icon" loading="lazy" alt="" src="/3-1@2x.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentImage = ref('/ertongchuangshang01.png')
const ertongchuangshangImages = ['/ertongchuangshang01.png', '/ertongchuangshang03.png']
let ertongchuangshangIndex = 0
let ertongchuangshangInterval = null

// Default slideshow state
const defaultImages = [
  '/qingshaonianxinli.png',
  '/ertongchuangshang01.png',
  '/ertongchuangshang03.png',
]
let defaultIndex = 0
let defaultInterval = null

const stopDefaultSlideshow = () => {
  if (defaultInterval) {
    clearInterval(defaultInterval)
    defaultInterval = null
  }
}

const startDefaultSlideshow = () => {
  if (defaultInterval) return
  defaultIndex = 0
  defaultInterval = setInterval(() => {
    currentImage.value = defaultImages[defaultIndex]
    defaultIndex = (defaultIndex + 1) % defaultImages.length
  }, 3000)
}

const handleHover = (imagePath) => {
  // Pause default slideshow while hovering specific items
  stopDefaultSlideshow()
  currentImage.value = imagePath
}

const handleLeave = () => {
  currentImage.value = '/ertongchuangshang01.png'
  if (ertongchuangshangInterval) {
    clearInterval(ertongchuangshangInterval)
    ertongchuangshangInterval = null
  }
  // Resume default slideshow after leaving
  startDefaultSlideshow()
}

const handleClick = (imagePath) => {
  // Clicks take priority; stop any automated slideshows
  stopDefaultSlideshow()
  if (ertongchuangshangInterval) {
    clearInterval(ertongchuangshangInterval)
    ertongchuangshangInterval = null
  }
  currentImage.value = imagePath
}

const handleHoverErtongchuangshang = () => {
  // Pause default slideshow when hovering this carousel
  stopDefaultSlideshow()
  ertongchuangshangIndex = 0
  currentImage.value = ertongchuangshangImages[ertongchuangshangIndex]
  ertongchuangshangInterval = setInterval(() => {
    ertongchuangshangIndex = (ertongchuangshangIndex + 1) % ertongchuangshangImages.length
    currentImage.value = ertongchuangshangImages[ertongchuangshangIndex]
  }, 1000)
}

const handleClickErtongchuangshang = () => {
  // Clicks take priority; stop default slideshow
  stopDefaultSlideshow()
  if (ertongchuangshangInterval) {
    clearInterval(ertongchuangshangInterval)
    ertongchuangshangInterval = null
  }
  ertongchuangshangIndex = (ertongchuangshangIndex + 1) % ertongchuangshangImages.length
  currentImage.value = ertongchuangshangImages[ertongchuangshangIndex]
}

onMounted(() => {
  startDefaultSlideshow()
})

onBeforeUnmount(() => {
  stopDefaultSlideshow()
  if (ertongchuangshangInterval) {
    clearInterval(ertongchuangshangInterval)
    ertongchuangshangInterval = null
  }
})
</script>
<style module>
.h2 {
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 400;
  font-family: inherit;
}

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10) 9px;
}

.span {
  font-family: var(--font-gensenrounded2-tw);
}

.interactiveText {
  color: #1E9B9F;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.interactiveText:hover {
  opacity: 0.8;
}

.p {
  margin: 0;
  color: black;
}

.div {
  position: relative;
  letter-spacing: 0.04em;
  line-height: 190%;
  text-transform: uppercase;
}

.container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10) 9px;
  font-size: var(--font-size-20);
}

.frameGroup {
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-20) 0px;
  box-sizing: border-box;
  gap: var(--gap-14);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-32);
  color: var(--color-black);
  font-family: var(--font-gensenrounded2-tw);
}

.imageWrapper {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 90%;
  height: 90%;
  padding: 20px;
  box-sizing: border-box;
}

.frameChild {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
}

.icon {
  width: 10%;
  position: relative;
  max-height: 100%;
  object-fit: cover;
}

.wrapper2 {
  position: absolute;
  bottom: 0px;
  left: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10);
  width: 100%;
}

.groupDiv {
  height: 650px;
  width: 650px;
  position: relative;
  min-width: 300px;
  max-width: 100%;
}

.frameParent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  row-gap: var(--gap-20);
  max-width: 100%;
}

/* Responsive: stack .frameGroup and .groupDiv on smaller screens */
@media screen and (max-width: 1150px) {
  .frameParent {
    flex-direction: column;
    gap: 28px;
    align-items: center;
    padding: 0 16px;
  }

  .frameGroup {
    width: 100%;
    max-width: 720px;
    box-sizing: border-box;
    padding: 0;
  }

  .groupDiv {
    width: 100%;
    max-width: 720px;
    height: auto;
    position: relative;
    min-width: 0;
    min-height: 320px;
  }

  .imageWrapper {
    position: relative;
    bottom: auto;
    right: auto;
    width: 100%;
    height: auto;
    padding: 12px;
  }

  .frameChild {
    width: 100%;
    height: auto;
  }
}

.frameWrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
}

@media screen and (max-width: 450px) {
  .frameGroup {
    min-width: 100%;
  }

  .groupDiv {
    min-width: 100%;
  }

  .frameParent {
    flex-wrap: wrap;
  }

  .h2 {
    font-size: var(--font-size-19);
  }

  .div {
    font-size: var(--font-size-16);
    line-height: 30px;
  }
}

/* Fade + slide transition for slideshow */
:global(.fade-slide-enter-active),
:global(.fade-slide-leave-active) {
  transition: opacity 700ms ease, transform 700ms ease;
}

:global(.fade-slide-enter-from) {
  opacity: 0;
  transform: translateX(20px);
}

:global(.fade-slide-leave-to) {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
