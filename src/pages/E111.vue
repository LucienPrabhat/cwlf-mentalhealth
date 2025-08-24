<template>
  <div :class="$style.e1">
    <section :class="$style.story">
      <!-- <div :class="$style.frame">
        <div :class="$style.xuanStage">
          <div :class="$style.xuanButtonData" />
        </div>
        <div :class="$style.xuanInfo">
          <img
            :class="$style.xuanEventIcon"
            loading="lazy"
            alt=""
            src="/frame-162@2x.png"
          />
          <div :class="$style.xuanPanel">
            <div :class="$style.xuanNarrative">
              <div :class="$style.div">
                <p :class="$style.p">國中就拒學的小萱，畢業後開始繭居在家。</p>
                <p :class="$style.p">因為情緒失控自傷被強制送醫，小萱曾住進</p>
                <p :class="$style.p">康復之家一年。回家後，因房間過於髒亂，</p>
                <p :class="$style.p">只能鋪地墊睡在走廊。</p>
                <p :class="$style.p">
                  現在的她，正努力從混亂中找回生活掌控感...
                </p>
              </div>
            </div>
            <div :class="$style.segmentContainer">
              <div :class="$style.xuanButtonArea">
                <button :class="$style.xuanButtonDetails" />
              </div>
              <div :class="$style.wrapper">
                <div :class="$style.div1">小萱後來呢？</div>
              </div>
              <img
                :class="$style.xuanEventEnd"
                loading="lazy"
                alt=""
                src="/frame-157.svg"
              />
            </div>
          </div>
        </div>
      </div> -->
      <img
        :class="$style.yanPanelIcon"
        loading="lazy"
        alt=""
        src="/icon_to_left.png"
      />
      <div :class="$style.frame2">
        <div :class="$style.narrative">
          <img
            :class="$style.eventIcon"
            loading="lazy"
            alt=""
            src="/frame-149@2x.png"
          />
          <div :class="$style.xiaoYanEvent">
            <div :class="$style.xuanNarrative">
              <div :class="$style.div">
                <p :class="$style.p">國中遭同學霸凌、被逼迫分手後，</p>
                <p :class="$style.p">崩潰的小言開始自傷、拒學。高二時，</p>
                <p :class="$style.p">連最親近的朋友都選擇離開後，小言再度</p>
                <p :class="$style.p">陷入憂鬱與焦慮，從此推開所有人。</p>
                <p :class="$style.p">直到那天，她第一次在社工面前落淚...</p>
              </div>
            </div>
            <div :class="$style.segmentContainer">
              <div :class="$style.xuanButtonArea">
                <button :class="$style.xuanButtonDetails" />
              </div>
              <div :class="$style.wrapper">
                <div :class="$style.div1">小言後來呢？</div>
              </div>
              <img
                :class="$style.xuanEventEnd"
                loading="lazy"
                alt=""
                src="/frame-157.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        :class="$style.yanPanelIcon"
        loading="lazy"
        alt=""
        src="/icon_to_right.png"
      />
      <!-- <div :class="$style.yanPanel">
        <div :class="$style.segmentParent">
          <img
            :class="$style.segmentIcon"
            loading="lazy"
            alt=""
            src="/frame-170@2x.png"
          />
          <div :class="$style.frameParent">
            <div :class="$style.container">
              <div :class="$style.div">
                <p :class="$style.p">小波因在國中遭排擠，升高中後又無法融入</p>
                <p :class="$style.p">而情緒失調，確診重度憂鬱。即使家庭經濟</p>
                <p :class="$style.p">無虞，她仍難以承受來自身旁親友與自己的</p>
                <p :class="$style.p">
                  高期待，壓力窒息的讓她一度想離開這個世界...
                </p>
              </div>
            </div>
            <div :class="$style.segmentContainer">
              <div :class="$style.xuanButtonArea">
                <button :class="$style.xuanButtonDetails" />
              </div>
              <div :class="$style.wrapper">
                <div :class="$style.div1">小波後來呢？</div>
              </div>
              <img
                :class="$style.xuanEventEnd"
                loading="lazy"
                alt=""
                src="/frame-157.svg"
              />
            </div>
          </div>
        </div>
      </div> -->
    </section>
  </div>
</template>
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
    background-color: transparent; /* background comes from container to ensure full pill color */
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
  .yanPanelIcon {
    width: 55px;
    max-height: 100%;
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
    width: 294px;
    max-height: 100%;
    object-fit: cover;
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 52px;
    background-color: var(--color-white);
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
  @media screen and (max-width: 1050px) {
    .story {
      flex-wrap: wrap;
    }

    .e1 {
      height: auto;
    }
  }
  @media screen and (max-width: 1050px) {
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
  @media screen and (max-width: 1050px) {
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
  @media screen and (max-width: 825px) {
    .story {
      flex-wrap: wrap;
    }

    .e1 {
      height: auto;
    }
  }
  @media screen and (max-width: 825px) {
    .story {
      flex-wrap: wrap;
    }

    .e1 {
      height: auto;
    }
  }
  @media screen and (max-width: 800px) {
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
  @media screen and (max-width: 450px) {
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
  @media screen and (max-width: 450px) {
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
  /* Center the story section inside the root container */
  .e1 {
    justify-content: center;
  }
  /* Cancel left offset so the section can be truly centered */
  .story {
    margin-left: 0 !important;
  }
</style>
