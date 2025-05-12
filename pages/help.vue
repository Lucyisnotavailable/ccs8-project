<template>
  <div class="help-page">
    <header class="help-header">
      <h1>Help Center</h1>
      <p>Find answers to common questions or contact our support team</p>
    </header>

    <div class="help-content">
      <!-- FAQ SECTION -->
      <section class="faq-section">
        <h2 class="section-title">Frequently Asked Questions</h2>

        <div class="faq-category">
          <div class="faq-item" v-for="(question, index) in faqList" :key="index">
            <button class="faq-question" @click="toggleAnswer(index)">
              {{ question.q }}
              <span class="toggle-icon">{{ isActive(index) ? '−' : '+' }}</span>
            </button>
            <div class="faq-answer" :class="{ active: isActive(index) }">
              <p v-html="question.a" />
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT & SUPPORT SECTION -->
      <section class="faq-section">
        <h2 class="section-title">Contact & Support</h2>

        <div class="faq-category">
          <div class="faq-item">
            <button class="faq-question" @click="toggleAnswer('contact')">
              How do I contact the InRecipe team?
              <span class="toggle-icon">{{ isActive('contact') ? '−' : '+' }}</span>
            </button>
            <div class="faq-answer" :class="{ active: isActive('contact') }">
              <p>
                You can reach us by scrolling to the “Contact Us” section at the bottom of any page. There you'll find a simple form to submit your message. You can also email us directly at <strong>support@inrecipe.com</strong>. We usually respond within 1–2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeItems = ref(new Set())

const toggleAnswer = (index) => {
  if (activeItems.value.has(index)) {
    activeItems.value.delete(index)
  } else {
    activeItems.value.add(index)
  }
  // Force reactivity update
  activeItems.value = new Set(activeItems.value)
}

const isActive = (index) => activeItems.value.has(index)

const faqList = [
  {
    q: 'How does the calorie counter work?',
    a: `Our calorie counter helps you stay on top of your nutrition goals by automatically calculating the total calories of the recipes you log. Each recipe includes detailed nutritional data, and once added to your daily tracker, the system will sum up the calories for breakfast, lunch, dinner, and snacks.`
  },
  {
    q: 'Are the recipes suitable for beginners?',
    a: `Absolutely! Most of our recipes are designed with beginners in mind. We include clear, step-by-step instructions, estimated preparation and cooking times, and difficulty labels like "Easy," "Intermediate," or "Advanced."`
  },
  {
    q: 'How can I filter recipes?',
    a: `You can filter recipes by meal type, cooking time, difficulty, cuisine, and dietary preferences using the filter bar at the top of the Recipes page.`
  },
  {
    q: 'What cuisines are available?',
    a: `InRecipe features a wide variety of cuisines including Asian, Mediterranean, Latin American, American, Indian, French, and more.`
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

.faq-item {
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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
  background-color: rgba(255, 255, 255, 0.8); /* 半透明背景 */
  transition: max-height 0.4s ease, padding 0.3s;
  padding: 0 20px;
}

.faq-answer.active {
  max-height: 500px;
  padding: 20px;
}

.faq-answer p {
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
