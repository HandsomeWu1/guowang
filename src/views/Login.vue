<template>
    <div class="login">
        <el-form :model="loginForm" ref="loginForm"  class="login-form">
            <!-- 登录标题 -->
            <div class="title-container">
                <h3 class="title">用户登录</h3>
            </div>
            <!-- 用户名 -->
            <el-form-item prop="username">
                <span class="name-icon iconfont icon-1"></span>
                <el-input
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="用户名"
                    name="username"
                    type="text"
                    tabindex="1"
                    autocomplete="on"
                />
            </el-form-item>
            <!-- 密码 -->

            <el-form-item prop="password">
                <span class="name-icon iconfont icon-1"></span>
                <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="密码"
                    name="password"
                    tabindex="2"
                    @keyup.enter.native="handleLogin"
                    autocomplete="on"
                />
                <span class="name-icon iconfont icon-1"></span>
            </el-form-item>


            <!-- 登录 -->
            <el-button  type="primary" style="width:100%; margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            // 登录表单
            loginForm: {
                username: '王刚',
                password: '123456',
            },
            // 密码显示类型
            passwordType: 'password',
            capsTooltip: false,
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
        handleLogin() {
            // 前端校验 给出错误提示 正确的话路由跳转
            // 路由导航守卫判断是否登录,已经登录的放行,未登录的跳转到登录页面
        },
    },
};
</script>
<style lang="scss">
.login {
    .el-form-item__content {
        width: 100%;

        .el-input {
            display: inline-block;
            width: 80%;
            height: vh(55);

            input {
                height: vh(55);
                padding: vh(12) vw(5) vh(12) vw(5);
                border: 0;
                border-radius: 0;
                color: #fff;
                background: transparent;
                caret-color: #fff;

                // 解决自动填充后背景色改变的问题
                &:-webkit-autofill {
                    box-shadow: 0 0 0 200px #283443 inset !important;
                    -webkit-text-fill-color: #fff !important;
                }
            }
        }
    }
}
</style>
<style lang='scss' scoped>
.login {
    width: 100%;
    height: 100%;
    background: #2d3a4b;

    .login-form {
        position: relative;
        top: 20%;
        box-sizing: border-box;
        width: 25%;
        height: 50%;
        padding: vw(10);
        margin: 0 auto;

        // 头信息
        .title-container {
            position: relative;

            .title {
                margin: 0 auto 40px auto;
                color: #fff;
                font-weight: bold;
                font-size: vh(26);
                text-align: center;
            }
        }
        // 用户名样式
        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            background: rgba(0, 0, 0, 0.1);

            .name-icon {
                display: inline-block;
                width: vw(30);
                height: vh(55);
                padding-left: vw(15);
                color: #889aa4;
                line-height: vh(55);
            }
        }
    }
}
</style>
