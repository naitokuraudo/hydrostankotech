<script setup>
import {ref, onMounted} from 'vue'
import {inView, animate} from 'motion'
import BadgeTitle from '@/components/BadgeTitle.vue'
import 'vue3-carousel/carousel.css'
import {Carousel, Slide, Navigation as CarouselNavigation} from 'vue3-carousel'
import {RiArrowLeftBoxFill, RiArrowRightBoxFill} from '@remixicon/vue'

const portfolioTextBlock = ref(null)
const portfolioCardsBlock = ref(null)

onMounted(() => {
  inView('#portfolio', () => {
    animate(portfolioTextBlock.value,
        {
          opacity: [0, 1],
          x: [60, 0],
          filter: ['blur(8px)', 'blur(0px)']
        },
        {
          duration: 0.8,
          easing: 'ease-out'
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
          duration: 1,
          easing: 'ease-out'
        }
    )

    return () => {
      portfolioTextBlock.value.style.opacity = 0
      portfolioTextBlock.value.style.transform = 'translateX(60px)'
      portfolioTextBlock.value.style.filter = 'blur(8px)'
      portfolioCardsBlock.value.style.opacity = 0
      portfolioCardsBlock.value.style.transform = 'translateY(80px)'
      portfolioCardsBlock.value.style.filter = 'blur(12px)'
    }
  }, {
    amount: 0.2
  })
})

const carouselConfig = {
  wrapAround: true,
  itemsToShow: 1,
  breakpoints: {
    640: {itemsToShow: 1},
    768: {itemsToShow: 1},
    1024: {itemsToShow: 1.5},
    1280: {itemsToShow: 3},
    1538: {itemsToShow: 3},
  }
}

const images = Array.from({length: 37}, (_, i) =>
    new URL(`../assets/images/portfolio/${i + 1}.webp`, import.meta.url).href
)

const lightboxImage = ref(null)

function openLightbox(src) {
  lightboxImage.value = src
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxImage.value = null
  document.body.style.overflow = ''
}

const isDragging = ref(false)

function handleMouseDown() {
  isDragging.value = false
}

function handleMouseMove() {
  isDragging.value = true
}

function handleClick(img) {
  if (!isDragging.value) {
    openLightbox(img)
  }
}
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

      <div ref="portfolioCardsBlock">
        <Carousel class="portfolio-carousel" v-bind="carouselConfig">
          <Slide v-for="(img, i) in images" :key="i" class="portfolio-carousel-slide">
            <img loading="lazy"
                 @mousedown="handleMouseDown"
                 @mousemove="handleMouseMove"
                 @click="handleClick(img)"
                 class="portfolio-slide-img"
                 :src="img"
                 :alt="`Портфолио ${i+1}`"
            />
          </Slide>

          <template #addons>
            <CarouselNavigation>
              <template #prev>
            <span title="Предыдущий слайд">
              <RiArrowLeftBoxFill size="40px" class="primary-blue bg-white carousel-slider-btn"/>
            </span>
              </template>
              <template #next>
            <span title="Следующий слайд">
              <RiArrowRightBoxFill size="40px" class="primary-blue bg-white carousel-slider-btn"/>
            </span>
              </template>
            </CarouselNavigation>
          </template>
        </Carousel>
      </div>

      <div
          v-if="lightboxImage"
          class="lightBoxImage"
          @click.self="closeLightbox"
      >
        <img loading="lazy"
             :src="lightboxImage"
             alt="Увеличенное изображение"
             class="plusSizedLightboxImage"
        />
        <button
            @click="closeLightbox"
            class="closeLightboxBtn"
        >&times;
        </button>
      </div>
    </div>
  </section>
</template>