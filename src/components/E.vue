<template>
  <main :class="$style.e">
    <!-- <div :class="$style.frameParent">
      <img :class="$style.frameChild" alt="" src="/white_wave.png" />
      <div :class="$style.layer252Wrapper">
        <img :class="$style.layer252Icon" loading="lazy" alt="" src="/--0002-layer25-2@2x.png" />
      </div>
    </div> -->
    <div :class="$style.waveFrame">
      <picture>
        <source srcset="/wave-frame-m.png" media="(max-width: 600px)">
        <img src="/wave-frame.png" alt="Wave Frame">
      </picture>
    </div>
    <div :class="$style.offersParent">
      <div :class="$style.insidePlanWrapper">
        <div :class="$style.insidePlan">
          <div :class="$style.vectorParent">
            <img :class="$style.frameItem" alt="" src="/rectangle-20.svg" />
            <div :class="$style.frame">
              <div :class="$style.innerComponent">
                <h2 :class="$style.h2">捐款方案介紹</h2>
              </div>
              <div :class="$style.layoutBlock">
                <section :class="$style.planLayout">
                  <div :class="$style.blockColumn">
                    <div :class="$style.planLayoutBlock">
                      <img :class="$style.icon" loading="lazy" alt="" src="/--0001@2x.png" />
                    </div>
                    <div :class="$style.paymentProcess">
                      <h2 :class="$style.h21">單次捐款</h2>
                    </div>
                  </div>
                  <!-- 1000元單次捐款卡片 -->
                  <div :class="[$style.offerParameters, $style.clickableCard]" @click="handleDonation(1000, 'A')">
                    <picture>
                      <source srcset="/donateBtn/1000.png" media="(max-width: 1000px)" />
                      <img alt="1000元捐款" src="/donateBtn/1000.png" style="width:100%;height:auto;display:block;" />
                    </picture>
                  </div>
                  <!-- 3000元單次捐款卡片 -->
                  <div :class="[$style.offerParameters, $style.clickableCard]" @click="handleDonation(3000, 'A')">
                    <picture>
                      <source srcset="/donateBtn/3000.png" media="(max-width: 1000px)" />
                      <img alt="3000元捐款" src="/donateBtn/3000.png" style="width:100%;height:auto;display:block;" />
                    </picture>
                  </div>
                </section>
                <section :class="$style.planLayout">
                  <div :class="$style.blockColumn">
                    <div :class="$style.planLayoutBlock">
                      <img :class="$style.icon1" loading="lazy" alt="" src="/--0000@2x.png" />
                    </div>
                    <div :class="$style.paymentProcess">
                      <h2 :class="$style.h21">定期捐款</h2>
                    </div>
                  </div>
                  <!-- 600元定期捐款卡片 -->
                  <div :class="[$style.offerParameters, $style.clickableCard]" @click="handleDonation(600, 'B')">
                    <picture>
                      <source srcset="/donateBtn/600.png" media="(max-width: 1000px)" />
                      <img alt="600元定期捐款" src="/donateBtn/600.png" style="width:100%;height:auto;display:block;" />
                    </picture>
                  </div>
                  <!-- 1500元定期捐款卡片 -->
                  <div :class="[$style.offerParameters, $style.clickableCard]" @click="handleDonation(1500, 'B')">
                    <picture>
                      <source srcset="/donateBtn/1500.png" media="(max-width: 1000px)" />
                      <img alt="1500元定期捐款" src="/donateBtn/1500.png" style="width:100%;height:auto;display:block;" />
                    </picture>
                  </div>
                </section>
              </div>
              <!-- 自由捐款卡片 -->
              <section :class="$style.blockRowWrapper">
                <div :class="$style.blockRow">
                  <div :class="$style.internalOfferWrapper">
                    <div :class="$style.freeDonateCard">
                      <a :class="$style.donateCta" href="https://lihi.cc/Iz8Pc" target="_blank"
                        rel="noopener noreferrer">
                        <span :class="$style.donateCtaText">立即捐款</span>
                        <span :class="$style.donateCtaIconWrap">
                          <img :class="$style.iconDefault" src="/donateBtn/btn-icon.png" alt="donate icon" />
                          <img :class="$style.iconHover" src="/donateBtn/btn-icon-hover.png" alt="donate icon hover" />
                        </span>
                      </a>
                    </div>
                    <a :class="$style.qaLink" href="https://lihi.cc/MzRnf" target="_blank"
                      rel="noopener noreferrer">捐款Ｑ＆Ａ</a>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div :class="$style.detailsOuter">
            <div :class="$style.outerView">
              <h2 :class="$style.h23">回饋品介紹<small>回饋品贈完為止</small></h2>
              <div :class="$style.projectPublications">
                <section :class="$style.releaseData">
                  <img :class="$style.giftImg" loading="lazy" alt="" src="/-1-1@2x.png" />
                  <div :class="$style.container">
                    <h3 :class="$style.h31">服務年刊</h3>
                    <div :class="$style.div6">
                      <p :class="$style.p">每年一次的服務成果分享，看見陪伴與成長。</p>
                    </div>
                  </div>
                </section>
                <section :class="$style.releaseData">
                  <img :class="$style.giftImg" loading="lazy" alt="" src="/dscf5791@2x.png" />
                  <div :class="$style.container">
                    <h3 :class="$style.h31">鬧卡</h3>
                    <div :class="$style.div6">
                      <p :class="$style.p">兒福聯盟以情緒教育為核心設計，透過插畫與情境文字，引導覺察感受、調節情緒，穩定自己，也理解他人！</p>
                    </div>
                  </div>
                </section>
                <section :class="$style.releaseData">
                  <img :class="$style.giftImg" loading="lazy" alt="" src="/-1-11@2x.png" />
                  <div :class="$style.container">
                    <h3 :class="$style.h31">療癒香氛蠟燭</h3>
                    <div :class="$style.div6">
                      <p :class="$style.p">
                        兒盟秉持先照顧好自己，才有能量照顧好他人的理念，邀請您用氣味療癒紓壓，擁抱自己的內心感受。</p>
                    </div>
                  </div>
                </section>
                <section :class="$style.releaseData">
                  <img :class="$style.giftImg" loading="lazy" alt="" src="/all-2@2x.png" />
                  <div :class="$style.container">
                    <h3 :class="$style.h31">兒福聯盟 × plain-me水桶包</h3>
                    <div :class="$style.div6">
                      <p :class="$style.p">心情不好的時候就背起包包出門走走吧，一切都會慢慢好起來的。(顏色將隨機出貨)</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.externalBottomParent">
        <div :class="$style.externalBottom">
          <h2 :class="$style.h2">更多個案故事</h2>
        </div>
        <div :class="$style.casesNavigateWrapper">
          <E111 />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, computed } from 'vue'
