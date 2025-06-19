<script setup>
import {ref, onMounted} from 'vue'
import {inView, animate} from 'motion'
import Button from '@/components/Button.vue'
import HeroImage from '@/assets/images/hero/hero_image.svg'

const heroTextBlock = ref(null)
const heroImageWrapper = ref(null)

onMounted(() => {
  inView('#hero', () => {
    animate(heroTextBlock.value, {opacity: [0, 1], x: [-100, 0]}, {duration: 0.5})
    animate(heroImageWrapper.value, {opacity: [0, 1], y: [100, 0]}, {duration: 0.5})

    return () => {
      heroTextBlock.value.style.opacity = 0
      heroTextBlock.value.style.transform = 'translateX(-100px)'
      heroImageWrapper.value.style.opacity = 0
      heroImageWrapper.value.style.transform = 'translateY(100px)'
    }
  }, {
    amount: 0.2
  })
})
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="hero-container">
      <div class="hero-wrapper">

        <div class="hero-text-block" ref="heroTextBlock">
          <div>
            <h1 class="hero-title">
              Гидростанции
              <span class="hero-subtitle">под ключ</span>
            </h1>

            <div class="hero-description-wrapper">
              <p class="hero-description">
                Надёжные гидросистемы для вашего бизнеса.
                Проектирование, сборка, внедрение и сервис.
                Ремонт станков и гидравлического оборудования.
              </p>
            </div>

            <Button :link="'contacts'" :title="'Написать нам'"/>
          </div>
        </div>

        <div class="hero-image-wrapper" ref="heroImageWrapper">
          <img :src="HeroImage" alt="Гидростанция" class="hero-image"/>
        </div>

      </div>
    </div>
  </section>
</template>