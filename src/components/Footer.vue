<template>
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

</script>


<style scoped>
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

.footer__social a {
  display: inline-block;
  margin: 0 0.75rem;
  color: #f3f4f6;
  font-size: 1.5rem; 
  transition: color 0.3s ease;
}
</style>
