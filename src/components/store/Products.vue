<template>
  <section class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <nav id="store" class="w-full z-30 top-0 px-6 py-1">
        <div
          class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
        >
          <router-link to="/"
            ><a
              class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
              >Store</a
            ></router-link
          >

          <div class="flex items-center" id="store-nav-content">
            <a class="pl-3 inline-block no-underline hover:text-black" href="#">
              <router-link to="/cart"><svg
                class="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"
                />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg></router-link>
            </a>
          </div>
        </div>
      </nav>
      <!--Loop v-for products-->
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <div
          class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
          v-for="item in showproducts"
          :key="item.id"
        >
          <img class="hover:grow hover:shadow-lg zoom" :src="item.img" />
          <div class="pt-5 flex items-center justify-between">
            <p>{{ item.name }}</p>
            <button @click="AddToCart(item)">
              <svg
                class="h-6 w-6 fill-current text-black hover:text-pink-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19.5 8c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm-.5 7v-2h-2v-1h2v-2l3 2.5-3 2.5zm-5.701-11.26c-.207-.206-.299-.461-.299-.711 0-.524.407-1.029 1.02-1.029.262 0 .522.1.721.298l3.783 3.783c-.771.117-1.5.363-2.158.726l-3.067-3.067zm3.92 14.84l-.571 1.42h-9.296l-3.597-8.961-.016-.039h9.441c.171-.721.46-1.395.848-2h-14.028v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l1.211-3.015c-.699-.03-1.368-.171-1.992-.405zm-6.518-14.84c.207-.206.299-.461.299-.711 0-.524-.407-1.029-1.02-1.029-.261 0-.522.1-.72.298l-4.701 4.702h2.883l3.259-3.26z"
                />
              </svg>
            </button>
          </div>
          <p class="pt-1 text-gray-900">฿ {{ item.showprice }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Products",
  

  data() {
    return {
      urlprod: "http://localhost:3000/products",
      urlcart: "http://localhost:3000/cart",
      cart: [],
      showproducts: [],
    };
  },

  methods: {
    async AddToCart(items){
        console.log(items);
        const res = await fetch(this.urlcart,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id : items.id,
                name: items.name,
                price: items.price,
                img: items.img,
                showprice: items.showprice
            })
        })
        const products = await res.json()
        this.cart.push(products)
        alert( "You add "+items.name+" on your cart.")
    },
    async fetchProduct() {
      const res = await fetch(this.urlprod);
      const data = await res.json();
      // parses JSON response into native JavaScript objects
      return data;
    },
    
    // async DeleteCart(id){
    //     await fetch(`${this.urlcart}/${id}`,{
    //         method: 'DELETE',
    //         })
    //         this.cart = this.cart.filter(
    //             (items) => cart.id !== id
    //         )
    //     }
    }
  ,
  //      async created() {
  //      this.items = await this.fetchProduct()
  //    },
  async created() {
    this.showproducts = await this.fetchProduct();
  },
};
</script>

<style scoped>
.zoom {
  transition: transform 0.3s;
}
.zoom:hover {
  transform: scale(1.07);
}
</style>