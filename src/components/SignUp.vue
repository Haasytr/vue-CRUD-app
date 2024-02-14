<template>
    <img class="logo" src="../assets/download.png" />
    <h1>Sign up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Name">
        <input type="text"  v-model="email" placeholder="Email">
        <input type="text"  v-model="password" placeholder="Password">
    <button v-on:click="signUp">Sign Up</button>
    <p>
      <router-link to="/sign-in">
        Already have a account?
      </router-link>
    </p>
  </div>
</template>
<script>
import axios from 'axios'
    export default {
        name: 'SignUp',
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            async signUp() {
                let resolve = await axios.post("http://localhost:3000/users", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })

                localStorage.setItem("user", JSON.stringify(resolve.data))

                this.$router.push({ name: 'Home' })
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
<style>

.logo {
  width: 100px;
}

.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.register input {
  padding: 15px 30px;
  margin: 10px;
  border: 1px solid lightblue;
}

.register button {
  width: 225px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #2c3e50;
  background-color: blue;
  color: #fff;
}
</style>