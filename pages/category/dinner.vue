<template>
    <div>
      <main class="home-container">
        <!-- Hero Banner -->
        <section class="welcome-banner">
          <div class="left-content">
            <h1>Delicious Dinner Recipes</h1>
            <p class="subtitle">End your day with these satisfying meals</p>
            <div class="action-buttons">
              <button @click="scrollToRecipes" class="primary-btn">
                Browse Recipes
              </button>
              <NuxtLink to="/meal-planning" class="secondary-btn">
                Meal Planner →
              </NuxtLink>
            </div>
          </div>
          <div class="right-content">
            <img 
              src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80" 
              alt="Dinner Recipes"
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
                <option value="easy">Beginner</option>
                <option value="medium">Intermediate</option>
                <option value="hard">Advanced</option>
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
                <option value="30">Under 30 mins</option>
                <option value="45">Under 45 mins</option>
                <option value="60">Under 60 mins</option>
              </select>
            </div>
          </div>
        </section>
  
        <!-- Recipes Grid -->
        <section id="recipes" class="recipe-grid-section">
          <h2>Featured Dinner Recipes</h2>
          <div class="category-grid">
            <div 
              v-for="recipe in filteredRecipes" 
              :key="recipe.id"
              class="category-card"
            >
              <NuxtLink :to="`/recipe/${recipe.id}`">
                <div class="category-content">
                  <img 
                    :src="recipe.image" 
                    :alt="recipe.name"
                    class="category-image"
                  >
                  <div class="recipe-overlay">
                    <h3>{{ recipe.name }}</h3>
                    <div class="recipe-meta">
                      <span class="time">{{ recipe.time }}</span>
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
  
  <script>
  export default {
    data() {
      return {
        filter: {
          cuisine: '',
          difficulty: '',
          time: ''
        },
        cuisines: ['Italian', 'Asian', 'Mexican', 'Mediterranean', 'American', 'Vegetarian', 'Comfort Food'],
        recipes: [
          {
            id: 201,
            name: "Garlic Butter Steak",
            image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "30 mins",
            difficulty: "medium",
            cuisine: "American"
          },
          {
            id: 202,
            name: "Vegetable Lasagna",
            image: "https://images.unsplash.com/photo-1623998646250-ad8a8ef43b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "60 mins",
            difficulty: "hard",
            cuisine: "Italian"
          },
          {
            id: 203,
            name: "Teriyaki Salmon",
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "25 mins",
            difficulty: "medium",
            cuisine: "Asian"
          },
          {
            id: 204,
            name: "Chicken Fajitas",
            image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "35 mins",
            difficulty: "medium",
            cuisine: "Mexican"
          },
          {
            id: 205,
            name: "Greek Salad Bowl",
            image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "20 mins",
            difficulty: "easy",
            cuisine: "Mediterranean"
          },
          {
            id: 206,
            name: "Mushroom Risotto",
            image: "https://images.unsplash.com/photo-1633945274417-abf35d5ad05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "50 mins",
            difficulty: "hard",
            cuisine: "Italian"
          }
        ]
      }
    },
    computed: {
      filteredRecipes() {
        return this.recipes.filter(recipe => {
          return (
            (!this.filter.cuisine || recipe.cuisine === this.filter.cuisine) &&
            (!this.filter.difficulty || recipe.difficulty === this.filter.difficulty) &&
            (!this.filter.time || parseInt(recipe.time) <= parseInt(this.filter.time))
          )
        })
      }
    },
    methods: {
      scrollToRecipes() {
        const element = document.getElementById('recipes')
        element.scrollIntoView({ behavior: 'smooth' })
      },
      formatDifficulty(difficulty) {
        const levels = {
          easy: 'Beginner',
          medium: 'Intermediate',
          hard: 'Advanced'
        }
        return levels[difficulty] || difficulty
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>