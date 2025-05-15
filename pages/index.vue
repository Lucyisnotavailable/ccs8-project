<template>
  <div>
    <!-- main -->
    <main class="home-container">
      <!-- welcome -->
      <section class="welcome-banner">
        <div class="left-content">
          <h1>Discover Your Next Meal</h1>
          <p class="subtitle">Explore curated recipes & calculate your calories</p>
          <div class="action-buttons">
          
            <NuxtLink to="/allrecipe" class="primary-btn">Let's start !</NuxtLink>
            <button class="secondary-btn" @click="triggerVideoFullscreen">
              Watch This Video →
            </button>
          </div>
        </div>
        <div class="right-content">
          <!-- 占位视频 -->
          <video
            ref="placeholderVideo"
            class="video-placeholder shadow-lg"
            width="100%"
            controls
            playsinline
            preload="none"
          >
            <source src="/public/Inrecipe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section class="quick-categories">
  <h2>Popular Categories</h2>
  <div class="category-grid">
    <NuxtLink to="/category/breakfast" class="category-card">
      <img src="/assets/images/Breakfast.jpg" class="category-image" />
      <div class="category-overlay">
        <h3>Breakfast</h3>
        <p>Start your day right with a healthy breakfast!</p>
      </div>
    </NuxtLink>

    <NuxtLink to="/category/lunch" class="category-card">
      <img src="/assets/images/Lunch.jpg" class="category-image" />
      <div class="category-overlay">
        <h3>Lunch</h3>
        <p>Delicious and easy lunch ideas just for you!</p>
      </div>
    </NuxtLink>

    <NuxtLink to="/category/dinner" class="category-card">
      <img src="/assets/images/Dinner.jpg" class="category-image" />
      <div class="category-overlay">
        <h3>Dinner</h3>
        <p>End your day with a satisfying dinner!</p>
      </div>
    </NuxtLink>

    <NuxtLink to="/meal" class="category-card">
      <img src="/assets/images/Calorie.jpg" class="category-image" />
      <div class="category-overlay">
        <h3>Calorie Calculator</h3>
        <p>Track your daily calorie intake easily!</p>
      </div>
    </NuxtLink>
  </div>
</section>


    


    </main>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import recipes from '~/data/recipes.js'

const placeholderVideo = ref(null)

const triggerVideoFullscreen = () => {
  const el = placeholderVideo.value
  if (el) {
    if (el.requestFullscreen) {
      el.requestFullscreen()
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen()
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen()
    }
  }
}

</script>

<style scoped>
/* 只针对手机端的样式 - 不会影响桌面端 */
@media screen and (max-width: 768px) {
  .welcome-banner {
    flex-direction: column;
    padding: 30px 20px;
    margin-top: 20px;
    text-align: center;
  }

  .left-content {
    order: 2;
    text-align: center;
    margin-top: 25px;
    width: 100%;
  }

  .right-content {
    order: 1;
    padding-left: 0;
    width: 100%;
  }

  .welcome-banner h1 {
    font-size: 1.8rem;
    margin-bottom: 12px;
    line-height: 1.3;
  }

  .subtitle {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .action-buttons {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  .primary-btn,
  .secondary-btn {
    padding: 10px 20px;
    width: 100%;
    max-width: 250px;
    text-align: center;
  }

  .video-placeholder {
    border-radius: 12px;
    max-height: 200px;
    object-fit: cover;
  }

  /* 快速分类区域调整 */
  .quick-categories {
    margin-bottom: 50px;
    padding: 0 15px;
  }

  .quick-categories h2 {
    font-size: 1.5rem;
    margin-bottom: 25px;
  }

  .category-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .category-card {
    height: 180px;
  }

  .category-overlay h3 {
    font-size: 1.3rem;
  }

  .category-overlay p {
    font-size: 0.85rem;
  }
}

/* 小屏幕手机优化 */
@media screen and (max-width: 480px) {
  .welcome-banner {
    padding: 25px 15px;
  }

  .welcome-banner h1 {
    font-size: 1.6rem;
  }

  .subtitle {
    font-size: 0.9rem;
  }

  .category-card {
    height: 160px;
  }
}
</style>