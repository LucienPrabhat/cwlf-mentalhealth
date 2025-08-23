<template>
  <section :class="$style.gWrapper">
    <div :class="$style.g">
      <footer :class="$style.frameParent">
        <div :class="$style.accompanyQuoteParent">
          <div :class="$style.accompanyQuote">
            <h2 :class="$style.h2">
              <p :class="$style.p">不論是怎樣的你，</p>
              <p :class="$style.p">我們都願意陪你一起走一段</p>
            </h2>
          </div>
          <div :class="$style.externalResourcesParent">
            <section :class="$style.externalResources">
              <ExplorePanel prop="給想了解更多的你" />
              <div :class="$style.component">
                <div :class="$style.keyboardArrowDownParent">
                  <img
                    :class="$style.keyboardArrowDownIcon"
                    alt=""
                    src="/keyboard-arrow-down@2x.png"
                  />
                  <div :class="$style.detailsArea">
                    <Book :size="48" />
                    <div :class="$style.iconRow">
                      <Volume :size="48" />
                      <PlayCircle :size="48" />
                      <img :class="$style.folderIcon" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div :class="$style.dropdownMenu">
                    <img
                      :class="$style.keyboardArrowDownIcon1"
                      alt=""
                      src="/keyboard-arrow-down@2x.png"
                    />
                    <img
                      :class="$style.keyboardArrowDownIcon2"
                      alt=""
                      src="/keyboard-arrow-down@2x.png"
                    />
                    <a
                      :class="$style.a"
                      href="https://www.youtube.com/watch?v=IdzKajOLmpQ&list=PLK3rF9Qn9rzuBhr10LFOpkk98_46tfJfU"
                      target="_blank"
                    >
                      同學大小聲
                    </a>
                  </div>
                  <div :class="$style.dropDownOption">
                    <img
                      :class="$style.keyboardArrowDownIcon3"
                      alt=""
                      src="/keyboard-arrow-down@2x.png"
                    />
                    <a
                      :class="$style.a1"
                      href="https://lihi.cc/drKeO"
                      target="_blank"
                    >
                      今晚來點樂社話
                    </a>
                  </div>
                  <div :class="$style.dropDownOptionTwo">
                    <img
                      :class="$style.keyboardArrowDownIcon4"
                      alt=""
                      src="/keyboard-arrow-down@2x.png"
                    />
                    <a
                      :class="$style.a2"
                      href="https://www.youtube.com/watch?v=IdzKajOLmpQ&list=PLK3rF9Qn9rzuBhr10LFOpkk98_46tfJfU"
                      target="_blank"
                    >
                      同學大小聲
                    </a>
                  </div>
                  <div :class="$style.learningPane">
                    <div :class="$style.coursesBlock">
                      <div :class="$style.div">線上課程</div>
                      <div :class="$style.courseExpansion">
                        <div :class="$style.itemCard">
                          <div :class="$style.courseGuide">
                            <img
                              :class="$style.keyboardArrowDownIcon5"
                              alt=""
                              src="/keyboard-arrow-down@2x.png"
                            />
                            <a
                              :class="$style.a3"
                              href="https://hahow.in/courses/6655a0be08aad049fe6d68fd?utm_source=share&utm_medium=link"
                              target="_blank"
                            >
                              兒福聯盟－給父母的青少年心理健康成長指南
                            </a>
                            <a
                              :class="$style.emo"
                              href="https://hahow.in/courses/66726ce875e58cf0bb26d86f?utm_source=share&utm_medium=link"
                              target="_blank"
                            >
                              青春不該 EMO 一樣－青少年心理健康成長指南
                            </a>
                          </div>
                          <div :class="$style.podcast">Podcast</div>
                        </div>
                      </div>
                    </div>
                    <div :class="$style.programColumn">
                      <div :class="$style.showCase">
                        <div :class="$style.playShow">
                          <a
                            :class="$style.a1"
                            href="https://lihi.cc/0OPPb"
                            target="_blank"
                          >
                            放學不回家
                          </a>
                          <div :class="$style.courseGuide">
                            <img
                              :class="$style.keyboardArrowDownIcon6"
                              alt=""
                              src="/keyboard-arrow-down@2x.png"
                            />
                            <a
                              :class="$style.a5"
                              href="https://trauma-informedcare.children.org.tw/news/news_detail/ticpodcastlist"
                              target="_blank"
                            >
                              <span :class="$style.txt">
                                <p :class="$style.p">&nbsp;</p>
                                <p :class="$style.p">創傷知情照護</p>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div :class="$style.div1">影音節目</div>
                      </div>
                    </div>
                    <div :class="$style.programColumn">
                      <div :class="$style.courseGuide">
                        <img
                          :class="$style.keyboardArrowDownIcon7"
                          alt=""
                          src="/keyboard-arrow-down@2x.png"
                        />
                        <div :class="$style.resourceDivision">
                          <a
                            :class="$style.a6"
                            href="https://www.youtube.com/watch?v=ujenK-pkDGI&list=PLK3rF9Qn9rzvwkJ8bsVyEvBNBglXalvO4"
                            target="_blank"
                          >
                            放學不回家
                          </a>
                          <div :class="$style.parent">
                            <a
                              :class="$style.a7"
                              href="https://www.children.org.tw/publication_research/publication/2934"
                              target="_blank"
                            >
                              公益報告書
                            </a>
                            <div :class="$style.dropdownPanel">
                              <img
                                :class="$style.keyboardArrowDownIcon8"
                                alt=""
                                src="/keyboard-arrow-down-8@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div :class="$style.guidanceRow" />
            <section :class="$style.emergencyAccess">
              <ExplorePanel explorePanelWidth="unset" prop="給需要幫助的你" />
              <div :class="$style.component1">
                <div :class="$style.group">
                  <div :class="$style.div2">
                    專線電話：0800-250585（愛我理我幫我）
                  </div>
                  <div :class="$style.phoneAreaParent">
                    <div :class="$style.resourceDivision">
                      <InnerElements
                        prop="少年專線"
                        href="https://www.children.org.tw/service/index/2313/2034"
                      />
                      <div :class="$style.group1">
                        <a
                          :class="$style.a8"
                          href="https://www.children.org.tw/service/index/39/700"
                          target="_blank"
                        >
                          創傷專線
                        </a>
                        <div :class="$style.keyboardArrowDownWrapper">
                          <img
                            :class="$style.keyboardArrowDownIcon9"
                            alt=""
                            src="/keyboard-arrow-down-8@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <InnerElements
                      groupWidth="unset"
                      groupHeight="unset"
                      groupAlignItems="flex-end"
                      prop="少年＋據點"
                      href="https://www.children.org.tw/service/index/3366/2493"
                      aWidth="104px"
                      expansionSignJustifyContent="flex-end"
                      expansionSignPadding="0px 0px 3px"
                    />
                  </div>
                  <div :class="$style.outreach">
                    <div :class="$style.calendar">
                      <img
                        :class="$style.callEndIcon"
                        loading="lazy"
                        alt=""
                        src="/call-end@2x.png"
                      />
                    </div>
                    <img
                      :class="$style.callEndIcon"
                      loading="lazy"
                      alt=""
                      src="/call-end@2x.png"
                    />
                    <div :class="$style.location"><Home :size="48" /></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div :class="$style.donationFooter">
          <img
            :class="$style.icon"
            loading="lazy"
            alt=""
            src="/--0002@2x.png"
          />
        </div>
      </footer>
    </div>
  </section>
