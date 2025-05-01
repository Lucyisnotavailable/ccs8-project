<template>
    <div class="max-w-6xl mx-auto p-8 mt-10 bg-light-gray rounded-2xl shadow-xl">
      <h1 class="text-4xl font-bold text-primary mb-8 text-center">Your Favorite Recipes</h1>
  
      <div v-if="favoriteRecipes.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="(recipe, index) in favoriteRecipes"
          :key="index"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
        >
          <img
            :src="recipe.image"
            :alt="recipe.title"
            class="w-full h-40 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">{{ recipe.title }}</h3>
            <p class="text-gray-500 text-sm mt-1">{{ recipe.description }}</p>
            <NuxtLink
              :to="`/recipe/${recipe.slug}`"
              class="mt-4 inline-block text-primary font-semibold hover:underline"
            >
              View Details →
            </NuxtLink>
          </div>
        </div>
      </div>
  
      <div v-else class="text-center text-gray-600 text-lg mt-16">
        You haven't added any favorite recipes yet.
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const favoriteRecipes = ref([
    {
      title: 'Spaghetti Carbonara',
      image: 'https://source.unsplash.com/400x300/?pasta',
      slug: 'spaghetti-carbonara',
      description: 'Classic Italian pasta with creamy sauce and bacon.'
    },
    {
      title: 'Avocado Toast',
      image: 'https://source.unsplash.com/400x300/?avocado-toast',
      slug: 'avocado-toast',
      description: 'Healthy and quick breakfast option with avocado and eggs.'
    },
    {
      title: 'Chicken Caesar Salad',
      image: 'https://source.unsplash.com/400x300/?salad',
      slug: 'chicken-caesar-salad',
      description: 'Fresh romaine lettuce with grilled chicken and Caesar dressing.'
    },
    // 你可以继续添加更多菜谱
  ])
  </script>
  
  <style scoped>
  .text-primary {
    color: #383863;
  }
  .bg-light-gray {
    background-color: #efedec;
  }
  </style>
  