import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Footer from './components/shop-ui/Footer.vue'
import Usercart from './components/cart/Usercart.vue'

const app = createApp(App)
app.component('footer-component', Footer)
app.component('cart-component',Usercart)
app.use(router).mount('#app')