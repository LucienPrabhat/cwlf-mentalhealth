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
              <ExplorePanel prop="給想了解更多的你" @toggle="showMore = !showMore" />
              <div :class="$style.component" :data-open="showMore">
                <div :class="$style.keyboardArrowDownParent">
                  <div :class="$style.linksPane">
                    <ProgramColumn iconSrc="/icon-book.png" title="線上課程">
                      <DetailsLink
                        href="https://hahow.in/courses/6655a0be08aad049fe6d68fd?utm_source=share&utm_medium=link"
                        text="兒福聯盟－給父母的青少年心理健康成長指南" />
                      <DetailsLink
                        href="https://hahow.in/courses/66726ce875e58cf0bb26d86f?utm_source=share&utm_medium=link"
                        text="青春不該 EMO 一樣－青少年心理健康成長指南" />
                    </ProgramColumn>

                    <ProgramColumn iconSrc="/icon-volume.png" title="PODCAST">
                      <DetailsLink href="https://lihi.cc/0OPPb" text="放學不回家" />
                      <DetailsLink href="https://lihi.cc/drKeO" text="今晚來點樂社話" />
                      <DetailsLink href="https://trauma-informedcare.children.org.tw/news/news_detail/ticpodcastlist"
                        text="創傷知情照護" />
                    </ProgramColumn>

                    <ProgramColumn iconSrc="/icon-play.png" title="影音節目">
                      <DetailsLink
                        href="https://www.youtube.com/watch?v=IdzKajOLmpQ&list=PLK3rF9Qn9rzuBhr10LFOpkk98_46tfJfU"
                        text="同學大小聲" />
                      <DetailsLink
                        href="https://www.youtube.com/watch?v=ujenK-pkDGI&list=PLK3rF9Qn9rzvwkJ8bsVyEvBNBglXalvO4"
                        text="放學不回家" />
                    </ProgramColumn>

                    <ProgramColumn iconSrc="/icon-folder.png" title="公益報告書">
                      <div :class="$style.details">
                        伴成長之路
                      </div>
                      <DetailsLink href="https://www.children.org.tw/publication_research/publication/2934"
                        text="2025 兒福聯盟少年服務現場紀實" />
                    </ProgramColumn>
                  </div>
                </div>
              </div>
            </section>
            <section :class="$style.emergencyAccess">
              <ExplorePanel prop="給需要幫助的你" @toggle="showHelp = !showHelp" />
              <div :class="$style.component1" :data-open="showHelp">
                <div :class="$style.group">
                  <div :class="$style.linksPane">
                    <ProgramColumn iconSrc="/icon-call.png" title="少年專線"
                      titleHref="https://www.children.org.tw/service/index/2313/2034">
                      <div :class="$style.details">
                        專線電話： 0800-001769
                      </div>
                      <div :class="$style.details">
                        LINE@線上聊：LINE搜尋 @youthplus_cwlf
                      </div>
                    </ProgramColumn>
                    <ProgramColumn iconSrc="/icon-call.png" title="創傷專線"
                      titleHref="https://www.children.org.tw/service/index/39/700">
                      <div :class="$style.details">
                        專線電話：0800-250585（愛我理我幫我）
                      </div>
                    </ProgramColumn>
                    <ProgramColumn iconSrc="/icon-home.png" title="少年＋據點"
                      titleHref="https://www.children.org.tw/service/index/3366/2493">
                      <div :class="$style.details">
                        提供完善的設備空間、多元課程與營隊，
                      </div>
                      <div :class="$style.details">
                        讓少年體驗正向的人際互動。 
                      </div>
                    </ProgramColumn>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div :class="$style.donationFooter">
          <img :class="$style.icon" loading="lazy" alt="" src="/--0002@2x.png" />
          <p>衛部救字第1141360179號</p>
          <section :class="$style.partners">
            <div :class="$style.partnersInner">
              <div :class="$style.partnerLabel">
                <p>響應夥伴</p>
              </div>
              <div :class="$style.partnerStrip">
                <img v-for="(file, idx) in partnerIconFiles" :key="file" :class="$style.partnerIcon"
                  :src="`/partnerIcon/${file}`" :alt="`partner-${idx + 1}`" />
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import ExplorePanel from "./ExplorePanel.vue"
import Book from "./Book.vue"
import Volume from "./Volume.vue"
import PlayCircle from "./PlayCircle.vue"
import InnerElements from "./InnerElements.vue"
import Home from "./Home.vue"
import DetailsLink from "./DetailsLink.vue"
import ProgramColumn from "./ProgramColumn.vue"

