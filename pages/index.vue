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
            <source src="https://via.placeholder.com/500x300" type="video/mp4" />
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
