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
        <NuxtLink to="/"> <img src="/assets/images/logo.png" alt="Logo" class="logo" />  </NuxtLink>
      </div>
    </div>

    <!-- 回到顶部按钮 -->
    <button class="back-to-top" @click="scrollToTop">↑</button>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #383863;
  color: white;
  padding: 20px 60px; /* 减少上下空白空间 */
  position: relative;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

/* 左边 Support 和 Team 左右排列 */
.footer-left {
  display: flex;
  gap: 60px; /* 左右排列间距 */
}

.footer-section {
  min-width: 200px;
}

.footer-section h4 {
  color: #c7b368;
  font-size: 20px;
  margin-bottom: 12px;
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

/* 中间的 Logo，确保它在页面绝对居中 */
.footer-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.footer-logo img {
  width: 300px;
  height: auto;
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
</style>
