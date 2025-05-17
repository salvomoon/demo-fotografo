<template>
    <section class="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div class="portfolio__grid">
        <div class="portfolio__item" v-for="(item, index) in immagini" :key="index">
          <img :src="item.src" :alt="item.alt" />
          <div class="portfolio__caption">
            <h3>{{ item.titolo }}</h3>
            <p>{{ item.categoria }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
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
  </style>
  