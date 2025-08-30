<template>
  <div :class="$style.e1">
    <section :class="$style.story">
      <div :class="$style.frame2">
        <transition :name="transitionName" mode="out-in">
          <div :key="activeCardLKey" :class="$style.narrative">
            <picture @click="onClickButton">
              <source :srcset="`${activeCardL.cardBorderMobile}`" media="(max-width: 1000px)" />
              <img :class="$style.cardBorder" loading="lazy" alt="story card" :src="`${activeCardL.cardBorder}`" />
            </picture>
          </div>
        </transition>
      </div>
      <img :class="$style.arrowIcon" loading="lazy" alt="" src="/icon_to_left.png" @click="goPrev" />
      <div :class="$style.frame2">
        <transition :name="transitionName" mode="out-in">
          <div :key="activeCardKey" :class="$style.narrative">
            <picture @click="onClickButton">
              <source :srcset="`${activeCard.cardBorderMobile}`" media="(max-width: 1000px)" />
              <img :class="$style.cardBorder" loading="lazy" alt="story card" :src="`${activeCard.cardBorder}`" />
            </picture>
          </div>
        </transition>
      </div>
      <img :class="$style.arrowIcon" loading="lazy" alt="" src="/icon_to_right.png" @click="goNext" />
      <div :class="$style.frame2">
        <transition :name="transitionName" mode="out-in">
          <div :key="activeCardRKey" :class="$style.narrative">
            <picture @click="onClickButton">
              <source :srcset="`${activeCardR.cardBorderMobile}`" media="(max-width: 1000px)" />
              <img :class="$style.cardBorder" loading="lazy" alt="story card" :src="`${activeCardR.cardBorder}`" />
            </picture>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const cards = [
  {
    image: "03@2x.png",
    title: "媽媽生病又入獄 我的世界崩潰了",
    content: "瘦瘦小小的阿馨，本該是準備升學考試、和同學談天說地的年紀，卻要獨自面對媽媽入獄、學業中斷的殘酷現實。媽媽入獄的那一刻，她的世界瞬間崩塌了⋯⋯",
    btnText: "阿馨後來呢？",
    routeName: "E2",
    key: "card-e2",
    cardBorder: "/storyCard/xin.png",
    cardBorderMobile: "/storyCard/xin-m.png",
  },
  {
    image: "04@2x.png",
    title: "從垃圾堆裡撿回自己的小雨",
    content: "國中就拒學的小雨，畢業後開始繭居在家。因為情緒失控自傷被強制送醫，小雨曾住進康復之家。回家後，因房間過於髒亂，只能鋪地墊睡在走廊⋯⋯",
    btnText: "小雨後來呢？",
    routeName: "E3",
    key: "card-e3",
    cardBorder: "/storyCard/yu.png",
    cardBorderMobile: "/storyCard/yu-m.png",
  },
  {
    image: "frame-149@2x.png",
    title: "「反正每個人最後都會離開我...」把心關上的小言",
    content: "國中遭同學霸凌、被逼迫分手後，崩潰的小言開始自傷、拒學。高二時，連最親近的朋友都選擇離開後，小言再度陷入憂鬱與焦慮，從此推開所有人。直到那天，她第一次在社工面前落淚⋯⋯",
    btnText: "小言後來呢？",
    routeName: "E4",
    key: "card-e4",
    cardBorder: "/storyCard/yan.png",
    cardBorderMobile: "/storyCard/yan-m.png",
  },
  {
    image: "frame-170@2x.png",
    title: "從陽台邊緣走回了人生的小波",
    content: "國中時的小波品學兼優、開朗活潑，誰能想到，這個曾經是班上開心果的女孩，有一天會想結束自己的生命⋯⋯",
    btnText: "小波後來呢",
    routeName: "E1",
    key: "card-e1",
    cardBorder: "/storyCard/po.png",
    cardBorderMobile: "/storyCard/po-m.png",
  },
];

const activeIndexL = ref(0);
const activeIndexR = ref(2);
const activeIndex = ref(1);
const isForward = ref(true);

