<template>
    <div class="help-page">
      <header class="help-header">
        <h1>Credits</h1>
        <p>Meet the things behind this project</p>
      </header>
  
      <div class="help-content">
        <section class="faq-section">
          <h2 class="section-title">Project Contributors</h2>
  
          <div class="faq-category">
            <h3>Tools & Resources</h3>
  
            <div class="faq-item">
              <div class="faq-question">
                Nuxt 3
              </div>
              <div class="faq-answer active">
                <p>Used for building the application structure and routing in Vue 3.</p>
              </div>
            </div>
  
            <div class="faq-item">
              <div class="faq-question">
                Tailwind CSS
              </div>
              <div class="faq-answer active">
                <p>Provided utility-first CSS classes for fast and responsive design.</p>
              </div>
            </div>
  
            <div class="faq-item">
              <div class="faq-question">
                ChatGPT & Deepseek
              </div>
              <div class="faq-answer active">
                <p>Assisted in generating content, debugging code, and enhancing the development workflow through AI.</p>
              </div>
            </div>
          </div>
  
          <div class="faq-category">
            <h3>Recipe References (APA Format)</h3>
  
            <div class="faq-item">
              <div class="faq-question">
                Allrecipes
              </div>
              <div class="faq-answer active">
                <p>Allrecipes. (n.d.). Retrieved May 5, 2025, from https://www.allrecipes.com</p>
              </div>
            </div>
  
            <div class="faq-item">
              <div class="faq-question">
                Panlasang Pinoy
              </div>
              <div class="faq-answer active">
                <p>Panlasang Pinoy. (2025, May 5). Retrieved from https://panlasangpinoy.com</p>
              </div>
            </div>
  
            <div class="faq-item">
              <div class="faq-question">
                Feel Good Foodie
              </div>
              <div class="faq-answer active">
                <p>Feel Good Foodie. (2025, May 5). Retrieved from https://feelgoodfoodie.net</p>
              </div>
            </div>
  
            <div class="faq-item">
              <div class="faq-question">
                Food.com
              </div>
              <div class="faq-answer active">
                <p>Food.com. (2025, May 5). Retrieved from https://www.food.com</p>
              </div>
            </div>
  
            <div class="faq-item">
              <div class="faq-question">
                Sees Food Will Travel
              </div>
              <div class="faq-answer active">
                <p>Sees Food Will Travel. (2025, May 5). Retrieved from https://seesfoodwilltravel.com</p>
              </div>
            </div>
  
            <div class="faq-item">
              <div class="faq-question">
                Eating Bird Food
              </div>
              <div class="faq-answer active">
                <p>Eating Bird Food. (2025, May 5). Retrieved from https://www.eatingbirdfood.com</p>
              </div>
            </div>
  
            <div class="faq-item">
              <div class="faq-question">
                BBC Good Food
              </div>
              <div class="faq-answer active">
                <p>BBC Good Food. (n.d.). Retrieved May 5, 2025, from https://www.bbcgoodfood.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  
  <script setup>
  // No interactivity needed for static credits
  </script>
  
  <style scoped>
  /* 引用你的 Help 页面 CSS 保持一致性 */
  
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
    padding: 18px 20px;
    background-color: white;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--primary);
  }
  
  .faq-answer.active {
    background-color: white;
    padding: 20px;
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
  }
  
  @media (max-width: 480px) {
    .help-page {
      padding: 30px 15px;
    }
  }
  </style>
  