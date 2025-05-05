<template>
  <div class="calorie-tracker">
    <div class="container">
      <h1 class="title">Calorie Calculator</h1>

      <!-- Day Selector -->
      <div class="day-selector">
        <button
          v-for="(day, index) in week"
          :key="index"
          :class="['day-button', { active: index === currentDayIndex }]"
          @click="currentDayIndex = index"
        >
          {{ day.day }}
        </button>
        <button class="clear-button" @click="clearAll">🗑️ Clear All</button>
      </div>

      <!-- Meals Display -->
      <div class="meals">
        <div
          v-for="(meal, mealIndex) in week[currentDayIndex].meals"
          :key="mealIndex"
          class="meal-card"
        >
          <div class="meal-header">
            <h3>{{ meal.type }}</h3>
            <button class="edit-btn" @click="openModal(currentDayIndex, mealIndex)">✏️</button>
          </div>
          <p class="meal-food">{{ meal.food || 'Click edit to add food' }}</p>
          <p class="meal-calories">{{ meal.calories }} kcal</p>
        </div>
      </div>

      <!-- New Summary Section -->
      <div class="summary-section">
        <div class="summary-card">
          <div class="summary-icon">📅</div>
          <div class="summary-content">
            <h4>Daily Total</h4>
            <p class="summary-value">
              {{ calculateDayCalories(week[currentDayIndex].meals) }}
              <span>kcal</span>
            </p>
            <p class="summary-day">{{ week[currentDayIndex].day }}</p>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon">📊</div>
          <div class="summary-content">
            <h4>Weekly Total</h4>
            <p class="summary-value">
              {{ calculateWeekCalories() }}
              <span>kcal</span>
            </p>
            <p class="summary-range">Mon - Sun</p>
          </div>
        </div>

        <div class="summary-card goal-card">
          <div class="summary-icon">🎯</div>
          <div class="summary-content">
            <h4>Daily Goal</h4>
            <div class="goal-input">
              <input
                type="number"
                v-model="calorieGoal"
                placeholder="Set goal"
              />
              <span>kcal</span>
            </div>
            <div class="progress-container">
              <div 
                class="progress-bar"
                :style="progressBarStyle"
              ></div>
              <span class="progress-text">
                {{ progressPercentage }}% of goal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click="startClose">
      <div
        class="modal-content"
        :class="{ 'animated-modal': !closing, 'closing-modal': closing }"
        @click.stop
      >
        <h3>Edit {{ editingMeal.type }}</h3>
        <input v-model="editingMeal.food" placeholder="Enter food name..." />
        <input v-model="editingMeal.calories" type="number" placeholder="Enter calories..." />
        <div class="modal-buttons">
          <button @click="saveMeal" class="save-btn">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

function mealTemplate() {
  return [
    { type: 'Breakfast', food: '', calories: 0 },
    { type: 'Lunch', food: '', calories: 0 },
    { type: 'Dinner', food: '', calories: 0 },
    { type: 'Snack', food: '', calories: 0 }
  ]
}

const week = ref([
  { day: 'Monday', meals: mealTemplate() },
  { day: 'Tuesday', meals: mealTemplate() },
  { day: 'Wednesday', meals: mealTemplate() },
  { day: 'Thursday', meals: mealTemplate() },
  { day: 'Friday', meals: mealTemplate() },
  { day: 'Saturday', meals: mealTemplate() },
  { day: 'Sunday', meals: mealTemplate() }
])

const currentDayIndex = ref(0)
const showModal = ref(false)
const closing = ref(false)
const selectedDayIndex = ref(null)
const selectedMealIndex = ref(null)
const editingMeal = ref({ type: '', food: '', calories: 0 })
const calorieGoal = ref(2100)

// 计算进度条样式
const progressBarStyle = computed(() => {
  const progress = Math.min(calculateDayCalories(week.value[currentDayIndex.value].meals) / calorieGoal.value * 100, 100)
  const color = progress > 100 ? '#ef4444' : '#10b981'
  return {
    width: `${progress}%`,
    backgroundColor: color
  }
})

