<template>
  <div class="min-h-screen bg-light-gray py-10 px-4 sm:px-10">
    <!-- 页面标题 -->
    <h1 class="text-3xl font-bold text-primary mb-8 text-center">My Favorite Recipes</h1>

    <!-- 无收藏情况 -->
    <div v-if="favorites.length === 0" class="text-center text-medium-gray">
      <p class="text-xl mb-4">There is nothing here</p>
      <img src="https://via.placeholder.com/250x150?text=No+Favorites" alt="No Favorites" class="mx-auto rounded" />
    </div>

    <!-- 有收藏菜谱 -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="recipe in favorites" 
        :key="recipe.id" 
        class="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col justify-between"
      >
        <img 
          :src="recipe.image || 'https://via.placeholder.com/300x200'" 
          :alt="recipe.title" 
          class="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h2 class="text-lg font-semibold text-center text-primary mb-3">{{ recipe.title }}</h2>
        <NuxtLink 
          :to="`/recipes/${recipe.id}`"
          class="block text-center text-sm text-secondary hover:underline mt-auto"
        >
          查看详情 →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import recipes from '@/data/recipes.js' // 假设你已经创建好的食谱数据文件

const favorites = ref([])

onMounted(() => {
  const saved = localStorage.getItem('savedRecipes')
  const savedIds = saved ? JSON.parse(saved) : []

  favorites.value = recipes.filter(recipe => savedIds.includes(recipe.id))
})
</script>

<style scoped>
:root {
  --primary: #383863;
  --secondary: #c7b368;
  --light-gray: #efedec;
  --medium-gray: #959090;
}

.text-primary {
  color: var(--primary);
}

.text-secondary {
  color: var(--secondary);
}

.bg-light-gray {
  background-color: var(--light-gray);
}

.text-medium-gray {
  color: var(--medium-gray);
}
</style>
