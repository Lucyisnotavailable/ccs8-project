<template>
  <div class="page-container">
    
    <main class="about-container">
      <Breadcrumbs :items="[
        { text: 'Home', to: '/' },
        { text: 'About Us', disabled: true }
      ]" />
      
      <section class="about-hero">
        <h1>About RecipePlanner</h1>
        <p class="subtitle">Making meal planning simple and enjoyable</p>
      </section>
      
      <section class="mission-section">
        <div class="mission-content">
          <h2>Our Mission</h2>
          <p>
            At RecipePlanner, we believe that meal planning should be effortless and enjoyable. 
            Our goal is to help you discover delicious recipes and organize your weekly meals 
            without the stress and hassle.
          </p>
        </div>
        <div class="mission-image">
          <img 
            src="https://via.placeholder.com/300x200" 
            alt="Team working on meal planning" 
            class="about-image"
          >
        </div>
      </section>
      
      <section class="team-section">
        <h2>Meet The Team</h2>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.id" class="team-card">
            <img 
              src="https://via.placeholder.com/150x150" 
              :alt="member.name" 
              class="team-avatar"
            >
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
            <p class="bio">{{ member.bio }}</p>
          </div>
        </div>
      </section>
      
      <section class="contact-cta">
        <h2>Have Questions?</h2>
        <NuxtLink to="/contact" class="cta-button">
          Contact Us
        </NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Founder & Developer',
    bio: 'Passionate about creating tools that simplify everyday life.'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Nutrition Specialist',
    bio: 'Ensuring our recipes are both delicious and balanced.'
  },
  {
    id: 3,
    name: 'Jamie Wilson',
    role: 'UI/UX Designer',
    bio: 'Focused on making the app intuitive and enjoyable to use.'
  }
]
</script>

<style scoped>
/* 使用你的配色方案 */
:root {
  --primary: #383863;
  --secondary: #c7b368;
  --light-gray: #efedec;
  --medium-gray: #959090;
}

.page-container {
  font-family: 'Calibri', sans-serif;
  font-size: 12pt;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.about-hero {
  text-align: center;
  margin: 40px 0;
}

.about-hero h1 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 15px;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--medium-gray);
}

.mission-section {
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 60px 0;
  padding: 30px;
  background-color: var(--light-gray);
  border-radius: 12px;
}

.mission-content {
  flex: 1;
}

.mission-content h2 {
  color: var(--primary);
  margin-bottom: 20px;
}

.mission-image {
  flex: 1;
  text-align: center;
}

.about-image {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.team-section {
  margin: 80px 0;
}

.team-section h2 {
  text-align: center;
  color: var(--primary);
  margin-bottom: 40px;
  font-size: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.team-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
}

.team-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid var(--secondary);
}

.team-card h3 {
  color: var(--primary);
  margin-bottom: 5px;
}

.role {
  color: var(--secondary);
  font-weight: bold;
  margin-bottom: 15px;
}

.bio {
  color: var(--medium-gray);
  line-height: 1.6;
}

.contact-cta {
  text-align: center;
  margin: 60px 0;
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--secondary);
  color: var(--primary);
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 2px solid var(--secondary);
}

.cta-button:hover {
  background-color: transparent;
  color: var(--secondary);
  transform: translateY(-3px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .mission-section {
    flex-direction: column;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>