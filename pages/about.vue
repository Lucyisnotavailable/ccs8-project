<template>
  <div class="page-container">
    <main class="about-container">
      <Breadcrumbs :items="[
        { text: 'Home', to: '/' },
        { text: 'About Us', disabled: true }
      ]" />
      
      <section class="about-hero">
        <h1>About Us</h1>
        <p class="subtitle">Empowering your cooking with simplicity and flavor</p>
      </section>
      
      <section class="mission-section">
        <div class="mission-content">
          <h2 class = mission-title>Our mission</h2>
          <p>
            Welcome to InRecipe – your go-to platform for discovering and organizing delicious recipes!
            We're a passionate team of students from Silliman University, dedicated to making meal planning and cooking accessible and enjoyable for everyone.
            Our mission is to provide a user-friendly space where you can explore diverse cuisines, manage your meals, and stay on top of your nutritional goals.
            Join us on this flavorful journey, and let's make cooking fun and stress-free together!
          </p>
        </div>
      </section>
      
      <section class="team-section">
        <h2>Meet The Team</h2>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.id" class="team-card">
            <div class="avatar-container">
              <img 
                :src="member.avatar" 
                :alt="member.name" 
                class="team-avatar"
              >
            </div>
            <h3>{{ member.name }}</h3>
            <p class="role">
              <span class="role-line">{{ member.role.split(',')[0] }}</span>
              <span class="role-line">{{ member.role.split(',')[1] }}</span>
            </p>
            <p class="bio">{{ member.bio }}</p>
          </div>
        </div>
      </section>
      
      <section class="navigation-cta">
        <div class="cta-buttons">
          <NuxtLink to="/contact" class="nav-button contact-button">
            Contact Us
          </NuxtLink>
          <NuxtLink to="/faq" class="nav-button faq-button">
            Visit FAQ
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    id: 1,
    name: 'Ruiming Cai',
    role: 'Developer,UI/UX Designer',
    bio: 'HATE CL',
    avatar: '/lucy.JPG'
  },
  {
    id: 2,
    name: 'Francedric Jhann Vicher',
    role: 'Content Editor,Document Writer',
    bio: 'idk what to put here',
    avatar: '/cedric.jpeg'
  }
]
</script>

<style scoped>
:root {
  --primary: #383863;
  --secondary: #c7b368;
  --light-gray: #efedec;
  --medium-gray: #959090;
}

.page-container {
  font-family: 'Calibri', sans-serif;
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
  margin: 0 auto;
  max-width: 600px;
}

.mission-section {
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 60px 0;
  padding: 30px;
  background-color: white; /* White background for the card effect */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Added shadow for card effect */
  border-radius: 12px; /* Optional: round the corners slightly */
}

.mission-title {
  color: var(--primary);
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.mission-content {
  flex: 1;
}

.mission-content h2 {
  color: var(--primary);
  margin-bottom: 20px;
}

.logo-image {
  max-width: 150px;
  height: auto;
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
  max-width: 700px;
  margin: 0 auto;
}

.team-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.team-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--secondary);
}

.team-card h3 {
  color: var(--primary);
  margin-bottom: 5px;
  font-size: 1rem; /* 增大字体 */
  font-weight: bold; /* 设置为粗体 */
}

.role {
  color: var(--secondary);
  margin-bottom: 15px;
}

.role-line {
  display: block; /* Ensures each role is on a new line */
}

.bio {
  color: var(--medium-gray);
  line-height: 1.6;
}

.navigation-cta {
  margin: 60px 0;
  text-align: center;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-button {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  min-width: 150px;
  text-align: center;
}

.contact-button {
  background-color: var(--secondary);
  color: var(--primary);
  border: 2px solid var(--secondary);
}

.faq-button {
  background-color: var(--primary);
  color: white;
  border: 2px solid var(--primary);
}

.nav-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .mission-section {
    flex-direction: column;
  }
  
  .logo-image {
    margin-top: 20px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-button {
    width: 100%;
    max-width: 250px;
  }
}
</style>
