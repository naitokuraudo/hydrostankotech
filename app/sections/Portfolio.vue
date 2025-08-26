<script setup lang="ts">
import {inView, animate} from 'motion-v';

const portfolioTextBlock = ref<HTMLDivElement | null>(null);
const portfolioCardsBlock = ref<HTMLDivElement | null>(null);

onMounted(() => {
  inView('#portfolio', () => {
    if (portfolioTextBlock.value && portfolioCardsBlock.value) {
      animate(portfolioTextBlock.value,
          {
            opacity: [0, 0.5, 1],
            x: [60, -10, 0],
            filter: ['blur(16px)', 'blur(4px)', 'blur(0px)']
          },
          {
            duration: 1,
            times: [0, 0.5, 1]
          }
      )

      animate(portfolioCardsBlock.value,
          {
            opacity: [0, 1],
            y: [80, 0],
            filter: ['blur(12px)', 'blur(0px)']
          },
          {
            delay: 0.2,
            type: 'spring',
            stiffness: 200,
            damping: 20,
            mass: 1
          }
      );
    }

    return () => {
      portfolioTextBlock.value!.style.opacity = '0';
      portfolioTextBlock.value!.style.transform = 'translateX(60px)';
      portfolioTextBlock.value!.style.filter = 'blur(8px)';
      portfolioCardsBlock.value!.style.opacity = '0';
      portfolioCardsBlock.value!.style.transform = 'translateY(80px)';
      portfolioCardsBlock.value!.style.filter = 'blur(12px)';
    }
  }, {
    amount: 0.2
  })
})

const images = Array.from({length: 38}, (_, i) =>
    `/images/portfolio/${i + 1}.webp`
)
</script>

<template>
  <section id="portfolio" class="portfolio-section">
    <div class="portfolio-container">
      <div ref="portfolioTextBlock">
        <BadgeTitle :title="'03 — Портфолио'"/>

        <h2 class="portfolio-title">
          Наши работы
        </h2>
      </div>
    </div>

    <div ref="portfolioCardsBlock">
      <UCarousel v-slot="{ item }" loop :autoplay="{delay: 2000}" :items="images"
                 :ui="{ item: 'basis-[100vw] md:basis-1/4' }"
                 class="portfolio-carousel">
        <div class="portfolio-carousel-slide">
          <img alt="Портфолио" :src="item" class="portfolio-slide-img">
        </div>
      </UCarousel>
    </div>

    <div class="flex items-center justify-center mt-12 mb-8 md:mt-8 md:mb-8">
      <Button onclick="ym(101825847,'reachGoal','leave-a-request'); return true;" class="text-white"
              :link="'contact-form'" :title="'Оставить заявку'"/>
    </div>
  </section>
</template>