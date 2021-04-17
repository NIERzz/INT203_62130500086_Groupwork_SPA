<template>
<div class="store">
<Products></Products>
<footer-component></footer-component>
</div>
</template>

<script>
import Products from '@/components/store/Products.vue'

export default {
  name: 'Store',
  components: {
    Products    
  }
 

}
</script>