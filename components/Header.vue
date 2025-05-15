<template>
  <div>
    <!-- 手机端遮罩层 -->
    <div 
      v-if="isMobileMenuOpen && !isDesktop" 
      class="mobile-menu-overlay"
      @click="toggleMobileMenu"
    ></div>

    <header class="site-header">
      <!-- 左侧汉堡按钮（手机端显示） -->
      <div class="hamburger-wrapper" v-if="!isDesktop" @click="toggleMobileMenu">
        <div class="hamburger" :class="{ active: isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <!-- 中间 LOGO -->
      <div class="header-left">
        <NuxtLink to="/">
          <img src="/assets/images/logo.png" alt="Logo" class="logo" />
        </NuxtLink>
      </div>

      <!-- 中间导航菜单 -->
      <div :class="['header-center', { open: isMobileMenuOpen }]">
        <nav class="nav-box">
          <ul class="nav-menu">
            <li>
              <NuxtLink 
                to="/" 
                :class="{ active: $route.path === '/' }"
                @click="closeMobileMenu"
              >
                Home
              </NuxtLink>
            </li>

            <!-- Recipes Dropdown -->
            <li
              class="nav-item-dropdown"
              :class="{ active: dropdownActive === 'recipes' }"
              @click.stop="toggleDropdown('recipes')"
            >
              <NuxtLink to="/allrecipe" @click="handleDropdownLinkClick($event, 'recipes')">
                Recipes <span class="dropdown-arrow">▾</span>
              </NuxtLink>
              <ul
                class="dropdown-menu"
                v-show="isDesktop || dropdownActive === 'recipes'"
              >
                <li><NuxtLink to="/category/breakfast" @click="closeMobileMenu">Breakfast</NuxtLink></li>
                <li><NuxtLink to="/category/lunch" @click="closeMobileMenu">Lunch</NuxtLink></li>
                <li><NuxtLink to="/category/dinner" @click="closeMobileMenu">Dinner</NuxtLink></li>
              </ul>
            </li>

            <!-- Count Calories -->
            <li>
              <NuxtLink 
                to="/meal" 
                :class="{ active: $route.path === '/meal' }"
                @click="closeMobileMenu"
              >
                Count Calories
              </NuxtLink>
            </li>

            <!-- About Us Dropdown -->
            <li
              class="nav-item-dropdown"
              :class="{ active: dropdownActive === 'about' }"
              @click.stop="toggleDropdown('about')"
            >
              <NuxtLink to="/about" @click="handleDropdownLinkClick($event, 'about')">
                About Us <span class="dropdown-arrow">▾</span>
              </NuxtLink>
              <ul
                class="dropdown-menu"
                v-show="isDesktop || dropdownActive === 'about'"
              >
                <li><NuxtLink to="/help" @click="closeMobileMenu">Help / FAQ</NuxtLink></li>
                <li><NuxtLink to="/contact" @click="closeMobileMenu">Contact Us</NuxtLink></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <!-- 右侧头像或登录 -->
      <div class="header-right">
        <div v-if="isLoggedIn" class="user-avatar" @click="goToProfile">
          <img src="/public/cute.jpg" alt="User Avatar" class="avatar" />
        </div>
        <NuxtLink v-else to="/login" class="login-btn">Login</NuxtLink>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isLoggedIn = ref(false)
const isMobileMenuOpen = ref(false)
const dropdownActive = ref(null)
const $route = useRoute()
const router = useRouter()
const isDesktop = ref(true)

onMounted(() => {
  if (process.client) {
    isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    document.addEventListener('click', handleClickOutside)
  }
})

const checkScreenSize = () => {
  isDesktop.value = window.innerWidth > 768
  if (isDesktop.value) {
    closeMobileMenu()
  }
}

