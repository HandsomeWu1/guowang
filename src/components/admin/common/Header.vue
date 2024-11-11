
<template>
    <div class="header">
        <!-- <div class="control" @click="control"></div> -->
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {
        // 左侧菜单是否收起
        isCollapse() {
            return this.$store.state.isCollapse;
        },
    },
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
        // /**
        // *@description: TODO执行控制方法的时候加入节流或防抖
        // *@param{}
        // *@return:
        // */
        // control() {
        //     this.$store.commit('isCollapse', !this.isCollapse);
        // },
    },
};
</script>
<style lang='scss' scoped>
    .header {
        width: 100%;
        height: 50px;
        background: cadetblue;

        // .control {
        //     position: relative;
        //     top: 9px;
        //     left: 200px;
        //     width: 30px;
        //     height: 30px;
        //     background: brown;
        // }
    }
</style>
