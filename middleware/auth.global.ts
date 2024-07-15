import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineNuxtRouteMiddleware, navigateTo } from '#app'
import { useUserStore } from '~/stores/userStore'

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.fullPath === from.fullPath) { // refresh doang
        const auth = getAuth()
        const userstore = useUserStore()
        onAuthStateChanged(auth, (user) => {
            userstore.setUser(user)
            if (user != null) {
                console.log(user)

                navigateTo('/admin/')


            } else {
                console.log('middleware auth tidak ada')
                if (to.path !== '/login') {
                    return navigateTo('/login')
                }else{
                    return navigateTo('/')
                }
            }
        })
    }
})