<script setup>
import {ref, onMounted} from 'vue'
import {inView, animate} from 'motion'
import BadgeTitle from '@/components/BadgeTitle.vue'
import {RiMailFill, RiPhoneFill, RiMapPinFill} from '@remixicon/vue'

const contactsTextBlock = ref(null)
const contactsFormBlock = ref(null)

onMounted(() => {
  inView('#contacts', () => {
    animate(
        contactsTextBlock.value,
        {
          opacity: [0, 0.5, 1],
          x: [-60, 10, 0],
          rotate: [-15, 5, 0],
          scale: [0.9, 1.03, 1]
        },
        {
          duration: 1.0,
          easing: [0.22, 1, 0.36, 1],
          delay: 0.1,
          stagger: 0.08
        }
    )

    animate(
        contactsFormBlock.value,
        {
          opacity: [0, 0.6, 1],
          y: [60, -8, 0],
          rotateX: [-20, 8, 0],
          scale: [0.85, 1.02, 1]
        },
        {
          duration: 1.1,
          delay: 0.3,
          easing: [0.25, 0.8, 0.25, 1],
          stagger: 0.1
        }
    )

    return () => {
      animate(
          contactsTextBlock.value,
          {opacity: 0, x: -60, rotate: -15, scale: 0.9},
          {duration: 0.5, easing: 'ease-in'}
      )
      animate(
          contactsFormBlock.value,
          {opacity: 0, y: 60, rotateX: -20, scale: 0.85},
          {duration: 0.5, easing: 'ease-in'}
      )
    }
  }, {
    amount: 0.3
  })
})

const contacts = [
  {
    icon: RiPhoneFill,
    title: '+ 7 (993) 638-42-49'
  },
  {
    icon: RiMapPinFill,
    title: 'Санкт-Петербург, Дворцовая площадь'
  },
]

const yandexMailAddress = 'hydro.stankotech@yandex.ru'
const subject = encodeURIComponent('Запрос информации о гидростанции')
const body = encodeURIComponent(`Добрый день!

Меня заинтересовали ваши гидростанционные установки.
Буду признателен, если вы сможете предоставить следующие детали:
1. Технические характеристики и габариты (мощность, необходимый литраж и давление, объём).
2. Ориентировочную стоимость и условия оплаты.
3. Сроки производства и доставки.
4. Возможности монтажа и последующего сервисного обслуживания.
5. Наличие готовых решений «под ключ» или вариантов конфигурации.

Заранее благодарю за информацию и любые материалы.
`)
const yandexMailUrl = `
  https://mail.yandex.ru/compose
    ?to=${yandexMailAddress}
    &subject=${subject}
    &body=${body}
`.trim().replace(/\s+/g, '')
</script>

<template>
  <section id="contacts" class="contacts-section">
    <div class="contacts-container">
      <div class="contacts-wrapper">
        <div class="contacts-text-block" ref="contactsTextBlock">
          <BadgeTitle :title="'05 — Контакты'"/>

          <h2 class="contacts-title">Свяжитесь с нами</h2>

          <p class="contacts-desc">
            для консультации или обсуждения требований к вашему проекту.
          </p>

          <div style="width:100%; max-width:600px;">
            <iframe
                class="rounded-md"
                src="https://yandex.ru/business/widget/request/company/240474043709"
                style="width:100%; height:600px; border:0;"
                scrolling="no"
                allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="contacts-info-block" ref="contactsFormBlock">
          <h3 class="contacts-subtitle">Контактная информация</h3>

          <ul class="contacts-info">
            <li class="contact-info">
              <div class="contact-icon-wrapper">
                <RiMailFill class="contact-icon"/>
              </div>
              <a
                  title="Отправить письмо"
                  :href="yandexMailUrl"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="contact-info-mail-title"
              >
                hydro.stankotech@yandex.ru
              </a>
            </li>
            <li
                v-for="(contact, index) in contacts"
                :key="index"
                class="contact-info"
            >
              <div class="contact-icon-wrapper">
                <component :is="contact.icon" class="contact-icon"/>
              </div>
              <p class="contact-info-title">
                {{ contact.title }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>