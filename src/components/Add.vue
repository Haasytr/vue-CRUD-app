<template>
    <h1>Hello User, welcome to add Restaurant page</h1>
    <form class="register">
        <input type="text" name="name" placeholder="Restaurant name" v-model="name" />
        <input type="text" name="address" placeholder="Restaurant address"  v-model="address"/>
        <input type="text" name="contact" placeholder="Restaurant contact" v-model="contact" />
        <button type="button" v-on:click="addRestaurant">Add new restaurant</button>

    </form>
</template>
<script>
    import axios from 'axios'
    export default {
        name: "App-Home",
        data() {
            return {
                name: '',
                address: '',
                contact: '',
            }
        },
        methods: {
            async addRestaurant() {
                const response = await axios.post("http://localhost:3000/restaurants", { name: this.name, address: this.address, contact: this.contact })
            
                if(response.status == 201) {
                    console.warn("foi")
                }
            }
        },  
        
        mounted() {
            let user = localStorage.getItem('user')
            if(!user) {
                this.$router.push({ name: 'SignUp' })
            }
        }
    }
    
</script>