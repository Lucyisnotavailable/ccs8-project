<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- 左边 Support 和 Team 左右排列 -->
      <div class="footer-left">
        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><NuxtLink to="/help">Help / FAQ</NuxtLink></li>
            <li><NuxtLink to="/terms">Terms & Conditions</NuxtLink></li>
            <li><NuxtLink to="/credits">Credits</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Team</h4>
          <ul>
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- 中间 Logo -->
      <div class="footer-logo">
        <NuxtLink to="/">
          <img src="/assets/images/logo.png" alt="Logo" class="logo" />
        </NuxtLink>
      </div>

      <!-- 右边 Site Map 分成两列 -->
      <div class="footer-right">
        <div class="footer-section">
          <h4>Site Map</h4>
          <div class="sitemap-columns">
            <ul class="sitemap-column">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/meal">Calorie Calculator</NuxtLink></li>
              <li><NuxtLink to="/profile">Profile</NuxtLink></li>
            </ul>
            <ul class="sitemap-column">
              <li><NuxtLink to="/category/breakfast">Breakfast</NuxtLink></li>
              <li><NuxtLink to="/category/lunch">Lunch</NuxtLink></li>
              <li><NuxtLink to="/categor/dinner">Dinner</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 收藏菜谱按钮 -->
    <button class="favorites-btn" @click="goToFavorites">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>

    <!-- 回到顶部按钮 -->
    <button class="back-to-top" @click="scrollToTop">↑</button>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const goToFavorites = () => {
  // 这里替换为你的收藏页面路由
  window.location.href = '/favorites';
  // 如果使用Nuxt路由，可以用：
  // navigateTo('/favorites');
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #383863;
  color: white;
  padding: 30px 60px;
  position: relative;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

/* 左边 Support 和 Team 左右排列 */
.footer-left {
  display: flex;
  gap: 60px;
  flex: 1;
  height: 100%;
}

.footer-section {
  min-width: 150px;
}

/* 确保所有标题对齐 */
.footer-section h4 {
  color: #c7b368;
  font-size: 20px;
  margin-bottom: 12px;
  height: 24px;
  display: flex;
  align-items: center;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section a {
  color: #efedec;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #c7b368;
}

/* 中间的 Logo */
.footer-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 40px;
}

.footer-logo img {
  width: 300px;
  height: auto;
  display: block;
}

/* 右边 Site Map 分成两列 - 向左移动 */
.footer-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  margin-right: 80px;
}

.sitemap-columns {
  display: flex;
  gap: 30px;
}

.sitemap-column {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 收藏菜谱按钮 */
.favorites-btn {
  position: fixed;
  bottom: 80px; /* 放在回到顶部按钮上方 */
  right: 24px;
  background-color: #c7b368dd;
  color: #383863;
  padding: 8px 10px;
  font-size: 16px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  opacity: 0.7;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.favorites-btn:hover {
  opacity: 1;
  background-color: #bfa94c;
}

.favorites-btn svg {
  width: 16px;
  height: 16px;
}

/* 回到顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: #c7b368dd;
  color: #383863;
  padding: 8px 10px;
  font-size: 16px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  opacity: 0.7;
  z-index: 1000;
}

.back-to-top:hover {
  opacity: 1;
  background-color: #bfa94c;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .footer {
    padding: 30px 20px;
  }
  
  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  
  .footer-logo {
    position: static;
    transform: none;
    padding: 20px 0;
    order: -1;
  }
  
  .footer-left, .footer-right {
    justify-content: center;
    width: 100%;
    text-align: center;
    margin-right: 0;
  }
  
  .sitemap-columns {
    justify-content: center;
  }
  
  .footer-section h4 {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer-left {
    flex-direction: column;
    gap: 20px;
  }
  
  .footer-logo img {
    width: 250px;
  }
  
  .sitemap-columns {
    flex-direction: column;
    gap: 0;
  }
  
  .favorites-btn {
    bottom: 70px;
    right: 20px;
    padding: 6px 8px;
  }
  
  .back-to-top {
    bottom: 20px;
    right: 20px;
  }
}
</style>