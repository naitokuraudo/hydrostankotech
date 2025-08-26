<script setup lang="ts">
import {inView, animate} from 'motion-v';

const faqTextBlock = ref<HTMLDivElement | null>(null);
const faqCardsBlock = ref<HTMLDivElement | null>(null);

onMounted(() => {
  inView('#faq', () => {
    if (faqTextBlock.value && faqCardsBlock.value) {
      animate(faqTextBlock.value,
          {
            opacity: [0, 1],
            y: [20, 0],
            scale: [0.98, 1],
            filter: ['brightness(1.3) blur(4px)', 'brightness(1) blur(0px)']
          },
          {
            duration: 0.8,
            type: 'spring'
          }
      )

      animate(faqCardsBlock.value,
          {
            opacity: [0, 1],
            transform: [
              'translateY(60px) rotateX(10deg) scale(0.95)',
              'translateY(0px) rotateX(0deg) scale(1)'
            ],
            filter: ['blur(8px)', 'blur(0px)']
          },
          {
            delay: 0.1,
            duration: 0.6,
            type: 'spring',
            onComplete: () => {
              const el = faqCardsBlock.value!;
              el.style.opacity = '1';
              el.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
              el.style.filter = 'blur(0px)';
            }
          }
      )
    }

    return () => {
      faqTextBlock.value!.style.opacity = '0';
      faqTextBlock.value!.style.transform = 'translateY(20px) scale(0.98)';
      faqTextBlock.value!.style.filter = 'brightness(1.3) blur(4px)';
      faqCardsBlock.value!.style.opacity = '0';
      faqCardsBlock.value!.style.transform = 'translateY(60px) rotateX(10deg) scale(0.95)';
      faqCardsBlock.value!.style.filter = 'blur(8px)';
    }
  }, {
    amount: 0.2
  })
})

interface FAQItems {
  question: string,
  answer: string
}

const faqItems: FAQItems[] = [
  {
    question: 'Сколько времени занимает производство гидростанции на заказ?',
    answer: 'Срок изготовления зависит от сложности проекта, но в среднем составляет от 2 до 4 недель. Мы всегда согласовываем точные сроки на этапе заключения договора и строго их соблюдаем.'
  },
  {
    question: 'Можно ли адаптировать гидростанцию под нестандартные условия эксплуатации?',
    answer: 'Да, все наши гидростанции проектируются с учётом индивидуальных требований: температурных условий, наличия пыли, влажности и других факторов. Мы обеспечиваем надёжную работу оборудования даже в самых суровых условиях.'
  },
  {
    question: 'Оказываете ли вы техническую поддержку после установки?',
    answer: 'Да, мы предоставляем полную техническую поддержку: от консультаций и обучения персонала до выездного обслуживания и ремонта. Также возможна организация планового ТО.'
  },
  {
    question: 'Какие документы вы предоставляете вместе с оборудованием?',
    answer: 'Мы передаём полный комплект документации: паспорт изделия, руководство по эксплуатации, схему подключения и гарантийный талон. Также предоставляем сертификаты соответствия по запросу.'
  }
]

const openIndex = ref<number | null>(null);

const toggleAccordion = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
  <section id="faq" class="faq-section">
    <div class="faq-container">
      <div class="faq-blocks">
        <div ref="faqTextBlock" class="md:col-span-3">
          <BadgeTitle :title="'04 — Вопросы'"/>
          <h2 class="faq-title">Ответы на часто задаваемые вопросы</h2>
        </div>

        <div ref="faqCardsBlock" class="md:col-span-4">
          <div class="faq-questions">
            <div v-for="(item, index) in faqItems" :key="index" class="faq-question">
              <button
                  @click="toggleAccordion(index)"
                  class="faq-accordion-btn"
              >
                {{ item.question }}
                <svg
                    :class="openIndex === index ? 'rotate-180' : ''"
                    class="w-5 h-5 transform transition-transform"
                    fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <Transition
                  enter-active-class="transition-all duration-300 ease-in-out"
                  enter-from-class="max-h-0 opacity-0"
                  enter-to-class="max-h-40 opacity-100"
                  leave-active-class="transition-all duration-300 ease-in-out"
                  leave-from-class="max-h-40 opacity-100"
                  leave-to-class="max-h-0 opacity-0"
              >
                <div
                    v-show="openIndex === index"
                    class="mt-2 text-gray-600 transition-all duration-300 ease-in-out"
                >
                  <p>{{ item.answer }}</p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>