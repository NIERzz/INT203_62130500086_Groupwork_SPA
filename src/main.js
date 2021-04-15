import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Footer from './components/Footer.vue'

createApp(App).use(router).mount('#app')
const footer = createApp(Footer)
footer.component('component-footer', Footer)
footer.use(router).mount('#footer')