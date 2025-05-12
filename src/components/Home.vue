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
<section class="contact">
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

<style scoped>
.home {
  font-family: 'Segoe UI', sans-serif;
  color: #1f2937;
  line-height: 1.6;
}

/* HERO */
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
  background: rgba(0, 0, 0, 0.3);
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
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero__subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.hero__cta-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.hero__cta {
  font-family: inherit;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  border-radius: 6px;
  transition: all 0.3s ease;
  margin: 0.5rem;
}

.hero__cta--primary {
  background-color: #ffffff;
  color: #2563eb;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.hero__cta--primary:hover {
  background-color: #2563eb;
  color: #ffffff;
  transform: scale(1.04);
}

.hero__cta--secondary {
  background-color: transparent;
  color: #ffffff;
  font-size: 0.9rem;
  padding: 0.5rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.hero__cta--secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: #ffffff;
  color: #ffffff;
}

/* ABOUT */
.about {
  background-color: #fefefe;
  padding: 4rem 1rem;
}

.about__container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .about__container {
    flex-direction: row;
    align-items: center;
  }
}

.about__text {
  flex: 1;
  color: #1f2937;
}

.about__text h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
}

.about__text p {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.8;
  color: #374151;
}

.about__image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about__image img {
  max-width: 300px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* PORTFOLIO */
.portfolio {
  padding: 3rem 1rem;
  background: #f9fafb;
  text-align: center;
}

.portfolio__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.portfolio__item {
  position: relative; /* Necessario per il corretto posizionamento dell'overlay */
  overflow: hidden;
  border-radius: 8px;
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)); /* Opacità alta per scurire l'immagine */
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1; /* Deve stare sopra l'immagine */
}

.portfolio__item:hover::before {
  opacity: 1; /* Mostra l'overlay al passaggio del mouse */
}

.portfolio__caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 2; /* Dev'essere sopra l'overlay */
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio__item:hover .portfolio__caption {
  opacity: 1; /* Mostra la didascalia al passaggio del mouse */
}
/* CONTATTI */
.contact {
  padding: 6rem 1rem;
  background-color: #f9fafb;
  text-align: center;
}

.contact__content {
  max-width: 800px;
  margin: 0 auto;
}

.contact h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.contact p {
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact__value {
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.7;
  margin: 2rem auto;
  max-width: 800px;
  text-align: center;
}

/* CTA per richiedere il preventivo */
.contact__cta {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1.125rem;
  text-decoration: none;
  text-align: center;
  margin-top: 2rem;
  transition: background-color 0.3s ease;
}

.contact__cta:hover {
  background-color: #1d4ed8;
}

/* FORM */
.contact__form {
  max-width: 600px;
  margin: 2rem auto;
  text-align: left;
}

label {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1rem;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 1rem;
  background-color: #f9fafb;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #2563eb;
}

textarea {
  resize: vertical;
  min-height: 150px;
}

.contact__btn {
  width: 100%;
  padding: 1rem;
  background: #2563eb;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact__btn:hover {
  background-color: #1d4ed8;
}

/* Responsività */
@media (max-width: 768px) {
  .contact__value {
    font-size: 1rem;
  }

  .contact__cta {
    font-size: 1rem;
  }

  .contact__form {
    padding: 0 1rem;
  }
}


/*FOOTER*/

.footer {
  background-color: #1f2937;
  color: #f3f4f6;
  padding: 2rem 1rem;
  text-align: center;
}

.footer__content {
  max-width: 1000px;
  margin: 0 auto;
}

.footer__copyright {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.footer__social a {
  margin: 0 0.5rem;
  color: #f3f4f6;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.footer__social a:hover {
  color: #3b82f6; /* azzurrino al passaggio */
}

</style>
