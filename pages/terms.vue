<template>
    <div class="terms-page">
      <header class="terms-header">
        <h1>Terms & Conditions</h1>
        <p>Please read these terms carefully before using our service.</p>
      </header>
  
      <div class="terms-content">
        <section class="terms-section">
          <h2 class="section-title">1. Acceptance of Terms</h2>
          <p>By accessing and using our website or services, you agree to be bound by these terms. If you do not agree with any part, you may not use the service.</p>
        </section>
  
        <section class="terms-section">
          <h2 class="section-title">2. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
        </section>
  
        <section class="terms-section">
          <h2 class="section-title">3. Intellectual Property</h2>
          <p>All content on this site including text, graphics, logos, and software is the property of the company or its content suppliers and is protected by intellectual property laws.</p>
        </section>
  
        <section class="terms-section">
          <h2 class="section-title">4. Termination</h2>
          <p>We reserve the right to suspend or terminate your account if you violate any of these terms or engage in illegal or abusive behavior on the platform.</p>
        </section>
  
        <section class="terms-section">
          <h2 class="section-title">5. Modifications</h2>
          <p>We may revise these terms at any time. Continued use of the service after changes will constitute acceptance of the revised terms.</p>
        </section>
  
        <section class="terms-section">
          <h2 class="section-title">6. Contact Us</h2>
          <p>If you have any questions about these Terms & Conditions, please contact us through the support section or email us directly.</p>
        </section>
      </div>
    </div>
  </template>
  
  <script setup>
  // 当前页面不需要 script 逻辑，但可以保留以便未来扩展
  </script>
  
  <style scoped>
  :root {
    --primary: #383863;
    --secondary: #c7b368;
    --light-gray: #efedec;
    --medium-gray: #959090;
  }
  
  .terms-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    font-family: 'Segoe UI', system-ui, sans-serif;
    color: var(--primary);
  }
  
  .terms-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .terms-header h1 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 15px;
  }
  
  .terms-header p {
    font-size: 1.1rem;
    color: var(--medium-gray);
  }
  
  .terms-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .section-title {
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--light-gray);
  }
  
  .terms-section p {
    font-size: 1.05rem;
    color: #555;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    .terms-header h1 {
      font-size: 2rem;
    }
  
    .section-title {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .terms-page {
      padding: 30px 15px;
    }
  }
  </style>
  