<template>
  <div :class="$style.desktopMainPage">
    <section :class="$style.a">
      <div :class="$style.aChild" />
      <div :class="$style.frameParent">
        <Frame />
        <GroupComponent />
        <img :class="$style.icon" loading="lazy" alt="" src="/-1@2x.png" />
      </div>
    </section>
    <B />
    <section :class="$style.c">
      <div :class="$style.frameGroup">
        <FrameComponent />
        <FrameComponent1 />
      </div>
    </section>
    <D />
    <E />
    <FrameComponent2 />
    <FrameComponent111 />
  </div>
</template>
<script setup>
import Frame from "../components/Frame.vue"
import GroupComponent from "../components/GroupComponent.vue"
import B from "../components/B.vue"
import FrameComponent from "../components/FrameComponent.vue"
import FrameComponent1 from "../components/FrameComponent1.vue"
import D from "../components/D.vue"
import E from "../components/E.vue"
import FrameComponent2 from "../components/FrameComponent2.vue"
import FrameComponent111 from "../components/FrameComponent3.vue"
</script>
<style module>
.aChild {
  align-self: stretch;
  width: 1440px;
  position: relative;
  background: linear-gradient(180deg, var(--color-cadetblue-300), #5e6e7a);
  display: none;
  max-width: 100%;
}

.icon {
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
}

.frameParent {
  margin-left: -6px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 47px;
  flex-shrink: 0;
  max-width: 101%;
}

.a {
  align-self: stretch;
  background: linear-gradient(180deg, var(--color-cadetblue-300), #5e6e7a);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 21px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
}

.frameGroup {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-20);
  box-sizing: border-box;
  max-width: 100%;
}

.c {
  align-self: stretch;
  height: 2117px;
  background-color: var(--color-white);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-2) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
}

.desktopMainPage {
  /* cap layout at 1440px and center on larger screens; be fluid under 1440px */
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
}

@media screen and (max-width: 401px) {
  .desktopMainPage {
    width: 401px;
  }
}
</style>