import E111 from "../pages/E111.vue"
import { submitDonation, validateDonationAmount } from '../services/donationService'
import { API_CONFIG, ERROR_MESSAGES, SUCCESS_MESSAGES } from '../config/api.js'

// 響應式數據
const customAmount = ref('')
const isLoading = ref(false)

// 計算屬性
const isValidCustomAmount = computed(() => {
  if (!customAmount.value) return false
  const validation = validateDonationAmount(customAmount.value)
  return validation.valid
})

// 錯誤訊息
const errorMessage = ref('')

// 處理固定金額捐款
const handleDonation = async (amount, kind) => {
  return;
  // 先關閉捐款功能

  if (isLoading.value) return

  try {
    isLoading.value = true
    errorMessage.value = ''
    console.log(`開始處理${amount}元, donate_kind = ${kind}`)

    const result = await submitDonation({
      donate_amount: amount,
      donate_kind: kind
    })

    console.log('捐款表單已提交:', result)

  } catch (error) {
    console.error('捐款失敗:', error)
    errorMessage.value = ERROR_MESSAGES.UNKNOWN_ERROR
  } finally {
    isLoading.value = false
  }
}

// 處理自定義金額捐款
const handleCustomDonation = async () => {
  if (!isValidCustomAmount.value || isLoading.value) return

  try {
    isLoading.value = true
    errorMessage.value = ''
    const amount = parseInt(customAmount.value)
    console.log(`開始處理自定義金額${amount}元捐款`)

    const result = await submitDonation({
      donate_amount: 0, // 自由捐款使用custom_amount
      donate_kind: "A", // 自由捐款預設為單次
      custom_amount: amount
    })

    console.log('自由捐款表單已提交:', result)
    // 表單已提交，頁面將跳轉到捐款系統
    customAmount.value = '' // 清空輸入框

  } catch (error) {
    console.error('自由捐款失敗:', error)
    errorMessage.value = ERROR_MESSAGES.UNKNOWN_ERROR
  } finally {
    isLoading.value = false
  }
}
</script>
<style module>
.frameChild {
  width: 100%;
  margin: 0 !important;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 0;
}

