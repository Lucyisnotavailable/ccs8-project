<template>
  <div class="meal-categories-page">
    <!-- Page Header -->
    <header class="page-header">
      <h1>Meal Categories</h1>
      <p class="subtitle">Discover delicious recipes for every time of day</p>
    </header>

    <!-- Horizontal Card Layout -->
    <main class="horizontal-cards-container">
      <!-- Breakfast -->
      <div class="meal-card breakfast-card">
        <div class="card-image-container">
          <div class="category-title">BREAKFAST</div>
        </div>
        <div class="card-content">
          <div class="description">
            <p>Start your day with golden morning meals featuring our signature warm hues. From fluffy pancakes to avocado toast, these recipes bring energy to your morning routine.</p>
            <p>Each dish celebrates breakfast traditions with wholesome ingredients and modern culinary techniques.</p>
          </div>
          <div class="card-footer">
            <NuxtLink to="/category/breakfast" class="explore-btn">
              Explore
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Lunch -->
      <div class="meal-card lunch-card">
        <div class="card-image-container">
          <div class="category-title">LUNCH</div>
        </div>
        <div class="card-content">
          <div class="description">
            <p>Midday meals showcasing balanced nutrition and flavor. Enjoy vibrant grain bowls, artisanal sandwiches, and refreshing salads for perfect afternoon fuel.</p>
            <p>These recipes blend international influences with local ingredients for satisfying meals.</p>
          </div>
          <div class="card-footer">
            <NuxtLink to="/category/lunch" class="explore-btn">
              Explore
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Dinner -->
      <div class="meal-card dinner-card">
        <div class="card-image-container">
          <div class="category-title">DINNER</div>
        </div>
        <div class="card-content">
          <div class="description">
            <p>Evening meals that transition from busy days to relaxing nights. From quick skillet dinners to weekend feasts, these recipes make dinner memorable.</p>
            <p>Discover how simple ingredients transform into satisfying meals, whether cooking for one or entertaining guests.</p>
          </div>
          <div class="card-footer">
            <NuxtLink to="/category/dinner" class="explore-btn">
              Explore
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>