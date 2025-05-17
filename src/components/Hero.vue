<template>
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__title">Matteo Bianchi</h1>
        <p class="hero__subtitle">Fotografo di matrimoni, ritratti ed eventi a Milano</p>
        <div class="hero__cta-container">
          <a href="#portfolio" class="hero__cta hero__cta--primary">Esplora il Portfolio</a>
          <a href="#contatti" class="hero__cta hero__cta--secondary">Contattami</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .hero {
    position: relative;
    background-image: url('../assets/hero-background.jpg');
    background-size: cover;
    background-position: center;
    padding: 8rem 1rem;
    text-align: center;
    color: white;
    overflow: hidden;
  }
  
  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
  
  .hero__content {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .hero__title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3.5rem, 8vw, 7rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -1px;
    margin-bottom: 1rem;
    color: #ffffff;
    text-shadow: 3px 3px 12px rgba(0, 0, 0, 0.6);
    position: relative;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 1s ease-out 0.2s forwards;
  }
  
  .hero__title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #ffffff;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
  
  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .hero__subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }
  
  .hero__cta-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  
  .hero__cta {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    margin: 0.5rem;
  }
  
  .hero__cta--primary {
    background-color: #ffffff;
    color: #1f2937;
    border: 2px solid #ffffff;
  }
  
  .hero__cta--primary:hover {
    background-color: #1f2937;
    color: #ffffff;
    transform: scale(1.05);
  }
  
  .hero__cta--secondary {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
  }
  
  .hero__cta--secondary:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    .hero__title {
      font-size: 2.5rem;
    }
  
    .hero__cta-container {
      flex-direction: column;
    }
  }
  </style>
  