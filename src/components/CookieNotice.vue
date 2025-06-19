<script setup>
import {ref, onMounted} from 'vue'

const showBanner = ref(false)

onMounted(() => {
  const consent = getCookie('cookieConsent')
  if (!consent) {
    showBanner.value = true
  } else if (consent === 'accepted') {
    loadYandexMetrika()
  }
})

function acceptCookies() {
  setCookie('cookieConsent', 'accepted', 365)
  loadYandexMetrika()
  showBanner.value = false
}

function declineCookies() {
  setCookie('cookieConsent', 'declined', 365)
  showBanner.value = false

  const noscript = document.getElementById('ym-noscript')
  if (noscript) noscript.remove()
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax; secure`
}

function getCookie(name) {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1]
}

function loadYandexMetrika() {
  if (window.ym) return

  const script = document.createElement('script')
  script.src = 'https://mc.yandex.ru/metrika/tag.js'
  script.async = true
  document.head.appendChild(script)

  script.onload = () => {
    window.ym = window.ym || function () {
      (window.ym.a = window.ym.a || []).push(arguments)
    }

    window.ym(101825847, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })
  }
}
</script>

<template>
  <section v-if="showBanner" class="cookie-section">
    <h2 class="cookie-title">🍪 Уведомление о файлах cookie</h2>

    <p class="cookie-desc">
      Мы используем файлы cookie, чтобы обеспечить вам лучший опыт на нашем сайте.
      <router-link to="/privacy-policy" class="cookie-link">
        Прочитайте политику конфиденциальности.
      </router-link>
    </p>

    <div class="flex items-center gap-2.5 mt-4">
      <button @click="acceptCookies" class="cookie-accept-btn">Принять</button>
      <button @click="declineCookies" class="cookie-cancel-btn">Отменить</button>
    </div>
  </section>
</template>