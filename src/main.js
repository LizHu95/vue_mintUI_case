//会去配置项中查看路径，默认导入vue.runtime.common.js
//import Vue from 'vue'
import Vue from 'vue'
import app from './app.vue'

import   "./lib/mui/js/mui.js"
import "./lib/mui/sass/mui.scss"

//导入路由自定义模块
import router from './router.js'

//引入Swipe组件
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css';
Vue.component("swipe", Swipe);
Vue.component("swipe-item", SwipeItem);

var vm = new Vue({
    el: '#app',
    data: {},
    router,
    render: c => c(app)
})