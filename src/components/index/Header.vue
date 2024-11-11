
<template>
    <div class="header">
        <div class="header-left">
            <span class="left-icon iconfont icon-8"></span>
            <span class="left-plain">滨州工业园区安环一体化平台</span>
        </div>
        <div class="header-center">
            <div class="center-top">欢迎,</div>
            <div class="center-bottom">超级管理员</div>
        </div>
        <div class="header-right">
            <span class="right-icon iconfont icon-1"></span>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        this.$anime({
            targets: '.header',
            easing: 'easeInOutSine',
            translateY: [-80, 0],
            delay: 1000,
        });
    },
    destroyed() {},
    methods: {},
};
</script>
<style lang='scss' scoped>
.header {
    position: relative;
    display: inline-flex;
    width: 100%;
    height: vh(50);
    background: #438eb9;
    line-height: vh(50);

    .header-left {
        box-sizing: border-box;
        width: 89%;
        padding-left: vw(20);
        color: #fff;
        font-size: vw(20);

        .left-icon {
            margin-right: vw(8);
            font-size: vw(18);
        }
    }

    .header-center {
        width: 7%;
        color: #fff;
        background: #62a8d1;
        font-size: vw(12);
        line-height: vh(50);

        div {
            height: vh(20);
            padding-left: vw(7);
            line-height: vh(30);
        }
    }

    .header-right {
        width: 3%;
        color: #fff;
        background: #126380;
        text-align: center;
    }
}
</style>
