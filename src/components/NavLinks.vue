<script setup>
import {useRoute, useRouter} from 'vue-router'

const router = useRouter()
const route = useRoute()

function goToContacts() {
  if (route.path === '/') {
    const el = document.querySelector('#contacts')
    if (el) el.scrollIntoView({behavior: 'smooth'})
  } else {
    router.push({path: '/', hash: '#contacts'})
  }
}

defineProps(['isHome'])

const links = [
  {text: 'Преимущества', href: '#benefits'},
  {text: 'Производство', href: '#production'},
  {text: 'Портфолио', href: '#portfolio'},
  {text: 'Вопросы', href: '#faq'},
]
</script>

<template>
  <ul class="nav-list">
    <li v-for="(link, index) in links" :key="index">
      <template v-if="isHome">
        <a :href="link.href" class="nav-link">{{ link.text }}</a>
      </template>
      <template v-else>
        <router-link :to="`/${link.href}`" class="nav-link">
          {{ link.text }}
        </router-link>
      </template>
    </li>

    <li>
      <button @click="goToContacts" class="nav-contact-link">
        Связаться с нами
      </button>
    </li>
  </ul>
</template>