<template>
  <section class="title-section">
    <div class="title-container">
      <!-- Background Poster -->
      <div class="background-wrapper">
        <img src="/images/titleSection/bgPoster.png" alt="Mental Health Campaign Background" class="background-image" />
      </div>

      <!-- Content Overlay -->
      <div class="content-overlay">
        <!-- Logo Section -->
        <div class="logo-section">
          <img src="/images/titleSection/logo.png" alt="Child Welfare League Foundation Logo" class="logo" />
          <div class="logo-text">
            <h3>兒福聯盟</h3>
            <p>Child Welfare League Foundation</p>
          </div>
        </div>

        <!-- Main Title -->
        <div class="main-title">
          <h1 class="title-text">點亮他的 鬱鬱花園</h1>
        </div>

        <!-- Subtitle -->
        <div class="subtitle">
          <p class="subtitle-text">青春不該emo一樣 | 兒少療心計畫</p>
        </div>

        <!-- Call to Action Button -->
        <div class="cta-section">
          <button class="cta-button">
            <span class="cta-text">立即 行動</span>
            <div class="sun-rays"></div>
          </button>
        </div>

        <!-- Foreground Elements -->
        <div class="foreground-elements">
          <img src="/images/titleSection/grass.png" alt="Grass" class="grass" />
          <img src="/images/titleSection/bushes.png" alt="Bushes" class="bushes" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here
</script>

<style scoped>
.title-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #1a2a3a 0%, #2d4a5a 50%, #1a2a3a 100%);
}

.title-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.content-overlay {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.logo-section {
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 3;
}

.logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.logo-text h3 {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.logo-text p {
  color: #ffffff;
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.8;
}

.main-title {
  margin-bottom: 2rem;
  z-index: 3;
}

.title-text {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  line-height: 1.2;
  letter-spacing: 0.1em;
}

.subtitle {
  margin-bottom: 3rem;
  z-index: 3;
}

.subtitle-text {
  font-size: 1.5rem;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 0;
  opacity: 0.9;
}

.cta-section {
  z-index: 3;
}

.cta-button {
  position: relative;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  border: none;
  border-radius: 50px;
  padding: 1.5rem 3rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d4a5a;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
  overflow: hidden;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(255, 215, 0, 0.6);
}

.cta-button:active {
  transform: translateY(0);
}

.sun-rays {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}

.foreground-elements {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.grass {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.bushes {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Responsive Design */
@media screen and (max-width: 401px) {
  .title-text {
    font-size: 2rem;
  }

  .subtitle-text {
    font-size: 1rem;
  }

  .cta-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .logo-section {
    top: 0.75rem;
    right: 0.75rem;
  }

  .logo {
    width: 36px;
    height: 36px;
  }

  .logo-text h3 {
    font-size: 0.9rem;
  }

  .logo-text p {
    font-size: 0.65rem;
  }
}
</style>