.layer252Icon {
  width: 100%;
  max-width: 434px;
  position: relative;
  max-height: 100%;
  object-fit: contain;
}

.layer252Wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-10);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
}

.frameParent {
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 181px;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  margin: 0 auto;
  z-index: 2;
  background-color: #C0EB77;
}

.offersChild {
  height: 2131px;
  width: 1440px;
  position: relative;
  background: linear-gradient(180deg, #c0eb77, #f0ffc3 98.56%);
  display: none;
}

.offers {
  width: 100%;
  margin: 0 !important;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  background: linear-gradient(180deg, #c0eb77, #f0ffc3 98.56%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10);
  box-sizing: border-box;
  z-index: 0;
}

.offers1 {
  width: 100%;
  height: 50%;
  margin: 0 !important;
  position: absolute;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(180deg, #dafeff, #b9f9fb);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10);
  box-sizing: border-box;
  z-index: 0;
}

.offerItemIcon {
  width: 100%;
  margin: 0 !important;
  position: absolute;
  left: -10px;
  top: -10%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 2;
}

.frameItem {
  height: 1224px;
  width: 1124px;
  position: relative;
  border-radius: 38px;
  display: none;
  z-index: 0;
}

.h2 {
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.09em;
  line-height: 157.24%;
  text-transform: uppercase;
  font-weight: 400;
  font-family: inherit;
}

.innerComponent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 67px 0 67px 0;
}

.icon {
  width: 132px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
}

.donateScheme {
  width: 152px;
  margin: 0 !important;
  position: absolute;
  top: -9.9px;
  left: 11px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10);
  box-sizing: border-box;
  z-index: 0;
}

.h21 {
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.09em;
  line-height: 157.24%;
  text-transform: uppercase;
  font-weight: 400;
  font-family: inherit;
}

.paymentSign {
  margin: 0 !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10) var(--padding-8);
  box-sizing: border-box;
  z-index: 1;
}

.singlePledge {
  width: 100%;
  max-width: 233px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-10);
  text-align: center;
  font-size: var(--font-size-32);
  color: var(--color-cadetblue-200);
}

.p {
  margin: 0;
}

.txt {
  line-break: anywhere;
  width: 100%;
}

.div {
  height: 86.7px;
  width: 342px;
  position: absolute;
  margin: 0 !important;
  top: 24.4px;
  left: calc(50% - 135px);
  letter-spacing: 0.04em;
  line-height: 114%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  z-index: 0;
}

.span {
  font-size: var(--font-size-20);
  white-space: pre-wrap;
}

.txt1 {
  width: 100%;
}

.div1 {
  height: 51px;
  width: 342px;
  position: absolute;
  margin: 0 !important;
  top: 1px;
  left: calc(50% - 135px);
  letter-spacing: 0.04em;
  line-height: 157.24%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  z-index: 1;
  font-size: var(--font-size-24);
}

.plainMe {
  width: 265px;
  position: relative;
  font-size: var(--font-size-16);
  letter-spacing: 0.04em;
  line-height: 157.24%;
  text-transform: lowercase;
  color: var(--color-cadetblue-200);
  display: flex;
  align-items: center;
  z-index: 2;
}

.parent {
  height: 133px;
  width: 270px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 87.7px 0px 0px;
  box-sizing: border-box;
  position: relative;
}

.frameInner {
  width: 96px;
  max-height: 100%;
}

.frameGroup {
  width: 372px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.offerParameters {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.planSpecification {
  width: 100%;
  max-width: 418px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 23px;
  text-align: left;
  font-size: var(--font-size-20);
  color: var(--color-cadetblue-300);
  font-family: var(--font-gensenrounded2-tw);
}

.paymentProcess {
  margin: 0 !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10) var(--padding-8);
  z-index: 0;
}

.icon1 {
  width: 193px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
}

.planLayoutBlock {
  width: 100%;
  margin: 0 !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10);
  box-sizing: border-box;
  z-index: 1;
}

