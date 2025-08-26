<script setup lang="ts">
import {inView, animate} from 'motion-v';

const heroTextBlock = ref<HTMLDivElement | null>(null);
const heroImageWrapper = ref<HTMLDivElement | null>(null);

onMounted(() => {
  inView('#hero', () => {
    if (heroTextBlock.value && heroImageWrapper.value) {
      animate(heroTextBlock.value, {opacity: [0, 1], x: [-100, 0]}, {duration: 0.5});
      animate(heroImageWrapper.value, {opacity: [0, 1], y: [100, 0]}, {duration: 0.5});
    }
    return () => {
      heroTextBlock.value!.style.opacity = '0';
      heroTextBlock.value!.style.transform = 'translateX(-100px)';
      heroImageWrapper.value!.style.opacity = '0';
      heroImageWrapper.value!.style.transform = 'translateY(100px)';
    };
  }, {
    amount: 0.2
  });
});
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

            <div class="flex flex-col sm:flex-row lg:items-center gap-3.5">
              <Button onclick="ym(101825847,'reachGoal','leave-a-request'); return true;" class="text-white"
                      :link="'contact-form'" :title="'Оставить заявку'"/>
              <Button class="text-gray-800 bg-white border border-gray-500" :link="'portfolio'"
                      :title="'Примеры работ'"/>
            </div>
          </div>
        </div>

        <div class="hero-image-wrapper" ref="heroImageWrapper">
          <NuxtImg loading="lazy" src="/images/hero/hero_image.webp" alt="Гидростанция" class="hero-image"/>
        </div>

      </div>
    </div>
  </section>
</template>