const activeCardL = computed(() => cards[activeIndexL.value]);
const activeCardR = computed(() => cards[activeIndexR.value]);
const activeCard = computed(() => cards[activeIndex.value]);
const activeCardLKey = computed(() => activeCardL.value.key);
const activeCardRKey = computed(() => activeCardR.value.key);
const activeCardKey = computed(() => activeCard.value.key);
const transitionName = computed(() => (isForward.value ? "slide-left" : "slide-right"));

function goPrev() {
  isForward.value = false;
  activeIndexL.value = (activeIndexL.value - 1 + cards.length) % cards.length;
  activeIndexR.value = (activeIndexR.value - 1 + cards.length) % cards.length;
  activeIndex.value = (activeIndex.value - 1 + cards.length) % cards.length;
}

function goNext() {
  isForward.value = true;
  activeIndexL.value = (activeIndexL.value + 1) % cards.length;
  activeIndexR.value = (activeIndexR.value + 1) % cards.length;
  activeIndex.value = (activeIndex.value + 1) % cards.length;
}

function onClickButton() {
  const routeName = activeCard.value.routeName;
  if (routeName) router.push({ name: routeName });
}
</script>
<style module>
.xuanButtonData {
  align-self: stretch;
  height: 341px;
  position: relative;
  border-radius: 52px;
  background-color: var(--color-white);
}

.xuanStage {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10);
  z-index: 0;
}

.xuanEventIcon {
  width: 316px;
  max-height: 100%;
  object-fit: cover;
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

.xuanNarrative {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10);
}

.xuanButtonDetails {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  /* background comes from container to ensure full pill color */
  align-self: stretch;
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 31.5px;
}

.xuanButtonArea {
  width: 100%;
  margin: 0 !important;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  z-index: 0;
}

.div1 {
  position: relative;
  letter-spacing: 0.09em;
  line-height: 157.24%;
  text-transform: uppercase;
}

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
}

.xuanEventEnd {
  width: 22px;
  height: 22px;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.xuanPanel {
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-20) 0px;
  box-sizing: border-box;
  gap: var(--gap-4);
  max-width: 100%;
}

.xuanInfo {
  margin: 0 !important;
  position: absolute;
  top: 12px;
  left: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  row-gap: var(--gap-20);
  max-width: 100%;
  z-index: 1;
}

.frame {
  width: 785px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-10);
  max-width: 100%;
}

.arrowIcon {
  width: 55px;
  max-height: 100%;
  cursor: pointer;
}

.frameChild {
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: 0px;
  border-radius: 52px;
  background-color: var(--color-white);
  height: 100%;
  z-index: 0;
}

.eventIcon {
  width: 274px;
  max-height: 100%;
  object-fit: cover;
}

.cardBorder {
  width: 100%;
  height: auto;
  display: block;
}

.xiaoYanEvent {
  width: 357px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4);
  max-width: 100%;
}

.narrative {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
  max-width: 100%;
  z-index: 1;
}

.frame2 {
  height: 341px;
  width: 765px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 23px 33px;
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-10);
  max-width: 100%;
  overflow: hidden;
  /* avoid content flash during transition */
  will-change: transform;
  /* hint for smoother transition */
  cursor: pointer;
}

.segmentIcon {
  width: 307px;
  max-height: 100%;
  object-fit: cover;
}

.container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10) 9px;
}

.segmentContainer {
  width: 182px;
  height: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  color: var(--color-white);
  border-radius: 31.5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  background-color: var(--color-cadetblue-200);
}

.frameParent {
  width: 411px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-20) 0px;
  box-sizing: border-box;
  gap: var(--gap-11);
  max-width: 100%;
}

.segmentParent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 3px;
  max-width: 100%;
}

.yanPanel {
  height: 341px;
  width: 765px;
  border-radius: 52px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 17px var(--padding-14);
  box-sizing: border-box;
  max-width: 100%;
}

.story {
  margin-top: -10px;
  margin-left: -10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-11);
  flex-shrink: 0;
  max-width: 101%;
  text-align: left;
  font-size: var(--font-size-18);
  color: var(--color-black);
  font-family: var(--font-gensenrounded2-tw);
}

.e1 {
  width: 100%;
  height: 341px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
}

@media screen and (max-width: 2225px) {
  .story {
    flex-wrap: wrap;
  }

  .e1 {
    height: auto;
  }
}

