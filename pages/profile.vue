<template>
  <div class="profile-page">
    <!-- 主内容区 -->
    <div class="profile-container">
      <!-- 用户信息卡片 -->
      <div class="profile-card">
        <!-- 左侧用户基本信息 -->
        <div class="user-basic">
          <div class="avatar-container">
            <img src="https://via.placeholder.com/200" alt="User Avatar" class="avatar">
          </div>
          <div class="name-title">
            <h1 class="username">Lucy</h1>
            <p class="user-title">User</p>
          </div>
        </div>

        <!-- 右侧统计信息和邮箱 -->
        <div class="user-details">
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

        <!-- 右下角登出按钮 -->
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

/* 基础样式 */
.profile-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--primary);
}

/* 主容器 */
.profile-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* 用户信息卡片 - 新布局 */
.profile-card {
  display: flex;
  flex-wrap: wrap;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  position: relative;
}

.user-basic {
  display: flex;
  align-items: center;
  width: 40%;
  min-width: 300px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid var(--secondary);
  object-fit: cover;
  margin-right: 20px;
}

.name-title {
  display: flex;
  flex-direction: column;
}

.username {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--primary);
}

.user-title {
  font-size: 16px;
  color: var(--secondary);
}

/* 右侧统计信息和邮箱 */
.user-details {
  width: 60%;
  padding-left: 40px;
  border-left: 1px solid var(--light-gray);
}

.stats-container {
  display: flex;
  gap: 30px;
  margin-bottom: 25px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 14px;
  color: var(--medium-gray);
  margin-top: 5px;
}

.info-item label {
  font-size: 14px;
  color: var(--medium-gray);
  display: block;
  margin-bottom: 5px;
}

.info-item p.email {
  font-weight: 500;
  font-size: 18px;
}

/* 右下角登出按钮 */
.logout-button {
  position: absolute;
  bottom: 25px;
  right: 25px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
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

/* 收藏菜谱部分 */
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
  font-size: 24px;
  font-weight: 600;
  color: var(--primary);
}

.view-all {
  color: var(--secondary);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s;
}

.view-all:hover {
  text-decoration: underline;
  transform: translateX(3px);
}

.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}

.recipe-card {
  aspect-ratio: 1/1;
  background-color: var(--light-gray);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--medium-gray);
  font-size: 18px;
  transition: all 0.2s;
  box-shadow: 0 3px 8px rgba(0,0,0,0.08);
}

.recipe-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

/* 响应式设计 */
@media (max-width: 900px) {
  .user-basic,
  .user-details {
    width: 100%;
  }
  
  .user-details {
    padding-left: 0;
    border-left: none;
    border-top: 1px solid var(--light-gray);
    padding-top: 25px;
    margin-top: 25px;
  }
  
  .profile-card {
    padding: 30px;
  }
}

@media (max-width: 600px) {
  .user-basic {
    min-width: auto;
    flex-direction: column;
    text-align: center;
  }
  
  .avatar {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .stats-container {
    flex-direction: column;
    gap: 15px;
  }
  
  .recipes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>