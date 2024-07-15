import { defineNuxtRouteMiddleware, navigateTo } from '#app'
import { useUserStore } from '#imports'

export default defineNuxtRouteMiddleware((to, from) => {
    const userstore = useUserStore()
    const user = userstore.getUser
    // const roleuser = userstore.getrole
    console.log(to.path)
    console.log(from.path)
    const topathname = to.path
    const rolepath = topathname.split('/')
    
    // if (roleuser == 'korlap' && (rolepath[1] != 'korlap' && user != null))  {
    //     const idstore = userstore.getstore
    //     return navigateTo('/korlap/' + idstore)
    // }
    // if (roleuser == 'crew' && (rolepath[1] != 'driver' && user != null)) {
    //     const idstore = userstore.getstore
    //     const idcrew =userstore.getnik
    //     return navigateTo('/driver/' + idstore +'/crew/'+idcrew)
    // }
    // if (roleuser == 'admin' && (rolepath[1] != 'admin' && user != null)) {

    //     return navigateTo('/admin/123')
    // }

})