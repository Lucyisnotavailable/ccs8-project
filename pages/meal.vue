<template>
  <div class="calorie-tracker">
    <div class="container">
      <section class="about-hero">
        <h1>Calorie Calculator</h1>
        <p class="subtitle">Track your calorie intake every moment of every day</p>
      </section>
  
      <div class="cccontainer">
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
            class="meal-cardd"
          >
            <div class="meal-header">
              <h3>{{ meal.type }}</h3>
              <button class="edit-btn" @click="openModal(currentDayIndex, mealIndex)">✏️</button>
            </div>
            <p class="meal-food">{{ meal.food || 'Click edit to add food' }}</p>
            <p class="meal-calories">{{ meal.calories }} kcal</p>
          </div>
        </div>

        <!-- Summary Section - First Row -->
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
        </div>

        <!-- Summary Section - Second Row -->
        <div class="summary-section">
          <div class="summary-card weight-card">
            <div class="summary-icon">⚖️</div>
            <div class="summary-content">
              <h4>Your Weight</h4>
              <div class="weight-input">
                <input
                  type="number"
                  v-model="weight"
                  placeholder="kg"
                  @change="calculateGoalFromWeight"
                />
                <button 
                  @click="applySuggestedGoal" 
                  class="apply-goal-btn"
                >
                  Apply
                </button>
              </div>
              <p class="suggested-goal" v-if="suggestedDailyGoal > 0">
                Suggested: {{ Math.round(suggestedDailyGoal) }} kcal
              </p>
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
                  @change="saveData"
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
          <input v-model.number="editingMeal.calories" type="number" placeholder="Enter calories..." />
          <div class="modal-buttons">
            <button @click="saveMeal" class="save-btn">Save</button>
            <button @click="startClose" class="cancel-btn">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

// 获取餐食模板
function getMealTemplate() {
  return [
    { type: 'Breakfast', food: '', calories: 0 },
    { type: 'Lunch', food: '', calories: 0 },
    { type: 'Dinner', food: '', calories: 0 },
    { type: 'Snack', food: '', calories: 0 }
  ]
}

// 获取周模板
function getWeekTemplate() {
  return [
    { day: 'Monday', meals: getMealTemplate() },
    { day: 'Tuesday', meals: getMealTemplate() },
    { day: 'Wednesday', meals: getMealTemplate() },
    { day: 'Thursday', meals: getMealTemplate() },
    { day: 'Friday', meals: getMealTemplate() },
    { day: 'Saturday', meals: getMealTemplate() },
    { day: 'Sunday', meals: getMealTemplate() }
  ]
}

// 加载数据（添加客户端检查）
function loadCalorieData() {
  // 只在客户端访问 localStorage
  if (process.client && typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('calorieData')
    return saved ? JSON.parse(saved) : {
      week: getWeekTemplate(),
      calorieGoal: 2100,
      weight: null,
      suggestedDailyGoal: 0
    }
  }
  // 服务器端返回默认值
  return {
    week: getWeekTemplate(),
    calorieGoal: 2100,
    weight: null,
    suggestedDailyGoal: 0
  }
}

// 保存数据（添加客户端检查）
function saveCalorieData(data) {
  if (process.client && typeof localStorage !== 'undefined') {
    localStorage.setItem('calorieData', JSON.stringify(data))
  }
}

// 响应式数据
const calorieData = ref(loadCalorieData())
const currentDayIndex = ref(0)
const showModal = ref(false)
const closing = ref(false)
const editingMeal = ref({ type: '', food: '', calories: 0 })
const selectedDayIndex = ref(null)
const selectedMealIndex = ref(null)

// 在客户端挂载时重新加载数据
onMounted(() => {
  if (process.client) {
    calorieData.value = loadCalorieData()
  }
})

// 从calorieData中解构出需要的数据
const week = computed({
  get: () => calorieData.value.week,
  set: (value) => {
    calorieData.value.week = value
    saveCalorieData(calorieData.value)
  }
})

const calorieGoal = computed({
  get: () => calorieData.value.calorieGoal,
  set: (value) => {
    calorieData.value.calorieGoal = value
    saveCalorieData(calorieData.value)
  }
})

const weight = computed({
  get: () => calorieData.value.weight,
  set: (value) => {
    calorieData.value.weight = value
    saveCalorieData(calorieData.value)
  }
})

const suggestedDailyGoal = computed({
  get: () => calorieData.value.suggestedDailyGoal,
  set: (value) => {
    calorieData.value.suggestedDailyGoal = value
    saveCalorieData(calorieData.value)
  }
})

// 计算某天总卡路里
function calculateDayCalories(meals) {
  return meals.reduce((total, meal) => total + Number(meal.calories), 0)
}

