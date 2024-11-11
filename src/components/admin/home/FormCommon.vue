<!--
*@Description: 常用表单组件
*@Author: wanggang
*@Date: 2020-05-13 13:10:38
-->
<template>
    <div class="form">
        <el-scrollbar style="height: 100%;" wrapStyle="overflow-x: hidden;">
            <div class="form-container">
                <div class="container-item">
                    <div class="item-title">登录表单</div>
                    <div class="item-content">
                        <el-form :model="loginData"  ref="login" class="form-login">
                            <el-form-item
                                class="label-item"
                                label="用户名"
                                :required="true"
                            >
                                <el-input v-model="loginData.username"></el-input>
                            </el-form-item>
                            <el-form-item
                                label="密码"
                                :required="true"
                            >
                                <el-input v-model="loginData.password"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                <div class="container-item">
                    <div class="item-title">我是标题</div>
                    <div class="item-content">我是内容</div>
                </div>
                <div class="container-item">
                    <div class="item-title">我是标题</div>
                    <div class="item-content">我是内容</div>
                </div>
                <div class="container-item">
                    <div class="item-title">我是标题</div>
                    <div class="item-content">我是内容</div>
                </div>
                <div class="container-item">
                    <div class="item-title">我是标题</div>
                    <div class="item-content">我是内容</div>
                </div>
                <div class="container-item">
                    <div class="item-title">我是标题</div>
                    <div class="item-content">我是内容</div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            // 登录信息
            loginData: {
                // 用户名
                username: '',
                // 密码
                password: '',
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
<style lang="scss">

.el-form-item__label {
    box-sizing: border-box;
    width: 20%;
    margin-right: vw(8) !important;
    text-align-last: justify;
}

.el-form-item__content {
    width: 80%;
}
</style>
<style lang='scss' scoped>
.form {
    width: 100%;
    height: vh(950);

    &-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        .container-item {
            width: 49.7%;
            height: vh(500);
            margin-bottom: vh(10);
            background: rgba(255, 255, 255, 0.6);
            box-shadow: vw(2) vh(2) vw(5) vw(1) rgba(191, 191, 191, 0.8);

            .item-title {
                height: vh(30);
                font-size: vw(18);
                line-height: vh(30);
                text-align: center;
            }

            .item-content {
                box-sizing: border-box;
                height: vh(470);
                padding: vh(20) vw(5);

                .form-login {
                    width: vw(500);
                    margin: 0 auto;

                    .el-form-item {
                        display: flex;
                    }
                }
            }
        }
    }
}
</style>
