<template>
  <div :class="$style.e">
    <header :class="$style.content">
      <img :class="$style.contentChild" alt="" src="/frame-90.svg" />
      <div :class="$style.layer252Wrapper">
        <img
          :class="$style.layer252Icon"
          loading="lazy"
          alt=""
          src="/--0002-layer25-2@2x.png"
        />
      </div>
    </header>
    <main :class="$style.optionContainerParent">
      <section :class="$style.optionContainer">
        <div :class="$style.optionContainerChild" />
      </section>
      <section :class="$style.optionContainer1">
        <div :class="$style.backgroundBlue" />
      </section>
      <img :class="$style.optionIcon" alt="" src="/option.svg" />
      <MonthlyDonation />
      <section :class="$style.frameParent">
        <div :class="$style.wrapper">
          <h2 :class="$style.h2">更多個案故事</h2>
        </div>
        <div :class="$style.rectangleWrapper">
          <div :class="$style.frameChild" />
        </div>
      </section>
    </main>
  </div>
</template>
<script setup lang="ts">
  import MonthlyDonation from "../components/MonthlyDonation.vue"
</script>
<style module>
  .contentChild {
    width: 100%;
    margin: 0 !important;
    position: absolute;
    right: 0px;
    bottom: 54px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    z-index: 0;
  }
  .layer252Icon {
    width: 434px;
    position: relative;
    max-height: 100%;
    object-fit: contain;
  }
  .layer252Wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10);
    box-sizing: border-box;
    max-width: 100%;
    z-index: 1;
  }
  .content {
    margin-top: -178px;
    margin-left: -10px;
    width: 1470px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 181px;
    box-sizing: border-box;
    position: relative;
    flex-shrink: 0;
    max-width: 103%;
    z-index: 2;
  }
  .optionContainerChild {
    height: 2131px;
    width: 1440px;
    position: relative;
    background: linear-gradient(180deg, #c0eb77, #f0ffc3 98.56%);
    display: none;
  }
  .optionContainer {
    width: 100%;
    margin: 0 !important;
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    background: linear-gradient(180deg, #c0eb77, #f0ffc3 98.56%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10);
    box-sizing: border-box;
    z-index: 0;
  }
  .backgroundBlue {
    height: 1785px;
    width: 1440px;
    position: relative;
    background: linear-gradient(180deg, #dafeff, #b9f9fb);
    display: none;
  }
  .optionContainer1 {
    width: 100%;
    margin: 0 !important;
    position: absolute;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(180deg, #dafeff, #b9f9fb);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10);
    box-sizing: border-box;
    z-index: 1;
  }
  .optionIcon {
    width: 100%;
    margin: 0 !important;
    position: absolute;
    right: 0px;
    bottom: 1755px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    z-index: 2;
  }
  .h2 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.09em;
    line-height: 157.24%;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
  }
  .wrapper {
    width: 276px;
    height: 292px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .frameChild {
    width: 1400px;
    position: relative;
    background-color: var(--color-gainsboro-100);
    height: 341px;
  }
  .rectangleWrapper {
    width: 1440px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .frameParent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 4;
    text-align: center;
    font-size: var(--font-size-36);
    color: var(--color-cadetblue-200);
    font-family: var(--font-gensenrounded2-tw);
  }
  .optionContainerParent {
    margin-left: -12px;
    height: 3989px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 542px var(--padding-10) 204px;
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-100);
    flex-shrink: 0;
    max-width: 102%;
    margin-top: -306px;
  }
  .e {
    width: 100%;
    height: 4138px;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 168px 0px 3664px;
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
    .optionContainerParent {
      padding-top: 542px;
      padding-bottom: 86px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1125px) {
    .content {
      padding-left: var(--padding-20);
      padding-right: var(--padding-20);
      box-sizing: border-box;
    }

    .h2 {
      font-size: var(--font-size-22);
      line-height: 34px;
    }

    .optionContainerParent {
      gap: 25px;
    }
  }
  @media screen and (max-width: 800px) {
    .content {
      padding-left: 90px;
      padding-right: 90px;
      box-sizing: border-box;
    }

    .h2 {
      font-size: 29px;
      line-height: 45px;
    }

    .optionContainerParent {
      padding-bottom: 56px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .optionContainerParent {
      gap: 50px;
      padding-bottom: 36px;
      box-sizing: border-box;
    }
  }
</style>