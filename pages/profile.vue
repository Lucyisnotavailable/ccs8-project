<template>
  <div class="profile-page">
    <!-- 主内容区 -->
    <div class="profile-container">
      <!-- 用户信息卡片 -->
      <div class="profile-card">
        <!-- 用户头像 -->
        <div class="avatar-container">
          <img src="https://via.placeholder.com/200" alt="User Avatar" class="avatar">
        </div>
        
        <!-- 个人信息 -->
        <div class="info-section">
          <h1 class="username">Lucy</h1>
          <p class="user-title">User</p>
          
          <!-- 用户统计信息 -->
          <div class="stats-container">
            <div class="stat-item">
              <span class="stat-number">128</span>
              <span class="stat-label">Recipes</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">42</span>
              <span class="stat-label">Following</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">356</span>
              <span class="stat-label">Followers</span>
            </div>
          </div>
          
          <div class="info-item">
            <label>Email</label>
            <p class="email">alex@recipeplanner.com</p>
          </div>
        </div>
        
        <!-- 登出按钮 -->
        <button class="logout-button">Logout</button>
      </div>

      <!-- 收藏菜谱部分 -->
      <div class="favorites-section">
        <div class="section-header">
          <h2 class="section-title">Favorite Recipes</h2>
          <NuxtLink to="/favorites" class="view-all">View All →</NuxtLink>
        </div>
        <div class="recipes-grid">
          <div class="recipe-card">Recipe 1</div>
          <div class="recipe-card">Recipe 2</div>
          <div class="recipe-card">Recipe 3</div>
          <div class="recipe-card">Recipe 4</div>
          <div class="recipe-card">Recipe 5</div>
          <div class="recipe-card">Recipe 6</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 使用您的配色方案 */
.profile-page {
  --primary: #383863;
  --secondary: #c7b368;
  --light-gray: #efedec;
  --medium-gray: #959090;
}

/* 基础样式 - 加宽版 */
.profile-page {
  max-width: 1000px; /* 从800px增加到1000px */
  margin: 0 auto;
  padding: 30px 40px; /* 左右padding增大 */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--primary);
}

/* 主容器 */
.profile-container {
  display: flex;
  flex-direction: column;
  gap: 30px; /* 间距稍增大 */
}

/* 用户信息卡片 - 加宽 */
.profile-card {
  display: flex;
  align-items: center;
  background: white;
  padding: 40px 50px; /* 内边距增大 */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  position: relative;
}

.avatar {
  width: 140px; /* 头像稍大 */
  height: 140px;
  border-radius: 50%;
  border: 4px solid var(--secondary);
  object-fit: cover;
  margin-right: 40px; /* 右边距增大 */
}

.username {
  font-size: 32px; /* 用户名更大 */
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--primary);
}

.user-title {
  font-size: 20px; /* 用户标题更大 */
  color: var(--secondary);
  margin-bottom: 25px;
}

/* 用户统计信息 - 加宽 */
.stats-container {
  display: flex;
  gap: 40px; /* 间距增大 */
  margin-bottom: 25px;
  padding: 20px 0; /* 上下padding增大 */
  border-top: 1px solid var(--light-gray);
  border-bottom: 1px solid var(--light-gray);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px; /* 确保每个统计项有足够宽度 */
}

.stat-number {
  font-size: 26px; /* 数字更大 */
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 16px; /* 标签更大 */
  color: var(--medium-gray);
  margin-top: 8px;
}

.info-item label {
  font-size: 18px; /* 标签更大 */
  color: var(--medium-gray);
  display: block;
  margin-bottom: 8px;
}

.info-item p.email {
  font-weight: 500;
  font-size: 20px; /* 邮箱更大 */
}

/* 登出按钮 - 稍大 */
.logout-button {
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 18px;
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

/* 收藏菜谱部分 - 加宽 */
.favorites-section {
  background: white;
  padding: 35px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.section-title {
  font-size: 28px; /* 标题更大 */
  font-weight: 600;
  color: var(--primary);
}

.view-all {
  color: var(--secondary);
  text-decoration: none;
  font-size: 18px; /* 更大 */
  font-weight: 500;
  transition: all 0.2s;
}

.view-all:hover {
  text-decoration: underline;
  transform: translateX(5px); /* 悬停动画更明显 */
}

/* 食谱网格 - 每行显示更多 */
.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); /* 卡片更宽 */
  gap: 25px; /* 间距增大 */
}

.recipe-card {
  aspect-ratio: 1/1;
  background-color: var(--light-gray);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--medium-gray);
  font-size: 20px; /* 文字更大 */
  transition: all 0.2s;
  box-shadow: 0 3px 8px rgba(0,0,0,0.08);
}

.recipe-card:hover {
  transform: translateY(-8px) scale(1.05); /* 悬停效果更明显 */
  box-shadow: 0 8px 16px rgba(0,0,0,0.12);
}

/* 响应式设计 */
@media (max-width: 1100px) {
  .profile-page {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
    padding: 30px;
    text-align: center;
  }
  
  .avatar {
    margin-right: 0;
    margin-bottom: 25px;
    width: 120px;
    height: 120px;
  }
  
  .stats-container {
    justify-content: center;
    gap: 25px;
  }
  
  .logout-button {
    position: static;
    margin-top: 25px;
    width: 100%;
  }
  
  .recipes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>