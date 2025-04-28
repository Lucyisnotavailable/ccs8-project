<template>
  <div>
    <Header />
    
    <!-- main -->
    <main class="home-container">
      <!-- welcome -->
      <section class="welcome-banner">
        <div class="left-content">
          <h1>Discover Your Next Meal</h1>
          <p class="subtitle">Explore curated recipes and plan your weekly meals</p>
          <div class="action-buttons">
            <NuxtLink to="/recipes" class="primary-btn">
              Browse Recipes
            </NuxtLink>
            <NuxtLink to="/video" class="secondary-btn">
              Watch This Video →
            </NuxtLink>
          </div>
        </div>
        <div class="right-content">
          <!-- Add a video element here -->
          <video width="100%" controls>
            <source src="https://via.placeholder.com/500x300" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <!-- Quick categories -->
      <section class="quick-categories">
        <h2>Popular Categories</h2>
        <div class="category-grid">
          <NuxtLink to="/recipes/breakfast" class="category-card">
            <div class="category-content">
              <img src="https://via.placeholder.com/300x200" class="category-image" />
              <h3>Breakfast</h3>
              <p>Start your day right with a healthy breakfast!</p>
            </div>
          </NuxtLink>
          <NuxtLink to="/recipes/lunch" class="category-card">
            <div class="category-content">
              <img src="https://via.placeholder.com/300x200" class="category-image" />
              <h3>Lunch</h3>
              <p>Delicious and easy lunch ideas!</p>
            </div>
          </NuxtLink>
          <NuxtLink to="/recipes/dinner" class="category-card">
            <div class="category-content">
              <img src="https://via.placeholder.com/300x200" class="category-image" />
              <h3>Dinner</h3>
              <p>End your day with a satisfying dinner!</p>
            </div>
          </NuxtLink>
          <NuxtLink to="/calorie-calculator" class="category-card">
            <div class="category-content">
              <img src="https://via.placeholder.com/300x200" class="category-image" />
              <h3>Calorie Calculator</h3>
              <p>Track your daily calorie intake easily!</p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Weekly Meal Planner -->
      <section class="weekly-preview">
        <div class="preview-header">
          <h2>Weekly Meal Planner</h2>
          <NuxtLink to="/meal-planning" class="view-all">
            View Full Planner →
          </NuxtLink>
        </div>
        <div class="plan-preview">
          <p>Plan your meals for the upcoming week and stay healthy!</p>
        </div>
      </section>
    </main>

  </div>
</template>
