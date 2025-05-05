<template>
  <div class="meal-categories-page">
    <!-- Page Header -->
    <header class="page-header">
      <h1>MEAL CATEGORIES</h1>
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
// No script needed for basic functionality
</script>

<style scoped>
:root {
  --primary: #383863;
  --secondary: #c7b368;
  --light-gray: #efedec;
  --medium-gray: #959090;
}

.meal-categories-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

/* Page Header */
.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 15px;
  font-weight: 600;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--medium-gray);
  font-weight: 400;
}

/* Horizontal Cards Container */
.horizontal-cards-container {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: stretch;
}

/* Meal Card Design */
.meal-card {
  flex: 1;
  min-width: 320px;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  background-color: white;
}

.meal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.card-image-container {
  position: relative;
  height: 200px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
}

.breakfast-card .card-image-container {
  background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), 
                    url('https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80');
}

.lunch-card .card-image-container {
  background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), 
                    url('https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80');
}

.dinner-card .card-image-container {
  background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), 
                    url('https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80');
}

.category-title {
  width: 100%;
  padding: 20px;
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.card-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.description p {
  line-height: 1.7;
  margin-bottom: 25px;
  color: #555;
  font-size: 1.05rem;
  flex-grow: 1;
}

.card-footer {
  margin-top: auto;
  padding-top: 20px;
  display: flex;
  justify-content: center;
}

.explore-btn {
  padding: 14px 40px;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s;
  font-weight: 500;
  font-size: 1.05rem;
  text-align: center;
  width: 180px;
}

.breakfast-card .explore-btn {
  background-color: var(--secondary);
  box-shadow: 0 4px 12px rgba(199, 179, 104, 0.3);
}

.lunch-card .explore-btn {
  background-color: var(--primary);
  box-shadow: 0 4px 12px rgba(56, 56, 99, 0.3);
}

.dinner-card .explore-btn {
  background-color: #5a5a8a;
  box-shadow: 0 4px 12px rgba(90, 90, 138, 0.3);
}

.explore-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .horizontal-cards-container {
    gap: 25px;
  }
  
  .meal-card {
    min-width: 280px;
  }
  
  .card-content {
    padding: 25px;
  }
}

@media (max-width: 768px) {
  .horizontal-cards-container {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  
  .meal-card {
    width: 100%;
    max-width: 450px;
  }
  
  .category-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .card-image-container {
    height: 180px;
  }
  
  .category-title {
    font-size: 1.5rem;
    padding: 15px;
  }
  
  .description p {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  .explore-btn {
    padding: 12px 30px;
    font-size: 1rem;
    width: 160px;
  }
}
</style>