<template>
    <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add restaurant</router-link>
        <router-link to="/update">Update restaurant</router-link>
        <a v-on:click="logout" href="#">Log out</a>
    </nav >
</template>
<script>
    export default {
        name: 'DefaultHeader',
        methods: {
            logout() {
                localStorage.clear()
                this.$router.push({ name: "SignUp" })
            }
        }
    }
</script>
<style>
    .nav {
        background-color: #333;
        padding: 15px;
    }

    .nav a {
        padding: 15px;
        color: #f2f2f2;
        text-align: center;
        font-size: 17px;
        transition: 0.2s;
    }
    .nav a:hover {
        background-color: #ddd;
        color: #333
    }
</style>