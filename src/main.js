import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { apolloProvider } from './client.js' // Import the Apollo provider

const app = createApp(App)

app.use(router)
app.use(apolloProvider)

app.mount('#app')