</template>
<script setup>
  import ExplorePanel from "./ExplorePanel.vue"
  import Book from "./Book.vue"
  import Volume from "./Volume.vue"
  import PlayCircle from "./PlayCircle.vue"
  import InnerElements from "./InnerElements.vue"
  import Home from "./Home.vue"
</script>
<style module>
  .p {
    margin: 0;
  }
  .h2 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
    text-shadow: 0px 0px 1.8px #fff;
  }
  .accompanyQuote {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-10) 9px;
  }
  .keyboardArrowDownIcon {
    width: 27px;
    position: absolute;
    margin: 0 !important;
    top: 87px;
    right: 63px;
    max-height: 100%;
    object-fit: contain;
  }
  .folderIcon {
    width: 48px;
    height: 48px;
    position: relative;
  }
  .iconRow {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 88px;
  }
  .detailsArea {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-100);
  }
  .keyboardArrowDownIcon1 {
    width: 27px;
    position: absolute;
    margin: 0 !important;
    right: -13px;
    bottom: 20px;
    max-height: 100%;
    object-fit: contain;
  }
  .keyboardArrowDownIcon2 {
    width: 27px;
    position: absolute;
    margin: 0 !important;
    right: -13px;
    bottom: -5px;
    max-height: 100%;
    object-fit: contain;
    z-index: 1;
  }
  .a {
    height: 68px;
    width: 97px;
    position: relative;
    text-decoration: underline;
    letter-spacing: 0.04em;
    line-height: 157.24%;
    text-transform: uppercase;
    color: inherit;
    display: flex;
    align-items: center;
    z-index: 2;
  }
  .dropdownMenu {
    margin: 0 !important;
    position: absolute;
    top: 187px;
    left: 68px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .keyboardArrowDownIcon3 {
    width: 27px;
    position: absolute;
    margin: 0 !important;
    right: -21px;
    bottom: 0px;
    max-height: 100%;
    object-fit: contain;
  }
  .a1 {
    height: 28px;
    width: 121px;
    position: relative;
    text-decoration: underline;
    letter-spacing: 0.04em;
    line-height: 157.24%;
    text-transform: uppercase;
    color: inherit;
    display: flex;
    align-items: center;
    z-index: 3;
  }
  .dropDownOption {
    margin: 0 !important;
    position: absolute;
    top: 207px;
    left: 224px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .keyboardArrowDownIcon4 {
    width: 27px;
    position: absolute;
    margin: 0 !important;
    right: -13px;
    bottom: -1px;
    max-height: 100%;
    object-fit: contain;
  }
  .a2 {
    height: 30px;
    width: 97px;
    position: relative;
    text-decoration: underline;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    color: inherit;
    display: inline-block;
    z-index: 3;
  }
  .dropDownOptionTwo {
    margin: 0 !important;
    position: absolute;
    top: 338px;
    left: 68px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .div {
    width: 84px;
    position: relative;
    letter-spacing: 0.04em;
    line-height: 200%;
    text-transform: uppercase;
    display: inline-block;
  }
  .keyboardArrowDownIcon5 {
    width: 27px;
    position: absolute;
    margin: 0 !important;
    top: -13px;
    right: 63px;
    max-height: 100%;
    object-fit: contain;
  }
  .a3 {
    height: 27px;
    width: 434px;
    position: absolute;
    margin: 0 !important;
    top: -15px;
    left: 0px;
    text-decoration: underline;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    color: inherit;
    display: inline-block;
    z-index: 1;
  }
  .emo {
    height: 68px;
    width: 434px;
    position: relative;
    text-decoration: underline;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    color: inherit;
    display: flex;
    align-items: center;
    opacity: 0;
    z-index: 2;
  }
  .courseGuide {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .podcast {
    width: 99px;
    position: relative;
    font-size: var(--font-size-20);
    letter-spacing: 0.04em;
    line-height: 200%;
    text-transform: uppercase;
    display: inline-block;
  }
  .itemCard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-14);
  }
  .courseExpansion {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-4);
    font-size: var(--font-size-16);
  }
  .coursesBlock {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-26);
    font-size: var(--font-size-20);
  }
  .keyboardArrowDownIcon6 {
    width: 27px;
    position: absolute;
    margin: 0 !important;
    right: -21px;
    bottom: 0px;
    max-height: 100%;
    object-fit: contain;
    z-index: 1;
  }
  .txt {
    line-break: anywhere;
    width: 100%;
  }
  .a5 {
    height: 28px;
    width: 121px;
    position: relative;
    text-decoration: underline;
    letter-spacing: 0.04em;
    line-height: 157.24%;
    text-transform: uppercase;
    color: inherit;
    display: flex;
    align-items: center;
    z-index: 2;
  }
  .playShow {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 35px;
  }
  .div1 {
    width: 84px;
    position: relative;
    font-size: var(--font-size-20);
    letter-spacing: 0.04em;
    line-height: 200%;
    text-transform: uppercase;
    display: inline-block;
  }
  .showCase {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-24);
  }
  .programColumn {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-4);
  }
  .keyboardArrowDownIcon7 {
    width: 27px;
    position: absolute;
    margin: 0 !important;
    top: 2px;
    right: 26px;
    max-height: 100%;
    object-fit: contain;
    z-index: 1;
  }
  .a6 {
    width: 84px;
    position: relative;
    text-decoration: underline;
    letter-spacing: 0.04em;
    line-height: 190%;
    text-transform: uppercase;
    color: inherit;
    display: inline-block;
    z-index: 2;
  }
  .a7 {
    width: 104px;
    position: relative;
    text-decoration: underline;
    letter-spacing: 0.04em;
    line-height: 200%;
    text-transform: uppercase;
    color: inherit;
    display: inline-block;
    z-index: 1;
  }
  .keyboardArrowDownIcon8 {
    width: 32px;
    position: relative;
    max-height: 100%;
    object-fit: contain;
  }
  .dropdownPanel {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4) 0px 0px;
  }
  .parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--font-size-20);
  }
  .resourceDivision {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 29px;
  }
  .learningPane {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 42.5px;
    max-width: 100%;
  }
  .keyboardArrowDownParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    gap: var(--gap-16);
    opacity: 0;
    max-width: 100%;
  }
  .component {
    width: 502px;
    height: 589px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-6) 0px 115px;
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-16);
  }
  .externalResources {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-10);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-32);
    color: var(--color-white);
    font-family: var(--font-gensenrounded2-tw);
  }
  .guidanceRow {
    height: 140px;
    width: 100px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .div2 {
    position: absolute;
    top: 190px;
    left: calc(50% - 183px);
    letter-spacing: 0.04em;
    line-height: 157.24%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    z-index: 2;
  }
  .a8 {
    width: 83px;
    position: relative;
    text-decoration: underline;
    letter-spacing: 0.04em;
    line-height: 200%;
    text-transform: uppercase;
    color: inherit;
    display: inline-block;
  }
  .keyboardArrowDownIcon9 {
    width: 32px;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    z-index: 1;
  }
  .keyboardArrowDownWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4) 0px 0px;
    margin-left: -2px;
    position: relative;
  }
  .group1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .phoneAreaParent {
    position: absolute;
    top: 0px;
    left: 68px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 96px;
    font-size: var(--font-size-20);
  }
  .callEndIcon {
    width: 48px;
    position: relative;
    max-height: 100%;
    object-fit: contain;
  }
  .calendar {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-15) var(--padding-2);
  }
  .location {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-2) 0px 0px;
  }
  .outreach {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 88px;
  }
  .group {
    height: 409px;
    width: 502px;
    position: relative;
    opacity: 0;
  }
  .component1 {
    width: 502px;
    height: 532px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-14) 0px 109px;
    box-sizing: border-box;
  }
  .emergencyAccess {
    height: 676px;
    width: 518px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-10);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-16);
    color: var(--color-white);
    font-family: var(--font-gensenrounded2-tw);
  }
  .externalResourcesParent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    row-gap: var(--gap-20);
    max-width: 100%;
  }
  .accompanyQuoteParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 131px;
    max-width: 100%;
  }
  .icon {
    height: 107px;
    width: 73px;
    position: relative;
    object-fit: cover;
  }
  .donationFooter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10);
  }
  .frameParent {
    width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 140px;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-32);
    color: var(--color-white);
    font-family: var(--font-gensenrounded2-tw);
  }
  .g {
    align-self: stretch;
    flex: 1;
    background:
      linear-gradient(180deg, var(--color-cadetblue-300), #e8fcb5),
      var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 56px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .gWrapper {
    align-self: stretch;
    height: 1393px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-1) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }

  @media screen and (max-width: 1411px) {
    .g {
      padding-top: var(--padding-36);
      padding-bottom: var(--padding-36);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1200px) {
    .externalResourcesParent {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 825px) {
    .h2 {
      font-size: var(--font-size-26);
      line-height: 49px;
    }

    .keyboardArrowDownParent {
      flex-wrap: wrap;
    }

    .component {
      height: auto;
      padding-top: var(--padding-20);
      padding-bottom: 75px;
      box-sizing: border-box;
    }

    .component1 {
      padding-top: var(--padding-20);
      padding-bottom: 71px;
      box-sizing: border-box;
    }

    .accompanyQuoteParent {
      gap: 65px;
    }

    .frameParent {
      gap: 70px;
    }

    .g {
      padding-top: 23px;
      padding-bottom: 23px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .h2 {
      font-size: var(--font-size-19);
      line-height: 36px;
    }

    .div {
      font-size: var(--font-size-16);
      line-height: 32px;
    }

    .podcast {
      font-size: var(--font-size-16);
      line-height: 32px;
    }

    .playShow {
      gap: 17px;
    }

    .div1 {
      font-size: var(--font-size-16);
      line-height: 32px;
    }

    .a7 {
      font-size: var(--font-size-16);
      line-height: 32px;
    }

    .learningPane {
      gap: 21px;
    }

    .a8 {
      font-size: var(--font-size-16);
      line-height: 32px;
    }

    .accompanyQuoteParent {
      gap: 33px;
    }

    .frameParent {
      gap: 35px;
    }
  }
</style>
