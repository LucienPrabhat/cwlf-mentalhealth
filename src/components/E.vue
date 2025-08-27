<template>
  <main :class="$style.e">
    <div :class="$style.frameParent">
      <img :class="$style.frameChild" alt="" src="/white_wave.png" />
      <div :class="$style.layer252Wrapper">
        <img :class="$style.layer252Icon" loading="lazy" alt="" src="/--0002-layer25-2@2x.png" />
      </div>
    </div>
    <div :class="$style.offersParent">
      <div :class="$style.offers1">
        <div>
          <img :class="$style.offerItemIcon" alt="" src="/offer-item.svg" />
        </div>
      </div>
      <div :class="$style.insidePlanWrapper">
        <div :class="$style.insidePlan">
          <div :class="$style.vectorParent">
            <img :class="$style.frameItem" alt="" src="/rectangle-20.svg" />
            <div :class="$style.frame">
              <div :class="$style.innerComponent">
                <h2 :class="$style.h2">捐款方案介紹</h2>
              </div>
              <div :class="$style.layoutBlock">
                <section :class="$style.planSpecification">
                  <div :class="$style.singlePledge">
                    <div :class="$style.donateScheme">
                      <img :class="$style.icon" loading="lazy" alt="" src="/--0001@2x.png" />
                    </div>
                    <div :class="$style.paymentSign">
                      <h2 :class="$style.h21">單次捐款</h2>
                    </div>
                  </div>
                  <!-- 1000元單次捐款卡片 -->
                  <div :class="[$style.offerParameters, $style.clickableCard]" @click="handleDonation(1000, 'A')">
                    <div :class="$style.frameGroup">
                      <div :class="$style.parent">
                        <div :class="$style.div">
                          <span :class="$style.txt">
                            <p :class="$style.p">資助孩子一次心理諮商</p>
                            <p :class="$style.p">費</p>
                          </span>
                        </div>
                        <div :class="$style.div1">
                          <span :class="$style.txt1">
                            <span>1000元</span>
                            <span :class="$style.span"></span>
                          </span>
                        </div>
                        <div :class="$style.plainMe">
                          回饋品｜年刊、鬧卡
                        </div>
                      </div>
                      <img :class="$style.frameInner" loading="lazy" alt="" src="/frame-110.svg" />
                    </div>
                  </div>
                  <!-- 3000元單次捐款卡片 -->
                  <div :class="[$style.offerParameters, $style.clickableCard]" @click="handleDonation(3000, 'A')">
                    <div :class="$style.frameGroup">
                      <div :class="$style.parent">
                        <div :class="$style.div">
                          <span :class="$style.txt">
                            <p :class="$style.p">支持社工長期訪視陪伴，</p>
                            <p :class="$style.p">多接住一位受創兒少</p>
                          </span>
                        </div>
                        <div :class="$style.div1">
                          <span :class="$style.txt1">
                            <span>3000元</span>
                            <span :class="$style.span"></span>
                          </span>
                        </div>
                        <div :class="$style.plainMe">
                          回饋品｜年刊、plain-me水桶包
                        </div>
                      </div>
                      <img :class="$style.frameInner" loading="lazy" alt="" src="/frame-114.svg" />
                    </div>
                  </div>
                </section>
                <section :class="$style.planLayout">
                  <div :class="$style.blockColumn">
                    <div :class="$style.paymentProcess">
                      <h2 :class="$style.h21">定期捐款</h2>
                    </div>
                    <div :class="$style.planLayoutBlock">
                      <img :class="$style.icon1" loading="lazy" alt="" src="/--0000@2x.png" />
                    </div>
                  </div>
                  <!-- 600元定期捐款卡片 -->
                  <div :class="[$style.childParameter, $style.clickableCard]" @click="handleDonation(600, 'B')">
                    <div :class="$style.offerFeatures">
                      <div :class="$style.counselorProvision">
                        <div :class="$style.div2">
                          <span>
                            <span>600元</span>
                            <span :class="$style.span"></span>
                          </span>
                        </div>
                        <h3 :class="$style.h3">支持兒少心理健康與陪伴服務</h3>
                        <div :class="$style.div3">回饋品｜年刊、鬧卡</div>
                      </div>
                      <img :class="$style.frameInner" loading="lazy" alt="" src="/frame-110.svg" />
                    </div>
                  </div>
                  <!-- 1500元定期捐款卡片 -->
                  <div :class="[$style.childParameter, $style.clickableCard]" @click="handleDonation(1500, 'B')">
                    <div :class="$style.offerFeatures">
                      <div :class="$style.counselorProvision">
                        <div :class="$style.div2">
                          <span>
                            <span>1500元</span>
                            <span :class="$style.span"></span>
                          </span>
                        </div>
                        <h3 :class="$style.h3">支持兒少心理健康與陪伴服務</h3>
                        <div :class="$style.div3">回饋品｜年刊、療癒香氛蠟燭</div>
                      </div>
                      <img :class="$style.frameInner" loading="lazy" alt="" src="/frame-114.svg" />
                    </div>
                  </div>
                </section>
              </div>
              <!-- 自由捐款卡片 -->
              <section :class="$style.blockRowWrapper">
                <div :class="$style.blockRow">
                  <div :class="$style.internalOfferWrapper">
                    <div :class="$style.internalOffer">
                      <div :class="$style.offeringsElement">
                        <img :class="$style.icon2" alt="" src="/--0002@2x.png" />
                      </div>
                      <div :class="$style.paymentDonation">
                        <div :class="$style.div4">
                          <span>自由捐款</span>
                          <input v-model="customAmount" :class="$style.customAmountInput" type="number"
                            placeholder="請輸入金額" :min="100" @keyup.enter="handleCustomDonation"
                            @input="errorMessage = ''" />
                          <span>元</span>
                        </div>
                        <div :class="$style.div3">回饋品｜年刊</div>
                        <div v-if="errorMessage" :class="$style.errorMessage">
                          {{ errorMessage }}
                        </div>
                        <button :class="$style.donateButton" @click="handleCustomDonation"
                          :disabled="!isValidCustomAmount || isLoading">
                          {{ isLoading ? '處理中...' : '立即捐款' }}
                        </button>
                      </div>
                      <img :class="$style.frameInner" alt="" src="/gift-promotion.svg" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div :class="$style.detailsOuter">
            <div :class="$style.outerView">
              <h2 :class="$style.h23">回饋品介紹</h2>
              <div :class="$style.projectPublications">
                <section :class="$style.releaseData">
                  <img :class="$style.icon3" loading="lazy" alt="" src="/-1-1@2x.png" />
                  <div :class="$style.productDesign">
                    <h3 :class="$style.h31">服務年刊</h3>
                    <div :class="$style.div6">
                      <p :class="$style.p">每年一次的服務成果分享，看見陪伴與成長。</p>
                    </div>
                  </div>
                </section>
                <section :class="$style.releaseData1">
                  <img :class="$style.dscf5791Icon" loading="lazy" alt="" src="/dscf5791@2x.png" />
                  <div :class="$style.group">
                    <h3 :class="$style.h31">鬧卡</h3>
                    <div :class="$style.div6">
                      <p :class="$style.p">兒福聯盟以情緒教育為核心設計，透過插畫與情境文字，引導覺察感受、調節情緒，穩定自己，也理解他人！</p>
                    </div>
                  </div>
                </section>
                <section :class="$style.releaseData2">
                  <img :class="$style.dscf5791Icon" loading="lazy" alt="" src="/-1-11@2x.png" />
                  <div :class="$style.container">
                    <h3 :class="$style.h31">療癒香氛蠟燭</h3>
                    <div :class="$style.div6">
                      <p :class="$style.p">
                        兒盟秉持先照顧好自己，才有能量照顧好他人的理念，邀請您用氣味療癒紓壓，擁抱自己的內心感受。</p>
                    </div>
                  </div>
                </section>
                <section :class="$style.releaseData3">
                  <img :class="$style.dscf5791Icon" loading="lazy" alt="" src="/all-2@2x.png" />
                  <div :class="$style.plainMeParent">
                    <h3 :class="$style.plainMe1">兒福聯盟 × plain-me水桶包</h3>
                    <div :class="$style.div6">
                      <p :class="$style.p">心情不好的時候就背起包包出門走走吧，一切都會慢慢好起來的。</p>
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
import OfferParameters from "./OfferParameters.vue"
import E111 from "../pages/E111.vue"
import { submitDonation, validateDonationAmount } from '../services/donationService'
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../config/api.js'

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
  if (isLoading.value) return

  try {
    isLoading.value = true
    errorMessage.value = ''
    console.log(`開始處理${amount}元, donate_kind = ${kind}`)

    const result = await submitDonation({
      donate_amount: amount,
      donate_kind: kind
    })

    console.log('捐款成功:', result)
    // 這裡可以添加成功提示或跳轉到支付頁面
    alert(SUCCESS_MESSAGES.DONATION_SUCCESS(amount))

  } catch (error) {
    console.error('捐款失敗:', error)
    window.location.href = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.QUICK_DONATE}`
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

    console.log('自由捐款成功:', result)
    alert(SUCCESS_MESSAGES.CUSTOM_DONATION_SUCCESS(amount))
    customAmount.value = '' // 清空輸入框

  } catch (error) {
    console.error('自由捐款失敗:', error)
    errorMessage.value = ERROR_MESSAGES.UNKNOWN_ERROR
    window.location.href = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.QUICK_DONATE}`
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
  width: 434px;
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
  width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 181px;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  max-width: 100%;
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
  justify-content: flex-start;
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
  width: 157px;
  margin: 0 !important;
  position: absolute;
  top: 222.1px;
  left: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10) var(--padding-8);
  box-sizing: border-box;
  z-index: 1;
}

