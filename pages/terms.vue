<template>
  <div class="terms-page">
    <header class="terms-header">
      <h1>Terms & Conditions</h1>
      <p>Effective Date: May 5, 2025</p>
      <p>Please read these terms carefully before using our service.</p>
    </header>

    <div class="terms-content">
      <section class="terms-section">
        <h2 class="section-title">1. Eligibility and Account Registration</h2>
        <p>
          To access certain features of the Service, you may be required to create a user account.
          You must be at least 13 years of age or have the consent of a parent or legal guardian to use this Service.
          You agree to provide accurate, current, and complete information during registration and to update such information as necessary.
        </p>
        <p>
          You are responsible for safeguarding your password and login credentials. You agree not to disclose your credentials to any third party and to notify us immediately if you suspect unauthorized use of your account.
        </p>
      </section>

      <section class="terms-section">
        <h2 class="section-title">2. Use of the Service</h2>
        <p>
          The Service is provided solely for your personal, non-commercial use. You may not reproduce, redistribute, sell, create derivative works from, or exploit any portion of the Service without express written permission from InRecipe.
        </p>
        <p>
          You agree not to use the Service for any unlawful purpose or in any way that could damage or impair its functioning.
        </p>
      </section>

      <section class="terms-section">
        <h2 class="section-title">3. User-Generated Content</h2>
        <p>
          Users may contribute content such as recipes, comments, and meal plans ("User Content"). By submitting User Content, you affirm that:
        </p>
        <ul class="list-disc pl-6 text-gray-700 space-y-1">
          <li>You own or have the necessary rights to use and share the content.</li>
          <li>Your content does not infringe upon any third-party rights.</li>
          <li>Your content does not contain unlawful, defamatory, or offensive material.</li>
        </ul>
        <p>
          By posting content, you grant InRecipe a non-exclusive, worldwide, royalty-free, perpetual license to use, display, distribute, modify, and sublicense it in connection with the Service.
          We reserve the right to remove or edit any User Content at our discretion.
        </p>
      </section>

      <section class="terms-section">
        <h2 class="section-title">4. Intellectual Property</h2>
        <p>
          All content on the Service, including text, graphics, logos, software, and design elements, is the property of InRecipe or its licensors and is protected by intellectual property laws.
          The InRecipe name and logo are trademarks of the InRecipe team and may not be used without permission.
        </p>
      </section>

      <section class="terms-section">
        <h2 class="section-title">5. Privacy and Data Protection</h2>
        <p>
          Your privacy is important to us. We collect and process personal data in accordance with our Privacy Policy and applicable laws.
          By using the Service, you consent to our collection and use of your information, including your name, email, saved recipes, and meal plans.
        </p>
      </section>

      <section class="terms-section">
        <h2 class="section-title">6. Links to Third-Party Websites</h2>
        <p>
          The Service may contain links to third-party websites or services not owned by InRecipe.
          We are not responsible for the content, policies, or practices of those third parties.
          Please review their terms and privacy policies when visiting.
        </p>
      </section>

      <section class="terms-section">
        <h2 class="section-title">7. Disclaimer of Warranties</h2>
        <p>
          The Service is provided “as-is” and “as-available” without warranties of any kind.
          We do not guarantee that the Service will be secure, uninterrupted, or error-free.
        </p>
        <p>
          Nutritional and health-related information is for general purposes only and is not medical advice.
        </p>
      </section>

      <section class="terms-section">
        <h2 class="section-title">8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, InRecipe and its affiliates shall not be liable for any indirect, incidental, or consequential damages, including:
        </p>
        <ul class="list-disc pl-6 text-gray-700 space-y-1">
          <li>Your use or inability to use the Service.</li>
          <li>Unauthorized access to personal information.</li>
          <li>Content posted by users or third parties.</li>
        </ul>
      </section>

      <section class="terms-section">
        <h2 class="section-title">9. Termination</h2>
        <p>
          We may suspend or terminate your access at any time, without notice, for violations of these Terms or other reasons.
        </p>
      </section>

      <section class="terms-section">
        <h2 class="section-title">10. Modifications to the Terms</h2>
        <p>
          We may revise these Terms by updating this page. Your continued use of the Service after changes means you accept the new Terms.
        </p>
      </section>

      <section class="terms-section">
        <h2 class="section-title">11. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the Republic of the Philippines.
          Any disputes shall be resolved in the courts of Dumaguete City, Philippines.
        </p>
      </section>

      <section class="terms-section">
        <h2 class="section-title">12. Contact Information</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us via the Contact Us page or email us at [insert email address].
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
// No logic yet, ready for expansion
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
  margin-bottom: 10px;
}

.terms-header p {
  font-size: 1.1rem;
  color: var(--medium-gray);
  margin-bottom: 5px;
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
