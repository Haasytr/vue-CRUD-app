<template>
<h1>Hello User, welcome to update Restaurant page</h1>
    <form class="register">
        <input type="text" name="name" placeholder="Restaurant name"  v-model="restaurant.name"/>
        <input type="text" name="address" placeholder="Restaurant address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Restaurant contact" v-model="restaurant.contact" />
        <button type="button" v-on:click="updateRestaurant">Update restaurant</button>
    </form>
</template>
<script>
    import axios from 'axios'
    export default {
        name: "App-Home",
        data() {
            return {
                restaurant: {
                    name: '',
                    address: '',
                    contact: '',
                },
                id: this.$route.params.id
            }
        },

        methods: {
            async updateRestaurant() {
                await axios.put("http://localhost:3000/restaurants/" + this.id,
                { 
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact 
                })
            }
        },
        
        async mounted() {
            let user = localStorage.getItem('user')





            if(!user) {
                this.$router.push({ name: 'SignUp' })
            }
            if(this.id) {
                const response = await axios.get(`http://localhost:3000/restaurants?id=${this.id}`)
                this.restaurant = response.data[0]
            }       
        }
    }
    
</script>