<script setup lang="ts">
import {motion} from 'motion-v';
import {RiFlashlightFill, RiLock2Fill, RiLeafFill} from '@remixicon/vue';

interface Benefits {
  icon: Component,
  title: string,
  description: string
}

const benefits: Benefits[] = [
  {
    icon: RiFlashlightFill,
    title: 'Энергоэффективность',
    description: 'Современные гидростанции обеспечивают высокий КПД при минимальных затратах энергии и природных ресурсов.',
  },
  {
    icon: RiLock2Fill,
    title: 'Надёжность и безопасность',
    description: 'Гидростанции проектируются с учётом стандартов безопасности и рассчитаны на длительную эксплуатацию в любых условиях.',
  },
  {
    icon: RiLeafFill,
    title: 'Экологичность',
    description: 'Работа гидростанций не загрязняет воздух или воду, что делает их важным элементом устойчивой энергетики.',
  },
]
</script>

<template>
  <motion.div :whileHover="{
        scale: [null, 1, 1.075],
        transition: {
          duration: 0.5,
          times: [0, 0.6, 1],
          ease: ['easeInOut', 'easeOut']
        }
      }" :transition="{
        duration: 0.3,
        ease: 'easeOut'
      }" class="benefit-card" v-for="(item) in benefits">
    <div class="contact-icon-wrapper">
      <component :is="item.icon" class="benefit-icon"/>
    </div>
    <h3 class="benefit-title">{{ item.title }}</h3>
    <p class="benefit-description">{{ item.description }}</p>
  </motion.div>
</template>