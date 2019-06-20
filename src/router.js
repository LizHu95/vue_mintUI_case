import Vue from 'vue'
//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)

//导入nav各个组件
import home from './nav-com/home.vue'
import message from './nav-com/message.vue'
import contacts from './nav-com/contacts.vue'
import setting from './nav-com/setting.vue'

//3.创建路由对象
var router=new VueRouter({
    routes:[
        {path:"/home",component:home},
        {path:"/message",component:message},
        {path:"/contacts",component:contacts},
        {path:"/setting",component:setting},
        {path:"/",redirect:'/home'}
    ]
})
//把路由对象暴露出去
export default router
