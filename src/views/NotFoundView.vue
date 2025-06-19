<template>
  <section class="flex items-center justify-center min-h-custom primary-blue-bg">
    <div class="text-center">
      <p class="text-3xl font-semibold text-white">404</p>
      <h2 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
        Страница не найдена
      </h2>
      <p class="mt-4 text-lg font-medium text-pretty text-white sm:text-xl/8">
        Возможно, она была удалена или перенесена на другой адрес.
      </p>
      <div class="mt-6 flex items-center justify-center gap-x-6">
        <router-link to="/"
                     class="inline-block font-bold bg-white primary-blue px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 lg:px-6 lg:py-2.5 rounded-md hover:opacity-85 hover:-translate-y-1 transition duration-300 ease-in-out select-none">
          Вернуться на главную
        </router-link>
      </div>
    </div>
  </section>
</template>