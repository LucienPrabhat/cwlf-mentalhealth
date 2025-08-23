<template>
  <div :class="$style.a">
    <div :class="$style.aChild" />
    <main :class="$style.document">
      <Frame />
      <GroupComponent />
      <img :class="$style.icon" alt="" src="/-11@2x.png" />
    </main>
  </div>
</template>
<script setup lang="ts">
  import Frame from "../components/Frame.vue"
  import GroupComponent from "../components/GroupComponent.vue"
</script>
<style module>
  .aChild {
    height: 2625px;
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
  .document {
    margin-left: -6px;
    height: 2612px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 47px;
    flex-shrink: 0;
    max-width: 101%;
  }
  .a {
    width: 100%;
    height: 2625px;
    position: relative;
    background: linear-gradient(180deg, var(--color-cadetblue-300), #5e6e7a);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 21px 0px 0px;
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 450px) {
    .document {
      gap: 23px;
    }
  }
</style>
