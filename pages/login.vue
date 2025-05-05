<template>
<div>
  <div class="login-page">
    <h1>Welcome</h1>

    <div class="login-form">
      <input 
        v-model="username" 
        type="text" 
        placeholder="Input user name" 
        class="input-field"
      >
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="input-field"
      >
      <button @click="handleLogin" class="login-btn">
        Log in
      </button>
    </div>

    <p class="hint">account: lucy / 123456</p>
  </div>

  <NuxtLink to="/" class="back-btn"> Back to Home</NuxtLink>
</div>
</template>

<script setup>
definePageMeta({layout: 'loginlayout'})

const correctUsername = 'lucy'
const correctPassword = '123456'

const username = ref('')
const password = ref('')
const focusField = ref(null)
const hoverLogin = ref(false)

const handleLogin = () => {
  if (username.value === correctUsername && 
      password.value === correctPassword) {
    localStorage.setItem('isLoggedIn', 'true')
    navigateTo('/')
  } else {
    // error 
    const btn = document.querySelector('.login-btn')
    btn.classList.add('shake')
    setTimeout(() => btn.classList.remove('shake'), 500)
  }
}

const goHome = () => {
  navigateTo('/')
}
</script>

<style scoped>
/* Login page styling */
:root {
  --primary: #383863;
  --secondary: #c7b368;
  --light-gray: #efedec;
  --medium-gray: #959090;
}

.login-page {
  max-width: 450px;
  margin: 100px auto;
  padding: 40px;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: var(--light-gray);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

h1 {
  color: var(--primary);
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 14px;
  margin: 20px 0;
  border: 2px solid var(--medium-gray);
  border-radius: 8px;
  box-sizing: border-box;
  transition: all 0.3s;
  font-size: 16px;
}

.input-field:focus {
  border-color: var(--secondary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(199, 179, 104, 0.2);
}

.login-btn {
  width: 100%;
  padding: 16px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s;
}

.login-btn:hover {
  background-color: var(--secondary);
  color: var(--primary);
  transform: translateY(-2px);
}

.login-btn:active {
  transform: translateY(0);
}

.back-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.back-btn:hover {
  background-color: var(--primary);
  color: white;
}

.hint {
  color: var(--medium-gray);
  margin-top: 30px;
  font-size: 14px;
}

/* Error animation */
.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}
</style>
