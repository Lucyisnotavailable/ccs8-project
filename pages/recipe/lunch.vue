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
  
  <style scoped>
  /* Reuse homepage variables and base styles */
  :root {
    --primary: #383863;
    --secondary: #c7b368;
    --light-gray: #efedec;
    --medium-gray: #959090;
  }
  
  /* Hero Banner */
  .welcome-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 40px;
    background-color: var(--light-gray);
    margin: 40px 0;
  }
  
  .left-content h1 {
    font-size: 2.8rem;
    color: var(--primary);
    margin-bottom: 15px;
  }
  
  .subtitle {
    font-size: 1.3rem;
    color: var(--medium-gray);
    margin-bottom: 30px;
  }
  
  .action-buttons {
    display: flex;
    gap: 20px;
  }
  
  .primary-btn {
    padding: 12px 30px;
    background-color: var(--primary);
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
  }
  
  .secondary-btn {
    padding: 12px 30px;
    border: 2px solid var(--primary);
    color: var(--primary);
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s;
  }
  
  .primary-btn:hover {
    background-color: var(--secondary);
    color: var(--primary);
    transform: translateY(-3px);
  }
  
  .secondary-btn:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-3px);
  }
  
  .right-content .banner-image {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  
  /* Filter Section */
  .filter-section {
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    margin: 40px 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  
  .filter-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .filter-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .filter-group label {
    font-weight: bold;
    color: var(--primary);
  }
  
  .styled-select {
    padding: 10px 15px;
    border: 2px solid var(--light-gray);
    border-radius: 8px;
    background-color: white;
    color: var(--primary);
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .styled-select:hover {
    border-color: var(--secondary);
  }
  
  /* Recipes Grid */
  .recipe-grid-section {
    margin: 80px 0;
  }
  
  .recipe-grid-section h2 {
    text-align: center;
    color: var(--primary);
    margin-bottom: 40px;
    font-size: 2rem;
  }
  
  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
  }
  
  .category-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    height: 250px;
    transition: transform 0.3s;
  }
  
  .category-card:hover {
    transform: scale(1.05);
  }
  
  .category-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .recipe-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    color: white;
    padding: 20px;
  }
  
  .recipe-overlay h3 {
    margin-bottom: 8px;
    font-size: 1.3rem;
  }
  
  .recipe-meta {
    display: flex;
    gap: 15px;
    font-size: 0.9rem;
  }
  
  .recipe-meta .time {
    display: flex;
    align-items: center;
  }
  
  .recipe-meta .difficulty {
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
  }
  
  .recipe-meta .difficulty.easy {
    background-color: rgba(46, 204, 113, 0.2);
    color: #2ecc71;
  }
  
  .recipe-meta .difficulty.medium {
    background-color: rgba(241, 196, 15, 0.2);
    color: #f1c40f;
  }
  
  .recipe-meta .difficulty.hard {
    background-color: rgba(231, 76, 60, 0.2);
    color: #e74c3c;
  }
  
  /* Weekly Special */
  .weekly-preview {
    margin: 80px 0;
  }
  
  .preview-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .preview-header h2 {
    color: var(--primary);
    font-size: 2rem;
  }
  
  .view-all {
    color: var(--secondary);
    text-decoration: none;
    font-weight: bold;
  }
  
  .view-all:hover {
    text-decoration: underline;
  }
  
  .special-recipe {
    display: flex;
    gap: 30px;
    background-color: var(--light-gray);
    padding: 30px;
    border-radius: 12px;
  }
  
  .special-image {
    flex: 1;
    min-width: 300px;
  }
  
  .special-image img {
    width: 100%;
    border-radius: 8px;
  }
  
  .special-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .special-content h3 {
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 15px;
  }
  
  .special-content p {
    color: var(--medium-gray);
    margin-bottom: 20px;
    line-height: 1.6;
  }
  
  .special-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 25px;
    color: var(--primary);
    font-weight: bold;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .welcome-banner {
      flex-direction: column;
      padding: 40px 20px;
    }
    
    .right-content {
      margin-top: 30px;
      width: 100%;
    }
    
    .action-buttons {
      justify-content: center;
    }
    
    .special-recipe {
      flex-direction: column;
    }
    
    .special-image {
      min-width: auto;
    }
  }
  
  @media (max-width: 480px) {
    .filter-container {
      flex-direction: column;
    }
    
    .action-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .primary-btn, .secondary-btn {
      width: 100%;
      text-align: center;
    }
  }
  </style>