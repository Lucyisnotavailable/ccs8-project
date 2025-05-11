<template>
  <div class="profile-page">
    <!-- Main Content Area -->
    <div class="profile-container">
      <!-- User Info Card -->
      <div class="profile-card">
        <!-- Left - Basic User Info -->
        <div class="user-basic">
          <div class="avatar-container">
            <img src="/public/cute.jpg" alt="User Avatar" class="avatar">
          </div>
          <div class="name-title">
            <h1 class="username">Lucy</h1>
            <p class="user-title">User</p>
          </div>
        </div>

        <!-- Right - Stats and Email -->
        <div class="user-details">
          <div class="stats-container">
            <div class="stat-item">
              <span class="stat-number">{{ favoriteRecipes.length }}</span>
              <span class="stat-label">Favorite Recipes</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ weeklyCalories }}</span>
              <span class="stat-label">Weekly Calorie Intake</span>
            </div>
          </div>
          
          <div class="info-item">
            <label>Email</label>
            <p class="email">lucyisnotavailable@gmail.com</p>
          </div>
        </div>

        <!-- Logout Button -->
        <button class="logout-button" @click="logout">Sign Out</button>
      </div>

      <!-- Weekly Calorie Check -->
      <div class="calorie-check-section">
        <div class="section-header">
          <h2 class="section-title">Weekly Nutrition Summary</h2>
          <NuxtLink to="/meal" class="view-all">View Calculator →</NuxtLink>
        </div>
        <div class="calorie-info">
          <div class="calorie-summary">
            <div class="summary-item">
              <span class="summary-label">Current Weekly Intake:</span>
              <span class="summary-value">{{ weeklyCalories }} kcal</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">Daily Goal:</span>
              <span class="summary-value">{{ calorieGoal }} kcal</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">Average Daily:</span>
              <span class="summary-value">{{ averageDailyCalories }} kcal</span>
            </div>
          </div>
          <div class="calorie-progress">
            <div class="progress-bar" :style="progressBarStyle"></div>
            <div class="progress-text">{{ progressPercentage }}% of weekly goal</div>
          </div>
        </div>
      </div>

      <!-- Favorite Recipes Section -->
      <div class="favorites-section">
        <div class="section-header">
          <h2 class="section-title">Favorite Recipes</h2>
          <NuxtLink to="/favorites" class="view-all">View All →</NuxtLink>
        </div>

        <!-- No favorites message -->
        <div v-if="favoriteRecipes.length === 0" class="no-favorites">
          <p class="text-xl mb-4">You haven't saved any recipes yet</p>
          <NuxtLink to="/recipes" class="discover-button">Explore Recipes →</NuxtLink>
        </div>

        <!-- Favorites grid -->
        <div v-else class="favorites-grid">
          <div 
            v-for="recipe in displayedFavorites" 
            :key="recipe.id" 
            class="favorite-card"
            @click="navigateToRecipe(recipe.id)"
          >
            <img 
              :src="recipe.image || 'https://via.placeholder.com/300x200'" 
              :alt="recipe.title" 
              class="recipe-image"
            />
            <div class="recipe-details">
              <h3 class="recipe-title">{{ recipe.title }}</h3>
              <div class="recipe-meta">
                <span class="time">{{ recipe.time }} mins</span>
                <span class="calories">{{ recipe.calories }} kcal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import recipes from '~/data/recipes.js';

const router = useRouter();
const favoriteRecipes = ref([]);

// 卡路里数据相关
const calorieData = ref({
  week: [],
  calorieGoal: 2100
});

// 加载数据
onMounted(() => {
  // 加载收藏食谱
  const savedIds = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
  favoriteRecipes.value = recipes.filter(recipe => savedIds.includes(recipe.id));
  
  // 加载卡路里数据
  const savedCalorieData = localStorage.getItem('calorieData');
  if (savedCalorieData) {
    calorieData.value = JSON.parse(savedCalorieData);
  }
});

// 计算周总卡路里
const weeklyCalories = computed(() => {
  if (!calorieData.value.week || calorieData.value.week.length === 0) return 0;
  return calorieData.value.week.reduce((total, day) => {
    return total + (day.meals?.reduce((dayTotal, meal) => dayTotal + Number(meal.calories), 0) || 0);
  }, 0);
});

// 计算平均每日卡路里
const averageDailyCalories = computed(() => {
  const daysWithData = calorieData.value.week.filter(day => 
    day.meals?.reduce((total, meal) => total + Number(meal.calories), 0) > 0
  ).length || 1;
  return Math.round(weeklyCalories.value / daysWithData);
});

