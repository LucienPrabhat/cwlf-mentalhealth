<template>
  <main :class="$style.frame">
    <div :class="$style.parent">
      <h2 :class="$style.h2">我只是想被看見、被聽見。</h2>
      <h2 :class="$style.h21">每次感到快無法呼吸時，我都不知道該怎麼辦...</h2>
    </div>
    <div :class="$style.group">
      <img :class="$style.icon" loading="lazy" alt="" src="/--0001--2@2x.png" />
      <section :class="$style.rectangleParent">
        <div :class="$style.frameChild" />
        <Component1 property1="Frame 8" />
      </section>
      <img
        :class="$style.icon1"
        loading="lazy"
        alt=""
        src="/--0001--2@2x.png"
      />
    </div>
  </main>
</template>
<script setup lang="ts">
  import Component1 from "./Component1.vue"
</script>
<style module>
  .h2 {
    margin: 0;
    width: 511px;
    height: 66px;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.04em;
    line-height: 159.63%;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .h21 {
    margin: 0;
    width: 864px;
    height: 85px;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.04em;
    line-height: 159.63%;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: blur(5.4px);
  }
  .parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 0;
  }
  .icon {
    width: 447px;
    position: absolute;
    margin: 0 !important;
    top: 466px;
    left: 836px;
    max-height: 100%;
    object-fit: contain;
    z-index: 0;
  }
  .frameChild {
    position: absolute;
    top: 0px;
    left: 0px;
    box-shadow: 0px 1px 4.3px 21px rgba(148, 207, 255, 0.25);
    border-radius: 34px;
    background: linear-gradient(180deg, #a8f4ff, rgba(153, 151, 111, 0));
    width: 100%;
    height: 100%;
  }
  .rectangleParent {
    width: 472px;
    height: 766px;
    position: relative;
    z-index: 1;
    text-align: center;
    font-size: var(--font-size-20);
    color: var(--color-white);
    font-family: var(--font-gensenrounded2-tw);
  }
  .icon1 {
    width: 447px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    left: 0px;
    max-height: 100%;
    object-fit: cover;
    z-index: 2;
  }
  .group {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 408px 381px 225px 430px;
    box-sizing: border-box;
    z-index: 1;
  }
  .frame {
    width: 1283px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 124px var(--padding-20);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-10);
    text-align: center;
    font-size: var(--font-size-32);
    color: var(--color-white);
    font-family: var(--font-gensenrounded2-tw);
  }

  @media screen and (max-width: 1125px) {
    .h2 {
      font-size: var(--font-size-19);
      line-height: 31px;
    }

    .h21 {
      font-size: var(--font-size-19);
      line-height: 31px;
    }

    .group {
      padding-left: var(--padding-20);
      padding-right: var(--padding-20);
      box-sizing: border-box;
    }

    .frame {
      padding-top: 81px;
      padding-bottom: 81px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 800px) {
    .group {
      padding-left: 215px;
      padding-right: 190px;
      box-sizing: border-box;
    }

    .frame {
      width: calc(100% - 40px);
    }
  }
  @media screen and (max-width: 450px) {
    .h2 {
      font-size: var(--font-size-26);
      line-height: 41px;
    }

    .h21 {
      font-size: var(--font-size-26);
      line-height: 41px;
    }

    .group {
      padding-left: 107px;
      padding-right: 95px;
      box-sizing: border-box;
    }
  }
</style>
