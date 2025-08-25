<template>
  <div :class="$style.f">
    <main :class="$style.back">
      <section :class="$style.wrapper0002Layer2Parent">
        <div :class="$style.wrapper0002Layer2">
          <img
            :class="$style.layer251Icon"
            alt=""
            src="/--0002-layer25-1@2x.png"
          />
        </div>
        <div :class="$style.layer272Wrapper">
          <img
            :class="$style.layer272Icon"
            loading="lazy"
            alt=""
            src="/--0003-layer27-2@2x.png"
          />
        </div>
      </section>
      <section :class="$style.wrapper0003Layer2Wrapper">
        <div :class="$style.wrapper0003Layer2">
          <img
            :class="$style.layer271Icon"
            alt=""
            src="/--0003-layer27-11@2x.png"
          />
        </div>
      </section>
      <section :class="$style.frameParent">
        <div :class="$style.layer254Wrapper">
          <img
            :class="$style.layer254Icon"
            loading="lazy"
            alt=""
            src="/--0002-layer25-4@2x.png"
          />
        </div>
        <div :class="$style.pngParent">
          <img :class="$style.pngIcon" alt="" src="/-2png@2x.png" />
          <img :class="$style.pngIcon1" alt="" src="/-2png@2x.png" />
        </div>
      </section>
      <main :class="$style.frameGroup">
        <div :class="$style.backgroundBlueWrapper">
          <div :class="$style.backgroundBlue" />
        </div>
        <div :class="$style.frameContainer">
          <div :class="$style.frameDiv">
            <section :class="$style.frameSection">
              <div :class="$style.wrapper">
                <div :class="$style.div">
                  <p :class="$style.p">什麼都能說的</p>
                  <p :class="$style.p1">鈴蘭花園</p>
                </div>
              </div>
              <div :class="$style.container">
                <h2 :class="$style.h2">
                  <p :class="$style.p">每一個被訴說的傷口，</p>
                  <p :class="$style.p3">都是讓花開的養分</p>
                </h2>
              </div>
            </section>
            <div :class="$style.q">
              <img
                :class="$style.qChild"
                loading="lazy"
                alt=""
                src="/frame-199.svg"
              />
              <img :class="$style.qItem" alt="" src="/frame-198.svg" />
              <img
                :class="$style.qInner"
                loading="lazy"
                alt=""
                src="/frame-196.svg"
              />
              <section :class="$style.qInner1">
                <div :class="$style.frameParent1">
                  <FrameComponent1
                    frame193="/frame-193.svg"
                    prop="痛苦會過去，美會留下"
                  />
                  <div :class="$style.frameWrapper">
                    <div :class="$style.frameParent2">
                      <img
                        :class="$style.frameChild"
                        alt=""
                        src="/frame-192.svg"
                      />
                      <div :class="$style.frame">
                        <div :class="$style.div1">
                          <p :class="$style.p">每個人的花期不同，</p>
                          <p :class="$style.p">不必焦慮有人比你提前擁有</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section :class="$style.frameParent3">
                <FrameComponent1
                  frame193="/frame-201.svg"
                  frameDivPadding="10px 9px"
                  prop="這世界很可愛，先別急著失望"
                />
                <div :class="$style.frameWrapper1">
                  <img
                    :class="$style.frameItem"
                    loading="lazy"
                    alt=""
                    src="/frame-196.svg"
                  />
                </div>
              </section>
            </div>
          </div>
          <section :class="$style.type">
            <div :class="$style.frameParent4">
              <div :class="$style.rectangleWrapper">
                <input :class="$style.frameInner" type="text" />
              </div>
              <img :class="$style.sendIcon" alt="" src="/send.svg" />
            </div>
            <div :class="$style.wrapper1">
              <div :class="$style.div2">
                <p :class="$style.p">留下你曾經覺得過不去的低潮回憶</p>
                <p :class="$style.p">讓它在這裡成為生命的養分吧</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </main>
  </div>
</template>
<script setup lang="ts">
  import FrameComponent1 from "../components/FrameComponent1.vue"
