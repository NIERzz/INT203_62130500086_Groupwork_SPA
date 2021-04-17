<template>
<div class="cart">
<cart-component></cart-component>
<footer-component></footer-component>
</div>
</template>

<script>
import Usercart from '@/components/cart/Usercart.vue'

export default {
  name: 'Cart',
  components: {
      Usercart
  }
  }
 


</script>