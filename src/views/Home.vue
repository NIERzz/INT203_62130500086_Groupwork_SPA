<template>
  <div class="home">
    <Nav></Nav>
    <Itempromo></Itempromo>
    <component-footer/>
    <Products></Products>
    <footer-component></footer-component>
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '@/components/shop-ui/Nav.vue'
import Itempromo from '@/components/shop-ui/Itempromo.vue'
import Products from '@/components/store/Products.vue'


export default {
  name: 'Home',
  components: {
    Nav,Itempromo,Products
  }
}
</script>