</script>
<style module>
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
    z-index: 0;
  }
  .layer272Icon {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .layer272Wrapper {
    width: 501px;
    margin: 0 !important;
    position: absolute;
    right: 140.4px;
    bottom: -46px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10);
    box-sizing: border-box;
    z-index: 1;
  }
  .wrapper0002Layer2Parent {
    margin: 0 !important;
    position: absolute;
    bottom: 102px;
    left: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10);
    gap: var(--gap-10);
    z-index: 0;
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
  .wrapper0003Layer2Wrapper {
    width: 1092.9px;
    margin: 0 !important;
    position: absolute;
    right: -357.9px;
    bottom: 160px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10);
    box-sizing: border-box;
    max-width: 100%;
    z-index: 1;
  }
  .layer254Icon {
    width: 458px;
    position: relative;
    max-height: 100%;
    object-fit: contain;
  }
  .layer254Wrapper {
    margin: 0 !important;
    position: absolute;
    top: -317px;
    right: 187px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10);
    z-index: 0;
  }
  .pngIcon {
    width: 881px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
  }
  .pngIcon1 {
    width: 881px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    margin-left: -60px;
  }
  .pngParent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    row-gap: var(--gap-20);
    max-width: 100%;
    z-index: 1;
  }
  .frameParent {
    margin: 0 !important;
    position: absolute;
    top: 1289px;
    left: 236px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .backgroundBlue {
    align-self: stretch;
    height: 1428px;
    position: relative;
    background: linear-gradient(180deg, #baf9fb, #f3ffd8);
    display: none;
  }
  .backgroundBlueWrapper {
    width: 1460px;
    margin: 0 !important;
    position: absolute;
    bottom: -294px;
    left: -94px;
    background: linear-gradient(180deg, #baf9fb, #f3ffd8);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10);
    box-sizing: border-box;
    z-index: 0;
  }
  .p {
    margin: 0;
  }
  .p1 {
    margin: 0;
    font-size: 96px;
  }
  .div {
    position: relative;
    letter-spacing: 0.04em;
    line-height: 111%;
    text-transform: uppercase;
    text-shadow: 1px 0 0 #e2b362, 0 1px 0 #e2b362, -1px 0 0 #e2b362,
      0 -1px 0 #e2b362;
  }
  .wrapper {
    height: 263px;
    width: 503px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 35px 0px;
    box-sizing: border-box;
    z-index: 0;
  }
  .p3 {
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
    height: 263px;
    width: 524px;
    margin: 0 !important;
    position: absolute;
    top: 0px;
    left: 440px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 50px var(--padding-10);
    box-sizing: border-box;
    z-index: 1;
    font-size: var(--font-size-32);
    color: var(--color-cadetblue-100);
  }
  .frameSection {
    width: 965px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-10);
    text-align: center;
    font-size: 64px;
    color: var(--color-white);
    font-family: var(--font-gensenrounded2-tw);
  }
  .qChild {
    width: 418px;
    margin: 0 !important;
    position: absolute;
    top: 206px;
    left: 210px;
    max-height: 100%;
    z-index: 0;
  }
  .qItem {
    width: 392px;
    margin: 0 !important;
    position: absolute;
    top: -10px;
    left: -10px;
    max-height: 100%;
    z-index: 1;
  }
  .qInner {
    width: 284px;
    margin: 0 !important;
    position: absolute;
    top: 77px;
    left: 953px;
    max-height: 100%;
    z-index: 2;
  }
  .frameChild {
    width: 388px;
    margin: 0 !important;
    position: absolute;
    top: -10px;
    left: -10px;
    max-height: 100%;
    z-index: 0;
  }
  .div1 {
    position: relative;
    letter-spacing: 0.04em;
    line-height: 157.24%;
    text-transform: uppercase;
  }
  .frame {
    width: 368px;
    height: 91px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10) 9px;
    box-sizing: border-box;
    z-index: 1;
  }
  .frameParent2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-10);
  }
  .frameWrapper {
    height: 143px;
    width: 368px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .frameParent1 {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 72px;
    max-width: 100%;
  }
  .qInner1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 33px;
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-20);
    color: var(--color-cadetblue-100);
    font-family: var(--font-gensenrounded2-tw);
  }
  .frameItem {
    width: 284px;
    max-height: 100%;
  }
  .frameWrapper1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px 9.8px;
  }
  .frameParent3 {
    width: 1074px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--gap-20);
    max-width: 100%;
  }
  .q {
    align-self: stretch;
    height: 429px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-11) 194px 15px 24px;
    box-sizing: border-box;
    position: relative;
    gap: 152px;
    max-width: 100%;
  }
  .frameDiv {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 52px;
    max-width: 100%;
  }
  .frameInner {
    border: none;
    outline: none;
    width: 100%;
    background-color: var(--color-white);
    align-self: stretch;
    height: 77px;
    position: relative;
    box-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5.4px);
    border-radius: 73.5px;
    min-width: 250px;
  }
  .rectangleWrapper {
    width: 100%;
    margin: 0 !important;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10);
    box-sizing: border-box;
    height: 100%;
    z-index: 0;
  }
  .sendIcon {
    height: 97px;
    width: 79px;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .frameParent4 {
    align-self: stretch;
    height: 97px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 25px 37px;
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-10);
  }
  .div2 {
    position: relative;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    text-shadow: 0px 0px 3px #fff;
  }
  .wrapper1 {
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
    width: 591px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: var(--font-size-20);
    color: var(--color-cadetblue-200);
    font-family: var(--font-gensenrounded2-tw);
  }
  .frameContainer {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 163px;
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
  .back {
    margin-left: -357px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10) var(--padding-64) 328px 441px;
    box-sizing: border-box;
    position: relative;
    flex-shrink: 0;
    max-width: 125%;
  }
  .f {
    width: 100%;
    height: 1483px;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-11);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 401px) {
    .pngIcon1 {
      margin-left: 0;
    }

    .pngParent {
      flex-wrap: wrap;
    }

    .frameWrapper {
      flex: 1;
      min-width: 100%;
    }

    .frameParent1 {
      flex-wrap: wrap;
      gap: 18px;
    }

    .q {
      height: auto;
      gap: 38px;
      padding-right: 48px;
      box-sizing: border-box;
    }

    .div {
      font-size: 38px;
      line-height: 64px;
    }

    .h2 {
      font-size: var(--font-size-19);
      line-height: 37px;
    }

    .div1 {
      font-size: var(--font-size-16);
      line-height: 25px;
    }

    .div2 {
      font-size: var(--font-size-16);
      line-height: 30px;
    }

    .wrapper1 {
      padding-left: var(--padding-20);
      padding-right: var(--padding-20);
      box-sizing: border-box;
    }

    .frameContainer {
      gap: 41px;
    }

    .back {
      height: auto;
      padding-top: var(--padding-20);
      padding-bottom: 213px;
      padding-left: var(--padding-20);
      box-sizing: border-box;
    }

    .f {
      height: auto;
    }
  }
</style>