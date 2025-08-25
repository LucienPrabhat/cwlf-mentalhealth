<template>
  <div :class="$style.frameParent">
    <section :class="$style.frameGroup">
      <div :class="$style.wrapper">
        <h2 :class="$style.h2">初級預防</h2>
      </div>
      <div :class="$style.container">
        <div :class="$style.div">
          <p :class="$style.p">
            <span>兒福聯盟持續推動政策修法，並透過</span>
            <span :class="[$style.span, $style.interactiveText]"  @mouseenter="handleHover('xiaoyuanxuandao.png')" @mouseleave="handleLeave" @click="handleClick('xiaoyuanxuandao.png')">校園宣導</span>
            <span :class="$style.span">、</span>
          </p>
          <p :class="$style.p">
            <span :class="$style.span">教材及</span>
            <span :class="[$style.span, $style.interactiveText]"  @mouseenter="handleHover('xianshangkecheng.png')" @mouseleave="handleLeave" @click="handleClick('xianshangkecheng.png')">線上課程</span>
            <span>與社群倡議等多元行動，致力於</span>
          </p>
          <p :class="$style.p">營造友善的兒少心理健康環境。</p>
        </div>
      </div>
      <div :class="$style.wrapper">
        <h2 :class="$style.h2">二級輔導</h2>
      </div>
      <div :class="$style.frameDiv">
        <div :class="$style.div">
          <p :class="$style.p">
            <span :class="$style.span">同時，兒福聯盟提供免費</span>
            <span :class="[$style.span, $style.interactiveText]"  @mouseenter="handleHover('shaonianzhuanxian.png')" @mouseleave="handleLeave" @click="handleClick('shaonianzhuanxian.png')">「少年專線」</span>
            <span>傾聽孩子</span>
          </p>
          <p :class="$style.p">
            <span>煩惱、接住情緒，並於</span>
            <span :class="[$style.span, $style.interactiveText]"  @mouseenter="handleHoverShaonianjia" @mouseleave="handleLeave" @click="handleClickShaonianjia">「少年+」</span>
            <span>服務據點規劃</span>
          </p>
          <p :class="$style.p">多元活動、課程與營隊，搭配完善的空間設備與</p>
          <p :class="$style.p">
            社工陪伴輔導，為青少年打造溫暖支持的互動環境。
          </p>
        </div>
      </div>
    </section>
    <div :class="$style.frameContainer">
      <div :class="$style.wrapper1">
        <h2 :class="$style.h22">
          <span :class="$style.txt">
            <p :class="$style.p">&nbsp;</p>
            <p :class="$style.p">兒盟用行動陪伴</p>
            <p :class="$style.p">困在花園的青少年</p>
          </span>
        </h2>
      </div>
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
  }
  .div {
    position: relative;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
  }
  .container {
    align-self: stretch;
    height: 162px;
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
    width: 498px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-20) 0px;
    box-sizing: border-box;
    gap: var(--gap-10);
    flex-shrink: 0;
    text-align: left;
    font-size: var(--font-size-32);
    color: var(--color-black);
    font-family: var(--font-gensenrounded2-tw);
  }
  .txt {
    line-break: anywhere;
    width: 100%;
  }
  .h22 {
    margin: 0;
    width: 415px;
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
  }
  .wrapper1 {
    display: flex;
    flex-direction: row;
    align-items: center;
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
    width: 930.4px;
    height: 930.4px;
    position: relative;
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
  }

  @media screen and (max-width: 401px) {
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
