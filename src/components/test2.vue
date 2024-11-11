
<template>
    <div class="">
        <div>我是嵌套路由2</div>
        <button @click="gopre1()">跳转到上一层路由</button>
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
    mounted() {},
    destroyed() {},
    methods: {
        gopre1() {
            this.$router.push('');
        },
    },
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
