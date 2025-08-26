<script setup lang="ts">
interface NavLinks {
  text: string,
  href: string,
}

const links: NavLinks[] = [
  {text: 'Преимущества', href: '#benefits'},
  {text: 'Производство', href: '#production'},
  {text: 'Портфолио', href: '#portfolio'},
  {text: 'Вопросы', href: '#faq'},
]
</script>

<template>
  <ul class="nav-list">
    <li v-for="(link, index) in links" :key="index">
      <a :href="link.href" class="nav-link">{{ link.text }}</a>
    </li>

    <li>
      <a href="#contact-form" onclick="ym(101825847,'reachGoal','contact-form-button'); return true;"
         class="nav-contact-link">
        Связаться с нами
      </a>
    </li>
  </ul>
</template>