.blockColumn {
  width: 100%;
  max-width: 233px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-10);
}

.div2 {
  align-self: stretch;
  position: relative;
  letter-spacing: 0.04em;
  line-height: 157.24%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

.h3 {
  margin: 0;
  align-self: stretch;
  height: 31.6px;
  position: relative;
  font-size: var(--font-size-20);
  letter-spacing: 0.04em;
  line-height: 157.24%;
  text-transform: uppercase;
  font-weight: 400;
  font-family: inherit;
  display: flex;
  align-items: center;
}

.div3 {
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-16);
  letter-spacing: 0.04em;
  line-height: 157.24%;
  text-transform: uppercase;
  color: var(--color-cadetblue-200);
  display: flex;
  align-items: center;
}

.counselorProvision {
  height: 133px;
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.offerFeatures {
  width: 372px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.planLayout {
  width: 100%;
  max-width: 418px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 23px;
  text-align: center;
  font-size: var(--font-size-32);
  color: var(--color-cadetblue-200);
  font-family: var(--font-gensenrounded2-tw);
}

.layoutBlock {
  width: 100%;
  max-width: 911px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 40px;
  margin: 0 auto;
  padding: 0 20px;
}

.icon2 {
  width: 67px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
}

.offeringsElement {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10);
}

.div4 {
  align-self: stretch;
  position: relative;
  letter-spacing: 0.04em;
  line-height: 157.24%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

.paymentDonation {
  width: 228px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.internalOffer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12);
}

.internalOfferWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Free donate image card with centered input overlay */
.freeDonateCard {
  position: relative;
  width: 100%;
  max-width: 535px;
}

/* CTA button for free donate */
.donateCta {
  width: 389px;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: #E47F44;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 70px;
  text-decoration: none;
  font-size: 32px;
  font-weight: 700;
  font-family: var(--font-gensenrounded2-tw);
  box-shadow: 0 8px 16px rgba(228, 127, 68, 0.35), 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  padding: 0 28px;
}

.donateCta:hover {
  background-color: #ffffff;
  color: #E47F44;
  border-color: #E47F44;
  box-shadow: 0 12px 22px rgba(228, 127, 68, 0.45), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.donateCta:active {
  transform: translateY(1px);
  box-shadow: 0 4px 8px rgba(228, 127, 68, 0.30), 0 2px 4px rgba(0, 0, 0, 0.06) inset;
}

.donateCtaText {
  line-height: 1;
}

.donateCtaIconWrap {
  position: relative;
  width: 76px;
  height: 76px;
  display: inline-block;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25));
  transition: filter 0.2s ease;
}

.donateCta:hover .donateCtaIconWrap {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.28));
}

.donateCta:active .donateCtaIconWrap {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.22));
}

.donateCtaIconWrap img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.15s ease;
}

/* Default icon visible; swap on hover */
.iconDefault {
  opacity: 1;
}

.iconHover {
  opacity: 0;
}

.donateCta:hover .iconDefault {
  opacity: 0;
}

.donateCta:hover .iconHover {
  opacity: 1;
}

.freeDonateImage {
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 70px;
  transform-origin: center center;
}

.freeDonateImage:hover img {
  transform: translateY(-2px);
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
  border-radius: 70px;
}

.freeDonateImage:active img {
  transform: translateY(0);
}

.freeInput {
  position: absolute;
  top: 35%;
  left: 53%;
  transform: translate(-50%, -50%);
  width: 30%;
  background: transparent;
  border: none;
  outline: none;
  text-align: center;
  font-size: var(--font-size-24);
  color: var(--color-cadetblue-300);
  font-family: var(--font-gensenrounded2-tw);

  display: none;
}

@media screen and (max-width: 768px) {
  .freeInput {
    width: 70%;
    font-size: var(--font-size-18);
  }
}

@media screen and (max-width: 480px) {
  .freeInput {
    width: 75%;
    font-size: var(--font-size-16);
  }
}

