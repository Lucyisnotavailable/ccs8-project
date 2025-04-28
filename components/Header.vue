<template>
    <header class="site-header">
      <div class="header-left">
        <img src="https://via.placeholder.com/80x80?text=Logo" alt="Logo" class="logo" />
      </div>
  
      <div class="header-center">
        <nav class="nav-box">
          <ul class="nav-menu">
            <li><NuxtLink to="/">Home</NuxtLink></li>
  
            <!-- Recipes with pull downlist -->
            <li class="nav-item-dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
              <NuxtLink to="/recipe">Recipes ▾</NuxtLink>
              <transition name="fade">
                <ul v-if="showDropdown" class="dropdown-menu">
                  <li><NuxtLink to="/recipe/breakfast">Breakfast</NuxtLink></li>
                  <li><NuxtLink to="/recipe/lunch">Lunch</NuxtLink></li>
                  <li><NuxtLink to="/recipe/dinner">Dinner</NuxtLink></li>
                </ul>
              </transition>
            </li>
  
            <li><NuxtLink to="/meal">Meal Count</NuxtLink></li>
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
          </ul>
        </nav>
      </div>
  
      <div class="header-right">
        <div v-if="isLoggedIn" class="user-avatar" @click="navigateTo('/dashboard')">
          <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User Avatar" class="avatar">
        </div>
        <NuxtLink v-else to="/login" class="login-btn">Login</NuxtLink>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { navigateTo } from '#app'
  
  const isLoggedIn = ref(false)
  const showDropdown = ref(false)
  
  onMounted(() => {
    if (process.client) {
      isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
    }
  })
  </script>
  