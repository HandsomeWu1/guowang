
<template>
    <div class="left">
        <ul>
            <li>
                <div class="left-item" v-for="(item,index) in menuData" :key="index" @click="changeMenu(item)">
                    <span class="item-icon iconfont" :class="item.icon"></span>
                    <span class="item-explain">{{item.name}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Left',
    components: {},
    data() {
        return {
            menuData: [
                {
                    name: '在线监控',
                    icon: 'icon-1',
                },
                {
                    name: '安全监管',
                    icon: 'icon-2',
                },
                {
                    name: '应急响应',
                    icon: 'icon-3',
                },
                {
                    name: '视频监控',
                    icon: 'icon-5',
                },
                {
                    name: '可视展示',
                    icon: 'icon-7',
                },
                {
                    name: '系统设置',
                    icon: 'icon-8',
                },
                {
                    name: '监测监测',
                    icon: 'icon-11',
                },
                {
                    name: '监测监测',
                    icon: 'icon-1',
                },
            ],
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        this.$anime({
            targets: '.left',
            translateX: [-100, 0],
            easing: 'easeInOutSine',
            delay: 1000,
        });
    },
    destroyed() {},
    methods: {
        /**
        *@description:
        *@param{}
        *@return:
        */
        changeMenu() {
            const test = this.$router.resolve({ name: 'about', query: { id: 2 } });
            window.open(test.href, '_blank');
        },
    },
};
</script>
<style lang='scss' scoped>
.left {
    position: absolute;
    top: vh(50);
    // height: 882px;
    bottom: 0;
    width: vw(100);
    background-color: rgba(0, 0, 0, 0.6);

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        .left-item {
            box-sizing: border-box;
            width: 100%;
            height: vh(100);
            padding: vw(7) vw(10) 0 vw(10);
            border-bottom: 1px solid cornsilk;
            color: rgba(255, 255, 255, 0.6);
            font-weight: 100;
            font-size: vw(14);
            font-family: 'SourceHanSansCN-Light', sans-serif;
            text-align: center;

            span {
                display: block;
                margin-top: vh(5);
            }

            .item-icon {
                // color: rgba(255, 255, 255, 0.8);
                font-size: vw(35);
            }

            &:hover {
                color: rgba(255, 255, 255, 1);
                background: rgba(0, 0, 0, 0.2);
                cursor: pointer;
            }
        }
    }
}
</style>
