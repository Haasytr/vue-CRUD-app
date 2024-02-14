<template>
    <h1>Hello {{ name }}, welcome on the home page</h1>
    <table border="1">
        <th>
            Id  
        </th>
        <th>
           Name
        </th>
        <th>
           Contact
        </th>
        <th>
            Address
        </th>
        <th>
            Actions
        </th>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td><router-link :to="'/update/' + item.id">Update</router-link></td>
        </tr>
    </table>
</template>
<script>
    import axios from 'axios'
    export default {
        name: "App-Home",
        data() {
            return {
                name: '',
                restaurant: []
            }
        },
        
        async mounted() {
            let user = localStorage.getItem('user')
            this.name = JSON.parse(user)[0].name
            if(!user) {
                this.$router.push({ name: 'SignUp' })
            }

            let response = await axios.get("http://localhost:3000/restaurants")
            this.restaurant = response.data
        }
    }
    
</script>
<style>
    td {
        width: 160px;
        height: 40px;
    }
</style>