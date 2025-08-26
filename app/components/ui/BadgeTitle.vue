<script setup lang="ts">
const {title} = defineProps({
  title: String,
})
</script>

<template>
  <div
      class="inline-block primary-blue-bg rounded-md text-white mb-4 text-lg font-medium px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-4 lg:py-2 select-none">
    {{ title }}
  </div>
</template>