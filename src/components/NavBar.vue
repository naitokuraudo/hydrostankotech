<script setup>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import logo from '@/assets/logo.svg'
import NavLinks from '@/components/NavLinks.vue'
import {RiMenuFill, RiCloseFill} from '@remixicon/vue'

const route = useRoute()
const isHome = route.path === '/'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

onMounted(() => {
  const navbar = document.querySelector('.navbar');

  const handleScroll = () => {
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      if (window.scrollY > 0) {
        navbar.classList.add('shadow-[0_1px_100px_rgba(0,0,0,.25)]', 'bg-white');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('shadow-[0_1px_100px_rgba(0,0,0,.25)]', 'bg-white');
        navbar.classList.add('bg-transparent');
      }
    } else {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-white');
    }
  };

  handleScroll();

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
})
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-logo">
        <img loading="lazy" width="32" height="32" :src="logo" class="w-8" alt="Логотип">
        Гидростанкотех
      </router-link>

      <nav class="navbar-nav">
        <NavLinks :isHome="isHome"/>
      </nav>

      <button
          @click="toggleMenu"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          aria-label="Открыть меню"
          class="navbar-toggle"
      >
        <RiMenuFill v-if="!isOpen" size="24px" color="#000"/>
        <RiCloseFill v-else size="24px" color="#000"/>
      </button>
    </div>

    <transition name="anim">
      <nav id="mobile-menu" v-if="isOpen" class="mobile-menu">
        <NavLinks :isHome="isHome" class="mobile-nav-links"/>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.anim-enter-from,
.anim-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.anim-enter-active,
.anim-leave-active {
  transition: opacity .3s ease, transform .3s ease;
}
</style>