<template>
    <div>
        <header>这是我胡婧做的第一个项目</header>
        <div class="content">
            <router-view></router-view>
        </div>
        <nav>
            <router-link to="/home">
                <div class="nav-item">
                    <span class="mui-icon mui-icon-home"></span>
                    <span>首页</span>
                </div>
            </router-link>
            <router-link to="/message">
                <div class="nav-item">
                    <span class="mui-icon mui-icon-email"></span>
                    <span>消息</span>
                    <span class="mui-badge mui-badge-danger">15</span>
                </div>
            </router-link>
            <router-link to="/contacts">
                <div class="nav-item">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span>通讯录</span>
                </div>
            </router-link>
            <router-link to="/setting">
                <div class="nav-item">
                    <span class="mui-icon mui-icon-gear"></span>
                    <span>设置</span>
                </div>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "app",
        components: {}
    }
</script>

<style scoped lang="scss">
header{
    background: skyblue;
    color: white;
    text-align: center;
    line-height: 150px;
    font-size: 60px;
}
nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    background: white;
    border-top:1px solid #666;
    a{
        width: 25%;
        position: relative;
        .nav-item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color:#aaa;
            :first-child{
                font-size: 100px;
            }
            :nth-child(2){
                font-size:40px;
                line-height: 50px;
            }
            :nth-child(3){
                font-size: 40px;
                position: absolute;
                top: 6%;
                right: 20%;
            }
        }
    }
    .router-link-active .nav-item{
        color:skyblue !important;
    }
}
</style>