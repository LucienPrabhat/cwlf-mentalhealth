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
              <img :class="$style.qIcon" alt="" src="/q.svg" />
            </div>
            <section :class="$style.type">
              <div :class="$style.inputField">
                <div :class="$style.inputContent">
                  <div :class="$style.inputFieldWrapper">
                    <div :class="$style.inputBox" />
                  </div>
                  <div :class="$style.inputIconArea">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style module>
  .backgroundBlue {
    align-self: stretch;
    height: 1483px;
    position: relative;
    background: linear-gradient(180deg, #baf9fb, #f3ffd8);
    display: none;
    z-index: 0;
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
    z-index: 0;
  }
  .icon1 {
    width: 34px;
    height: 28.7px;
    position: relative;
  }
  .inputIconArea {
    height: 97px;
    width: 536px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0px 25px;
    box-sizing: border-box;
    z-index: 1;
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