.blockRow {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.blockRowWrapper {
  width: 100%;
  max-width: 535px;
  height: auto;
  min-height: 338px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-60) 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-24);
  color: var(--color-cadetblue-300);
  font-family: var(--font-gensenrounded2-tw);
  margin: 0 auto;
}

.frame {
  width: 100%;
  max-width: 1124px;
  margin: 0 !important;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.vectorParent {
  align-self: stretch;
  border-radius: 38px 38px 0px 0px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: var(--gap-10);
}

.h23 {
  margin: 0;
  align-self: stretch;
  height: 224px;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.09em;
  line-height: 130%;
  text-transform: uppercase;
  font-weight: 400;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.h23 small {
  display: block;
  font-size: 0.3em;
  font-weight: normal;
  color: #666;
  margin-top: 0.1em;
}

.giftImg {
  width: 269px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.h31 {
  position: relative;
  align-self: stretch;
  font-size: var(--font-size-20);
  letter-spacing: 0.04em;
  line-height: 190%;
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
  color: var(--color-black);
}

.div6 {
  position: relative;
  align-self: stretch;
  font-size: inherit;
  letter-spacing: 0.04em;
  line-height: inherit;
  font-weight: inherit;
  font-size: 16px;
  text-transform: uppercase;
}

.productDesign {
  width: 249px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-20) 0px;
  box-sizing: border-box;
  gap: var(--gap-20);
}

.giftImg {
  width: 269px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.group {
  width: 353px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-19);
  max-width: 100%;
}

.releaseData {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 62px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-24);
  color: var(--color-dimgray);
  font-family: var(--font-gensenrounded2-tw);
}

.container {
  width: 374px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-19);
  max-width: 100%;
}

.plainMe1 {
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  font-weight: 400;
  font-family: inherit;
}

.plainMeParent {
  width: 374px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-20) 0px;
  box-sizing: border-box;
  gap: var(--gap-20);
  max-width: 100%;
}

.projectPublications {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 41px;
  max-width: 100%;
  color: black;
}

.outerView {
  width: 100%;
  max-width: 705px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
}

.detailsOuter {
  align-self: stretch;
  height: auto;
  min-height: 1326px;
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  position: relative;
  color: var(--color-dimgray);
}

.insidePlan {
  width: 1124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
}

.insidePlanWrapper {
  width: 100%;
  max-width: 1412px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-20);
  box-sizing: border-box;
  margin: 0 auto;
}

.externalBottom {
  width: 276px;
  height: 292px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.casesNavigate {
  width: 1400px;
  height: 341px;
  position: relative;
  background-color: var(--color-gainsboro-100);
}

.casesNavigateWrapper {
  width: 1440px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* clip outer overflow so side cards can cut off */
}

.externalBottomParent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
}

.offersParent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 200px;
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-100);
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  background-image: url('/gb-wave-background.png');
  background-size: 101% calc(100% + 50px);
  background-position: center;
  background-repeat: no-repeat;
}

.e {
  align-self: stretch;
  background-color: var(--color-white);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-36);
  color: var(--color-cadetblue-200);
  font-family: var(--font-gensenrounded2-tw);
}

/* 新增樣式 */
.clickableCard img {
  /* cursor: pointer; */
  transition: all 0.3s ease;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3); */
  /* border: 1px solid #56A3B0; */
  /* border-radius: 18px; */
  transform-origin: center center;
}

/* .clickableCard:hover img {
  transform: translateY(-2px);
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
}

.clickableCard:active img {
  transform: translateY(0);
} */

.customAmountInput {
  width: 120px;
  padding: 8px 12px;
  margin: 0 8px;
  border: 2px solid var(--color-cadetblue-100);
  border-radius: 8px;
  font-size: var(--font-size-20);
  text-align: center;
  background-color: var(--color-white);
  color: var(--color-cadetblue-300);
  font-family: var(--font-gensenrounded2-tw);
}

.customAmountInput:focus {
  outline: none;
  border-color: var(--color-cadetblue-200);
  box-shadow: 0 0 0 2px rgba(95, 158, 160, 0.2);
}

.customAmountInput::placeholder {
  color: var(--color-cadetblue-100);
}

.donateButton {
  margin-top: 12px;
  padding: 10px 20px;
  background-color: var(--color-cadetblue-200);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  font-size: var(--font-size-16);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-gensenrounded2-tw);
}

