<template>
  <div :class="$style.frame">
    <div :class="$style.parent">
      <h2 :class="$style.h2">我只是想被看見、被聽見。</h2>
      <h2 :class="$style.h21">每次感到快無法呼吸時，我都</h2>
      <h2 :class="[$style.blurWrap, $style.h21]" data-text="不知道該怎麼辦...">不知道該怎麼辦...</h2>
    </div>
    <div :class="$style.group">
      <!-- <img :class="$style.icon" loading="lazy" alt="" src="/--0001--2@2x.png" /> -->
      <section :class="$style.rectangleParent">
        <Component1 property1="Frame 8" />
      </section>
      <!-- <img :class="$style.icon1" loading="lazy" alt="" src="/--0001--2@2x.png" /> -->
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
  font-size: 36px;
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
  font-size: 36px;
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
  filter: blur(2px);
}

/* Duplicate the text in a pseudo-element, blur it and apply a mask gradient so the blur fades */
.blurWrap::before {
  content: attr(data-text);
  position: absolute;
  left: -9px;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  color: inherit;
  font: inherit;
  line-height: inherit;
  filter: blur(3px);
  opacity: 0.95;
  pointer-events: none;
  z-index: 2;
  /* Mask the blurred layer with a left-to-right gradient so blur is gradual */
  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 1) 100%);
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 1) 100%);
}

.blurWrap::after {
  content: attr(data-text);
  position: absolute;
  left: 9px;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  color: inherit;
  font: inherit;
  line-height: inherit;
  filter: blur(3px);
  opacity: 0.95;
  pointer-events: none;
  z-index: 2;
  /* Mask the blurred layer with a left-to-right gradient so blur is gradual */
  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 1) 100%);
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 1) 100%);
}

.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 0;
  margin: 120px;
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

.rectangleParent {
  /* responsive box: between 350px and 512px wide, keeps aspect ratio */
  min-width: 350px;
  width: clamp(350px, 30vw, 512px);
  aspect-ratio: 350 / 512;
  /* width / height -> keeps proportional height */
  min-height: 500px;
  /* ensure it won't shrink below this height */
  position: relative;
  z-index: 1;
  flex: 2;
  box-shadow: 0px 1px 4.3px 21px rgba(148, 207, 255, 0.25);
  border-radius: 34px;
  background: linear-gradient(180deg, #a8f4ff, rgba(153, 151, 111, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  /* dark overlay and lightning effect handled by pseudo-elements */
}

.rectangleParent::before {
  /* semi-transparent black mask over the whole block */
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  pointer-events: none;
  animation: lightning 6s linear infinite;
}

/* lightning animation: sweep across and perform two quick bright pulses */
@keyframes lightning {
  0% {
    opacity: 0;
  }

  6% {
    opacity: 0.95;
  }

  7% {
    opacity: 0;
  }

  8% {
    opacity: 0.95;
  }

  9% {
    opacity: 0;
  }

  10% {
    opacity: 0.95;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 0.95;
  }

  52% {
    opacity: 0;
  }

  53% {
    opacity: 0.95;
  }

  54% {
    opacity: 0;
  }

  55% {
    opacity: 0.95;
  }

  56% {
    opacity: 0;
  }

  100% {
    opacity: 0.95;
  }
}

/* ensure content sits above the dark mask */
.rectangleParent>* {
  position: relative;
  z-index: 3;
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
  margin: 0 !important;
  /* participate in layout so children can shrink; avoid absolute positioning */
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;
  z-index: 1;
  padding: 10% 25%;
  background-image: url('/double-leaves.png');
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  filter: screen;
}

.frame {
  width: 100%;
  max-width: 1283px;
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

/* 響應式設計 */
@media screen and (max-width: 1200px) {
  .frame {
    padding: 100px var(--padding-20);
  }

  .parent {
    margin: 80px;
  }

  .h2 {
    width: 100%;
    max-width: 450px;
    height: auto;
    font-size: var(--font-size-30);
  }

  .h21 {
    width: 100%;
    max-width: 750px;
    height: auto;
    font-size: var(--font-size-30);
  }

  .group {
    gap: 15px;
  }

  .rectangleParent {
    min-width: 300px;
    width: clamp(300px, 25vw, 450px);
    min-height: 430px;
  }
}

@media screen and (max-width: 768px) {
  .frame {
    padding: 80px var(--padding-20);
  }

  .parent {
    margin: 60px 40px;
  }

  .h2 {
    width: 100%;
    max-width: 400px;
    height: auto;
    font-size: var(--font-size-26);
    line-height: 140%;
  }

  .h21 {
    width: 100%;
    max-width: 600px;
    height: auto;
    font-size: var(--font-size-26);
    line-height: 140%;
  }

  .group {
    flex-direction: column;
    gap: 20px;
  }

  .rectangleParent {
    min-width: 280px;
    width: clamp(280px, 80vw, 400px);
    min-height: 400px;
  }
}

@media screen and (max-width: 480px) {
  .frame {
    padding: 60px var(--padding-20);
  }

  .parent {
    margin: 40px 20px;
  }

  .h2 {
    width: 100%;
    max-width: 350px;
    height: auto;
    font-size: var(--font-size-22);
    line-height: 130%;
  }

  .h21 {
    width: 100%;
    max-width: 500px;
    height: auto;
    font-size: var(--font-size-22);
    line-height: 130%;
  }

  .group {
    gap: 15px;
  }

  .rectangleParent {
    min-width: 250px;
    width: clamp(250px, 85vw, 350px);
    min-height: 360px;
  }
}

@media screen and (max-width: 360px) {
  .frame {
    padding: 40px var(--padding-20);
  }

  .parent {
    margin: 30px 15px;
  }

  .h2 {
    width: 100%;
    max-width: 300px;
    height: auto;
    font-size: var(--font-size-19);
    line-height: 125%;
  }

  .h21 {
    width: 100%;
    max-width: 400px;
    height: auto;
    font-size: var(--font-size-19);
    line-height: 125%;
  }

  .group {
    gap: 10px;
  }

  .rectangleParent {
    min-width: 220px;
    width: clamp(220px, 90vw, 300px);
    min-height: 320px;
  }
}

/* 橫向螢幕適配 */
@media screen and (max-height: 600px) and (orientation: landscape) {
  .frame {
    padding: 60px var(--padding-20);
  }

  .parent {
    margin: 40px;
  }

  .h2 {
    font-size: var(--font-size-24);
  }

  .h21 {
    font-size: var(--font-size-24);
  }

  .group {
    flex-direction: row;
    gap: 15px;
  }
}
</style>