// 计算进度百分比
const progressPercentage = computed(() => {
  return Math.round(
    Math.min(calculateDayCalories(week.value[currentDayIndex.value].meals) / calorieGoal.value * 100, 100)
  )
})

const openModal = (dayIndex, mealIndex) => {
  selectedDayIndex.value = dayIndex
  selectedMealIndex.value = mealIndex
  editingMeal.value = { ...week.value[dayIndex].meals[mealIndex] }
  showModal.value = true
  closing.value = false
}

const startClose = () => {
  closing.value = true
  setTimeout(() => {
    showModal.value = false
  }, 300)
}

const saveMeal = () => {
  if (selectedDayIndex.value !== null && selectedMealIndex.value !== null) {
    week.value[selectedDayIndex.value].meals[selectedMealIndex.value] = { ...editingMeal.value }
  }
  startClose()
}

const calculateDayCalories = (meals) => {
  return meals.reduce((total, meal) => total + Number(meal.calories), 0)
}

const calculateWeekCalories = () => {
  return week.value.reduce((weekTotal, day) => weekTotal + calculateDayCalories(day.meals), 0)
}

const clearAll = () => {
  week.value = week.value.map(day => ({ day: day.day, meals: mealTemplate() }))
}
</script>

<style scoped>
.calorie-tracker {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* 增大宽度 */
  margin: 2rem auto; /* 增加上下间距 */
  font-family: 'Segoe UI', sans-serif;
}

.container {
  border-radius: 16px;
  padding: 3rem; /* 增加内边距，增加上下左右的空间 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #383863;
}

.day-selector {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.day-button {
  padding: 0.5rem 1rem;
  border: 2px solid #383863;
  background: white;
  color: #383863;
  font-weight: bold;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.day-button.active,
.day-button:hover {
  background: #383863;
  color: white;
}

.clear-button {
  padding: 0.5rem 1.2rem;
  background: #dc2626;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: background 0.3s;
}

.clear-button:hover {
  background: #b91c1c;
}

.meals {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.meal-card {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.meal-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.meal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.edit-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0.6;
  transition: 0.3s;
}

.edit-btn:hover {
  opacity: 1;
}

.meal-food {
  font-weight: bold;
  margin-top: 0.5rem;
  color: #333;
}

.meal-calories {
  color: #777;
  margin-top: 0.2rem;
}

/* 新的总计部分样式 */
.summary-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.summary-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1.2rem;
  transition: transform 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.goal-card {
  flex-direction: column;
  align-items: stretch;
}

.summary-icon {
  font-size: 2rem;
  background: #f3f4f6;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.summary-content {
  flex-grow: 1;
}

.summary-content h4 {
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.summary-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  line-height: 1;
}

.summary-value span {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
}

.summary-day, .summary-range {
  color: #9ca3af;
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

/* 目标设置部分 */
.goal-input {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.goal-input input {
  flex-grow: 1;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
}

.goal-input span {
  color: #6b7280;
  font-size: 0.9rem;
}

.progress-container {
  margin-top: 1rem;
  position: relative;
}

.progress-bar {
  height: 8px;
  border-radius: 4px;
  background: #e5e7eb;
  overflow: hidden;
}

.progress-bar > div {
  height: 100%;
  transition: width 0.3s ease;
}

.progress-text {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #6b7280;
  text-align: right;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.modal-content input {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.modal-buttons {
  margin-top: 1rem;
}

.save-btn {
  background-color: #4CAF50;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.save-btn:hover {
  background-color: #45a049;
}

@keyframes zoomInFade {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes zoomOutFade {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}

.animated-modal {
  animation: zoomInFade 0.3s ease forwards;
}

.closing-modal {
  animation: zoomOutFade 0.3s ease forwards;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
  }
  
  .summary-section {
    grid-template-columns: 1fr;
  }
  
  .summary-card {
    padding: 1.25rem;
  }
  
  .summary-value {
    font-size: 1.75rem;
  }
  
  .meals {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .calorie-tracker {
    padding: 1rem;
  }
  
  .container {
    padding: 1rem;
  }
  
  .title {
    font-size: 1.75rem;
  }
  
  .meals {
    grid-template-columns: 1fr;
  }
  
  .summary-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
}
</style>