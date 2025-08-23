<template>
  <div :class="$style.d">
    <section :class="$style.frameParent">
      <section :class="$style.frameWrapper">
        <div :class="$style.frameGroup">
          <div :class="$style.frameContainer">
            <div :class="$style.frameDiv">
              <div :class="$style.dashWrapper">
                <h2 :class="$style.dash">25%</h2>
              </div>
              <div :class="$style.serviceHub">
                <h3 :class="$style.h3">少年服務據點費用</h3>
              </div>
            </div>
            <div :class="$style.activitiesFeesWrapper">
              <div :class="$style.dashWrapper">
                <div :class="$style.div">
                  <span :class="$style.txt">
                    <p :class="$style.p">含各類活動、講座與</p>
                    <p :class="$style.p">青少年課程等相關費用。</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.frameParent1">
            <div :class="$style.frameWrapper1">
              <div :class="$style.frameParent2">
                <div :class="$style.wrapper">
                  <h2 :class="$style.dash">10%</h2>
                </div>
                <div :class="$style.container">
                  <h3 :class="$style.h31">倡議宣導費用</h3>
                </div>
              </div>
            </div>
            <div :class="$style.frame">
              <div :class="$style.div1">
                <p :class="$style.p">含校園宣導、宣導品</p>
                <p :class="$style.p">與素材製作等費用。</p>
              </div>
            </div>
          </div>
          <div :class="$style.frameParent3">
            <div :class="$style.frameWrapper2">
              <div :class="$style.frameParent4">
                <div :class="$style.wrapper">
                  <h2 :class="$style.dash">5%</h2>
                </div>
                <div :class="$style.container">
                  <h3 :class="$style.h31">行政費用</h3>
                </div>
              </div>
            </div>
            <div :class="$style.frame">
              <div :class="$style.div1">
                <p :class="$style.p">含用品耗材、折舊、</p>
                <p :class="$style.p">場地租金等費用。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section :class="$style.frameSection">
        <img :class="$style.frameChild" alt="" src="/frame-81.svg" />
        <div :class="$style.frameWrapper3">
          <div :class="$style.wrapper4">
            <h2 :class="$style.h22">捐款用途規劃</h2>
          </div>
        </div>
        <div :class="$style.graphic">
          <img
            :class="$style.icon"
            loading="lazy"
            alt=""
            src="/--0000-1-2@2x.png"
          />
        </div>
      </section>
      <div :class="$style.frameParent5">
        <div :class="$style.frameParent6">
          <div :class="$style.blankWrapper">
            <h1 :class="$style.dash">60%</h1>
          </div>
          <div :class="$style.frameWrapper4">
            <div :class="$style.wrapper5">
              <h3 :class="$style.h31">個案服務費用</h3>
            </div>
          </div>
        </div>
        <div :class="$style.supportService">
          <div :class="$style.div1">
            <p :class="$style.p">含社工薪資、家庭訪視、</p>
            <p :class="$style.p">醫療協助、輔導協助與認知</p>
            <p :class="$style.p">及行為治療與諮商費等費用。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style module>
  .dash {
    margin: 0;
    position: relative;
    font-size: inherit;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
  }
  .dashWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .h3 {
    margin: 0;
    width: 265px;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .serviceHub {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-20);
  }
  .frameDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10);
    gap: var(--gap-10);
  }
  .p {
    margin: 0;
  }
  .txt {
    line-break: anywhere;
    width: 100%;
  }
  .div {
    width: 279px;
    position: relative;
    letter-spacing: 0.13em;
    line-height: 143.18%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .activitiesFeesWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10);
    font-size: var(--font-size-20);
  }
  .frameContainer {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10);
  }
  .h31 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10) var(--padding-8);
    font-size: var(--font-size-20);
  }
  .frameParent2 {
    width: 244px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .frameWrapper1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-10);
  }
  .div1 {
    position: relative;
    letter-spacing: 0.13em;
    line-height: 143.18%;
    text-transform: uppercase;
  }
  .frame {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10) var(--padding-8);
    z-index: 1;
    font-size: var(--font-size-20);
  }
  .frameParent1 {
    align-self: stretch;
    height: 139px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 27px 79px;
    box-sizing: border-box;
    gap: 8px;
    color: var(--color-olivedrab);
  }
  .frameParent4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .frameWrapper2 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3);
  }
  .frameParent3 {
    align-self: stretch;
    height: 150px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10) 52px 0px 101px;
    box-sizing: border-box;
    gap: 2px;
    color: var(--color-darkkhaki);
  }
  .frameGroup {
    width: 374px;
    background-color: var(--color-gainsboro-200);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 52px;
  }
  .frameWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 11.8px 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-40);
    color: var(--color-lightseagreen);
    font-family: var(--font-gensenrounded2-tw);
  }
  .frameChild {
    width: 100%;
    margin: 0 !important;
    position: absolute;
    height: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    z-index: 0;
  }
  .h22 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
  }
  .wrapper4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10) var(--padding-8);
  }
  .frameWrapper3 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 67px;
  }
  .icon {
    width: 120px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
  }
  .graphic {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10);
    z-index: 2;
  }
  .frameSection {
    margin: 0 !important;
    position: absolute;
    top: 0px;
    left: 310.3px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 277.9px 123px 50.2px;
    gap: 23.8px;
    text-align: center;
    font-size: var(--font-size-32);
    color: var(--color-cadetblue-100);
    font-family: var(--font-gensenrounded2-tw);
  }
  .blankWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10);
    flex-shrink: 0;
    z-index: 2;
  }
  .wrapper5 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10) var(--padding-8);
    flex-shrink: 0;
  }
  .frameWrapper4 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-3);
    margin-left: -8.6px;
    position: relative;
    font-size: var(--font-size-20);
  }
  .frameParent6 {
    width: 109px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
  }
  .supportService {
    width: 312px;
    margin: 0 !important;
    position: absolute;
    top: 61.8px;
    left: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10) var(--padding-10) var(--padding-10) 9px;
    box-sizing: border-box;
    z-index: 1;
    font-size: var(--font-size-20);
  }
  .frameParent5 {
    width: 312px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-10);
    z-index: 1;
  }
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 75.9px 0px 0px;
    box-sizing: border-box;
    position: relative;
    gap: 550px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-40);
    color: var(--color-teal-200);
    font-family: var(--font-gensenrounded2-tw);
  }
  .d {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 190px 81px;
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1125px) {
    .dash {
      font-size: var(--font-size-32);
    }

    .h22 {
      font-size: var(--font-size-26);
    }

    .frameParent {
      gap: 137px;
      padding-top: 49px;
      box-sizing: border-box;
    }

    .d {
      padding-left: var(--padding-40);
      padding-right: var(--padding-40);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 800px) {
    .dash {
      font-size: var(--font-size-24);
    }

    .h3 {
      font-size: var(--font-size-16);
    }

    .frameDiv {
      flex-wrap: wrap;
    }

    .div {
      font-size: var(--font-size-16);
      line-height: 23px;
    }

    .h31 {
      font-size: var(--font-size-16);
    }

    .div1 {
      font-size: var(--font-size-16);
      line-height: 23px;
    }

    .frameParent3 {
      padding-left: var(--padding-20);
      padding-right: var(--padding-20);
      box-sizing: border-box;
    }

    .frameGroup {
      gap: 26px;
    }

    .h22 {
      font-size: var(--font-size-19);
    }

    .frameParent {
      gap: 69px;
    }
  }
  @media screen and (max-width: 450px) {
    .frameParent {
      height: auto;
      gap: 275px;
      flex-wrap: wrap;
    }
  }
</style>
