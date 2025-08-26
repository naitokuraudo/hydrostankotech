import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    sourcemap: false,
    compatibilityDate: '2025-08-07',
    devtools: {enabled: true},
    css: ['~/assets/css/styles.css'],
    ssr: true,
    components: [
        {path: '~/components', pathPrefix: false},
        {path: '~/sections', pathPrefix: false},
    ],
    build: {
        transpile: [
            '@iconify/utils',
            '@unocss/preset-wind3',
            '@vue/shared',
            '@vueuse'
        ]
    },
    app: {
        head: {
            script: [
                {
                    src: '/yandex-metrika.js',
                    async: true,
                    defer: true,
                }
            ],
            noscript: [
                {
                    innerHTML: `<noscript><div><img src="https://mc.yandex.ru/watch/101825847" style="position:absolute; left:-9999px;" alt="" /></div></noscript>`,
                }
            ],
            charset: 'utf-8',
            viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
            title: 'Гидростанкотех – проектирование, производство и сервис гидросистем',
            meta: [
                {
                    name: 'description',
                    content: 'Гидростанкотех – эксперт в разработке и изготовлении гидросистем «под ключ». Индивидуальные решения, оперативная доставка, сервисная поддержка 24/7.'
                },
                {
                    name: 'apple-mobile-web-app-title',
                    content: 'Гидростанкотех'
                },
                {
                    name: 'keywords',
                    content: 'гидростанкотех, изготовление гидростанций, производство гидростанций, гидростанции на заказ, изготовление гидростанций СПб, гидростанции СПб, гидростанкотех.рф, гидростанции для станков, гидравлические станции, гидравлика на заказ'
                },
                {name: 'theme-color', content: '#ffffff'}
            ],
            htmlAttrs: {
                lang: 'ru',
            },
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png'},
                {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/favicon-96x96.png'},
                {rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg'},
                {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/web-app-manifest-192x192.png'},
                {rel: 'icon', type: 'image/png', sizes: '512x512', href: '/images/web-app-manifest-512x512.png'},
                {rel: 'manifest', href: '/site.webmanifest'},
            ]
        }
    },
    vite: {
        plugins: [
            tailwindcss(),
        ]
    },
    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/scripts',
        'motion-v/nuxt',
        'nuxt-keen-slider',
        '@nuxt/ui',
    ],
})