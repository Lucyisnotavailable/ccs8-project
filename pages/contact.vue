<template>
    <div class="contact-page">
      <header class="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please reach out using the options below.</p>
      </header>
  
      <section class="contact-info">
        <div class="info-card">
          <div class="icon">📧</div>
          <h3>Email</h3>
          <p>justaemail@recipeapp.com</p>
          <p>Response time: within 24 hours</p>
        </div>
        <div class="info-card">
          <div class="icon">📞</div>
          <h3>Phone</h3>
          <p>1-800-1234561</p>
          <p>Available Mon-Fri, 8am-6pm EST</p>
        </div>
      </section>
  
      <section class="contact-form-section">
        <h2 class="section-title">Send Us a Message</h2>
        <form class="contact-form" @submit.prevent="submitForm">
          <input type="text" v-model="name" placeholder="Your Name" required />
          <input type="email" v-model="email" placeholder="Your Email" required />
          <textarea v-model="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" class="submit-button">Send Message</button>
          <p v-if="submitted" class="success-message">Thank you! We'll get back to you soon.</p>
        </form>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const message = ref('')
  const submitted = ref(false)
  
  const submitForm = () => {
    // Normally you'd send this data to a server.
    submitted.value = true
  
    // Reset after a while
    setTimeout(() => {
      name.value = ''
      email.value = ''
      message.value = ''
      submitted.value = false
    }, 3000)
  }
  </script>
  
  <style scoped>
  .contact-page {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 20px;
    font-family: 'Segoe UI', sans-serif;
    color: var(--primary);
  }
  
  .contact-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .contact-header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .contact-header p {
    color: var(--medium-gray);
    font-size: 1.1rem;
  }
  
  .contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
  }
  
  .info-card {
    background-color: white;
    border-radius: 12px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  .icon {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .info-card h3 {
    margin-bottom: 10px;
    color: var(--primary);
    font-size: 1.3rem;
  }
  
  .info-card p {
    color: var(--medium-gray);
    margin-bottom: 5px;
  }
  
  .chat-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
  }
  
  .chat-button:hover {
    background-color: #2c2c4a;
  }
  
  .contact-form-section {
    margin-top: 30px;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: var(--primary);
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .contact-form input,
  .contact-form textarea {
    padding: 15px;
    border: 1px solid var(--light-gray);
    border-radius: 8px;
    font-size: 1rem;
  }
  
  .submit-button {
    background-color: var(--secondary);
    color: white;
    padding: 12px 25px;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #aa994c;
  }
  
  .success-message {
    color: green;
    font-weight: 500;
    margin-top: 10px;
  }
  
  @media (max-width: 600px) {
    .contact-header h1 {
      font-size: 2rem;
    }
  }
  </style>
  