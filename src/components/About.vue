<template>
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
</template>

    <script setup>
        import aboutImg from '../assets/about-me.jpg'
    </script>
    
    <style scoped>
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
    </style>