const toggleDropdown = (menu) => {
  if (!isDesktop.value) {
    dropdownActive.value = dropdownActive.value === menu ? null : menu
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    dropdownActive.value = null
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  dropdownActive.value = null
}

const handleDropdownLinkClick = (event, menu) => {
  if (dropdownActive.value === menu) {
    event.preventDefault()
    toggleDropdown(menu)
  }
}

const goToProfile = () => {
  closeMobileMenu()
  router.push('/profile')
}

const handleClickOutside = (event) => {
  const headerCenter = document.querySelector('.header-center')
  const hamburger = document.querySelector('.hamburger-wrapper')
  if (isMobileMenuOpen.value && 
      !headerCenter?.contains(event.target) && 
      !hamburger?.contains(event.target)) {
    closeMobileMenu()
  }
}

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('resize', checkScreenSize)
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>




<style scoped>
/* ===== 桌面端样式 ===== */
@media screen and (min-width: 769px) {
  .header-center {
    flex: 1;
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }

  .nav-box {
    background-color: #efedec;
    padding: 12px 28px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-menu {
    list-style: none;
    display: flex;
    gap: 35px;
    position: relative;
  }

  .nav-menu li a {
    text-decoration: none;
    color: #383863;
    font-size: 20px;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  .nav-menu li.active > a,
  .nav-item-dropdown.active > a,
  .nav-menu li a.active {
    color: white !important;
    background-color: var(--primary);
  }

  .dropdown-menu li a.active {
    color: white !important;
    background-color: var(--primary);
  }

  .dropdown-menu {
    position: absolute;
    top: 30px;
    left: 0;
    background-color: #efedec !important;
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    min-width: 160px;
    z-index: 100;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, visibility 0s 0.3s;
  }

  .nav-item-dropdown:hover .dropdown-menu {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .dropdown-menu li a {
    padding: 12px 20px;
    display: block;
    color: #383863;
    font-size: 18px;
  }

  .dropdown-menu li a:hover {
    background-color: var(--primary);
    color: white;
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .login-btn {
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding: 8px 16px;
    background-color: #ffffff22;
    border-radius: 8px;
    transition: background-color 0.3s;
  }

  .login-btn:hover {
    background-color: #ffffff55;
  }

  .mobile-menu-overlay {
    display: none; /* 桌面不显示遮罩层 */
  }
}

/* ===== 移动端样式 ===== */
@media screen and (max-width: 768px) {
  .site-header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 8px 16px;
    height: 60px;
    gap: 10px;
    position: relative;
    z-index: 1100;
  }

  .hamburger-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1100;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }

  .hamburger span {
    display: block;
    width: 24px;
    height: 3px;
    background-color: #efedec;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .hamburger.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .header-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-left .logo {
    height: 34px;
    max-width: 100px;
    width: auto;
  }

  .header-center {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #efedec;
    z-index: 1100;
    display: block;
    transition: all 0.3s ease;
    max-height: 0;
    opacity: 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 12px 12px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    transform: translateY(-5px);
  }

  .header-center.open {
    max-height: 80vh;
    opacity: 1;
  }

  .nav-box {
    background-color: transparent;
    padding: 0;
    box-shadow: none;
  }

  .nav-menu {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
  }

  .nav-menu li {
    border-bottom: 1px solid rgba(46, 46, 82, 0.1);
  }

  .nav-menu li:last-child {
    border-bottom: none;
  }

  .nav-menu li a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    color: #2e2e52;
    font-size: 16px;
    min-height: 48px;
  }

  .nav-menu li.active > a,
  .nav-item-dropdown.active > a,
  .nav-menu li a.active {
    color: white !important;
    background-color: var(--primary);
  }

  .dropdown-menu li a.active {
    color: white !important;
    background-color: var(--primary);
  }

  .dropdown-menu {
    background-color: #f5f5f5;
    position: static;
    box-shadow: none;
    display: none;
    animation: fadeIn 0.3s ease;
  }

  .nav-item-dropdown.active .dropdown-menu {
    display: block;
  }

  .dropdown-menu li a {
    padding-left: 36px;
    font-size: 15px;
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .user-avatar .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .login-btn {
    padding: 6px 14px;
    font-size: 14px;
    background-color: #383863;
    color: #efedec;
    border-radius: 6px;
  }

  .mobile-menu-overlay {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1050;
  }
}

/* 动画淡入效果 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
