<template>
  <section :class="$style.f">
    <div :class="$style.back">
      <div :class="$style.backgroundBlueParent">
        <div :class="$style.imageBackGroud">
          <picture>
            <source srcset="/garden-plants-m.png" media="(max-width: 600px)">
            <img src="/garden-plants.png" alt="Garden Plants">
          </picture>
        </div>
      </div>
      <div :class="$style.frameParent">
        <div :class="$style.frameGroup">
          <section :class="$style.titleContainer">
            <div :class="$style.wrapper">
              <img :class="$style.icon" loading="lazy" alt="" src="/-1-2@2x.png" />
            </div>
            <div :class="$style.container">
              <h2 :class="$style.h2" :style="{ textAlign: 'left' }">每一個被訴說的傷口，</h2>
              <h2 :class="$style.h2" :style="{ textAlign: 'right' }">都是讓花開的養分</h2>
            </div>
          </section>
          <div :class="$style.qiconAreaDiv">
            <img :class="$style.qIcon" alt="" src="/q.svg" />
            <img :class="$style.floatIcon" alt="" src="/questions.png" />
            <img :class="$style.floatIcon2" alt="" src="/questions.png" />
            <div v-for="(msg, idx) in messages" :key="msg.id" :class="$style.questionsBubble"
              :style="{ left: msg.left, bottom: msg.bottom, animationDuration: msg.duration + 's' }">
              <img alt="" src="/questions.png" />
              <div :class="$style.bubbleText">{{ msg.text }}</div>
            </div>
          </div>
        </div>
        <section :class="$style.type">
          <div :class="$style.inputField">
            <div :class="$style.inputContent">
              <div :class="$style.inputFieldWrapper">
                <div :class="$style.inputBox" />
                <input :class="$style.textInput" v-model="inputText" type="text" :maxlength="30"
                  placeholder="輸入最多30字..." />
              </div>
              <div :class="$style.inputIconArea" @click="onSend">
                <img :class="$style.icon1" alt="" src="/icon-1.svg" />
              </div>
            </div>
          </div>
          <div :class="$style.commentDescription">
            <p :class="$style.commentDescriptionTxt">留下你曾經覺得過不去的低潮回憶</p>
            <p :class="$style.commentDescriptionTxt">讓它在這裡成為生命的養分吧</p>
          </div>
        </section>
        <transition name="overlay-fade">
          <div v-if="overlayVisible" :class="$style.overlayMask">
            <div :class="$style.overlayContent">
              <div ref="lottieContainer" :class="$style.lottieBox"></div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, watch, onBeforeUnmount, nextTick } from 'vue'

const inputText = ref('')
const overlayVisible = ref(false)
const messages = ref([])
const lottieContainer = ref(null)
let lottieInstance = null
let isSending = false

const formatNow = () => {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

const addBubble = (text) => {
  const leftPercent = 10 + Math.random() * 70
  const bottomPercent = 5 + Math.random() * 25
  const duration = 6 + Math.floor(Math.random() * 6)
  messages.value.push({
    id: Date.now() + Math.random(),
    text,
    left: leftPercent + '%',
    bottom: bottomPercent + '%',
    duration,
  })
}

const playOverlay = () =>
  new Promise((resolve) => setTimeout(resolve, 2100))

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby-YhgnBmq0YvdyupPEJfs0hwBj4vjnuC-Yg9XGGZFXO9Q8mx5ffBdeIDFcs0LADnk9cQ/exec'

const sendToGoogle = async (message, timestamp) => {
  if (!GOOGLE_SCRIPT_URL) return
  // First try JSON with CORS; fall back to no-cors form encoded if blocked
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ time: timestamp, comment: message }),
      mode: 'cors',
    })
  } catch (err) {
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams({ time: timestamp, comment: message }).toString(),
      })
    } catch (e) {
      console.error('Failed to send to Google:', e)
    }
  }
}

const onSend = async () => {
  const text = inputText.value.trim()
  if (!text || isSending) return
  isSending = true
  overlayVisible.value = true
  const timestamp = formatNow()
  await playOverlay()
  addBubble(text)
  inputText.value = ''
  overlayVisible.value = false
  isSending = false
  sendToGoogle(text, timestamp)
}

const loadLottie = async () => {
  try {
    // dynamic import to avoid hard dependency if not installed yet
    const mod = await import('lottie-web')
    return mod.default || mod
  } catch (e) {
    console.warn('lottie-web not installed. Run: npm i lottie-web')
    return null
  }
}

const initLottie = async () => {
  await nextTick()
  if (!lottieContainer.value) return
  const lottie = await loadLottie()
  if (!lottie) return
  // destroy previous instance if any
  if (lottieInstance) {
    lottieInstance.destroy()
    lottieInstance = null
  }
  lottieInstance = lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/cwlf_mentalhealth_blossom_animate.json',
  })
}

const destroyLottie = () => {
  if (lottieInstance) {
    try { lottieInstance.destroy() } catch { }
    lottieInstance = null
  }
}

watch(overlayVisible, (visible) => {
  if (visible) {
    initLottie()
  } else {
    destroyLottie()
  }
})

onBeforeUnmount(() => {
  destroyLottie()
})
</script>
<style module>
.backgroundBlue {
  align-self: stretch;
  position: relative;
  display: none;
  z-index: 0;
}

.qiconAreaDiv {
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: visible;
}

.floatIcon,
.floatIcon2 {
  position: absolute;
  width: 18%;
  object-fit: contain;
  opacity: 0.9;
  animation-name: floatY;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  pointer-events: none;
}

.floatIcon {
  left: 12%;
  top: 50%;
  animation-duration: 3s;
}

