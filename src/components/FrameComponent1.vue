<template>
  <div :class="$style.frameWrapper">
    <div :class="$style.frameParent">
      <section :class="$style.frameGroup">
        <div :class="$style.wrapper">
          <h2 :class="$style.h2">三級處遇</h2>
        </div>
        <div :class="$style.container">
          <div :class="$style.div">
            <p :class="$style.p">
              <span :class="$style.span">兒福聯盟透過</span>
              <span :class="$style.span">「青少年心理健康服務」</span>
              <span>， 針對情緒困擾青少年及其家庭提供服務，由專業</span>
            </p>
            <p :class="$style.p">社工進行定期的訪視與陪伴，協助家庭修復親子</p>
            <p :class="$style.p">關係，並串聯醫療、教育等外部資源，協助少年</p>
            <p :class="$style.p">穩定身心狀況、重建生活節奏。</p>
            <p :class="$style.p">
              <span>同時，</span>
              <span :class="$style.span">「兒童創傷療癒中心」</span>
              <span :class="$style.span">針對曾經歷或目睹</span>
            </p>
            <p :class="$style.p">家庭暴力及其他創傷事件的兒少與照顧者，提供</p>
            <p :class="$style.p">以創傷復原為核心的多元支持服務，在安全與信</p>
            <p :class="$style.p">任的氛圍中，陪伴他們逐步走向療癒與重建。</p>
          </div>
        </div>
      </section>
      <div :class="$style.frameContainer">
        <img :class="$style.frameChild" alt="" src="/frame-60.svg" />
        <div :class="$style.frame">
          <img :class="$style.icon" loading="lazy" alt="" src="/3-1@2x.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<style module>
  .h2 {
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
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10) 9px;
    font-size: var(--font-size-20);
  }
  .frameGroup {
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
  .frameChild {
    position: absolute;
    top: 0px;
    left: 0px;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
  .icon {
    width: 87px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
  }
  .frame {
    position: absolute;
    top: 531px;
    left: 235px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10);
  }
  .frameContainer {
    height: 930.4px;
    width: 930.4px;
    position: relative;
    min-width: 930.4px;
    max-width: 100%;
  }
  .frameParent {
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

  @media screen and (max-width: 1411px) {
    .frameGroup {
      flex: 1;
    }

    .frameContainer {
      flex: 1;
    }

    .frameParent {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1200px) {
    .frameContainer {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 825px) {
    .h2 {
      font-size: var(--font-size-26);
    }

    .frameGroup {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .h2 {
      font-size: var(--font-size-19);
    }

    .div {
      font-size: var(--font-size-16);
      line-height: 30px;
    }
  }
</style>
