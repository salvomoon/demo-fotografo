<template>
  <main class="home">
    <!-- HERO -->
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

    <!-- ABOUT -->
    <section class="about">
      <div class="about__container">
        <div class="about__text">
          <h2>Chi sono</h2>
          <p>
            Ciao! Mi chiamo Matteo e sono un fotografo professionista con oltre 10 anni di esperienza.
            Amo catturare storie autentiche attraverso la luce, l’espressione e la composizione.
            Il mio obiettivo è sempre creare immagini che trasmettano emozione e verità.
          </p>
          <p>
            Vivo e lavoro a Milano, ma sono disponibile in tutta Italia per matrimoni, eventi e sessioni di ritratto.
            Credo che ogni scatto debba raccontare qualcosa — e con il mio lavoro, cerco sempre la bellezza nei dettagli.
          </p>
        </div>
        <div class="about__image">
          <img :src="aboutImg" alt="Matteo Bianchi, fotografo" />
        </div>
      </div>
    </section>

    <!-- PORTFOLIO -->
    <section class="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div class="portfolio__grid">
        <div v-for="(foto, index) in immagini" :key="index" class="portfolio__item">
          <img :src="foto.src" :alt="foto.alt" />
          <div class="portfolio__caption">
            <h3>{{ foto.titolo }}</h3>
            <p>{{ foto.categoria }}</p>
          </div>
        </div>
      </div>
    </section>

   <!-- CONTATTI -->
<section class="contact" id="contatti">
  <div class="contact__content">
    <h2>Contattami</h2>

    <!-- Nuovo paragrafo di valore del servizio -->
    <p class="contact__value">
      Ogni scatto racconta la tua storia, ogni immagine è un'opera unica che cattura momenti indimenticabili. Offro servizi personalizzati per matrimoni, eventi e ritratti a Milano e in tutta Italia. Non esitare a contattarmi per creare qualcosa di speciale insieme!
    </p>

    <!-- CTA per richiedere il preventivo -->
    <a href="#form" class="contact__cta">Richiedi un preventivo</a>

    <form action="POST" method="POST" id="form">
      <div class="contact__form">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" required placeholder="Il tuo nome">

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="La tua email">

        <label for="message">Messaggio</label>
        <textarea id="message" name="message" required placeholder="Il tuo messaggio"></textarea>

        <button type="submit" class="contact__btn">Invia messaggio</button>
      </div>
    </form>
  </div>
</section>


  </main>

  <!-- FOOTER -->
<footer class="footer">
  <div class="footer__content">
    <p class="footer__copyright">
      © Matteo Bianchi 2025 – Fotografo a Milano
    </p>
    <div class="footer__social">
      <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="mailto:matteo@email.com" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </div>
</footer>

</template>

<script setup>
import aboutImg from '../assets/about-me.jpg'
import foto1 from '../assets/portfolio/ritratto1.jpg'
import foto2 from '../assets/portfolio/matrimonio1.jpg'
import foto3 from '../assets/portfolio/eventi1.jpg'

const immagini = [
  {
    src: foto1,
    alt: 'Ritratto femminile in esterno',
    titolo: 'Ritratto #1',
    categoria: 'Ritratti'
  },
  {
    src: foto2,
    alt: 'Scatto durante un matrimonio a Milano',
    titolo: 'Matrimonio #1',
    categoria: 'Matrimoni'
  },
  {
    src: foto3,
    alt: 'Concerto con luci drammatiche',
    titolo: 'Evento live #1',
    categoria: 'Eventi'
  }
]
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

/* HERO */
.hero {
  position: relative;
  background-image: url('../assets/hero-background.jpg');
  background-size: cover;
  background-position: center;
  padding: var(--space-12) var(--space-4);
  text-align: center;
  color: var(--color-white);
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
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.hero__title {
  font-family: var(--font-heading);
  font-size: var(--font-4xl);
  font-weight: 700;
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-4);
  color: var(--color-white);
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
  background-color: var(--color-white);
  margin: var(--space-4) auto 0;
  border-radius: 2px;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero__subtitle {
  font-size: var(--font-lg);
  line-height: var(--line-height-base);
  margin-bottom: var(--space-6);
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.hero__cta-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--space-6);
}