.floatIcon2 {
  width: 22%;
  right: 8%;
  bottom: 18%;
  animation-duration: 2s;
}

.questionsBubble {
  position: absolute;
  width: 25%;
  animation-name: floatY;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  pointer-events: none;
}

.questionsBubble>img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.bubbleText {
  position: absolute;
  left: 15%;
  right: 15%;
  top: 30%;
  color: var(--color-cadetblue-300);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

@keyframes floatY {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-36px);
    opacity: 0.5;
  }
}

.textInput {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 0px 60px;
  padding-right: 80px;
  box-sizing: border-box;
  font-family: var(--font-gensenrounded2-tw);
  font-size: var(--font-size-20);
  color: var(--color-cadetblue-300);
  z-index: 3;
}

.overlayMask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* fade transition */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 1200ms ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

.lottieBox {
  width: 50vw;
  height: 50vw;
  max-height: 90vh;
  pointer-events: none;
}

.pngIcon,
.pngIcon1 {
  /* prevent cover cropping: contain the image, keep aspect ratio, and allow responsive width */
  width: 100%;
  max-width: 881px;
  height: auto;
  position: relative;
  object-fit: contain;
  max-height: none;
  display: block;
}

.pngIcon1 {
  margin-left: -60px;
}

.imageBackGroud {
  position: absolute;
  bottom: -1vh;
}

.imageBackGroud img {
  width: 100%;
}

.layer272Icon {
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
}

.blockContainer {
  width: 501px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10);
  box-sizing: border-box;
}

.layer254Icon {
  width: 458px;
  position: relative;
  max-height: 100%;
  object-fit: contain;
}

.layer254Wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10);
}

.blockContainerParent {
  width: 1440px;
  margin: 0 !important;
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px var(--padding-100);
  box-sizing: border-box;
  gap: 0px;
  z-index: 2;
}

.layer251Icon {
  width: 100%;
  object-fit: contain;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  transform: scale(1.018);
}

.wrapper0002Layer2 {
  width: 1062.4px;
  position: relative;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.layerNames {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-10);
  box-sizing: border-box;
  max-width: 100%;
}

.layer271Icon {
  align-self: stretch;
  overflow: hidden;
  object-fit: contain;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  transform: scale(1.018);
}

.wrapper0003Layer2 {
  align-self: stretch;
  position: relative;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.layerNames1 {
  width: 1093px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: var(--padding-10);
  box-sizing: border-box;
  min-width: 1093px;
  max-width: 100%;
}

.layerNamesParent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  row-gap: var(--gap-20);
  max-width: 100%;
}

.pageElement {
  width: 100%;
  height: 100%;
  margin: 0 !important;
  position: absolute;
  right: 0px;
  bottom: -15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-10);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 3;
}

.backgroundBlueParent {
  width: 100%;
  margin: 0 !important;
  position: absolute;
  right: 0px;
  bottom: -11px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-10);
  z-index: 0;
}

.icon {
  /* image inside the left wrapper: avoid cropping by containing the image */
  width: 100%;
  max-width: 100%;
  height: auto;
  position: relative;
  object-fit: contain;
  display: block;
  max-height: none;
}

.wrapper {
  width: 100%;
  min-width: 200px;
  max-width: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
}

.h2 {
  margin: 0;
  width: 100%;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.04em;
  line-height: 193%;
  text-transform: uppercase;
  font-size: clamp(14px, 4vw, 32px);
  font-weight: 400;
  font-family: inherit;
}

.container {
  width: 100%;
  min-width: 200px;
  max-width: 450px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 25px 0;
  box-sizing: border-box;
}

.titleContainer {
  max-width: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5vw;
  text-align: center;
  font-size: var(--font-size-32);
  color: var(--color-cadetblue-200);
  font-family: var(--font-gensenrounded2-tw);
  margin-bottom: 10%;
}

.qIcon {
  align-self: stretch;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  pointer-events: none;
}

.frameGroup {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0px;
  max-width: 100%;
}

.inputBox {
  align-self: stretch;
  height: 77px;
  position: relative;
  box-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5.4px);
  border-radius: 73.5px;
  background-color: var(--color-white);
}

.inputFieldWrapper {
  width: 100%;
  margin: 0 !important;
  position: absolute;
  top: 0.5px;
  left: 0.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10);
  box-sizing: border-box;
  height: 100%;
  z-index: 2;
}

.icon1 {
  width: clamp(20px, 5vw, 43px);
}

.inputIconArea {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0px 5%;
  box-sizing: border-box;
  position: relative;
  z-index: 4;
  cursor: pointer;
}

.inputContent {
  height: 97px;
  width: 557px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-10);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-10);
}

.inputField {
  align-self: stretch;
  height: 100%;
  min-height: 45px;
  max-height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.commentDescription {
  box-sizing: border-box;
  margin: 2vh 0 5vh;
}

.commentDescriptionTxt {
  font-size: clamp(12px, 3vw, 24px);
  font-weight: 100;
  position: relative;
  letter-spacing: 0.04em;
  line-height: 190%;
  text-transform: uppercase;
  text-shadow: 0px 0px 3px #fff;
}

.type {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--font-size-20);
  color: var(--color-cadetblue-300);
  font-family: var(--font-gensenrounded2-tw);
}

.frameParent {
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3vh;
  padding: 5% 2% 25%;
}

.back {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10);
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  max-width: 101%;
}

.f {
  width: 100%;
  background: linear-gradient(180deg, #B9F9FB, #f3ffd8);
}

@media screen and (max-width: 768px) {
  .titleContainer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3vh;
    padding: 0 16px;
  }

  .container {
    align-self: center;
  }
}

@media screen and (max-width: 450px) {
  .container {
    padding: 25px 10vw;
  }
}
</style>
