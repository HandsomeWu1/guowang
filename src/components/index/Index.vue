<!--
*@Description: 右侧展示区域
*@Author: wanggang
*@Date: 2020-05-11 15:23:57
-->
<template>
    <div>
        <Header></Header>
        <Left></Left>
        <Bottom></Bottom>
        <Right></Right>
    </div>
</template>

<script>
import Header from '@/components/index/Header.vue';
import Left from '@/components/index/Left.vue';
import Bottom from '@/components/index/Bottom.vue';
import Right from '@/components/index/Right.vue';

export default {
    name: 'Index',
    components: {
        Header,
        Left,
        Bottom,
        Right,
    },
    data() {
        return {
            Header,
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
