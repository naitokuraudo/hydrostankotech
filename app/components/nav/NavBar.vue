<script setup lang="ts">
import {RiMenuFill, RiCloseFill} from '@remixicon/vue';

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}

onMounted(() => {
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    const isDesktop = window.innerWidth >= 1024;

    if (!navbar) return;

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
      <NuxtLink to="/" class="navbar-logo">
        <NuxtImg loading="lazy" src="/images/favicon-96x96.png" width="32" height="32" class="w-8" alt="Логотип"/>
        Гидростанкотех
      </NuxtLink>

      <nav class="navbar-nav">
        <NavLinks/>
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
        <NavLinks class="mobile-nav-links"/>
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