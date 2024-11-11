
/**
*@author: wanggang
*@date: 2020-04-22 10:04:46
*@description: vue默认事件冒泡
*/
<template>
    <div class="obj1" @click="obj1">
        <div class="obj2" @click.stop="obj2">
            <div class="obj3" @click.stop="obj3"></div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            obj1() {
                // console.log('我是最外层');
            },
            obj2() {
                // console.log('我是中间层');
            },
            obj3() {
                // console.log('我是最里层');
            },
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {},
};
</script>
<style lang='scss' scoped>
.obj1 {
    position: relative;
    top: 300px;
    left: 50%;
    width: 600px;
    height: 600px;
    background-color: aquamarine;
    transform: translate(-50%, -50%);

    .obj2 {
        position: absolute;
        top: 150px;
        left: 150px;
        width: 300px;
        height: 300px;
        background-color: brown;

        .obj3 {
            width: 100px;
            height: 100px;
            margin-top: 50px;
            margin-left: 50px;
            background-color: cadetblue;
        }
    }
}
</style>
