<template>
    <div class="help-page">
      <header class="help-header">
        <h1>Help Center</h1>
        <p>Find answers to common questions or contact our support team</p>
      </header>
  
      <div class="help-content">
        <section class="faq-section">
          <h2 class="section-title">Frequently Asked Questions</h2>
          
          <div class="faq-category">
            <h3>Getting Started</h3>
            <div class="faq-item">
              <button class="faq-question" @click="toggleAnswer(0)">
                How do I create an account?
                <span class="toggle-icon">{{ activeIndex === 0 ? '−' : '+' }}</span>
              </button>
              <div class="faq-answer" :class="{ active: activeIndex === 0 }">
                <p>To create an account, click the "Sign Up" button in the top right corner of our website. You'll need to provide your email address, create a password, and fill in some basic information about yourself.</p>
              </div>
            </div>
            
            <div class="faq-item">
              <button class="faq-question" @click="toggleAnswer(1)">
                Is there a mobile app available?
                <span class="toggle-icon">{{ activeIndex === 1 ? '−' : '+' }}</span>
              </button>
              <div class="faq-answer" :class="{ active: activeIndex === 1 }">
                <p>Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store.</p>
              </div>
            </div>
          </div>
  
          <div class="faq-category">
            <h3>Account Management</h3>
            <div class="faq-item">
              <button class="faq-question" @click="toggleAnswer(2)">
                How do I reset my password?
                <span class="toggle-icon">{{ activeIndex === 2 ? '−' : '+' }}</span>
              </button>
              <div class="faq-answer" :class="{ active: activeIndex === 2 }">
                <p>Click "Forgot Password" on the login page and enter your email address. We'll send you a link to reset your password. The link will expire in 24 hours for security reasons.</p>
              </div>
            </div>
            
            <div class="faq-item">
              <button class="faq-question" @click="toggleAnswer(3)">
                Can I change my username?
                <span class="toggle-icon">{{ activeIndex === 3 ? '−' : '+' }}</span>
              </button>
              <div class="faq-answer" :class="{ active: activeIndex === 3 }">
                <p>Yes, you can change your username in your account settings. Please note that usernames must be unique and can only be changed once every 30 days.</p>
              </div>
            </div>
          </div>
  
          <div class="faq-category">
            <h3>Premium Features</h3>
            <div class="faq-item">
              <button class="faq-question" @click="toggleAnswer(4)">
                What are the benefits of premium membership?
                <span class="toggle-icon">{{ activeIndex === 4 ? '−' : '+' }}</span>
              </button>
              <div class="faq-answer" :class="{ active: activeIndex === 4 }">
                <p>Premium members enjoy ad-free browsing, exclusive content, early access to new features, and priority customer support. You'll also get unlimited storage for your recipes and meal plans.</p>
              </div>
            </div>
            
            <div class="faq-item">
              <button class="faq-question" @click="toggleAnswer(5)">
                How do I cancel my subscription?
                <span class="toggle-icon">{{ activeIndex === 5 ? '−' : '+' }}</span>
              </button>
              <div class="faq-answer" :class="{ active: activeIndex === 5 }">
                <p>You can cancel your subscription at any time in your account settings under "Subscription." Your premium benefits will remain active until the end of your current billing period.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const activeIndex = ref(null)
  
  const toggleAnswer = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
  }
  </script>
  
  <style scoped>
  :root {
    --primary: #383863;
    --secondary: #c7b368;
    --light-gray: #efedec;
    --medium-gray: #959090;
  }
  
  .help-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    color: var(--primary);
  }
  
  .help-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .help-header h1 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 15px;
  }
  
  .help-header p {
    font-size: 1.1rem;
    color: var(--medium-gray);
  }
  
  .help-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  .section-title {
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 25px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--light-gray);
  }
  
  .faq-category {
    margin-bottom: 40px;
  }
  
  .faq-category h3 {
    font-size: 1.4rem;
    color: var(--secondary);
    margin-bottom: 20px;
  }
  
  .faq-item {
    margin-bottom: 15px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  
  .faq-question {
    width: 100%;
    padding: 18px 20px;
    text-align: left;
    background-color: white;
    border: none;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .faq-question:hover {
    background-color: var(--light-gray);
  }
  
  .toggle-icon {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--secondary);
  }
  
  .faq-answer {
    max-height: 0;
    overflow: hidden;
    background-color: white;
    transition: max-height 0.3s ease-out;
  }
  
  .faq-answer.active {
    max-height: 300px;
  }
  
  .faq-answer p {
    padding: 20px;
    margin: 0;
    line-height: 1.6;
    color: #555;
  }
  

  @media (max-width: 768px) {
    .help-header h1 {
      font-size: 2rem;
    }
    
    .section-title {
      font-size: 1.5rem;
    }
    
    .faq-category h3 {
      font-size: 1.2rem;
    }
    
    .contact-card {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .help-page {
      padding: 30px 15px;
    }
    
    .search-container {
      flex-direction: column;
    }
    
    .search-button {
      padding: 15px;
    }
    
    .faq-question {
      font-size: 1rem;
      padding: 15px;
    }
  }
  </style>