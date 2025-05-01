<template>
  <footer class="site-footer">
    <!-- 左侧信息 -->
    <div class="footer-left">
      <h3 class="footer-title">Information</h3>
      <div class="info-columns">
        <div class="info-column">
          <h4 class="category-title">Company</h4>
          <ul class="info-links">
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
          </ul>
        </div>
        <div class="info-column">
          <h4 class="category-title">Support</h4>
          <ul class="info-links">
            <li><NuxtLink to="/help">Help / FAQ</NuxtLink></li>
            <li><NuxtLink to="/terms">Terms & Conditions</NuxtLink></li>
            <li><NuxtLink to="/credits">Credits</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 中间 Logo -->
    <div class="footer-center">
      <img src="https://via.placeholder.com/80x80?text=Logo" alt="Logo" class="footer-logo" />
    </div>

    <!-- 右侧 Chatbox -->
    <div class="footer-right">
      <div class="chatbox-container">
        <div class="chat-box">
          <p>Welcome! How can I assist you today?</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 无需脚本逻辑
</script>

<style scoped>
.site-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #383863;
  padding: 20px 40px;
  color: white;
  flex-wrap: wrap;
  position: relative;
}

/* 左侧信息 */
.footer-left {
  flex: 1;
  min-width: 300px;
}

.footer-title {
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: bold;
  color: #c7b368;
}

.info-columns {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.info-column {
  flex: 1;
}

.category-title {
  font-size: 20px;
  color: #c7b368;
  font-weight: bold;
  margin-bottom: 10px;
}

.info-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-links li {
  margin-bottom: 8px;
}

.info-links a {
  color: #efedec;
  text-decoration: none;
  transition: color 0.3s;
}

.info-links a:hover {
  color: #c7b368;
}

/* 中间 Logo 居中 */
.footer-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 120px;
  margin: 0 40px;
}

.footer-logo {
  width: 80px;
  height: 80px;
}

/* 右侧 Chatbox（缩小尺寸 + 灰色背景 + 无圆角） */
.footer-right {
  flex: 1;
  min-width: 200px;
  display: flex;
  justify-content: flex-end;
}

.chatbox-container {
  background-color: #959090; /* 灰色背景 */
  padding: 10px;
  height: 160px;
  width: 220px;
}

.chat-box {
  background-color: #efedec; /* 更浅灰色 */
  color: #383863;
  padding: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0; /* 无圆角 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .site-footer {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .footer-left,
  .footer-center,
  .footer-right {
    min-width: 100%;
    justify-content: center;
  }

  .info-columns {
    flex-direction: column;
    gap: 10px;
  }

  .footer-right {
    padding-left: 0;
    justify-content: center;
  }
}
</style>
