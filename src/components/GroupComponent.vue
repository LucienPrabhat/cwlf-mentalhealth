<template>
  <section :class="$style.frameParent">
    <img
      :class="$style.frameChild"
      loading="lazy"
      alt=""
      src="/frame-46@2x.png"
    />
    <section :class="$style.groupWrapper">
      <div :class="$style.group">
        <div :class="$style.vectorParent">
          <img
            :class="$style.frameItem"
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
          <h2 :class="$style.h2">
            <span :class="$style.txt">
              <p :class="$style.p">近年自殺已成</p>
              <p :class="$style.p1">青少年十大死因第二名。</p>
            </span>
          </h2>
        </div>
        <div :class="$style.parent">
          <div :class="$style.div">
            <span :class="$style.txt">
              <p :class="$style.p">根據 2024 年衛福部資料統計，</p>
              <p :class="$style.p">
                12 至 17 歲自殺死亡佔比從 12.5% 攀升至 18.4%。
              </p>
              <p :class="$style.p">&nbsp;</p>
              <p :class="$style.p">&nbsp;</p>
              <p :class="$style.p">&nbsp;</p>
              <p :class="$style.p">
                兒福聯盟調查發現，逾五成國中生因對未來感到壓力，
              </p>
              <p :class="$style.p">出現情緒困擾與失眠的機率大幅提高。</p>
              <p :class="$style.p">課業重擔、前途迷惘，讓心靈不堪重負。</p>
              <p :class="$style.p">
                社群媒體的影響也不容忽視，每日使用超過 5 小時者，
              </p>
              <p :class="$style.p">情緒困擾率為一般人的兩倍。</p>
              <p :class="$style.p">然而，僅不到一半青少年願向家人傾訴。</p>
              <p :class="$style.p">當缺乏理解與支持，他們只能獨自面對風暴。</p>
            </span>
          </div>
          <h1 :class="$style.h1">
            <span :class="$style.txt">
              在台灣，平均每 7 天就有一個孩子自殺。 
            </span>
          </h1>
        </div>
      </div>
    </section>
  </section>
</template>
<style module>
  .frameChild {
    width: 503.1px;
    max-height: 100%;
    object-fit: cover;
    z-index: 2;
  }
  .frameItem {
    height: 85.1px;
    width: 84.6px;
    position: absolute;
    margin: 0 !important;
    top: -29.3px;
    left: 81.1px;
  }
  .p {
    margin: 0;
  }
  .p1 {
    margin: 0;
    white-space: pre-wrap;
  }
  .txt {
    width: 100%;
  }
  .h2 {
    margin: 0;
    height: 121px;
    width: 635.6px;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.04em;
    line-height: 189.28%;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
    display: flex;
    align-items: center;
    text-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
  }
  .vectorParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .div {
    width: 658.4px;
    height: 516.2px;
    position: relative;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    filter: drop-shadow(0px 0px 10.8px rgba(0, 0, 0, 0.46));
  }
  .h1 {
    margin: 0;
    width: 567px;
    height: 25.4px;
    position: relative;
    font-size: var(--font-size-26);
    letter-spacing: 0.04em;
    line-height: 25.4px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
    display: flex;
    align-items: center;
    filter: drop-shadow(3px 2px 4px rgba(0, 0, 0, 0.25));
    z-index: 1;
    margin-top: -375.4px;
  }
  .parent {
    height: 516.2px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 23px;
  }
  .group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 29.3px 0px 0px;
    gap: 6.1px;
  }
  .groupWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 123.4px 0px 0px;
    text-align: left;
    font-size: var(--font-size-32);
    color: var(--color-white);
    font-family: var(--font-gensenrounded2-tw);
  }
  .frameParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-20);
    gap: 38.5px;
  }

  @media screen and (max-width: 1125px) {
    .h2 {
      font-size: var(--font-size-19);
      line-height: 36px;
    }

    .div {
      font-size: var(--font-size-18);
      line-height: 35px;
    }

    .h1 {
      font-size: 21px;
      line-height: 20px;
    }

    .groupWrapper {
      padding-top: 52px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .h2 {
      font-size: var(--font-size-26);
      line-height: 48px;
    }

    .groupWrapper {
      padding-top: var(--padding-80);
      box-sizing: border-box;
    }

    .frameParent {
      gap: var(--gap-19);
    }
  }
</style>
