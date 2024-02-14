import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'



import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/' 
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up' 
    },
    {
        name: 'SignIn',
        component: SignIn,
        path: '/sign-in' 
    },
    {
        name: 'Add',
        component: Add,
        path: '/add' 
    },
    {
        name: 'Update',
        component: Update,
        path: '/update/:id' 
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router