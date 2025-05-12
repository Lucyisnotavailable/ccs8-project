<template>
  <main class="about-page">
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
        <h2 class="mission-title">Our Mission</h2>
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
</template>

<script setup>
const teamMembers = [
  {
    id: 1,
    name: 'Ruiming Cai',
    role: 'Developer, UI/UX Designer',
    bio: 'I hate useless people :<',
    avatar: '/lucy.JPG'
  },
  {
    id: 2,
    name: 'Francedric Jhann Vicher',
    role: 'Content Editor, Document Writer',
    bio: 'I like men',
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

.about-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  color: var(--primary);
}

.about-hero {
  text-align: center;
}

.about-hero h1 {
  font-size: 2.75rem;
  color: var(--primary);
  margin-bottom: 15px;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--medium-gray);
  margin: 0 auto;
  max-width: 700px;
}

.mission-section {
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 40px 0;
  padding: 24px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
}

.mission-title {
  color: var(--primary);
  font-size: 1.8rem;
  margin-bottom: 16px;
  text-align: center;
}

.mission-content {
  flex: 1;
}

.mission-content p {
  color: black;
  font-size: 1.2rem;
  line-height: 1.6;
}

.team-section {
  margin: 60px 0 40px;
}

.team-section h2 {
  text-align: center;
  color: var(--primary);
  margin-bottom: 30px;
  font-size: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
}

.team-card {
  background: white;
  padding: 32px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
}

.avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.team-avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--secondary);
}

.team-card h3 {
  color: var(--primary);
  margin-bottom: 8px;
  font-size: 1.25rem;
  font-weight: bold;
}

.role {
  color: var(--secondary);
  margin-bottom: 16px;
  font-size: 1.05rem;
}

.role-line {
  display: block;
}

.bio {
  color: var(--medium-gray);
  font-size: 1.05rem;
  line-height: 1.6;
}

.navigation-cta {
  margin: 48px 0;
  text-align: center;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.nav-button {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  min-width: 160px;
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .mission-section {
    flex-direction: column;
    align-items: center;
  }

  .mission-title {
    text-align: center;
  }

  .team-grid {
    grid-template-columns: 1fr 1fr;
  }

  .team-card {
    padding: 24px;
  }

  .team-avatar {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 480px) {
  .about-page {
    padding: 30px 15px;
  }

  .about-hero h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .team-card {
    padding: 16px;
  }

  .team-avatar {
    width: 100px;
    height: 100px;
  }
}
</style>
