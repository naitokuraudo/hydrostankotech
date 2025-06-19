<script setup>
import {ref, onMounted} from 'vue'
import {inView, animate} from 'motion'
import BadgeTitle from '@/components/BadgeTitle.vue'
import ProductionStage from '@/components/ProductionStage.vue'

const productionStagesTextBlock = ref(null)
const productionStagesCardsBlock = ref(null)

onMounted(() => {
  inView('#production', () => {
    animate(productionStagesTextBlock.value,
        {
          opacity: [0, 1],
          x: [-100, 0],
          rotate: [-5, 0],
          scale: [0.95, 1]
        },
        {
          duration: 0.7,
          type: 'spring',
          stiffness: 100,
          damping: 15
        }
    )

    animate(productionStagesCardsBlock.value,
        {
          opacity: [0, 1],
          y: [100, 0],
          x: [20, 0],
          scale: [0.9, 1],
          rotate: [3, 0]
        },
        {
          delay: 0.15,
          duration: 0.8,
          type: 'spring',
          stiffness: 90,
          damping: 12
        }
    )

    return () => {
      productionStagesTextBlock.value.style.opacity = 0
      productionStagesTextBlock.value.style.transform = 'translateX(-100px) rotate(-5deg) scale(0.95)'
      productionStagesCardsBlock.value.style.opacity = 0
      productionStagesCardsBlock.value.style.transform = 'translate(20px, 100px) rotate(3deg) scale(0.9)'
    }
  }, {
    amount: 0.2
  })
})
</script>

<template>
  <section id="production" class="production-section">
    <div class="production-container">

      <div ref="productionStagesTextBlock">
        <BadgeTitle :title="'02 — Производство'"/>

        <h2 class="production-title">
          <span class="primary-blue">Этапы</span> производства
        </h2>
      </div>

      <div class="production-stages" ref="productionStagesCardsBlock">
        <ProductionStage/>
      </div>

    </div>
  </section>
</template>