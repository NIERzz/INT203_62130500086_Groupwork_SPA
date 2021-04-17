<template>
<div class="bg-gray-800">
 <div class="w-full md:w-1/3 xl:w-1/4 pt-3 mx-auto p-5 bg-white " v-for="item in cart" :key="item.id">
          <img class="hover:grow hover:shadow-lg zoom cartimg" :src="item.img" />
          <div class="pt-1">
            <p>{{ item.name }}</p>
          </div>
          <p class="pt-1 text-gray-900">฿ {{ item.price }} <button @click="DeleteCart(item.id)" class="border border-red-500 p-1 rounded-full hover:bg-red-500">DELETE</button> </p>
        </div>     
</div>
<div class="ml-8 mr-8 mt-5 border border-gray-800"></div>
<div class="bg-gray-700 mx-auto">
  
                        </div>
<router-link to="/store">Continue Shopping</router-link>

<footer-component/>

</template>

<script>
export default {
   
    
data() {
    return {
      urlcart: "http://localhost:3000/cart",
      cart: [],
      
    };
  },

methods:{
async fetchProduct() {
      const res = await fetch(this.urlcart);
      const data = await res.json();
      // parses JSON response into native JavaScript objects
      return data;
    },
    async DeleteCart(id){
        await fetch(`${this.urlcart}/${id}`,{
            method: 'DELETE',
            })
            this.cart = this.cart.filter(
                (cart) => cart.id !== id
            )
           
        }
    },
    

async created() {
    this.cart = await this.fetchProduct();
  },

    }
</script>

<style>
  .cartimg {
    max-width: 10rem;
  }
</style>