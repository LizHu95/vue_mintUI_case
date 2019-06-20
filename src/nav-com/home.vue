<template>
    <div class="home-container">
        <!--轮播图-->
        <div class="swipe">
            <swipe :auto="4000">
                <swipe-item><img src="../images/1.jpg" alt=""></swipe-item>
                <swipe-item><img src="../images/2.jpg" alt=""></swipe-item>
                <swipe-item><img src="../images/3.jpg" alt=""></swipe-item>
                <swipe-item><img src="../images/4.jpg" alt=""></swipe-item>
            </swipe>
        </div>
        <!--/轮播图-->

        <!--6宫格-->
        <div class="mui-content">
            <div class="mui-row">
                <div class="mui-col-sm-4 mui-col-xs-6">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <img src="../images/menu1.png" alt="">
                            <span>位置</span>
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-4 mui-col-xs-6">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <img src="../images/menu2.png" alt="">
                            <span>一点点</span>
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-4 mui-col-xs-6">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <img src="../images/menu3.png" alt="">
                            <span>购物车</span>
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-4 mui-col-xs-6">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <img src="../images/menu4.png" alt="">
                            <span>支付</span>
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-4 mui-col-xs-6">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <img src="../images/menu5.png" alt="">
                            <span>勾选</span>
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-4 mui-col-xs-6">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <img src="../images/menu6.png" alt="">
                            <span>列表</span>
                        </a>
                    </li>
                </div>


            </div>
        </div>
        <!--/6宫格-->
    </div>

</template>

<script>

    export default {
        name: "home",

    }
</script>

<style scoped lang="scss">
    .swipe {
        height: 500px;
    }
    .mint-swipe-item {
        img {
            width: 100%;
            height: 100%;
        }
    }

    .mui-content {
        background: white;
        margin-top: 80px;
        list-style: none;
    }

    .mui-table-view-cell {
        .mui-navigate-right {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
                width: 60%;
            }
            span {
                padding: 20px 0 40px 0;
                font-size: 35px;
            }
        }
    }

</style>