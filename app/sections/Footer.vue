<template>
  <footer id="footer" class="footer-section">
    <div class="footer-container">
      <NuxtLink to="/" class="footer-logo">
        <NuxtImg loading="lazy" src="/images/favicon-96x96.png" width="32" height="32" class="w-8" alt="Логотип"/>
        Гидростанкотех
      </NuxtLink>

      <div class="footer-links">
        <span class="footer-year">
          © {{ new Date().getFullYear() }} ИП «Систейкин Роман Николаевич»
        </span>
        <a target="_blank" ref="noopener noreferrer" href="/pdfs/politika_konfidencialnosti_220625.pdf"
           class="footer-link">
          Политика конфиденциальности
        </a>
      </div>
    </div>
  </footer>
</template>