// 计算周总卡路里
function calculateWeekCalories() {
  return week.value.reduce(
    (total, day) => total + calculateDayCalories(day.meals), 0
  )
}

// 计算进度条样式
const progressBarStyle = computed(() => {
  const dayCalories = calculateDayCalories(week.value[currentDayIndex.value].meals)
  const progress = Math.min(dayCalories / calorieGoal.value * 100, 100)
  const color = progress > 100 ? '#ef4444' : '#10b981'
  return {
    width: `${progress}%`,
    backgroundColor: color
  }
})

// 计算进度百分比
const progressPercentage = computed(() => {
  const dayCalories = calculateDayCalories(week.value[currentDayIndex.value].meals)
  return Math.round(Math.min(dayCalories / calorieGoal.value * 100, 100))
})

// 打开编辑模态框
function openModal(dayIndex, mealIndex) {
  selectedDayIndex.value = dayIndex
  selectedMealIndex.value = mealIndex
  editingMeal.value = { ...week.value[dayIndex].meals[mealIndex] }
  showModal.value = true
  closing.value = false
}

// 关闭模态框
function startClose() {
  closing.value = true
  setTimeout(() => {
    showModal.value = false
  }, 300)
}

// 保存餐食
function saveMeal() {
  week.value[selectedDayIndex.value].meals[selectedMealIndex.value] = { 
    ...editingMeal.value 
  }
  startClose()
}

// 清除所有数据
function clearAll() {
  week.value = getWeekTemplate()
}

// 根据体重计算建议目标
function calculateGoalFromWeight() {
  if (!weight.value) return
  suggestedDailyGoal.value = weight.value * 30 // 30 kcal per kg
}

// 应用建议的目标
function applySuggestedGoal() {
  if (suggestedDailyGoal.value > 0) {
    calorieGoal.value = Math.round(suggestedDailyGoal.value)
  }
}

// 保存数据
function saveData() {
  saveCalorieData(calorieData.value)
}

// 监听数据变化自动保存
watch(calorieData, (newVal) => {
  saveCalorieData(newVal)
}, { deep: true })
</script>

<style scoped>
/* 保持原有的所有样式不变 */
.calorie-tracker {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 2rem auto;
  font-family: 'Segoe UI', sans-serif;
}

.container {
  padding: 0 1rem 1rem;
}

.cccontainer {
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  background: #ffffff;
}

.about-hero {
  text-align: center;
  margin-bottom: 2rem;
}

.about-hero h1 {
  font-size: 2.75rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #64748b;
  margin: 0 auto;
  max-width: 700px;
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
  margin-bottom: 2rem;
}

.meal-cardd {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  border: 1px solid #e2e8f0;
}

.meal-cardd:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.meal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.meal-header h3 {
  color: #1e293b;
  margin: 0;
}

.edit-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #64748b;
  transition: 0.3s;
}

.edit-btn:hover {
  color: #383863;
}

.meal-food {
  font-weight: bold;
  color: #1e293b;
  margin: 0.5rem 0;
}

.meal-calories {
  color: #64748b;
  margin: 0;
}

/* Summary Section */
.summary-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
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
  border: 1px solid #e2e8f0;
}

.summary-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.goal-card, .weight-card {
  flex-direction: column;
  align-items: stretch;
}

.summary-icon {
  font-size: 2rem;
  background: #f1f5f9;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #383863;
}

.summary-content {
  flex-grow: 1;
}

.summary-content h4 {
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.summary-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  line-height: 1;
}

.summary-value span {
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
}

.summary-day, .summary-range {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

/* Goal Input */
.goal-input {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.goal-input input {
  flex-grow: 1;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
}

.goal-input span {
  color: #64748b;
  font-size: 0.9rem;
}

.progress-container {
  margin-top: 1rem;
}

.progress-bar {
  height: 8px;
  border-radius: 4px;
  background: #e2e8f0;
  overflow: hidden;
}

.progress-text {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #64748b;
  text-align: right;
}

/* Weight Input */
.weight-input {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.weight-input input {
  flex-grow: 1;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
}

.apply-goal-btn {
  background: #383863;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

.apply-goal-btn:hover {
  background: #2d2d4a;
}

.suggested-goal {
  color: #64748b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* Modal */
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
  border: 1px solid #e2e8f0;
}

.modal-content h3 {
  color: #1e293b;
  margin-top: 0;
}

.modal-content input {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 1rem;
}

.save-btn {
  background-color: #383863;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.cancel-btn {
  background-color: #e2e8f0;
  color: #383863;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.save-btn:hover {
  background-color: #2d2d4a;
}

.cancel-btn:hover {
  background-color: #d1d5db;
}

/* Animations */
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

/* Responsive Design */
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
  
  .about-hero h1 {
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