.singlePledge {
  width: 153px;
  height: 335px;
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
  height: 157px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-18);
  background-color: var(--color-gray);
  border: 1px solid var(--color-cadetblue-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-26) var(--padding-22);
}

.planSpecification {
  width: 418px;
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
  position: absolute;
  top: 267px;
  left: calc(50% - 78.5px);
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
  width: 213px;
  margin: 0 !important;
  position: absolute;
  top: -10px;
  left: calc(50% - 106.5px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10);
  box-sizing: border-box;
  z-index: 1;
}

.blockColumn {
  width: 233px;
  height: 335px;
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

.childParameter {
  align-self: stretch;
  height: 157px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-18);
  background-color: var(--color-gray);
  border: 1px solid var(--color-cadetblue-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--font-size-24);
  color: var(--color-cadetblue-300);
}

.planLayout {
  width: 429px;
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
  width: 911px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0px;
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

.blockRow {
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 69.5px;
  background-color: var(--color-gray);
  border: 1px solid var(--color-cadetblue-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.blockRowWrapper {
  width: 535px;
  height: 338px;
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
}

.frame {
  width: 1124px;
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
  line-height: 157.24%;
  text-transform: uppercase;
  font-weight: 400;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon3 {
  width: 269px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
}

.h31 {
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 400;
  font-family: inherit;
}

.div6 {
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-20);
  letter-spacing: 0.04em;
  line-height: 190%;
  text-transform: uppercase;
  color: var(--color-black);
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

.releaseData {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 62px;
  text-align: left;
  font-size: var(--font-size-24);
  color: var(--color-dimgray);
  font-family: var(--font-gensenrounded2-tw);
}

.dscf5791Icon {
  width: 269px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
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

.releaseData1 {
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

.releaseData2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 62px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-24);
  color: var(--color-dimgray);
  font-family: var(--font-gensenrounded2-tw);
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

.releaseData3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 62px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-24);
  color: var(--color-dimgray);
  font-family: var(--font-gensenrounded2-tw);
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
  width: 705px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
}

.detailsOuter {
  align-self: stretch;
  height: 1326px;
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-28) 203px;
  box-sizing: border-box;
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
  width: 1412px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-20);
  box-sizing: border-box;
  max-width: 100%;
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
  max-width: 102%;
  background: linear-gradient(180deg, #c0eb77, #f0ffc3 50%);
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
.clickableCard {
  cursor: pointer;
  transition: all 0.3s ease;
}

.clickableCard:hover {
  transform: translateY(-2px);
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
}

.clickableCard:active {
  transform: translateY(0);
}

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

/* 響應式設計 */
@media screen and (max-width: 768px) {
  .customAmountInput {
    width: 100px;
    font-size: var(--font-size-16);
  }

  .donateButton {
    padding: 8px 16px;
    font-size: var(--font-size-14);
  }
}

@media screen and (max-width: 401px) {
  .customAmountInput {
    width: 80px;
    font-size: var(--font-size-14);
    margin: 0 4px;
  }

  .donateButton {
    padding: 6px 12px;
    font-size: var(--font-size-12);
  }
}
</style>
