<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="goBack()">跳转回去之前的路由</button>
        <router-view></router-view>
        <div>{{getTest1}}</div>
        <div>{{postTest1}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            getTest1: '',
            postTest1: '',
        };
    },
    mounted() {
        // 测试get请求
        this.testGet1();
        // 测试post请求
        this.testPost1();
    },
    methods: {
        goBack() {
            // window.history.back();
            this.$router.push('/');
        },
        /**
        *@description: 测试get请求接口
        *@param{}
        *@return:
        */
        testGet1() {
            this.$api.test.testGet1(3, (res) => {
                this.$message({
                    type: 'success',
                    message: '接口请求成功!',
                });
                this.getTest1 = res;
            });
        },
        /**
        *@description: 测试post请求
        *@param{}
        *@return:
        */
        testPost1() {
            const param = {
                id: '123',
                name: 'wanggang',
            };
            this.$api.test.testPost1(param, (res) => {
                this.postTest1 = res;
            });
        },
    },
};
</script>
