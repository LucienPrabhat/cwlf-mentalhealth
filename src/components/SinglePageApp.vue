<template>
  <div class="single-page-app">
    <!-- Page A Section -->
    <section class="page-section page-a">
      <div class="page-content">
        <h1>我只是想被看見、被聽見</h1>
        <p>每次感到快無法呼吸時，我都不知道該怎麼辦...</p>
        <div class="story-content">
          <p>我以為只要我夠痛，就會被看見。</p>
          <p>只是媽媽也太痛了，痛到顧不了我</p>
          <p>我有在努力好好生活，真的有。</p>
          <p>只是有時候，晚上還是會想：</p>
          <p>「我是不是又快要掉回去那個深淵？」</p>
          <p>恐懼像影子一樣跟著我</p>
          <p>它不僅出現在夜晚，也逐漸侵蝕了白天</p>
          <p>不論在家裡還是學校，對我而言都是沒有盡頭的永夜。</p>
        </div>
      </div>
    </section>

    <!-- Page B Section -->
    <section class="page-section page-b">
      <div class="page-content">
        <h1>手腕上一道道紅色傷痕</h1>
        <p>是她唯一的出口</p>
        <div class="story-content">
          <p>國中的小漿和媽媽同住在一間狹小的套房裡，</p>
          <p>媽媽因為龐大的經濟壓力一度深陷情緒風暴中、開始會借酒澆愁，使小漿常得面對</p>
          <p>媽媽的情緒與酒後失序，親子衝突日益增加，想到每天放學回家，就要面對這一切，</p>
          <p>小漿覺得無力又想哭⋯⋯</p>
          <p>小小的套房空間讓她無處可逃，於是某天，她拿起剃眉刀在手腕上劃下一道又一道傷口，</p>
          <p>那成了她情緒唯一的出口，也是她盼望引起媽媽注意的方式⋯⋯</p>
        </div>
        <div class="cta-section">
          <h2>支持更多孩子的復原之路</h2>
        </div>
      </div>
    </section>

    <!-- Page C Section -->
    <section class="page-section page-c">
      <div class="page-content">
        <h1>三級處遇</h1>
        <div class="story-content">
          <p>兒福聯盟透過「青少年心理健康服務」，針對情緒困擾青少年及其家庭提供服務，由專業</p>
          <p>社工進行定期的訪視與陪伴，協助家庭修復親子關係，並串聯醫療、教育等外部資源，協助少年</p>
          <p>穩定身心狀況、重建生活節奏。</p>
          <p>同時，「兒童創傷療癒中心」針對曾經歷或目睹家庭暴力及其他創傷事件的兒少與照顧者，提供</p>
          <p>以創傷復原為核心的多元支持服務，在安全與信任的氛圍中，陪伴他們逐步走向療癒與重建。</p>
        </div>
      </div>
    </section>

    <!-- Page D Section -->
    <section class="page-section page-d">
      <div class="page-content">
        <h1>Mental Health Resources</h1>
        <div class="story-content">
          <p>專業的心理健康資源與支持服務</p>
          <p>為青少年及其家庭提供全方位的協助</p>
        </div>
      </div>
    </section>

    <!-- Page E Section -->
    <section class="page-section page-e">
      <div class="page-content">
        <h1>Mental Health Information</h1>
        <div class="story-content">
          <p>重要的心理健康資訊與教育</p>
          <p>幫助更多人了解心理健康的重要性</p>
        </div>
      </div>
    </section>

    <!-- Page F Section -->
    <section class="page-section page-f">
      <div class="page-content">
        <h1>Mental Health Services</h1>
        <div class="story-content">
          <p>專業的心理健康服務</p>
          <p>為需要幫助的人提供支持</p>
        </div>
      </div>
    </section>

    <!-- Page G Section -->
    <section class="page-section page-g">
      <div class="page-content">
        <h1>Contact & Support</h1>
        <div class="story-content">
          <p>聯絡我們</p>
          <p>兒福聯盟心理健康服務</p>
          <p>為每個孩子點亮希望</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Simplified version with core content
</script>

<style scoped>
.single-page-app {
  width: 100%;
  min-height: 100vh;
}

.page-section {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.page-content {
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.page-content h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 600;
  line-height: 1.2;
}

.page-content h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 500;
}

.story-content {
  margin: 2rem 0;
  text-align: left;
}

.story-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1rem;
  text-align: justify;
}

.cta-section {
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.page-a {
  background: linear-gradient(180deg, #5e6e7a, #4a5a6a);
  color: white;
}

.page-a .page-content h1,
.page-a .page-content h2,
.page-a .page-content p {
  color: white;
}

.page-b {
  background: #ffffff;
}

.page-c {
  background: #f5f5f5;
}

.page-d {
  background: #ffffff;
}

.page-e {
  background: #f8f9fa;
}

.page-f {
  background: #ffffff;
}

.page-g {
  background: #f5f5f5;
}

@media (max-width: 768px) {
  .page-content h1 {
    font-size: 2rem;
  }
  
  .page-content h2 {
    font-size: 1.5rem;
  }
  
  .story-content p {
    font-size: 1rem;
  }
  
  .page-section {
    padding: 1rem;
  }
}
</style>


