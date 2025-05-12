<template>
  <div class="favorite-container">
    <div class="favorite-wrapper">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1>My Favorite Recipes</h1>
        <p>Your saved meals are listed here. Filter by type or manage your collection.</p>
      </div>

      <!-- 餐别筛选 -->
      <div class="filter-buttons">
        <button
          v-for="type in mealTypes"
          :key="type"
          @click="filterType = type"
          :class="['filter-btn', filterType === type ? 'active' : '']"
        >
          {{ type }}
        </button>
      </div>

      <!-- 批量操作 -->
      <div class="bulk-actions">
        <div class="left">
          <button
            @click="toggleSelectAll"
            class="link-button"
            :disabled="filteredFavorites.length === 0"
          >
            {{ selectAll ? 'Deselect All' : 'Select All' }}
          </button>
          <button
            @click="deleteSelected"
            :disabled="!selectedIds.length"
            class="delete-btn"
          >
            Delete Selected
          </button>
        </div>
        <div class="right">
          <span>{{ selectedIds.length }} selected</span>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="filteredFavorites.length === 0" class="empty-state">
        <p>No recipes found for {{ filterType }}</p>
        <NuxtLink :to="`/category/${filterType.toLowerCase()}`" class="back-link">
          Browse more {{ filterType }} recipes →
        </NuxtLink>
      </div>

      <!-- 收藏卡片 -->
      <div v-else class="card-grid">
        <div v-for="recipe in filteredFavorites" :key="recipe.id" class="recipe-card">
          <input
            type="checkbox"
            v-model="selectedIds"
            :value="recipe.id"
            class="checkbox"
          />
          <img
            :src="recipe.image || 'https://via.placeholder.com/300x200'"
            :alt="recipe.title"
            class="card-img"
          />
          <div class="card-content">
            <h2>{{ recipe.title }}</h2>
            <p class="meal-type">{{ recipe.type }}</p>
          </div>
          <NuxtLink :to="`/recipes/${recipe.id}`" class="details-link">
            View Details →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import recipes from '@/data/recipes.js'

const favorites = ref([])
const filterType = ref('All')
const mealTypes = ['All', 'Breakfast', 'Lunch', 'Dinner']
const selectedIds = ref([])
const selectAll = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('savedRecipes')
  const savedIds = saved ? JSON.parse(saved) : []
  favorites.value = recipes.filter(r => savedIds.includes(r.id))
})

const filteredFavorites = computed(() => {
  if (filterType.value === 'All') return favorites.value
  return favorites.value.filter(r =>
    r.type?.toLowerCase() === filterType.value.toLowerCase()
  )
})

watch(filteredFavorites, () => {
  if (selectAll.value) {
    selectedIds.value = filteredFavorites.value.map(r => r.id)
  } else {
    selectedIds.value = []
  }
})

const deleteSelected = () => {
  favorites.value = favorites.value.filter(r => !selectedIds.value.includes(r.id))
  selectedIds.value = []
  selectAll.value = false
  const updatedIds = favorites.value.map(r => r.id)
  localStorage.setItem('savedRecipes', JSON.stringify(updatedIds))
}

const toggleSelectAll = () => {
  selectAll.value = !selectAll.value
  selectedIds.value = selectAll.value ? filteredFavorites.value.map(r => r.id) : []
}
</script>

<style scoped>
.favorite-container {
  padding: 40px 20px 60px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
}

.favorite-wrapper {
  max-width: 1000px;
  width: 100%;
}

.page-header {
  text-align: center;
  margin-bottom: 32px;
}
.page-header h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--primary);
}
.page-header p {
  margin-top: 8px;
  color: var(--medium-gray);
  font-size: 1.1rem;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}
.filter-btn {
  padding: 10px 20px;
  border-radius: 9999px;
  background-color: white;
  border: 1px solid var(--light-gray);
  color: var(--primary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.filter-btn:hover {
  background-color: var(--light-gray);
}
.filter-btn.active {
  background-color: var(--secondary);
  border-color: var(--secondary);
  color: white;
}

.bulk-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 14px 20px;
  margin-bottom: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
}
.bulk-actions .left {
  display: flex;
  gap: 16px;
  align-items: center;
}
.bulk-actions .right {
  font-size: 14px;
  color: var(--medium-gray);
}

.link-button {
  background: none;
  border: none;
  color: var(--primary);
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
}
.link-button:hover {
  color: var(--secondary);
}

.delete-btn {
  background-color: white;
  color: #b91c1c;
  border: 1px solid #b91c1c;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
}
.delete-btn:hover {
  background-color: #b91c1c;
  color: white;
}
.delete-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.empty-state {
  text-align: center;
  color: var(--medium-gray);
  margin-top: 60px;
}
.empty-state p {
  font-size: 1.25rem;
  font-weight: 500;
}
.empty-state a {
  font-size: 14px;
  color: var(--secondary);
  text-decoration: underline;
}
.empty-state a:hover {
  color: var(--primary);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.recipe-card {
  position: relative;
  background-color: white;
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.recipe-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.checkbox {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: var(--primary);
}

.card-img {
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 12px;
}

.card-content {
  text-align: center;
}
.card-content h2 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 4px;
}
.card-content .meal-type {
  font-size: 13px;
  color: var(--medium-gray);
  text-transform: capitalize;
}

.details-link {
  margin-top: auto;
  font-size: 14px;
  color: var(--secondary);
  text-align: center;
  text-decoration: underline;
}
.details-link:hover {
  color: var(--primary);
}
</style>
