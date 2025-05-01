<template>
    <div>  
      <section class="all-recipe-page">
        <h1 class="title">🍽️ Discover Delicious Recipes</h1>
        <p class="intro">
          Explore a wide variety of recipes grouped by meal time. Whether you’re starting your day,
          taking a break at noon, or winding down with dinner — we’ve got something tasty for you.
        </p>
  
        <div class="recipe-category-grid">
          <div
            class="category-card"
            v-for="category in categories"
            :key="category.name"
            @click="goToCategory(category.link)"
          >
            <img :src="category.image" :alt="category.name" class="category-image" />
            <div class="card-content">
              <h2 class="category-name">{{ category.name }}</h2>
              <p class="category-desc">{{ category.description }}</p>
              <ul class="sample-dishes">
                <li v-for="dish in category.examples" :key="dish">🍴 {{ dish }}</li>
              </ul>
              <button class="view-more-btn">View More →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  
  const router = useRouter()
  
  const goToCategory = (path) => {
    router.push(path)
  }
  
  const categories = [
    {
      name: 'Breakfast',
      link: '/recipe/breakfast',
      image: 'https://via.placeholder.com/500x300?text=Breakfast',
      description: 'Start your day right with energizing and nutritious breakfast options.',
      examples: ['Pancakes', 'Omelette', 'Avocado Toast']
    },
    {
      name: 'Lunch',
      link: '/recipe/lunch',
      image: 'https://via.placeholder.com/500x300?text=Lunch',
      description: 'Hearty and healthy meals to power through your afternoon.',
      examples: ['Chicken Sandwich', 'Salad Bowl', 'Ramen']
    },
    {
      name: 'Dinner',
      link: '/recipe/dinner',
      image: 'https://via.placeholder.com/500x300?text=Dinner',
      description: 'End the day with comfort food and flavorful dishes.',
      examples: ['Grilled Salmon', 'Tacos', 'Fried Rice']
    }
  ]
  </script>
  
  <style scoped>
  .all-recipe-page {
    padding: 3rem 2rem;
    background-color: var(--light-gray);
    min-height: 100vh;
  }
  
  .title {
    text-align: center;
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
    color: var(--primary);
  }
  
  .intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 2.5rem auto;
    font-size: 1.15rem;
    color: #444;
  }
  
  .recipe-category-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    justify-content: center;
  }
  
  .category-card {
    background-color: white;
    border-radius: 1.5rem;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    width: 400px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .category-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
  }
  
  .category-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 1.5rem;
    text-align: left;
  }
  
  .category-name {
    font-size: 1.8rem;
    color: var(--secondary);
    margin-bottom: 0.5rem;
  }
  
  .category-desc {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }
  
  .sample-dishes {
    list-style: none;
    padding-left: 0;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  .view-more-btn {
    background-color: var(--primary);
    color: white;
    border: none;
    padding: 0.6rem 1.3rem;
    border-radius: 0.6rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .view-more-btn:hover {
    background-color: #2e2e52;
  }
  </style>
  