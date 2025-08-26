<script setup lang="ts">
import {inView, animate} from 'motion-v';

const benefitTextBlock = ref<HTMLDivElement | null>(null);
const benefitCardsBlock = ref<HTMLDivElement | null>(null);

onMounted(() => {
  inView('#benefits', () => {
    if (benefitTextBlock.value && benefitCardsBlock.value) {
      animate(
          benefitTextBlock.value,
          {
            opacity: [0, 1],
            x: [-120, 0],
            rotateZ: [-5, 0]
          },
          {
            delay: 0.2,
            duration: 0.7,
            type: 'spring',
            stiffness: 100,
            damping: 12,
            ease: [0.4, 0, 0.2, 1]
          }
      )
      animate(
          benefitCardsBlock.value,
          {
            opacity: [0, 1],
            y: [100, 0],
            x: [20, 0],
            scale: [0.95, 1]
          },
          {
            delay: 0.1,
            duration: 0.7,
            type: 'spring',
            stiffness: 90,
            damping: 14,
            ease: [0.4, 0, 0.2, 1]
          }
      )
    }

    return () => {
      benefitTextBlock.value!.style.opacity = '0';
      benefitTextBlock.value!.style.transform = 'translateX(-100px)';
      benefitCardsBlock.value!.style.opacity = '0';
      benefitCardsBlock.value!.style.transform = 'translateY(100px)';
    }
  }, {
    amount: 0.2
  })
})
</script>

<template>
  <section id="benefits" class="benefits-section">
    <div class="benefits-container">

      <div ref="benefitTextBlock">
        <BadgeTitle :title="'01 — Преимущества'"/>

        <h2 class="benefits-title">
          Комплексные гидравлические решения
        </h2>

        <p class="benefits-description">
          Наши гидростанции обеспечивают надёжную и эффективную работу промышленного оборудования. Мы создаём умные
          решения для управления, автоматизации и мониторинга, чтобы сделать гидросистемы ещё стабильнее, безопаснее и
          производительнее.
        </p>
      </div>

      <div class="benefits-grid" ref="benefitCardsBlock">
        <Benefit/>
      </div>

      <Button onclick="ym(101825847,'reachGoal','leave-a-request'); return true;" class="text-white"
              :link="'contact-form'" :title="'Оставить заявку'"/>
    </div>
  </section>
</template>