@media screen and (max-width: 1625px) {
  .story {
    flex-wrap: wrap;
  }

  .e1 {
    height: auto;
  }
}

@media screen and (max-width: 1410px) {
  .story {
    flex-wrap: wrap;
  }

  .e1 {
    height: auto;
  }
}

@media screen and (max-width: 1325px) {
  .xuanPanel {
    min-width: 100%;
  }

  .xiaoYanEvent {
    min-width: 100%;
  }

  .story {
    flex-wrap: wrap;
  }

  .e1 {
    height: auto;
  }
}

@media screen and (max-width: 1150px) {
  .xuanEventIcon {
    flex: 1;
  }

  .xuanPanel {
    flex: 1;
  }

  .xuanInfo {
    flex-wrap: wrap;
  }

  .eventIcon {
    flex: 1;
  }

  .xiaoYanEvent {
    flex: 1;
  }

  .narrative {
    flex-wrap: wrap;
  }

  .frame2 {
    height: auto;
  }

  .segmentIcon {
    flex: 1;
  }

  .frameParent {
    flex: 1;
    min-width: 100%;
  }

  .segmentParent {
    flex-wrap: wrap;
  }

  .yanPanel {
    height: auto;
  }

  .story {
    flex-wrap: wrap;
  }

  .e1 {
    height: auto;
  }
}

@media screen and (max-width: 1000px) {
  .xuanEventIcon {
    flex: 1;
  }

  .xuanPanel {
    flex: 1;
  }

  .xuanInfo {
    flex-wrap: wrap;
  }

  .eventIcon {
    flex: 1;
  }

  .xiaoYanEvent {
    flex: 1;
  }

  .narrative {
    flex-wrap: wrap;
  }

  .frame2 {
    height: auto;
  }

  .segmentIcon {
    flex: 1;
  }

  .frameParent {
    flex: 1;
    min-width: 100%;
  }

  .segmentParent {
    flex-wrap: wrap;
  }

  .yanPanel {
    height: auto;
  }

  .story {
    flex-wrap: wrap;
  }

  .e1 {
    height: auto;
  }

  .frame2 {
    width: 80vw;
    padding: 10px;
  }
}

@media screen and (max-width: 825px) {
  .xuanEventIcon {
    flex: 1;
  }

  .xuanPanel {
    flex: 1;
  }

  .xuanInfo {
    flex-wrap: wrap;
  }

  .eventIcon {
    flex: 1;
  }

  .xiaoYanEvent {
    flex: 1;
  }

  .narrative {
    flex-wrap: wrap;
  }

  .frame2 {
    height: auto;
  }

  .segmentIcon {
    flex: 1;
  }

  .frameParent {
    flex: 1;
    min-width: 100%;
  }

  .segmentParent {
    flex-wrap: wrap;
  }

  .yanPanel {
    height: auto;
  }

  .story {
    flex-wrap: wrap;
  }

  .e1 {
    height: auto;
  }
}

@media screen and (max-width: 750px) {
  .story {
    flex-wrap: wrap;
  }

  .e1 {
    height: auto;
  }
}

@media screen and (max-width: 600px) {
  .arrowIcon {
    width: 35px;
  }

  .frame2 {
    width: 80vw;
    padding: 10px;
  }
}

@media screen and (max-width: 400px) {
  .arrowIcon {
    width: 26px;
  }

  .frame2 {
    width: 80vw;
    padding: 10px;
  }
}

/* --- Force single-row carousel-style layout (no wrapping), center the row --- */
.story {
  flex-wrap: nowrap;
  justify-content: center;
  overflow: visible;
}

.xuanPanel,
.xiaoYanEvent {
  min-width: auto !important;
}

/* Center the story section inside the root container */
.e1 {
  justify-content: center;
}

/* Cancel left offset so the section can be truly centered */
.story {
  margin-left: 0 !important;
}

/* slide transitions */
:global(.slide-left-enter-active),
:global(.slide-left-leave-active),
:global(.slide-right-enter-active),
:global(.slide-right-leave-active) {
  transition: transform 300ms ease, opacity 300ms ease;
}

:global(.slide-left-enter-from),
:global(.slide-right-leave-to) {
  transform: translateX(30px);
  opacity: 0;
}

:global(.slide-left-leave-to),
:global(.slide-right-enter-from) {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
