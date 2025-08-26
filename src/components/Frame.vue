<template>
  <div :class="$style.frame">
    <div :class="$style.parent">
      <h2 :class="$style.h2">我只是想被看見、被聽見。</h2>
      <h2 :class="$style.h21">每次感到快無法呼吸時，我都
        <span :class="$style.blurWrap" data-text="不知道該怎麼辦...">不知道該怎麼辦...</span>
      </h2>
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
  </div>
</template>
<script setup>
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
    /* remove global blur: we use a controlled blurred overlay for the substring */
  }

  /* The inline wrapper for the substring that will receive a gradient blurred overlay */
  .blurWrap {
    position: relative;
    display: inline-block;
    line-height: inherit;
    font: inherit;
    color: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-left: 6px;
  }

  /* Duplicate the text in a pseudo-element, blur it and apply a mask gradient so the blur fades */
  .blurWrap::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    color: inherit;
    font: inherit;
    line-height: inherit;
    filter: blur(6px);
    opacity: 0.95;
    pointer-events: none;
    z-index: 2;
    /* Mask the blurred layer with a left-to-right gradient so blur is gradual */
    -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 20%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,1) 100%);
    mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 20%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,1) 100%);
  }
  .parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 0;
  }
  .icon {
    width: 25%;
    max-height: 100%;
    object-fit: contain;
    z-index: 0;
    max-width: 100%;
    height: auto;
    flex: 1;
    align-self: flex-start;
  }
  .frameChild {
    position: absolute;
    top: 0px;
    left: 0px;
    box-shadow: 0px 1px 4.3px 21px rgba(148, 207, 255, 0.25);
    border-radius: 34px;
    background: linear-gradient(180deg, #a8f4ff, rgba(153, 151, 111, 0));
    width: 400px;
    height: 100%;
  }
  .rectangleParent {
    width: 50%;
    height: 766px;
    position: relative;
    z-index: 1;
    text-align: center;
    font-size: var(--font-size-20);
    color: var(--color-white);
    font-family: var(--font-gensenrounded2-tw);
    flex: 2;
  }
  .icon1 {
    width: 25%;
    max-height: 100%;
    object-fit: cover;
    z-index: 2;
    max-width: 100%;
    height: auto;
    flex: 1;
  }
  .group {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
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

  @media screen and (max-width: 401px) {
    .frame {
      width: 100%;
    }

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
</style>
