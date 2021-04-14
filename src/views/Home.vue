<template>
  <div class="home">
    <Nav></Nav>
    <Itempromo></Itempromo>
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '@/components/Nav.vue'
import Itempromo from '@/components/Itempromo.vue'

export default {
  name: 'Home',
  components: {
    Nav,Itempromo
  }
}
</script>
