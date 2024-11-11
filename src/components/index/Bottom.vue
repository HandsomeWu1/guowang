
<template>
    <div class="bottom">
        <div class="bottom-item">
            <div class="item-content">
                <span class="content-icon iconfont icon-1"></span>
                <span class="content-explain">监控点</span>
            </div>
        </div>
        <div class="bottom-item">
            <div class="item-content">
                <span class="content-icon iconfont icon-1"></span>
                <span class="content-explain">监控点</span>
            </div>
        </div>
        <div class="bottom-item">
            <div class="item-content">
                <span class="content-icon iconfont icon-1"></span>
                <span class="content-explain">监控点</span>
            </div>
        </div>
        <div class="bottom-item">
            <div class="item-content">
                <span class="content-icon iconfont icon-1"></span>
                <span class="content-explain">监控点</span>
            </div>
        </div>
        <div class="bottom-item">
            <div class="item-content">
                <span class="content-icon iconfont icon-1"></span>
                <span class="content-explain">监控点</span>
            </div>
        </div>
        <div class="bottom-item">
            <div class="item-content">
                <span class="content-icon iconfont icon-1"></span>
                <span class="content-explain">监控点</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bottom',
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
            targets: '.bottom',
            easing: 'easeInOutSine',
            translateY: [80, 0],
            delay: 1500,
        });
    },
    destroyed() {},
    methods: {},
};
</script>
<style lang='scss' scoped>
.bottom {
    position: absolute;
    bottom: 15px;
    left: 35%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 600px;
    height: 50px;
    padding: 0 10px;
    background:
        linear-gradient(to left, #fff, #fff) left top no-repeat,
        linear-gradient(to bottom, #fff, #fff) left top no-repeat,
        linear-gradient(to left, #fff, #fff) right top no-repeat,
        linear-gradient(to bottom, #fff, #fff) right top no-repeat,
        linear-gradient(to left, #fff, #fff) left bottom no-repeat,
        linear-gradient(to bottom, #fff, #fff) left bottom no-repeat,
        linear-gradient(to left, #fff, #fff) right bottom no-repeat,
        linear-gradient(to left, #fff, #fff) right bottom no-repeat;
    background-size: 1.5px 10px, 10px 1.5px, 1.5px 10px, 10px 1.5px;
    background-color: rgba(0, 0, 0, 0.6);
    line-height: 50px;
    transform: translate(-50%);

    .bottom-item {
        flex: 1;
        height: 100%;
        // background: white;
        line-height: 100%;
        text-align: center;

        .item-content {
            height: 30px;
            // border: 1px solid cornflowerblue;
            margin: 0 5px;
            margin-top: 10px;
            color: #fff;
            box-shadow: 0 0 6px 2px  #0d81ab inset;
            font-weight: 100;
            font-size: 14px;
            font-family: 'SourceHanSansCN-Light', sans-serif;
            line-height: 30px;
            cursor: pointer;

            &:hover {
                background: rgba(18, 99, 128, 0.8);
            }

            .content-icon {
                margin-right: 7px;
            }
        }
    }
}
</style>
