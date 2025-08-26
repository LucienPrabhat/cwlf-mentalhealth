<template>
  <div :class="$style.root">
    <div :class="$style.backgroundWrapper">
      <div :class="$style.background" />
    </div>
    <main :class="$style.frameParent">
      <section :class="$style.frameWrapper">
        <div :class="$style.frameGroup">
          <div :class="$style.parent">
            <img :class="$style.icon" alt="" src="/--1@2x.png" />
            <img :class="$style.shapeIcon" alt="" src="/shape.svg" />
            <img :class="$style.pngIcon" alt="" src="/-2png1@2x.png" />
          </div>
          <div :class="$style.frameContainer">
            <img :class="$style.frameChild" loading="lazy" alt="" src="/frame-31@2x.png" />
            <img :class="$style.frameItem" loading="lazy" alt="" src="/frame-30@2x.png" />
          </div>
        </div>
      </section>
      <div :class="$style.wrapper">
        <div :class="$style.div">
          <span :class="$style.txt">
            <p>立即</p>
            <p>行動</p>
          </span>
        </div>
      </div>
    </main>
  </div>
</template>
<style module>
.background {
  align-self: stretch;
  height: 924px;
  position: relative;
  background-color: var(--color-teal-300);
}

.backgroundWrapper {
  margin-top: -10px;
  margin-right: -9px;
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10);
  box-sizing: border-box;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
}

.icon {
  position: absolute;
  top: 0px;
  left: -1px;
  width: 1440px;
  height: 715px;
  object-fit: cover;
}

.shapeIcon {
  position: absolute;
  top: 630px;
  left: -11px;
  width: 1440px;
  height: 270px;
  z-index: 1;
}

.pngIcon {
  position: absolute;
  top: 653px;
  left: -13px;
  width: 1440px;
  height: 339px;
  object-fit: cover;
  z-index: 2;
}

.parent {
  height: 924px;
  width: 1440px;
  position: absolute;
  margin: 0 !important;
  bottom: -294px;
  left: -765px;
}

.frameChild {
  width: 125px;
  height: 36px;
  object-fit: cover;
}

.frameItem {
  align-self: stretch;
  flex: 1;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
}

.frameContainer {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 23px;
  max-width: 100%;
  z-index: 1;
}

.frameGroup {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
}

.frameWrapper {
  width: 681px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 54px;
  box-sizing: border-box;
  max-width: 100%;
}

.p {
  margin: 0;
}

.txt {
  line-break: anywhere;
  width: 100%;
}

.div {
  width: 72px;
  position: relative;
  letter-spacing: 0.09em;
  line-height: 104.39%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.wrapper {
  width: 139px;
  height: 132px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-32) 29px;
  box-sizing: border-box;
  background-image: url("/public/frame-27@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 2;
}

.frameParent {
  margin-right: -12px;
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 269px var(--padding-60) 109px;
  box-sizing: border-box;
  gap: 121px;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
  margin-top: -934px;
  position: relative;
  text-align: center;
  font-size: 28px;
  color: var(--color-darkslategray);
  font-family: var(--font-gensenrounded2-tw);
}

.root {
  width: 100%;
  height: 924px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
}

@media screen and (max-width: 1325px) {
  .div {
    font-size: var(--font-size-22);
    line-height: 23px;
  }

  .frameParent {
    gap: 30px;
    padding-bottom: 46px;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 1150px) {
  .frameWrapper {
    padding-left: 27px;
    padding-right: 27px;
    box-sizing: border-box;
  }

  .frameParent {
    gap: 60px;
    padding-left: var(--padding-30);
    padding-right: var(--padding-30);
    padding-bottom: 71px;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 800px) {
  .frameWrapper {
    padding-left: 27px;
    padding-right: 27px;
    box-sizing: border-box;
  }

  .frameParent {
    gap: 60px;
    padding-left: var(--padding-30);
    padding-right: var(--padding-30);
    padding-bottom: 71px;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 450px) {
  .div {
    font-size: var(--font-size-22);
    line-height: 23px;
  }

  .frameParent {
    gap: 30px;
    padding-bottom: 46px;
    box-sizing: border-box;
  }
}
</style>
