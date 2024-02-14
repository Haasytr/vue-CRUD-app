<template>
    <img class="logo" src="../assets/download.png" />
    <h1>Login</h1>

    <div class="register">
        <input type="text"  v-model="email" placeholder="Email">
        <input type="text"  v-model="password" placeholder="Password">
    <button v-on:click="signIn">Sign In</button>
    <p>
      <router-link to="/sign-up">
        Create account
      </router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'SignIn',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async signIn() {
                const response = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)

                if(response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data))

                    this.$router.push({ name: 'Home' })
                }
            }
        },
        mounted() {
          let user = localStorage.getItem('user')
          if(user) {
              this.$router.push({ name: 'Home' })
          }
        }
    }
</script>