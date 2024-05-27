import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = "https://4539-212-39-117-84.ngrok-free.app/api";

const app = createApp(App)

app.use(router)

app.mount('#app')
