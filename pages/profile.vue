<template>
  <section class="min-h-screen bg-light-gray py-10">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Side: Profile + Favorite Recipes -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Profile Card -->
        <div class="bg-white rounded-2xl p-6 shadow flex items-center gap-4">
          <div class="w-20 h-20 rounded-full border-4 border-secondary bg-gray-200"></div>
          <div>
            <h2 class="text-xl font-bold text-primary">Lucy</h2>
            <p class="text-sm text-gray-600">Food Explorer</p>
            <button class="mt-2 bg-primary text-white px-3 py-1 rounded hover:bg-secondary text-sm">Sign Out</button>
          </div>
        </div>

        <!-- About Section -->
        <div class="bg-white rounded-2xl p-6 shadow">
          <h3 class="text-lg font-semibold text-primary mb-2">About</h3>
          <p class="text-gray-700 text-sm">
            Passionate home cook exploring new recipes weekly. Love baking on weekends and trying international cuisines.
          </p>
        </div>

        <!-- Favorite Recipes -->
        <div class="bg-white rounded-2xl p-6 shadow">
          <h3 class="text-lg font-semibold text-primary mb-4">Favorite Recipes</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-light-gray p-4 rounded-xl shadow">
              <img src="/pasta.jpg" alt="Pasta" class="w-full h-32 object-cover rounded" />
              <p class="mt-2 font-semibold text-sm">Pasta</p>
              <p class="text-xs text-gray-500">30 mins</p>
              <button class="mt-1 text-xs bg-secondary text-white px-2 py-1 rounded">Remove</button>
            </div>
            <div class="bg-light-gray p-4 rounded-xl shadow">
              <img src="/" alt="Pizza" class="w-full h-32 object-cover rounded" />
              <p class="mt-2 font-semibold text-sm">Pizza</p>
              <p class="text-xs text-gray-500">45 mins</p>
              <button class="mt-1 text-xs bg-secondary text-white px-2 py-1 rounded">Remove</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Chatbot Section -->
      <div class="bg-white rounded-2xl p-6 shadow flex flex-col justify-between h-fit">
        <div>
          <h3 class="text-lg font-semibold text-primary mb-2">Talk to LucyBot</h3>
          <p class="text-sm text-gray-600">Hi! What do you want to cook today?</p>
          <div class="mt-2 bg-light-gray text-sm p-2 rounded text-secondary">Something sweet!</div>
        </div>
        <div class="mt-4">
          <input type="text" placeholder="Type your message..." class="w-full border rounded px-3 py-2 text-sm" />
          <button class="w-full bg-primary text-white mt-2 py-2 rounded hover:bg-secondary text-sm">Send</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-light-gray {
  background-color: #efedec;
}
.text-primary {
  color: #383863;
}
.bg-primary {
  background-color: #383863;
}
.bg-secondary {
  background-color: #c7b368;
}
.text-secondary {
  color: #c7b368;
}
</style>
