import './assets/styles.css'

import {createApp} from 'vue'
import {createHead} from '@vueuse/head'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')

router.afterEach(to => {
    const defaultTitle = 'Гидростанкотех'
    const title = to.meta.title || defaultTitle
    const description = to.meta.description || ''
    const keywords = to.meta.keywords || ''
    const canonical = `https://hydrostankotech.ru${to.fullPath}`

    const ogImageMap = {
        '/': '/images/og-home.png',
        '/privacy-policy': '/images/og-privacy.png'
    }
    const ogImage = ogImageMap[to.path] || '/images/og-default.png'

    head.addHeadObjs({
        title,
        meta: [
            {name: 'description', content: description},
            {name: 'keywords', content: keywords},
            {property: 'og:title', content: title},
            {property: 'og:description', content: description},
            {property: 'og:url', content: canonical},
            {property: 'og:image', content: `https://hydrostankotech.ru${ogImage}`},
            {property: 'og:site_name', content: defaultTitle},
            {property: 'og:type', content: 'website'},

            {name: 'twitter:card', content: 'summary_large_image'},
            {name: 'twitter:title', content: title},
            {name: 'twitter:description', content: description},
            {name: 'twitter:image', content: `https://hydrostankotech.ru${ogImage}`}
        ],
        link: [
            {rel: 'canonical', href: canonical}
        ]
    })
})

console.log = () => {
};
console.warn = () => {
};
console.error = () => {
};
console.info = () => {
};
console.debug = () => {
};