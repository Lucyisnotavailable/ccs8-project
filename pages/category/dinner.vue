<template>
  <div>
    <main class="home-container">
      <!-- Hero Banner -->
       <section class="welcome-banner">
          <div class="left-content">
            <h1>Delightful Dinner Recipes</h1>
            <p class="subtitle">End your day with these satisfying meals</p>
            <div class="action-buttons">
              <button @click="scrollToRecipes" class="secondary-btn">
                Browse Recipes
              </button>
      
            </div>
          </div>
          <div class="right-content">
            <img 
              src="/assets/images/Dinner.jpg" 
              alt="Lunch Recipes"
              class="banner-image"
            >
          </div>
      </section>

      <!-- Recipe Filters -->
      <section class="filter-section">
        <div class="filter-container">
          <!-- Cuisine Filter -->
          <div class="filter-group">
            <label for="cuisine">Cuisine:</label>
            <select 
              id="cuisine" 
              v-model="filter.cuisine"
              class="styled-select"
            >
              <option value="">All Cuisines</option>
              <option v-for="cuisine in cuisines" :key="cuisine" :value="cuisine">
                {{ cuisine }}
              </option>
            </select>
          </div>

          <!-- Level Filter -->
          <div class="filter-group">
            <label for="level">Level:</label>
            <select 
              id="level" 
              v-model="filter.level"
              class="styled-select"
            >
              <option value="">All Levels</option>
              <option v-for="level in levels" :key="level" :value="level">
                {{ level }}
              </option>
            </select>
          </div>

          <!-- Time Filter -->
          <div class="filter-group">
            <label for="time">Time:</label>
            <select 
              id="time" 
              v-model="filter.time"
              class="styled-select"
            >
              <option value="">Any Time</option>
              <option v-for="time in timeOptions" :key="time.value" :value="time.value">
                {{ time.label }}
              </option>
            </select>
          </div>

          <!-- Clear Button -->
          <button @click="clearFilters" class="clear-filters-btn">
            Clear Filters
          </button>
        </div>
      </section>

      <!-- Recipes Grid -->
      <section id="recipes" class="recipe-grid-section">
        <h2>Dinner Recipes</h2>
        <div class="category-grid">
          <div v-for="recipe in filteredRecipes" :key="recipe.id" class="category-card">
            <NuxtLink :to="`/recipes/${recipe.id}`">
              <div class="category-content">
                <img :src="recipe.image" :alt="recipe.title" class="category-image">
                <div class="recipe-overlay">
                  <h3>{{ recipe.title }}</h3>
                  <div class="recipe-meta">
                    <span class="time">{{ recipe.time }} mins</span>
                    <span class="difficulty" :class="recipe.level.toLowerCase()">
                      {{ recipe.level }}
                    </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <div class="footer-buttons">
      <NuxtLink to="/category/lunch" class="page-footer-btn left-btn">
        ← Lunch Recipes
      </NuxtLink>
      <NuxtLink to="/category/breakfast" class="page-footer-btn right-btn">
        Breakfast Recipes →
      </NuxtLink>
    </div>




    </main>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import recipes from '~/data/recipes.js'

const filter = reactive({
  cuisine: '',
  level: '',
  time: ''
})

// Filtered recipes based on selected filters (breakfast only)
const filteredRecipes = computed(() => {
  const breakfastRecipes = recipes.filter(recipe => recipe.type === 'dinner')
  return breakfastRecipes.filter(recipe => {
    return (
      (!filter.cuisine || recipe.cuisine === filter.cuisine) &&
      (!filter.level || recipe.level.toLowerCase() === filter.level.toLowerCase()) &&
      (!filter.time || parseInt(recipe.time) <= parseInt(filter.time))
    )
  })
})

// Unique cuisine list from recipes
const cuisines = computed(() => {
  return [...new Set(recipes.map(r => r.cuisine))]
})

// Difficulty levels replaced with "levels"
const levels = ['Beginner', 'Intermediate', 'Advanced']

// Cooking time options
const timeOptions = [
  { label: 'Under 10 mins', value: '10' },
  { label: 'Under 20 mins', value: '20' },
  { label: 'Under 30 mins', value: '30' }
]

// Scroll to recipes section
const scrollToRecipes = () => {
  const element = document.getElementById('recipes')
  element.scrollIntoView({ behavior: 'smooth' })
}

// Clear all filters
const clearFilters = () => {
  filter.cuisine = ''
  filter.level = ''
  filter.time = ''
}
</script>

<style scoped>
@import "@/assets/css/template.css"; 
</style>
