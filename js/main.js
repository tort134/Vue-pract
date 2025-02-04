let app = new Vue({
    el: '#app',
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

    },


    data: {
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
})

