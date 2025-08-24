<template>
  <section :class="$style.fWrapper">
    <div :class="$style.f">
      <div :class="$style.back">
        <div :class="$style.backgroundBlueParent">
          <div :class="$style.backgroundBlue" />
          <div :class="$style.imageBackGroud">
            <img :class="$style.pngIcon" alt="" src="/-2png@2x.png" />
            <img :class="$style.pngIcon1" alt="" src="/-2png@2x.png" />
          </div>
          <div :class="$style.blockContainerParent">
            <div :class="$style.blockContainer">
              <img
                :class="$style.layer272Icon"
                loading="lazy"
                alt=""
                src="/--0003-layer27-2@2x.png"
              />
            </div>
            <div :class="$style.layer254Wrapper">
              <img
                :class="$style.layer254Icon"
                alt=""
                src="/--0002-layer25-2@2x.png"
              />
            </div>
          </div>
          <div :class="$style.pageElement">
            <div :class="$style.layerNamesParent">
              <div :class="$style.layerNames">
                <div :class="$style.wrapper0002Layer2">
                  <img
                    :class="$style.layer251Icon"
                    alt=""
                    src="/--0002-layer25-1@2x.png"
                  />
                </div>
              </div>
              <div :class="$style.layerNames1">
                <div :class="$style.wrapper0003Layer2">
                  <img
                    :class="$style.layer271Icon"
                    alt=""
                    src="/--0003-layer27-1-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.backInner">
          <div :class="$style.frameParent">
            <div :class="$style.frameGroup">
              <section :class="$style.frameContainer">
                <div :class="$style.wrapper">
                  <img
                    :class="$style.icon"
                    loading="lazy"
                    alt=""
                    src="/-1-2@2x.png"
                  />
                </div>
                <div :class="$style.container">
                  <h2 :class="$style.h2">
                    <p :class="$style.p">每一個被訴說的傷口，</p>
                    <p :class="$style.p1">都是讓花開的養分</p>
                  </h2>
                </div>
              </section>
              <div :class="$style.qiconAreaDiv">
                <img :class="$style.qIcon" alt="" src="/q.svg" />
                <img :class="$style.floatIcon" alt="" src="/questions.png" />
                <img :class="$style.floatIcon2" alt="" src="/questions.png" />
                <div
                  v-for="(msg, idx) in messages"
                  :key="msg.id"
                  :class="$style.questionsBubble"
                  :style="{ left: msg.left, bottom: msg.bottom, animationDuration: msg.duration + 's' }"
                >
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
                    <input
                      :class="$style.textInput"
                      v-model="inputText"
                      type="text"
                      :maxlength="30"
                      placeholder="輸入最多30字..."
                    />
                  </div>
                  <div :class="$style.inputIconArea" @click="onSend">
                    <img :class="$style.icon1" alt="" src="/icon-1.svg" />
                  </div>
                </div>
              </div>
              <div :class="$style.placeholder">
                <div :class="$style.div">
                  <p :class="$style.p">留下你曾經覺得過不去的低潮回憶</p>
                  <p :class="$style.p">讓它在這裡成為生命的養分吧</p>
                </div>
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
      try { lottieInstance.destroy() } catch {}
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
    height: 1483px;
    position: relative;
    background: linear-gradient(180deg, #baf9fb, #f3ffd8);
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
  .questionsBubble > img {
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
  .pngIcon {
    width: 881px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
  }
  .pngIcon1 {
    width: 881px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
    margin-left: -60px;
  }
  .imageBackGroud {
    margin: 0 !important;
    position: absolute;
    bottom: 0px;
    left: calc(50% - 851px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    row-gap: var(--gap-20);
    z-index: 1;
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
    height: 1269px;
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
    height: 1269px;
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
    height: 1269px;
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
    height: 1493px;
    margin: 0 !important;
    position: absolute;
    right: 0px;
    bottom: -11px;
    left: 0px;
    background: linear-gradient(180deg, #baf9fb, #f3ffd8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-10);
    z-index: 0;
  }
  .icon {
    width: 434px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
  }
  .wrapper {
    height: 263px;
    width: 503px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 35px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .p {
    margin: 0;
  }
  .p1 {
    margin: 0;
    white-space: pre-wrap;
  }
  .h2 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.04em;
    line-height: 193%;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
  }
  .container {
    height: 264px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 25px var(--padding-10);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frameContainer {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-32);
    color: var(--color-cadetblue-200);
    font-family: var(--font-gensenrounded2-tw);
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
    height: 745px;
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
    width: 34px;
    height: 28.7px;
    position: relative;
  }
  .inputIconArea {
    height: 97px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0px 25px;
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
    height: 97px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 25px 37px;
    box-sizing: border-box;
  }
  .div {
    position: relative;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    text-shadow: 0px 0px 3px #fff;
  }
  .placeholder {
    align-self: stretch;
    height: 140px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-64);
    box-sizing: border-box;
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
    width: 1420px;
    height: 1144px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0px;
    max-width: 100%;
  }
  .backInner {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-60) 0px;
    box-sizing: border-box;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 1;
  }
  .back {
    margin-left: -10px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-10) 0px var(--padding-20);
    box-sizing: border-box;
    position: relative;
    flex-shrink: 0;
    max-width: 101%;
  }
  .f {
    align-self: stretch;
    width: 1440px;
    background-color: var(--color-white);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-11);
    box-sizing: border-box;
    max-width: 100%;
  }
  .fWrapper {
    align-self: stretch;
    height: 1483px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-1) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }

  @media screen and (max-width: 1411px) {
    .pngIcon1 {
      margin-left: 0;
    }

    .imageBackGroud {
      flex-wrap: wrap;
    }

    .layer251Icon {
      align-self: stretch;
      width: 100%;
    }

    .layerNames {
      flex: 1;
    }

    .layer271Icon {
      align-self: stretch;
      width: 100%;
    }

    .layerNames1 {
      flex: 1;
      min-width: 100%;
    }

    .layerNamesParent {
      height: auto;
      flex-wrap: wrap;
    }

    .pageElement {
      height: auto;
    }

    .backgroundBlueParent {
      height: auto;
      min-height: 1493px;
    }

    .backInner {
      padding-top: 39px;
      padding-bottom: 39px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1200px) {
    .layerNames {
      min-width: 100%;
    }

    .icon {
      flex: 1;
    }

    .wrapper {
      flex: 1;
    }

    .container {
      flex: 1;
    }

    .frameContainer {
      flex-wrap: wrap;
    }

    .frameGroup {
      height: auto;
    }

    .frameParent {
      height: auto;
    }
  }
  @media screen and (max-width: 825px) {
    .wrapper {
      min-width: 100%;
    }

    .h2 {
      font-size: var(--font-size-26);
      line-height: 49px;
    }

    .container {
      min-width: 100%;
    }

    .backInner {
      padding-top: 25px;
      padding-bottom: 25px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .h2 {
      font-size: var(--font-size-19);
      line-height: 37px;
    }

    .div {
      font-size: var(--font-size-16);
      line-height: 30px;
    }

    .placeholder {
      padding-left: var(--padding-20);
      padding-right: var(--padding-20);
      box-sizing: border-box;
    }
  }
</style>
