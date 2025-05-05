<template>
  <div>
    <main class="home-container">
      <!-- welcome -->
      <section class="welcome-banner">
        <div class="left-content">
          <h1>Discover Your Next Meal</h1>
          <p class="subtitle">Explore curated recipes & calculate your calories</p>
          <div class="action-buttons">
            <NuxtLink to="/allrecipe" class="primary-btn">Let's start !</NuxtLink>
            <button class="secondary-btn" @click="triggerVideoFullscreen">Watch This Video →</button>
          </div>
        </div>
        <div class="right-content">
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

      <!-- Quick categories -->
      <section class="quick-categories">
        <h2>Popular Categories</h2>
        <div class="category-grid">
          <NuxtLink to="/recipe/breakfast" class="category-card">
            <div class="category-content">
              <img src="https://via.placeholder.com/300x200" class="category-image" />
              <h3>Breakfast</h3>
              <p>Start your day right with a healthy breakfast!</p>
            </div>
          </NuxtLink>
          <NuxtLink to="/recipe/lunch" class="category-card">
            <div class="category-content">
              <img src="https://via.placeholder.com/300x200" class="category-image" />
              <h3>Lunch</h3>
              <p>Delicious and easy lunch ideas!</p>
            </div>
          </NuxtLink>
          <NuxtLink to="/recipe/dinner" class="category-card">
            <div class="category-content">
              <img src="https://via.placeholder.com/300x200" class="category-image" />
              <h3>Dinner</h3>
              <p>End your day with a satisfying dinner!</p>
            </div>
          </NuxtLink>
          <NuxtLink to="/meal" class="category-card">
            <div class="category-content">
              <img src="https://via.placeholder.com/300x200" class="category-image" />
              <h3>Calorie Calculator</h3>
              <p>Track your daily calorie intake easily!</p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Horizontal line -->
      <hr class="section-divider" />

      <!-- Recommended Recipes -->
      <section class="recommended-section">
        <h2 class="section-title">Recommended Recipes For You</h2>
        <div class="recipe-carousel">
          <button @click="scrollLeft" class="carousel-button left">
            &#8592;
          </button>
          <div class="recipe-list" ref="recipeList">
            <div v-for="(recipe, index) in duplicatedRecipes" :key="index" class="recipe-card">
              <img :src="recipe.image" class="recipe-img" />
              <h3>{{ recipe.title }}</h3>
              <p>{{ recipe.description }}</p>
              <NuxtLink :to="recipe.link" class="recipe-link">View Recipe</NuxtLink>
            </div>
          </div>
          <button @click="scrollRight" class="carousel-button right">
            &#8594;
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import recipes from '~/data/recipes.js'

const placeholderVideo = ref(null)
const recipeList = ref(null)

// 视频全屏
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

const duplicatedRecipes = [...recipes, ...recipes] // 模拟无限数据

// 滚动到左侧
const scrollLeft = () => {
  if (recipeList.value) {
    recipeList.value.scrollBy({
      left: -300,
      behavior: 'smooth'
    })
  }
}

// 滚动到右侧
const scrollRight = () => {
  if (recipeList.value) {
    recipeList.value.scrollBy({
      left: 300,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
/* 样式参考你的主色调 */

.home-container {
  padding: 2rem 1rem;
}

/* Welcome Section */
.welcome-banner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
}

.left-content {
  flex: 1;
  max-width: 600px;
}

.subtitle {
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #959090;
}

.action-buttons {
  display: flex;
  gap: 1rem;
}

.primary-btn,
.secondary-btn {
  padding: 0.8rem 1.4rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.primary-btn {
  background-color: #383863;
  color: white;
}

.primary-btn:hover {
  background-color: #2e2e50;
}

.secondary-btn {
  background-color: transparent;
  border: 2px solid #383863;
  color: #383863;
}

.secondary-btn:hover {
  background-color: #c7b368;
  color: white;
}

.right-content {
  flex: 1;
  max-width: 500px;
}

/* Categories */
.quick-categories {
  margin: 3rem 0;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.category-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.category-content {
  padding: 1rem;
}

/* Divider */
.section-divider {
  border: 0;
  height: 1px;
  background: #383863;
  margin: 3rem 0;
}

/* Recommended Section */
.recommended-section {
  padding: 3rem 1rem;
}

.section-title {
  text-align: left;
  font-size: 2rem;
  color: #383863;
  margin-bottom: 1.5rem;
}

.recipe-carousel {
  display: flex;
  align-items: center;
  position: relative;
}

.recipe-list {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.recipe-card {
  flex-shrink: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.recipe-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.1);
}

.recipe-img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.recipe-link {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #383863;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.recipe-link:hover {
  background-color: #c7b368;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

.carousel-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
