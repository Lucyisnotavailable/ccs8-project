<template>
  <div class="page-container">
    <main class="recipe-container">
      <Breadcrumbs :items="[
        { text: 'Home', to: '/' },
        { text: 'Recipes', to: '/recipes' },
        { text: recipe.title, disabled: true }
      ]" />
      
      <article class="recipe-article">
        <!-- Recipe Header -->
        <header class="recipe-header">
          <h1>{{ recipe.title }}</h1>
  
          <img 
            :src="recipe.image || 'https://via.placeholder.com/800x450'" 
            :alt="recipe.title" 
            class="recipe-image"
          >
        </header>
        
        <!-- Recipe Content -->
        <div class="recipe-content">
          <!-- Ingredients -->
          <section class="ingredients" aria-labelledby="ingredients-heading">
            <h2 id="ingredients-heading">Ingredients</h2>
            <ul class="ingredient-list">
              <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                <label class="ingredient-item">
                  <input type="checkbox" class="ingredient-checkbox">
                  <span>{{ ingredient }}</span>
                </label>
              </li>
            </ul>
          </section>
          
          <!-- Instructions -->
          <section class="instructions" aria-labelledby="instructions-heading">
            <h2 id="instructions-heading">Instructions</h2>
            <ol class="instruction-steps">
              <li v-for="(step, index) in recipe.instructions" :key="index">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-content">{{ step }}</div>
              </li>
            </ol>
          </section>
        </div>
        
        <!-- Recipe Footer -->
        <footer class="recipe-footer">
          <div class="action-buttons">
            <button 
              class="save-button"
              @click="toggleSaveRecipe"
              :aria-label="isSaved ? 'Unsave recipe' : 'Save recipe'"
            >
              {{ isSaved ? '❤️ Saved' : '♡ Save Recipe' }}
            </button>
            <button class="print-button" @click="printRecipe">🖨️ Print</button>
          </div>
          
          <div class="nutrition-info" v-if="recipe.nutrition">
            <h3>Nutrition Information</h3>
            <table class="nutrition-table">
              <tr v-for="(value, key) in recipe.nutrition" :key="key">
                <th>{{ key }}</th>
                <td>{{ value }}</td>
              </tr>
            </table>
          </div>
        </footer>
      </article>
    </main>
  </div>
</template>




  <script setup>
import { useRoute, useRouter } from 'vue-router'
import recipes from '@/data/recipes.js'
import { ref, computed, watchEffect } from 'vue'

const route = useRoute()
const router = useRouter()

// 获取动态路由的 id 参数
const recipeId = parseInt(route.params.id)

// 根据 id 查找对应的食谱
const recipe = computed(() => {
  return recipes.find(r => r.id === recipeId)
})

// 如果没有找到对应的食谱，则重定向回 /recipes 页面
watchEffect(() => {
  if (!recipe.value) {
    router.push('/recipes')
  }
})

const isSaved = ref(false)

const toggleSaveRecipe = () => {
  isSaved.value = !isSaved.value
}

const printRecipe = () => {
  window.print()
}
</script>
  
  
  
  
  <style scoped>
  /* Using your color scheme */
  :root {
    --primary: #383863;
    --secondary: #c7b368;
    --light-gray: #efedec;
    --medium-gray: #959090;
  }
  
  .page-container {
    font-family: 'Calibri', sans-serif;
    font-size: 12pt;
    line-height: 1.6;
  }
  
  .recipe-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .recipe-article {
    background: white;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    overflow: hidden;
  }
  
  .recipe-header {
    padding: 30px;
    text-align: center;
  }
  
  .recipe-header h1 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 2.2rem;
  }
  
  .recipe-meta {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    color: var(--medium-gray);
    font-size: 0.9rem;
  }
  
  .recipe-image {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 20px;
  }
  
  .recipe-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    padding: 30px;
  }
  
  .ingredients {
    background: var(--light-gray);
    padding: 20px;
    border-radius: 8px;
    height: fit-content;
  }
  
  .ingredients h2,
  .instructions h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--secondary);
  }
  
  .ingredient-list {
    list-style: none;
    padding: 0;
  }
  
  .ingredient-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    cursor: pointer;
  }
  
  .ingredient-checkbox {
    width: 18px;
    height: 18px;
    accent-color: var(--secondary);
  }
  
  .instruction-steps {
    list-style: none;
    padding: 0;
    counter-reset: step-counter;
  }
  
  .instruction-steps li {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    counter-increment: step-counter;
  }
  
  .step-number {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    background: var(--secondary);
    color: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  
  .step-content {
    flex-grow: 1;
  }
  
  .recipe-footer {
    padding: 30px;
    border-top: 1px solid var(--light-gray);
  }
  
  .action-buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
  }
  
  .save-button,
  .print-button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .save-button {
    background-color: var(--light-gray);
    color: var(--primary);
  }
  
  .save-button:hover {
    background-color: #ffebee;
  }
  
  .print-button {
    background-color: var(--primary);
    color: white;
  }
  
  .print-button:hover {
    background-color: #4a4a7a;
  }
  
  .nutrition-info h3 {
    color: var(--primary);
    margin-bottom: 15px;
  }
  
  .nutrition-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .nutrition-table th,
  .nutrition-table td {
    padding: 8px 12px;
    text-align: left;
    border-bottom: 1px solid var(--light-gray);
  }
  
  .nutrition-table th {
    color: var(--primary);
    font-weight: normal;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .recipe-content {
      grid-template-columns: 1fr;
    }
    
    .recipe-header,
    .recipe-content,
    .recipe-footer {
      padding: 20px;
    }
    
    .recipe-meta {
      flex-wrap: wrap;
    }
  }
  
  @media print {
    .page-container {
      padding: 0;
    }
    
    .recipe-container {
      max-width: 100%;
      padding: 0;
    }
    
    .recipe-article {
      box-shadow: none;
    }
    
    .action-buttons {
      display: none;
    }
  }
  </style>