// 计算进度百分比
const progressPercentage = computed(() => {
  const weeklyGoal = calorieData.value.calorieGoal * 7;
  return Math.min(Math.round((weeklyCalories.value / weeklyGoal) * 100), 100);
});

// 进度条样式
const progressBarStyle = computed(() => {
  const percentage = progressPercentage.value;
  const color = percentage > 100 ? '#ef4444' : '#10b981';
  return {
    width: `${percentage}%`,
    backgroundColor: color
  };
});

// 每日目标
const calorieGoal = computed(() => {
  return calorieData.value.calorieGoal || 2100;
});

// Display max 4 favorite recipes
const displayedFavorites = computed(() => {
  return favoriteRecipes.value.slice(0, 4);
});

// Navigate to recipe detail page
const navigateToRecipe = (id) => {
  router.push(`/recipes/${id}`);
};

// Logout function
const logout = () => {
  const confirmed = confirm("Are you sure you want to sign out?");
  if (confirmed) {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userSession');
    router.push('/login');
  }
};
</script>

<style scoped>
/* Color scheme */
.profile-page {
  --primary: #383863;
  --secondary: #c7b368;
  --light-gray: #efedec;
  --medium-gray: #959090;
}

/* Base styles */
.profile-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--primary);
}

/* Main container */
.profile-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* Profile card */
.profile-card {
  display: flex;
  flex-wrap: wrap;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  position: relative;
}

.user-basic {
  display: flex;
  align-items: center;
  width: 40%;
  min-width: 300px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid var(--secondary);
  object-fit: cover;
  margin-right: 20px;
}

.name-title {
  display: flex;
  flex-direction: column;
}

.username {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--primary);
}

.user-title {
  font-size: 16px;
  color: var(--secondary);
}

/* Right side details */
.user-details {
  width: 60%;
  padding-left: 40px;
  border-left: 1px solid var(--light-gray);
}

.stats-container {
  display: flex;
  gap: 30px;
  margin-bottom: 25px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 14px;
  color: var(--medium-gray);
  margin-top: 5px;
}

.info-item label {
  font-size: 14px;
  color: var(--medium-gray);
  display: block;
  margin-bottom: 5px;
}

.info-item p.email {
  font-weight: 500;
  font-size: 18px;
}

/* Logout button */
.logout-button {
  position: absolute;
  bottom: 25px;
  right: 25px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background: transparent;
  border: 2px solid #e74c3c;
  color: #e74c3c;
  transition: all 0.2s;
}

.logout-button:hover {
  background-color: #fdeaea;
  transform: scale(1.05);
}

/* Calorie check section - 更新后的样式 */
.calorie-check-section {
  background: white;
  padding: 35px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.calorie-info {
  font-size: 16px;
  color: var(--medium-gray);
}

.calorie-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.summary-item {
  display: flex;
  flex-direction: column;
}

.summary-label {
  font-size: 14px;
  color: var(--medium-gray);
  margin-bottom: 5px;
}

.summary-value {
  font-weight: 600;
  color: var(--primary);
}

.calorie-progress {
  margin-top: 25px;
}

.progress-bar {
  height: 8px;
  border-radius: 4px;
  background: #e2e8f0;
  margin-bottom: 8px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 14px;
  text-align: right;
  color: var(--medium-gray);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary);
}

.view-all {
  color: var(--secondary);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s;
}

.view-all:hover {
  text-decoration: underline;
  transform: translateX(3px);
}

/* Favorite recipes section */
.favorites-section {
  background: white;
  padding: 35px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.favorite-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 8px rgba(0,0,0,0.08);
  transition: all 0.2s;
  cursor: pointer;
}

.favorite-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.recipe-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.recipe-details {
  padding: 15px;
}

.recipe-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recipe-meta {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--medium-gray);
}

/* No favorites state */
.no-favorites {
  text-align: center;
  color: var(--medium-gray);
  padding: 40px 0;
}

.no-favorites p {
  font-size: 18px;
  margin-bottom: 20px;
}

.discover-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--secondary);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.discover-button:hover {
  background-color: #b89c4a;
}

/* Responsive design */
@media (max-width: 900px) {
  .user-basic,
  .user-details {
    width: 100%;
  }
  
  .user-details {
    padding-left: 0;
    border-left: none;
    border-top: 1px solid var(--light-gray);
    padding-top: 25px;
    margin-top: 25px;
  }
  
  .profile-card {
    padding: 30px;
  }
  
  .calorie-summary {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .user-basic {
    min-width: auto;
    flex-direction: column;
    text-align: center;
  }
  
  .avatar {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .favorites-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-container {
    flex-direction: column;
    gap: 15px;
  }
}
</style>