<template>
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
</template>
  
  <script setup>
    
  </script>
  
  <style scoped>
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

  </style>
  