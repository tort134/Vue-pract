Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

    template: `
    <div class="product">

        <div class="product-image">
            <img :alt="altText" :src="image" />
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <p v-if="inStock">In stock</p>
            <p class="out-of-stock" v-else :class="{outOfStock: !inStock}">Out of stock</p>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            
            <p><p>Shipping: {{ shipping }}</p></p>

            <div  class="color-box"
                  v-for="(variant, index) in variants"
                  :key="variant.variantId"
                  :style="{ backgroundColor:variant.variantColor }"
                  @mouseover="updateProduct(index)">
                <p @mouseover="updateProduct(index)">
                    {{ variant.variantColor }}
                </p>
            </div>


            <span>{{ sale }}</span>

            <ul class="product-size">
                <li v-for="size in sizes">{{ size }}</li>
            </ul>

            <div class="cart">
                <p>Cart({{ cart }})</p>
            </div>

          <button  v-on:click="addToCart"
                   :disabled="!inStock"
                   :class="{ disabledButton: !inStock }">Add to cart</button>
          <button v-on:click="removeFromCart">Remove from cart</button>



        </div>
            <a :href="link">More products like this</a>
    </div>
 `,
    data() {
        return {
            product: "Socks",
            brand: 'Vue Mastery',
            description: "A pair of warm, fuzzy socks",
            selectedVariant: 0,
            onSale: true,
            altText: "A pair of socks",
            link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
            inventory: 10,

            details: ['80% cotton', '20% polyester', 'Gender-neutral'],

            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: "./assets/vmSocks-green-onWhite.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                    variantQuantity: 0
                }
            ],



            sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            cart: 0,

        }
    },
    methods: {
    addToCart(){
        this.cart += 1
    },

    removeFromCart(){
        this.cart -= 1
    },

    updateProduct(index) {
        this.selectedVariant = index;
        console.log(index);
    },
},
    computed: {
    title() {
        return this.brand + ' ' + this.product;
    },

    image() {
        return this.variants[this.selectedVariant].variantImage;
    },

    inStock(){
        return this.variants[this.selectedVariant].variantQuantity
    },

    sale(){
        if(this.onSale){
            return this.brand + ' ' + this.product + ' ' + "Sale now!";
        }

        return this.brand + ' ' + this.product + ' ' + "Not sale :(";
    },
        shipping() {
            if (this.premium) {
                return "Free";
            } else {
                return 2.99
            }
        }

    }
})


let app = new Vue({
    el: '#app',
    data: {
        premium: true,
    }
})

