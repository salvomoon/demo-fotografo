<template>
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex gap-6">
          <router-link 
            to="/" 
            class="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </router-link>
          <router-link 
            to="/about" 
            class="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Chi sono
          </router-link>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader'
  }
  </script>