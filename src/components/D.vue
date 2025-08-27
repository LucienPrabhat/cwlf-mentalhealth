<template>
  <section :class="$style.d">
    <div :class="$style.frameParent">
      <section :class="$style.advocacyFeesWrapper">
        <div :class="$style.advocacyFees">
          <div :class="$style.frameGroup">
            <div :class="$style.frameContainer">
              <div :class="$style.fillerWrapper">
                <h2 :class="$style.filler">25%</h2>
              </div>
              <div :class="$style.pointCost">
                <h3 :class="$style.h3">少年服務據點費用</h3>
              </div>
            </div>
            <div :class="$style.frameWrapper">
              <div :class="$style.fillerWrapper">
                <div :class="$style.div">
                  <span :class="$style.txt">
                    <p :class="$style.p">含各類活動、講座與</p>
                    <p :class="$style.p">青少年課程等相關費用。</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.donationBreakdown">
            <div :class="$style.costLabels">
              <div :class="$style.innerItemsParent">
                <div :class="$style.innerItems">
                  <h2 :class="$style.filler">10%</h2>
                </div>
                <div :class="$style.purposeExpenses">
                  <h3 :class="$style.h31">倡議宣導費用</h3>
                </div>
              </div>
            </div>
            <div :class="$style.expenseAllocation">
              <div :class="$style.div1">
                <p :class="$style.p">含校園宣導、宣導品</p>
                <p :class="$style.p">與素材製作等費用。</p>
              </div>
            </div>
          </div>
          <div :class="$style.donationBreakdown1">
            <div :class="$style.donationBreakdownInner">
              <div :class="$style.frameDiv">
                <div :class="$style.innerItems">
                  <h2 :class="$style.filler">5%</h2>
                </div>
                <div :class="$style.purposeExpenses">
                  <h3 :class="$style.h31">行政費用</h3>
                </div>
              </div>
            </div>
            <div :class="$style.expenseAllocation">
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
        <div :class="$style.frameWrapper1">
          <div :class="$style.wrapper2">
            <h2 :class="$style.h22">捐款用途規劃</h2>
          </div>
        </div>
        <div :class="$style.wrapper3">
          <img :class="$style.icon" loading="lazy" alt="" src="/--0000-1-2@2x.png" />
        </div>
      </section>
      <div :class="$style.frameParent1">
        <div :class="$style.frameParent2">
          <div :class="$style.pointInfoWrapper">
            <h1 :class="$style.filler">60%</h1>
          </div>
          <div :class="$style.caseCost">
            <div :class="$style.wrapper4">
              <h3 :class="$style.h31">個案服務費用</h3>
            </div>
          </div>
        </div>
        <div :class="$style.expenseInformation">
          <div :class="$style.div1">
            <p :class="$style.p">含社工薪資、家庭訪視、</p>
            <p :class="$style.p">醫療協助、輔導協助與認知</p>
            <p :class="$style.p">及行為治療與諮商費等費用。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div :class="$style.chartFrame">
    <picture>
      <source srcset="/tmpFrameImgs/chart-frame-m.png" media="(max-width: 600px)">
      <img src="/tmpFrameImgs/chart-frame.png" alt="Chart Frame">
    </picture>
  </div>
</template>
<style module>
.filler {
  margin: 0;
  position: relative;
  font-size: inherit;
  text-transform: uppercase;
  font-weight: 400;
  font-family: inherit;
}

.fillerWrapper {
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

.pointCost {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-20);
}

.frameContainer {
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

.frameWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10);
  font-size: var(--font-size-20);
}

.frameGroup {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.innerItems {
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

.purposeExpenses {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10) var(--padding-8);
  font-size: var(--font-size-20);
}

.innerItemsParent {
  width: 244px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.costLabels {
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

.expenseAllocation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10) var(--padding-8);
  z-index: 1;
  font-size: var(--font-size-20);
}

.donationBreakdown {
  align-self: stretch;
  height: 139px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 27px 79px;
  box-sizing: border-box;
  gap: var(--gap-8);
  color: var(--color-olivedrab);
}

.frameDiv {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.donationBreakdownInner {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3);
}

.donationBreakdown1 {
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
  gap: var(--gap-2);
  color: var(--color-darkkhaki);
}

.advocacyFees {
  width: 374px;
  background-color: var(--color-gainsboro-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 52px;
}

.advocacyFeesWrapper {
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

.wrapper2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10) var(--padding-8);
}

.frameWrapper1 {
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

.wrapper3 {
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

.pointInfoWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10);
  flex-shrink: 0;
  z-index: 2;
}

.wrapper4 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10) var(--padding-8);
  flex-shrink: 0;
}

.caseCost {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-3);
  margin-left: -8.6px;
  position: relative;
  font-size: var(--font-size-20);
}

.frameParent2 {
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
}

.expenseInformation {
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

.frameParent1 {
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
}

.d {
  align-self: stretch;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 190px 81px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-40);
  color: var(--color-teal-200);
  font-family: var(--font-gensenrounded2-tw);
  display: none;
}

.chartFrame {
  width: 100%;
  margin-top: 120px;
}

.chartFrame img {
  width: 100%;
  height: auto;
  display: block;
}

@media screen and (max-width: 401px) {
  .filler {
    font-size: var(--font-size-24);
  }

  .h3 {
    font-size: var(--font-size-16);
  }

  .frameContainer {
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

  .donationBreakdown1 {
    padding-left: var(--padding-20);
    padding-right: var(--padding-20);
    box-sizing: border-box;
  }

  .advocacyFees {
    gap: var(--gap-26);
  }

  .h22 {
    font-size: var(--font-size-19);
  }

  .frameParent {
    gap: 69px;
    height: auto;
    flex-wrap: wrap;
  }
}
</style>
