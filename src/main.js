import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'



const app = createApp(App).use(Particles, {
    init: async engine => {
        await loadFull(engine);
    },
});

app.use(router)

app.mount('#app')
