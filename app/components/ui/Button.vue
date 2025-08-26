<script setup lang="ts">
const {link, title} = defineProps({
  link: String,
  title: String,
})
</script>

<template>
  <a :href="`#${link}`"
     class="inline-block text-center font-medium primary-blue-bg text-lg px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 lg:px-6 lg:py-2 rounded-md hover:opacity-85 hover:-translate-y-1 transition duration-300 ease-in-out select-none">
    {{ title }}
  </a>
</template>