<script setup>
import logo from '@/assets/logo.svg'
</script>

<template>
  <footer id="footer" class="footer-section">
    <div class="footer-container">
      <router-link to="/" class="footer-logo">
        <img loading="lazy" :src="logo" width="32" height="32" class="w-8" alt="Логотип">
        Гидростанкотех
      </router-link>
      <div class="footer-links">
        <span class="footer-year">
          © {{ new Date().getFullYear() }} ИП «Систейкин Роман Николаевич»
        </span>
        <router-link to="/privacy-policy" class="footer-link">
          Политика конфиденциальности
        </router-link>
      </div>
    </div>
  </footer>
</template>