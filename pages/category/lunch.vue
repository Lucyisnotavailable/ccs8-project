<template>
    <div>
      <!-- Main Content -->
      <main class="home-container">
        <!-- Hero Banner -->
        <section class="welcome-banner">
          <div class="left-content">
            <h1>Delicious Lunch Recipes</h1>
            <p class="subtitle">Find perfect midday meals to fuel your afternoon</p>
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
              alt="Lunch Recipes"
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
                <option value="15">Under 15 mins</option>
                <option value="30">Under 30 mins</option>
                <option value="45">Under 45 mins</option>
              </select>
            </div>
          </div>
        </section>
  
        <!-- Recipes Grid -->
        <section id="recipes" class="recipe-grid-section">
          <h2>Featured Lunch Recipes</h2>
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
        cuisines: ['Italian', 'Asian', 'Mexican', 'Mediterranean', 'American', 'Vegetarian'],
        recipes: [
          {
            id: 1,
            name: "Creamy Garlic Pasta",
            image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "25 mins",
            difficulty: "easy",
            cuisine: "Italian"
          },
          {
            id: 2,
            name: "Avocado Chicken Salad",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "20 mins",
            difficulty: "easy",
            cuisine: "American"
          },
          {
            id: 3,
            name: "Vegetable Stir Fry",
            image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "15 mins",
            difficulty: "easy",
            cuisine: "Asian"
          },
          {
            id: 4,
            name: "Beef Tacos",
            image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "30 mins",
            difficulty: "medium",
            cuisine: "Mexican"
          },
          {
            id: 5,
            name: "Quinoa Buddha Bowl",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "20 mins",
            difficulty: "medium",
            cuisine: "Mediterranean"
          },
          {
            id: 6,
            name: "Tomato Basil Soup",
            image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
            time: "35 mins",
            difficulty: "medium",
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