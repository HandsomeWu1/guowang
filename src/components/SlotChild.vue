/**
*@author: wanggang
*@date: 2020-04-22 08:57:49
*@description: 插槽子组件测试
*/
<template>
    <div class="slot-child">
        <slot name="slot1" :value="testValue">默认值1</slot>
        <slot name="slot2">默认值1</slot>
        <slot name="slot3">默认值1</slot>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            testValue: {
                name: 'wanggang',
                age: 18,
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
//@import url(); 引入公共css类
</style>
