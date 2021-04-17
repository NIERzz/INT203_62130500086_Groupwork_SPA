<template>
<div class="bg-gray-800">
 <div class="w-full md:w-1/3 xl:w-1/4 pt-3 mx-auto p-5 bg-white " v-for="item in cart" :key="item.id">
          <img class="hover:grow hover:shadow-lg zoom cartimg" :src="item.img" />
          <div class="pt-1">
            <p>{{ item.name }}</p>
          </div>
          <p class="pt-1 text-gray-900">฿ {{ item.price }}  </p>
          <div class ="flex">
          <p class="pt-1 text-gray-900"><button @click="DeleteCart(item.id)" class="border border-red-500 p-1 rounded-full hover:bg-red-500 mr-2">DELETE</button></p>       
          <p class="pt-1 text-gray-900"><button @click="addAmount(item)" class="border border-red-500 p-1 rounded-full hover:bg-red-500">+</button></p>
          <p class="pt-1 text-gray-900 ml-2"><button @click="delAmount(item)" class="border border-red-500 p-1 rounded-full hover:bg-red-500">-</button></p>
          <p class="pt-1 text-gray-900 "><button class="ml-2 mt-1">{{ item.amount }}</button></p>
          <!-- <p v-if="minus" class="pt-1 text-gray-900 "><button class="border border-red-500 p-1 rounded-full hover:bg-red-500">-</button></p> -->
          </div>
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
      quantity: 1
      
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
           
        },
       async addAmount(item){
         item.amount++
         await this.updateCart(item)
        },
     async delAmount(item){
       if(item.amount == 1){
         return 
       }
       item.amount--
      await this.updateCart(item)
     },
     async updateCart(items){
      const res = await fetch(`${this.urlcart}/${items.id}`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id : items.id,
                name: items.name,
                price: items.price,
                img: items.img,
                showprice: items.showprice,
                amount: items.amount
            })
        })
        await res.json()
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