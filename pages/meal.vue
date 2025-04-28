<template>
  <div>
    <Header/>

    <div class="weekly-plan">
      <h1>Weekly Meal Plan</h1>

      <div v-for="(day, dayIndex) in week" :key="dayIndex" class="day-card">
        <h2>{{ day.day }}</h2>

        <div class="meals">
          <div v-for="(meal, mealIndex) in day.meals" :key="mealIndex" class="meal-card">
            <div class="meal-header">
              <h3>{{ meal.type }}</h3>
              <button class="edit-btn" @click="openModal(dayIndex, mealIndex)">✏️</button>
            </div>
            <p class="meal-food">{{ meal.food || 'Click edit to add food' }}</p>
            <p class="meal-calories">{{ meal.calories }} kcal</p>
          </div>
        </div>

        <p class="day-total">Total for {{ day.day }}: {{ calculateDayCalories(day.meals) }} kcal</p>
      </div>

      <div class="week-summary">
        <h2>Weekly Total: {{ calculateWeekCalories() }} kcal</h2>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click="startClose">
      <div 
        class="modal-content" 
        :class="{'animated-modal': !closing, 'closing-modal': closing}" 
        @click.stop
      >
        <h3>Edit {{ editingMeal.type }}</h3>
        <input v-model="editingMeal.food" placeholder="Enter food name..." />
        <input v-model="editingMeal.calories" placeholder="Enter calories..." type="number" />
        <div class="modal-buttons">
          <button @click="saveMeal" class="save-btn">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderComponent from '@/components/Header.vue'

const week = ref([
  { day: 'Monday', meals: mealTemplate() },
  { day: 'Tuesday', meals: mealTemplate() },
  { day: 'Wednesday', meals: mealTemplate() },
  { day: 'Thursday', meals: mealTemplate() },
  { day: 'Friday', meals: mealTemplate() },
  { day: 'Saturday', meals: mealTemplate() },
  { day: 'Sunday', meals: mealTemplate() }
])

function mealTemplate() {
  return [
    { type: 'Breakfast', food: '', calories: 0 },
    { type: 'Lunch', food: '', calories: 0 },
    { type: 'Dinner', food: '', calories: 0 },
    { type: 'Snack', food: '', calories: 0 }
  ]
}

const showModal = ref(false)
const closing = ref(false)
const selectedDayIndex = ref(null)
const selectedMealIndex = ref(null)
const editingMeal = ref({ type: '', food: '', calories: 0 })

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
</script>