const showMore = ref(false)     // 給想了解更多的你
const showHelp = ref(false)     // 給需要幫助的你
const partnerIconFiles = [
  '01.png',
  '02.png',
  '03.jpg',
  '04.png',
  '05.png',
  '06.png',
  '07.png',
  '08.png',
  '09.png',
  '10.png',
  '11.jpg',
  '12.png',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.png',
  '17.jpg',
  '18.jpg',
  '19.jpg',
  '20.jpg',
  '21.jpg',
  '22.jpg',
  '23.png',
  '24.png',
  '25.png',
  '26.jpg',
  '27.jpg',
  '28.jpg',
  '29.jpg',
  '30.jpg',
  '31.jpg',
  '32.jpg',
  '33.png',
  '34.jpg',
  '35.jpg',
  '36.jpg',
  '37.png',
  '38.png',
  '39.png',
  '40.png',
  '41.jpg',
  '42.PNG'
]
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

.keyboardArrowDownIcon3 {
  width: 27px;
  margin: 0 !important;
  right: -21px;
  bottom: 0px;
  max-height: 100%;
  object-fit: contain;
}

.a {
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

.keyboardArrowDownIcon5 {
  width: 27px;
  margin: 0 !important;
  top: -13px;
  right: 63px;
  max-height: 100%;
  object-fit: contain;
}

.a3 {
  height: 27px;
  width: 434px;
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
  opacity: 1;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-26);
  font-size: var(--font-size-20);
}

.keyboardArrowDownIcon6 {
  width: 27px;
  margin: 0 !important;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4);
  gap: 5%;
}

.programColumn .icon {
  width: 10%;
}

.programColumn .icon img {
  width: 100%;
}

.programColumn .content {
  width: 90%;
  align-self: stretch;
}

.programColumn .content .title {
  font-size: clamp(16px, 3vw, 20px);
  margin: 3% 0;
}

.details {
  font-size: clamp(12px, 3vw, 16px);
  line-height: 200%;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
}

.keyboardArrowDownIcon7 {
  width: 27px;
  margin: 0 !important;
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

.linksPane {
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
  width: 100%;
  max-width: 500px;
}

.component {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5% 0 15%;
  box-sizing: border-box;
  font-size: var(--font-size-16);
  overflow: hidden;
}

/* collapse/expand animation for first panel */
.component[data-open="true"] .keyboardArrowDownParent {
  animation: panelFadeIn 300ms ease forwards;
}

.component[data-open="false"] .keyboardArrowDownParent {
  animation: panelFadeOut 300ms ease forwards;
}

.externalResources {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10);
  text-align: left;
  font-size: clamp(20px, 3vw, 32px);
  color: var(--color-white);
  font-family: var(--font-gensenrounded2-tw);
}

.div2 {
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 88px;
}

.group {
  width: 100%;
  max-width: 500px;
  position: relative;
  opacity: 0;
}

.component1 {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5% 0 15%;
  box-sizing: border-box;
  overflow: hidden;
}

/* collapse/expand animation for help panel */
.component1[data-open="true"] .group {
  animation: panelFadeIn 300ms ease forwards;
}

.component1[data-open="false"] .group {
  animation: panelFadeOut 300ms ease forwards;
}

@keyframes panelFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-8px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes panelFadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-8px);
  }
}

.emergencyAccess {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10);
  font-size: clamp(20px, 3vw, 32px);
  text-align: left;
  color: var(--color-white);
  font-family: var(--font-gensenrounded2-tw);
}

.externalResourcesParent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  row-gap: var(--gap-20);
  width: 100%;
  padding: 0 5%;
}

.accompanyQuoteParent {
  width: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5vh;
}

.icon {
  height: 107px;
  width: 73px;
  position: relative;
  object-fit: cover;
}

.donationFooter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10);
  gap: var(--gap-6);
}

.donationFooter p {
  margin: 20px 0 0 0;
  font-size: var(--font-size-16);
  line-height: 150%;
  text-align: center;
  color: var(--color-cadetblue-300)
}

.frameParent {
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5vh;
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
  padding: 5vh 0;
  box-sizing: border-box;
  width: 100%;
}

.gWrapper {
  width: 100%;
}

.partners {
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.partnersInner {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5vh 1vw;
  box-sizing: border-box;
}

.partnerLabel {
  white-space: nowrap;
  font-size: clamp(16px, 3vw, 32px);
}

.partnerStrip {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  gap: 5px;
  padding: 3vh 1vw 5vh;
}

.partnerIcon {
  width: auto;
  height: auto;
  max-height: 56px;
  max-width: 100%;
  object-fit: contain;
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
}

@media screen and (max-width: 450px) {
  .h2 {
    font-size: var(--font-size-19);
    line-height: 36px;
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

  .linksPane {
    gap: 21px;
  }

  .a8 {
    font-size: var(--font-size-16);
    line-height: 32px;
  }
}

@media screen and (max-width: 401px) {

  /* Center the title block in the middle of the screen */
  .accompanyQuoteParent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .h2 {
    text-align: center;
  }

  /* Prevent overlaps: ensure wrapper grows and internal blocks aren't absolute-stacked */
  .gWrapper {
    height: auto;
  }
}
</style>