.hero__cta {
  font-size: var(--font-md);
  font-weight: 600;
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  margin: var(--space-2);
}

.hero__cta--primary {
  background-color: var(--color-white);
  color: var(--color-text);
  border: 2px solid var(--color-white);
}

.hero__cta--primary:hover {
  background-color: var(--color-text);
  color: var(--color-white);
  transform: scale(1.05);
}

.hero__cta--secondary {
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
}

.hero__cta--secondary:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}

/* ABOUT */
.about {
  background-color: var(--color-white);
  padding: var(--space-10) var(--space-4);
}

.about__container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .about__container {
    flex-direction: row;
    align-items: center;
  }
}

.about__text {
  flex: 1;
  color: var(--color-text);
}

.about__text h2 {
  font-size: var(--font-2xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  color: var(--color-dark);
}

.about__text p {
  font-size: var(--font-md);
  margin-bottom: var(--space-4);
  line-height: var(--line-height-relaxed);
  color: var(--color-muted);
}

.about__image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about__image img {
  max-width: 300px;
  border-radius: var(--radius-md);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* PORTFOLIO */
.portfolio {
  padding: var(--space-10) var(--space-4);
  background: var(--color-bg);
  text-align: center;
}

.portfolio h2 {
  font-size: var(--font-2xl);
  color: var(--color-dark);
  margin-bottom: var(--space-6);
}

.portfolio__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.portfolio__item {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.portfolio__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.portfolio__item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.portfolio__item:hover::before {
  opacity: 1;
}

.portfolio__caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-white);
  text-align: center;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio__item:hover .portfolio__caption {
  opacity: 1;
}

/* CONTATTI */
.contact {
  padding: var(--space-12) var(--space-4);
  background-color: var(--color-bg);
  text-align: center;
}

.contact__content {
  max-width: 800px;
  margin: 0 auto;
}

.contact h2 {
  font-size: var(--font-2xl);
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: var(--space-5);
}

.contact p,
.contact__value {
  font-size: var(--font-md);
  color: var(--color-muted);
  margin-bottom: var(--space-6);
  line-height: var(--line-height-relaxed);
}

.contact__cta {
  display: inline-block;
  background-color: var(--color-accent);
  color: var(--color-white);
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-sm);
  font-size: var(--font-md);
  text-decoration: none;
  margin-top: var(--space-2);
  transition: background-color 0.3s ease;
}

.contact__cta:hover {
  background-color: #1d4ed8;
}

/* FORM */
.contact__form {
  max-width: 600px;
  margin: var(--space-8) auto;
  text-align: left;
}

label {
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-1);
  display: block;
  font-size: var(--font-sm);
}

input,
textarea {
  width: 100%;
  padding: var(--space-3);
  border: 1px solid #d1d5db;
  border-radius: var(--radius-sm);
  font-size: var(--font-sm);
  margin-bottom: var(--space-4);
  background-color: var(--color-bg);
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

textarea {
  resize: vertical;
  min-height: 150px;
}

.contact__btn {
  width: 100%;
  padding: var(--space-4);
  background: var(--color-accent);
  color: var(--color-white);
  font-size: var(--font-lg);
  font-weight: 600;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact__btn:hover {
  background-color: #1d4ed8;
}

/* FOOTER */
.footer {
  background-color: var(--color-text);
  color: var(--color-white);
  padding: var(--space-6) var(--space-4);
  text-align: center;
}

.footer__content {
  max-width: 1200px;
  margin: 0 auto;
  font-size: var(--font-sm);
  color: var(--color-white);
}


</style>
