<template>
  <header class="site-header">
    <div class="header-left">
      <NuxtLink to="/"> <img src="/assets/images/logo.png" alt="Logo" class="logo" /> </NuxtLink>
    </div>

    <div class="header-center">
      <nav class="nav-box">
        <ul class="nav-menu">
          <li>
            <NuxtLink to="/" :class="{ active: $route.path === '/' }">Home</NuxtLink>
          </li>

          <!-- Recipes with dropdown -->
          <li
            class="nav-item-dropdown"
            :class="{ active: $route.path.startsWith('/category') || $route.path === '/allrecipe' }"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <NuxtLink to="/allrecipe">Recipes ▾</NuxtLink>
            <transition name="fade">
              <ul v-if="showDropdown" class="dropdown-menu">
                <li><NuxtLink to="/category/breakfast">Breakfast</NuxtLink></li>
                <li><NuxtLink to="/category/lunch">Lunch</NuxtLink></li>
                <li><NuxtLink to="/category/dinner">Dinner</NuxtLink></li>
              </ul>
            </transition>
          </li>

          <li>
            <NuxtLink to="/meal" :class="{ active: $route.path === '/meal' }">Count Calories</NuxtLink>
          </li>

          <!-- About with dropdown -->
          <li
            class="nav-item-dropdown"
            :class="{ active: ['/about', '/help', '/contact'].includes($route.path) }"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <NuxtLink to="/about">About Us ▾</NuxtLink>
            <transition name="fade">
              <ul v-if="showDropdown" class="dropdown-menu">
                <li><NuxtLink to="/help">Help / FAQ</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>
    </div>

    <div class="header-right">
      <div v-if="isLoggedIn" class="user-avatar" @click="goToProfile">
        <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User Avatar" class="avatar" />
      </div>
      <NuxtLink v-else to="/login" class="login-btn">Login</NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const isLoggedIn = ref(false)
const showDropdown = ref(false)

const router = useRouter()
const $route = useRoute()

onMounted(() => {
  if (process.client) {
    isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
  }
})

const goToProfile = () => {
  router.push('/profile')
}
</script>

<style scoped>


</style>
