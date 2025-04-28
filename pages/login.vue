<template>
  <div class="login-page">
    <h1>Welcome!</h1>
    
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
    
    <p class="hint">account :admin / 123456</p>
  </div>
</template>

<script setup>
const correctUsername = 'admin'
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
</script>

<style>

</style>