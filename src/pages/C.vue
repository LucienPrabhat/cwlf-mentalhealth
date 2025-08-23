<template>
  <div :class="$style.c">
    <main :class="$style.frameParent">
      <main :class="$style.frameGroup">
        <section :class="$style.frameContainer">
          <div :class="$style.wrapper">
            <h1 :class="$style.h1">初級預防</h1>
          </div>
          <div :class="$style.container">
            <div :class="$style.div">
              <p :class="$style.p">
                <span>兒福聯盟持續推動政策修法，並透過</span>
                <span :class="$style.span">校園宣導</span>
                <span :class="$style.span">、</span>
              </p>
              <p :class="$style.p">
                <span :class="$style.span">教材及</span>
                <span :class="$style.span">線上課程</span>
                <span>與社群倡議等多元行動，致力於</span>
              </p>
              <p :class="$style.p">營造友善的兒少心理健康環境。</p>
            </div>
          </div>
          <div :class="$style.wrapper">
            <h2 :class="$style.h1">二級輔導</h2>
          </div>
          <div :class="$style.frameDiv">
            <div :class="$style.div">
              <p :class="$style.p">
                <span :class="$style.span">同時，兒福聯盟提供免費</span>
                <span :class="$style.span">「少年專線」</span>
                <span>傾聽孩子</span>
              </p>
              <p :class="$style.p">
                <span>煩惱、接住情緒，並於</span>
                <span :class="$style.span">「少年+」</span>
                <span>服務據點規劃</span>
              </p>
              <p :class="$style.p">
                多元活動、課程與營隊，搭配完善的空間設備與
              </p>
              <p :class="$style.p">
                社工陪伴輔導，為青少年打造溫暖支持的互動環境。
              </p>
            </div>
          </div>
        </section>
        <div :class="$style.frameParent1">
          <div :class="$style.wrapper1">
            <h2 :class="$style.h21">
              <span :class="$style.txt">
                <p :class="$style.p">&nbsp;</p>
                <p :class="$style.p">兒盟用行動陪伴</p>
                <p :class="$style.p">困在花園的青少年</p>
              </span>
            </h2>
          </div>
          <div :class="$style.groupDiv">
            <img :class="$style.frameChild" alt="" src="/frame-157.svg" />
            <div :class="$style.avatarPerson">
              <img
                :class="$style.icon"
                loading="lazy"
                alt=""
                src="/-3-1@2x.png"
              />
            </div>
          </div>
        </div>
      </main>
      <section :class="$style.frameWrapper">
        <div :class="$style.frameParent2">
          <section :class="$style.frameSection">
            <div :class="$style.wrapper">
              <h2 :class="$style.h1">三級處遇</h2>
            </div>
            <div :class="$style.frameDiv">
              <div :class="$style.div">
                <p :class="$style.p">
                  <span :class="$style.span">兒福聯盟透過</span>
                  <span :class="$style.span">「青少年心理健康服務」</span>
                  <span>， 針對情緒困擾青少年及其家庭提供服務，由專業</span>
                </p>
                <p :class="$style.p">
                  社工進行定期的訪視與陪伴，協助家庭修復親子
                </p>
                <p :class="$style.p">
                  關係，並串聯醫療、教育等外部資源，協助少年
                </p>
                <p :class="$style.p">穩定身心狀況、重建生活節奏。</p>
                <p :class="$style.p">
                  <span>同時，</span>
                  <span :class="$style.span">「兒童創傷療癒中心」</span>
                  <span :class="$style.span">針對曾經歷或目睹</span>
                </p>
                <p :class="$style.p">
                  家庭暴力及其他創傷事件的兒少與照顧者，提供
                </p>
                <p :class="$style.p">
                  以創傷復原為核心的多元支持服務，在安全與信
                </p>
                <p :class="$style.p">
                  任的氛圍中，陪伴他們逐步走向療癒與重建。
                </p>
              </div>
            </div>
          </section>
          <div :class="$style.frameParent3">
            <img :class="$style.frameChild" alt="" src="/frame-157.svg" />
            <div :class="$style.avatarPersonB">
              <img
                :class="$style.icon1"
                loading="lazy"
                alt=""
                src="/-3-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style module>
  .h1 {
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
  .frameContainer {
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
  .h21 {
    margin: 0;
    width: 415px;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.05em;
    line-height: 157.24%;
    text-transform: uppercase;
    font-weight: 400;
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
  .frameChild {
    position: absolute;
    top: 0px;
    left: 0px;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
  .icon {
    width: 97px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
  }
  .avatarPerson {
    position: absolute;
    top: 540.7px;
    left: 619px;
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
  .frameParent1 {
    width: 930.4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .frameGroup {
    width: 1315px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: right;
    font-size: var(--font-size-36);
    color: var(--color-cadetblue-200);
    font-family: var(--font-gensenrounded2-tw);
  }
  .frameSection {
    width: 456px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-20) 0px;
    box-sizing: border-box;
    gap: var(--gap-14);
    min-width: 456px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-32);
    color: var(--color-black);
    font-family: var(--font-gensenrounded2-tw);
  }
  .icon1 {
    width: 87px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
  }
  .avatarPersonB {
    position: absolute;
    top: 531px;
    left: 235px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10);
  }
  .frameParent3 {
    height: 930.4px;
    width: 930.4px;
    position: relative;
    min-width: 930.4px;
    max-width: 100%;
  }
  .frameParent2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    row-gap: var(--gap-20);
    max-width: 100%;
  }
  .frameWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .frameParent {
    height: 2115px;
    width: 1335px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-20);
    box-sizing: border-box;
    max-width: 100%;
  }
  .c {
    width: 100%;
    height: 2117px;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: var(--padding-2) 0px 0px;
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1350px) {
    .frameSection {
      flex: 1;
    }

    .frameParent3 {
      flex: 1;
    }

    .frameParent2 {
      flex-wrap: wrap;
    }

    .frameParent {
      height: auto;
    }

    .c {
      height: auto;
    }
  }
  @media screen and (max-width: 1125px) {
    .frameParent3 {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 800px) {
    .h1 {
      font-size: var(--font-size-26);
    }

    .h21 {
      font-size: 29px;
      line-height: 45px;
    }

    .frameSection {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .h1 {
      font-size: var(--font-size-19);
    }

    .div {
      font-size: var(--font-size-16);
      line-height: 30px;
    }

    .h21 {
      font-size: var(--font-size-22);
      line-height: 34px;
    }
  }
</style>