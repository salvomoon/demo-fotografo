<template>
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
:root {
  /* Font families */
  --font-body: 'Inter', sans-serif;
  --font-heading: 'Playfair Display', serif;

  /* Font sizes (modular scale) */
  --font-xs: 0.875rem;    /* 14px */
  --font-sm: 1rem;         /* 16px */
  --font-md: 1.125rem;     /* 18px */
  --font-lg: 1.5rem;       /* 24px */
  --font-xl: 2rem;         /* 32px */
  --font-2xl: 3rem;        /* 48px */
  --font-3xl: 4rem;        /* 64px */
  --font-4xl: clamp(3.5rem, 8vw, 7rem); /* Hero title */

  /* Spacing scale (padding, margin, gap) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.5rem;    /* 24px */
  --space-6: 2rem;      /* 32px */
  --space-8: 3rem;      /* 48px */
  --space-10: 4rem;     /* 64px */
  --space-12: 6rem;     /* 96px */

  /* Container width */
  --container-width: 1200px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Line heights */
  --line-height-base: 1.6;
  --line-height-tight: 1.2;
  --line-height-relaxed: 1.8;

  /* Colors */
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-accent: #2563eb;
  --color-bg: #f9fafb;
  --color-white: #ffffff;
  --color-dark: #111827;
}

body {
  font-family: var(--font-body);
  font-size: var(--font-md);
  line-height: var(--line-height-base);
  color: var(--color-text);
  background-color: var(--color-white);
  margin: 0;
  padding: 0;
}

</style>

