<template>
    <div>
        <div class="home-carousel">
            <swipe :auto="4000">
                <swipe-item><img src="../images/1.jpg" alt=""></swipe-item>
                <swipe-item><img src="../images/2.jpg" alt=""></swipe-item>
                <swipe-item><img src="../images/3.jpg" alt=""></swipe-item>
                <swipe-item><img src="../images/4.jpg" alt=""></swipe-item>
            </swipe>
        </div>

        <div class="home-item">

        </div>
    </div>
</template>

<script>

    export default {
        name: "home"
    }
</script>

<style scoped lang="scss">
    .home-carousel{
        height: 400px;
    }
    .mint-swipe-item{
        background: red;
        font-size: 100px;
        img{
           width: 100%;
        }
    }
</style>