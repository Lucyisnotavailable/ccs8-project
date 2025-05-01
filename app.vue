<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style>
/* 页面跳转过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
