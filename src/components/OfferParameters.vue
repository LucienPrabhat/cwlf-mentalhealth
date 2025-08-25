<template>
  <div :class="$style.offerParameters" :style="offerParametersStyle">
    <div :class="$style.supportive" :style="supportiveStyle">
      <div
        :class="$style.consultingSpecification"
        :style="consultingSpecificationStyle"
      >
        <div :class="$style.div">
          <span>
            <p :class="$style.p">
              <span :class="$style.span">
                <span :class="$style.span1">1000元</span>
                <span :class="$style.span2"></span>
              </span>
            </p>
            <p :class="$style.p">
              <span :class="$style.span">
                <span :class="$style.span2">資助孩子一次心理諮商</span>
              </span>
              <span :class="$style.span2">
                <span :class="$style.span6">費</span>
              </span>
            </p>
          </span>
        </div>
        <div :class="$style.div1">{{ prop }}</div>
      </div>
      <img
        :class="$style.dataInfoIcon"
        loading="lazy"
        alt=""
        :src="dataInfo"
        :style="dataInfoIconStyle"
      />
    </div>
  </div>
</template>
<script setup>
  import { computed } from "vue"

  const props = defineProps({
    prop: { type: String },
    dataInfo: { type: String },
    offerParametersPadding: { type: [Object, Array, String, Number, Boolean] },
    supportiveJustifyContent: { type: String },
    consultingSpecificationHeight: {
      type: [Object, Array, String, Number, Boolean],
    },
    dataInfoIconWidth: { type: [Object, Array, String, Number, Boolean] },
  })
  const offerParametersStyle = computed(() => ({
    padding: props.offerParametersPadding,
  }))
  const supportiveStyle = computed(() => ({
    justifyContent: props.supportiveJustifyContent,
  }))
  const consultingSpecificationStyle = computed(() => ({
    height: props.consultingSpecificationHeight,
  }))
  const dataInfoIconStyle = computed(() => ({
    width: props.dataInfoIconWidth,
  }))
</script>
<style module>
  .span1 {
    font-size: var(--font-size-24);
    font-family: var(--font-gensenrounded2-tw);
  }
  .span2 {
    white-space: pre-wrap;
  }
  .span {
    letter-spacing: 0.04em;
    white-space: pre-wrap;
  }
  .p {
    margin: 0;
  }
  .span6 {
    letter-spacing: 0.09em;
  }
  .div {
    align-self: stretch;
    position: relative;
    line-height: 157.24%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
  .div1 {
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
  .consultingSpecification {
    height: 98.9px;
    width: 270px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .dataInfoIcon {
    width: 96px;
    max-height: 100%;
  }
  .supportive {
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
    padding: 23px var(--padding-22);
    text-align: left;
    font-size: var(--font-size-20);
    color: var(--color-cadetblue-300);
    font-family: var(--font-gensenrounded2-tw);
  }

  @media screen and (max-width: 401px) {
    .div {
      font-size: var(--font-size-16);
      line-height: 30px;
    }
  }
</style>