.donateButton:hover:not(:disabled) {
  background-color: var(--color-cadetblue-300);
  transform: translateY(-1px);
}

.donateButton:disabled {
  background-color: var(--color-cadetblue-100);
  cursor: not-allowed;
  opacity: 0.6;
}

.donateButton:active:not(:disabled) {
  transform: translateY(0);
}

.errorMessage {
  color: #e74c3c;
  font-size: var(--font-size-14);
  margin-top: 8px;
  text-align: center;
  font-family: var(--font-gensenrounded2-tw);
}

.waveFrame {
  width: 100%;
  background: linear-gradient(180deg, #00000000 49%, #C0EB77 50%, #C0EB77 100%);
}

.waveFrame img {
  width: 101%;
  height: auto;
  display: block;
}

.qaLink {
  font-weight: 600;
  font-size: 20px;
  color: #838383;
  text-decoration: underline;
  margin: 30px 0;
}

.qaLink:hover {
  text-decoration: none;
}

/* 響應式設計 */
@media screen and (max-width: 1200px) {
  .frameParent {
    width: 100%;
    padding: 0px 100px;
  }

  .offersParent {
    padding: 100px 20px;
    gap: var(--gap-50);
  }

  .insidePlanWrapper {
    width: 100%;
    padding: 0px 40px;
  }

  .insidePlan {
    width: 100%;
    max-width: 1000px;
  }

  .frame {
    width: 100%;
  }

  .vectorParent {
    width: 100%;
  }

  .layoutBlock {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .planSpecification,
  .planLayout {
    width: 100%;
    max-width: 600px;
  }

  .blockRowWrapper {
    width: 100%;
    max-width: 600px;
  }

  .detailsOuter {
    padding: var(--padding-28) 60px;
  }

  .outerView {
    width: 100%;
    max-width: 800px;
  }

  .projectPublications {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .releaseData {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }

  .giftImg {
    width: 80%;
    border-radius: 66.5px;
    overflow: hidden;
  }

  .productDesign,
  .group,
  .container,
  .plainMeParent {
    width: 100%;
    text-align: center;
    align-items: center;
  }

  .freeInput {
    left: 51%;
  }
}

@media screen and (max-width: 1000px) {
  /* .clickableCard img {
    border-radius: 45px;
  }

  .clickableCard:hover img {
    border-radius: 45px;
  } */

  .freeDonateImage {
    border-radius: 11px;
  }

  .freeDonateImage:hover img {
    border-radius: 11px;
  }
}

@media screen and (max-width: 768px) {
  .donateCta {
    width: 193px;
    height: 60px;
    font-size: 20px;
    gap: 10px;
    padding: 0 16px;
  }

  .donateCtaIconWrap {
    width: 28px;
    height: 28px;
  }

  .frameParent {
    padding: 0px 20px;
  }

  .offersParent {
    padding: 100px 20px;
    gap: var(--gap-50);
  }

  .insidePlanWrapper {
    padding: 0px 20px;
  }

  .h2,
  .h21,
  .h23 {
    font-size: var(--font-size-28);
  }

  .h3,
  .h31 {
    font-size: var(--font-size-18);
  }

  .p {
    font-size: var(--font-size-14);
  }

  .div6 {
    font-size: var(--font-size-14);
  }

  .layoutBlock {
    gap: 30px;
  }

  .planSpecification,
  .planLayout {
    gap: 20px;
  }

  .singlePledge,
  .blockColumn {
    width: 100%;
    height: auto;
    padding: 20px;
  }

  .donateScheme,
  .paymentSign,
  .paymentProcess,
  .planLayoutBlock {
    position: relative;
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }

  .icon,
  .icon1 {
    width: 80px;
  }

  .offerParameters {
    width: 100%;
    height: auto;
    padding: 20px;
  }

  .frameGroup,
  .offerFeatures {
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 15px;
  }

  .parent,
  .counselorProvision {
    width: 100%;
    height: auto;
    padding: 0;
  }

  .div,
  .div1,
  .div2 {
    position: relative;
    width: 100%;
    text-align: center;
    margin: 5px 0;
  }

  .frameInner {
    width: 60px;
  }

  .blockRowWrapper {
    height: auto;
    padding: 30px 20px;
  }

  .internalOffer {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .offeringsElement {
    justify-content: center;
  }

  .icon2 {
    width: 50px;
  }

  .paymentDonation {
    width: 100%;
    align-items: center;
  }

  .div4 {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .customAmountInput {
    width: 120px;
    font-size: var(--font-size-16);
  }

  .donateButton {
    width: 100%;
    max-width: 200px;
    padding: 12px 20px;
    font-size: var(--font-size-16);
  }

  .detailsOuter {
    padding: var(--padding-28) 20px;
    height: auto;
  }

  .h23 {
    height: auto;
    padding: 20px 0 60px;
  }

  .projectPublications {
    gap: 30px;
    align-items: center;
    justify-content: center;
  }

  .releaseData {
    gap: 20px;
  }

  .giftImg {
    width: 80%;
    border-radius: 66.5px;
    overflow: hidden;
  }

  .productDesign,
  .group,
  .container,
  .plainMeParent {
    padding: 15px 0;
    gap: var(--gap-15);
  }
}

@media screen and (max-width: 450px) {
  .frameParent {
    padding: 0px 10px;
  }

  .offersParent {
    padding: 60px 10px;
  }

  .insidePlanWrapper {
    padding: 0px 10px;
  }

  .h2,
  .h21,
  .h23 {
    font-size: var(--font-size-24);
  }

  .h3,
  .h31 {
    font-size: var(--font-size-16);
  }

  .p {
    font-size: var(--font-size-10);
  }

  .div6 {
    font-size: var(--font-size-10);
  }

  .layoutBlock {
    gap: 20px;
  }

  .planSpecification,
  .planLayout {
    gap: 15px;
  }

  .singlePledge,
  .blockColumn {
    padding: 15px;
  }

  .icon,
  .icon1 {
    width: 60px;
  }

  .offerParameters {
    padding: 15px;
  }

  .frameGroup,
  .offerFeatures {
    gap: 10px;
  }

  .frameInner {
    width: 50px;
  }

  .blockRowWrapper {
    padding: 20px 15px;
  }

  .internalOffer {
    gap: 15px;
  }

  .icon2 {
    width: 40px;
  }

  .div4 {
    gap: 8px;
  }

  .customAmountInput {
    width: 100px;
    font-size: var(--font-size-14);
    padding: 6px 8px;
  }

  .donateButton {
    padding: 10px 16px;
    font-size: var(--font-size-14);
  }

  .detailsOuter {
    padding: var(--padding-28) 10px;
  }

  .projectPublications {
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  .releaseData {
    gap: 15px;
  }

  .giftImg {
    width: 80%;
    border-radius: 66.5px;
    overflow: hidden;
  }

  .productDesign,
  .group,
  .container,
  .plainMeParent {
    padding: 10px 0;
    gap: var(--gap-10);
  }

  .qaLink {
    font-size: 14px;
    margin: 20px 0;
  }
}

@media screen and (max-width: 360px) {

  .h2,
  .h21,
  .h23 {
    font-size: var(--font-size-20);
  }

  .h3,
  .h31 {
    font-size: var(--font-size-14);
  }

  .p {
    font-size: var(--font-size-8);
  }

  .div6 {
    font-size: var(--font-size-8);
  }

  .customAmountInput {
    width: 80px;
    font-size: var(--font-size-12);
    margin: 0 4px;
  }

  .donateButton {
    padding: 8px 12px;
    font-size: var(--font-size-12);
  }

  .giftImg {
    width: 80%;
    border-radius: 66.5px;
    overflow: hidden;
  }
}

/* 高解析度螢幕適配 */
@media screen and (min-width: 1920px) {
  .frameParent {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  .insidePlanWrapper {
    width: 100%;
    max-width: 1400px;
  }

  .insidePlan {
    width: 100%;
    max-width: 1200px;
  }

  .h2,
  .h21,
  .h23 {
    font-size: var(--font-size-42);
  }

  .h3,
  .h31 {
    font-size: var(--font-size-24);
  }

  .p {
    font-size: var(--font-size-16);
  }

  .div6 {
    font-size: var(--font-size-16);
  }
}
</style>
