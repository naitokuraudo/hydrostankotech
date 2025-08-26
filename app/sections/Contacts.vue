<script setup lang="ts">
import {RiMailFill, RiPhoneFill, RiMapPinFill, RiTimeFill, RiLockPasswordFill, RiToolsFill} from '@remixicon/vue';
import {inView, animate} from 'motion-v';

const contactsTextBlock = ref<HTMLDivElement | null>(null);
const contactsFormBlock = ref<HTMLDivElement | null>(null);

onMounted(() => {
  inView('#contacts', () => {
    if (contactsTextBlock.value && contactsFormBlock.value) {
      animate(
          contactsTextBlock.value,
          {
            opacity: [0, 1],
            y: [20, 0]
          },
          {
            duration: 0.8,
            type: 'spring',
            delay: 0.1
          }
      );

      animate(
          contactsFormBlock.value,
          {
            opacity: [0, 1],
            y: [30, 0]
          },
          {
            duration: 0.8,
            type: 'spring',
            delay: 0.2
          }
      );
    }

    return () => {
      contactsTextBlock.value!.style.opacity = '0';
      contactsTextBlock.value!.style.transform = 'translateX(-100px)';
      contactsFormBlock.value!.style.opacity = '0';
      contactsFormBlock.value!.style.transform = 'translateY(100px)';
    }
  }, {
    amount: 0.3
  })
})

interface External {
  icon: Component,
  title: string
}

const external: External[] = [
  {
    icon: RiMapPinFill,
    title: 'Санкт-Петербург, Дворцовая площадь'
  },
  {
    icon: RiTimeFill,
    title: 'Мы ответим в течение 1 рабочего дня'
  },
  {
    icon: RiLockPasswordFill,
    title: 'Конфиденциальность гарантируем'
  },
  {
    icon: RiToolsFill,
    title: 'Собственное производство в России'
  }
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
            <iframe title="Форма обратной связи" id="contact-form"
                    class="rounded-md"
                    src="https://yandex.ru/business/widget/request/company/240474043709"
                    style="width:100%; height:600px; border:0;"
                    scrolling="no"
                    allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="contacts-info-block" ref="contactsFormBlock">
          <h3 class="contacts-subtitle">Дополнительная информация</h3>

          <ul class="contacts-info">
            <li class="contact-info">
              <div class="contact-icon-wrapper">
                <RiMailFill class="contact-icon"/>
              </div>
              <a onclick="ym(101825847,'reachGoal','contact-mail'); return true;"
                 title="Отправить письмо"
                 :href="yandexMailUrl"
                 rel="noopener noreferrer"
                 target="_blank"
                 class="contact-info-external-title"
              >
                hydro.stankotech@yandex.ru
              </a>
            </li>
            <li class="contact-info">
              <div class="contact-icon-wrapper">
                <RiPhoneFill class="contact-icon"/>
              </div>
              <a onclick="ym(101825847,'reachGoal','contact-phone'); return true;"
                 title="Позвонить по телефону"
                 href="tel:+79936384249"
                 rel="noopener noreferrer"
                 class="contact-info-external-title"
              >
                +7 (993) 638-42-49
              </a>
            </li>
            <li
                v-for="(ext, index) in external"
                :key="index"
                class="contact-info"
            >
              <div class="contact-icon-wrapper">
                <component :is="ext.icon" class="contact-icon"/>
              </div>
              <p class="contact-info-title">
                {{ ext.title }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>