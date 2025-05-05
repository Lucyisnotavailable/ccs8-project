<template>
  <div>
    <main class="home-container">
      <!-- Hero Banner -->
      <section class="welcome-banner">
        <div class="left-content">
          <h1>Healthy Breakfast Recipes</h1>
          <p class="subtitle">Start your day right with these morning delights</p>
          <div class="action-buttons">
            <button @click="scrollToRecipes" class="secondary-btn">
              Browse Recipes →
            </button>
          </div>
        </div>
        <div class="right-content">
          <img 
            src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80" 
            alt="Breakfast Recipes"
            class="banner-image"
          >
        </div>
      </section>

      <!-- Recipe Filters -->
      <section class="filter-section">
        <div class="filter-container">
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
          
          <div class="filter-group">
            <label for="difficulty">Level:</label>
            <select 
              id="difficulty" 
              v-model="filter.difficulty"
              class="styled-select"
            >
              <option value="">All Levels</option>
              <option v-for="level in difficultyLevels" :key="level" :value="level">
                {{ level }}
              </option>
            </select>
          </div>
          
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
        </div>
      </section>

      <!-- Recipes Grid -->
      <section id="recipes" class="recipe-grid-section">
        <h2>Featured Breakfast Recipes</h2>
        <div class="category-grid">
          <div 
            v-for="recipe in filteredRecipes" 
            :key="recipe.id"
            class="category-card"
          >
            <NuxtLink :to="`/recipes/${recipe.id}`">
              <div class="category-content">
                <img 
                  :src="recipe.image" 
                  :alt="recipe.title"
                  class="category-image"
                >
                <div class="recipe-overlay">
                  <h3>{{ recipe.title }}</h3>
                  <div class="recipe-meta">
                    <span class="time">{{ recipe.time }} mins</span>
                    <span class="difficulty" :class="recipe.difficulty">
                      {{ formatDifficulty(recipe.difficulty) }}
                    </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import recipes from '~/data/recipes.js'

const filter = {
  cuisine: '',
  difficulty: '',
  time: ''
}

// Filtered recipes based on selected filters (start with breakfast recipes)
const filteredRecipes = computed(() => {
  const breakfastRecipes = recipes.filter(recipe => recipe.type === 'breakfast')
  return breakfastRecipes.filter(recipe => {
    return (
      (!filter.cuisine || recipe.cuisine === filter.cuisine) && // Filter by selected cuisine
      (!filter.difficulty || recipe.difficulty === filter.difficulty) && // Filter by difficulty
      (!filter.time || parseInt(recipe.time) <= parseInt(filter.time)) // Filter by time
    )
  })
})

const cuisines = computed(() => {
  return [...new Set(recipes.map(r => r.cuisine))] // Unique cuisines from recipes data
})

const difficultyLevels = ['Easy', 'Medium', 'Hard']

const timeOptions = [
  { label: 'Any Time', value: '' },
  { label: 'Under 10 mins', value: '10' },
  { label: 'Under 20 mins', value: '20' },
  { label: 'Under 30 mins', value: '30' }
]

const formatDifficulty = (difficulty) => {
  const levels = {
    easy: 'Beginner',
    medium: 'Intermediate',
    hard: 'Advanced'
  }
  return levels[difficulty.toLowerCase()] || difficulty
}

const scrollToRecipes = () => {
  const element = document.getElementById('recipes')
  element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@import "@/assets/css/template.css"; /* Custom styles for your template */
</style>
