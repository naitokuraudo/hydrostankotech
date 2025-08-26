<script setup lang="ts">
interface Stages {
  title: string,
  description: string
}

const stages: Stages[] = [
  {
    title: 'Техническая консультация',
    description: 'Мы анализируем ваши требования и условия эксплуатации, чтобы разработать оптимальное гидравлическое решение'
  },
  {
    title: 'Проектирование',
    description: 'Разрабатываем индивидуальный проект с учётом габаритов, целевых характеристик и особенностей установки'
  },
  {
    title: 'Подбор комплектующих',
    description: 'Выбираем проверенные компоненты от ведущих мировых производителей для обеспечения надёжности и эффективности'
  },
  {
    title: 'Сборка',
    description: 'Опытные специалисты тщательно собирают каждую станцию в соответствии с высокими стандартами качества'
  },
  {
    title: 'Тестирование',
    description: 'Проводим многоуровневую проверку: испытания на давление, расход и моделирование реальных условий работы'
  },
  {
    title: 'Доставка и поддержка',
    description: 'Обеспечиваем безопасную транспортировку оборудования и техническую поддержку на всех этапах эксплуатации'
  }
]
</script>

<template>
  <div v-for="(item, index) in stages" class="production-stage-cards">
    <div
        class="production-card-numeric">
      {{ index + 1 }}
    </div>
    <div class="production-card-info">
      <h3 class="production-card-title">{{ item.title }}</h3>
      <p class="production-card-desc">{{ item.description }}</p>
    </div>
  </div>
</template>