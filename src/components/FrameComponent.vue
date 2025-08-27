<template>
  <div>
    <div :class="$style.wrapper1">
      <div :class="$style.wrapper11">
        <h2 :class="$style.h22">兒盟用行動陪伴</h2>
        <h2 :class="$style.h22">困在花園的青少年</h2>
      </div>
    </div>
    <div :class="$style.frameParent">
      <section :class="$style.frameGroup">
        <div :class="$style.wrapper">
          <h2 :class="$style.h2">初級預防</h2>
        </div>
        <div :class="$style.container">
          <div :class="$style.div">
            <p :class="$style.p">
              兒福聯盟持續推動政策修法，並透過
              <span :class="[$style.span, $style.interactiveText]" @mouseenter="handleHover('xiaoyuanxuandao.png')"
                @mouseleave="handleLeave" @click="handleClick('xiaoyuanxuandao.png')">校園宣導</span>
              、教材及
              <span :class="[$style.span, $style.interactiveText]" @mouseenter="handleHover('xianshangkecheng.png')"
                @mouseleave="handleLeave" @click="handleClick('xianshangkecheng.png')">線上課程</span>
              與社群倡議等多元行動，致力於營造友善的兒少心理健康環境。
            </p>
          </div>
        </div>
        <div :class="$style.frameDiv">
          <div :class="$style.div">
            <p :class="$style.p">
              <span :class="$style.span">同時，兒福聯盟提供免費</span>
              <span :class="[$style.span, $style.interactiveText]" @mouseenter="handleHover('shaonianzhuanxian.png')"
                @mouseleave="handleLeave" @click="handleClick('shaonianzhuanxian.png')">「少年專線」</span>
              傾聽孩子煩惱、接住情緒，並於
              <span :class="[$style.span, $style.interactiveText]" @mouseenter="handleHoverShaonianjia"
                @mouseleave="handleLeave" @click="handleClickShaonianjia">「少年+」</span>
              服務據點規劃多元活動、課程與營隊，搭配完善的空間設備與社工陪伴輔導，為青少年打造溫暖支持的互動環境。
            </p>
          </div>
        </div>
      </section>
      <div :class="$style.groupDiv">
        <div :class="$style.imageWrapper">
          <img :class="$style.frameChild" alt="" :src="currentImage" />
        </div>
        <div :class="$style.wrapper2">
          <img :class="$style.icon" loading="lazy" alt="" src="/1-1@2x.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const currentImage = ref('/Ellipse.png')
const shaonianjiaImages = ['/shaonianjia01.png', '/shaonianjia02.png', '/shaonianjia03.png']
let shaonianjiaIndex = 0
let shaonianjiaInterval = null

const handleHover = (imagePath) => {
  currentImage.value = imagePath
}

const handleLeave = () => {
  currentImage.value = '/Ellipse.png'
  if (shaonianjiaInterval) {
    clearInterval(shaonianjiaInterval)
    shaonianjiaInterval = null
  }
}

const handleClick = (imagePath) => {
  currentImage.value = imagePath
}

const handleHoverShaonianjia = () => {
  shaonianjiaIndex = 0
  currentImage.value = shaonianjiaImages[shaonianjiaIndex]
  shaonianjiaInterval = setInterval(() => {
    shaonianjiaIndex = (shaonianjiaIndex + 1) % shaonianjiaImages.length
    currentImage.value = shaonianjiaImages[shaonianjiaIndex]
  }, 1000)
}

const handleClickShaonianjia = () => {
  if (shaonianjiaInterval) {
    clearInterval(shaonianjiaInterval)
    shaonianjiaInterval = null
  }
  shaonianjiaIndex = (shaonianjiaIndex + 1) % shaonianjiaImages.length
  currentImage.value = shaonianjiaImages[shaonianjiaIndex]
}
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
  padding: var(--padding-10);
  box-sizing: border-box;
  font-size: var(--font-size-20);
}

.frameDiv {
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
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-32);
  color: var(--color-black);
  font-family: var(--font-gensenrounded2-tw);
  min-width: 350px;
  max-width: 100%;
}

.txt {
  line-break: anywhere;
  width: 100%;
}

.h22 {
  margin: 0;
  color: #1E9B9F;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.05em;
  line-height: 157.24%;
  text-transform: uppercase;
  font-weight: bold;
  font-family: inherit;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 36px;
  text-align: right;
}

.wrapper1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-10);
  margin: 35px 0;
}

.wrapper11 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-10);
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
  width: 97px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
}

.wrapper2 {
  position: absolute;
  bottom: 0px;
  right: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10);
}

.groupDiv {
  height: 650px;
  width: 650px;
  position: relative;
  min-width: 300px;
  max-width: 100%;
}

.frameContainer {
  width: 930.4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.frameParent {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: right;
  font-size: var(--font-size-36);
  color: var(--color-cadetblue-200);
  font-family: var(--font-gensenrounded2-tw);
  max-width: 100%;
}

/* Responsive: stack the text block and image block on smaller screens */
@media screen and (max-width: 1024px) {
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
    display: block;
  }

  .groupDiv {
    width: 100%;
    max-width: 920px;
    height: auto;
    position: relative;
    min-height: 320px;
  }

  .wrapper1 {
    justify-content: center;
  }

  .wrapper11 {
    align-items: center;
  }

  /* When stacked, allow the decorative image to flow instead of being absolutely positioned */
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

  .wrapper2 {
    position: relative;
    bottom: auto;
    right: auto;
    display: flex;
    justify-content: center;
    padding: 8px 0;
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
  .h2 {
    font-size: var(--font-size-19);
  }

  .div {
    font-size: var(--font-size-16);
    line-height: 30px;
  }

  .h22 {
    font-size: var(--font-size-22);
    line-height: 34px;
  }
}
</style>
