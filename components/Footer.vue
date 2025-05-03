<template>
  <footer class="w-full bg-[#383863] text-white py-6 relative">
    <!-- Logo 绝对居中 -->
    <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <img src="https://via.placeholder.com/80x80?text=Logo" alt="Logo" class="w-20 h-20" />
    </div>

    <!-- 内容区域 -->
    <div class="w-full max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 relative z-0">
      
      <!-- 左侧信息 -->
      <div class="flex-1 min-w-[300px]">
        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <!-- Support -->
          <div class="flex-1 max-w-[200px]">
            <h4 class="text-[#c7b368] text-[20px] font-bold mb-2">Support</h4>
            <ul class="space-y-2">
              <li><NuxtLink to="/help" class="text-[#efedec] hover:text-[#c7b368] transition">Help / FAQ</NuxtLink></li>
              <li><NuxtLink to="/terms" class="text-[#efedec] hover:text-[#c7b368] transition">Terms & Conditions</NuxtLink></li>
              <li><NuxtLink to="/credits" class="text-[#efedec] hover:text-[#c7b368] transition">Credits</NuxtLink></li>
            </ul>
          </div>
          <!-- Team -->
          <div class="flex-1 max-w-[200px]">
            <h4 class="text-[#c7b368] text-[20px] font-bold mb-2">Team</h4>
            <ul class="space-y-2">
              <li><NuxtLink to="/about" class="text-[#efedec] hover:text-[#c7b368] transition">About Us</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-[#efedec] hover:text-[#c7b368] transition">Contact Us</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>

     <!-- Chatbox 靠右但有留白 -->
     <div class="flex-1 min-w-[220px] flex justify-end">
      <div class="bg-[#959090] p-2 w-[220px] h-[160px]">
        <div class="bg-[#efedec] text-[#383863] p-3 w-full h-full flex items-center justify-center text-center">
          <p>Welcome! How can I assist you today?</p>
        </div>
      </div>
    </div>

    </div>
  </footer>
</template>
