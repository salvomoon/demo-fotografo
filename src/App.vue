<!-- <template>
  <div id="app">
    <Hero />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<style>

</style>
 -->

 <!-- App.vue -->
<template>
  <Header /> <!-- 👈 Componente Header -->
  <Hero />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  <router-view/>
</template>

<script>
import Header from '@/components/Header.vue'; // 👈 Importa il componente
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header, // 👈 Registra il componente
    Hero,
    About,
    Portfolio,
    Contact,
    Footer
  }
}
</script>