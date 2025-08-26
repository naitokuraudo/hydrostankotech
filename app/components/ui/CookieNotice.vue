<script setup lang="ts">
const showBanner = ref<boolean>(false);

onMounted(() => {
  const stored = localStorage.getItem('cookieConsent');
  showBanner.value = stored !== 'true';
});

function okay() {
  localStorage.setItem('cookieConsent', 'true');
  showBanner.value = false;
}
</script>

<template>
  <teleport to="body">
    <section v-if="showBanner" class="cookie-section">
      <h2 class="cookie-title">🍪 Уведомление о файлах cookie</h2>

      <p class="cookie-desc">
        Мы используем файлы cookie, чтобы обеспечить вам лучший опыт на нашем сайте.
        <a target="_blank" ref="noopener noreferrer" href="/pdfs/politika_konfidencialnosti_220625.pdf"
           class="cookie-link">
          Прочитайте политику конфиденциальности.
        </a>
      </p>

      <button type="button" @click="okay" class="cookie-accept-btn">Хорошо</button>
    </section>
  </teleport>
</template>