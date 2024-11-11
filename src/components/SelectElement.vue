<!--
 * @Description:
 * @Author: wanggang
 * @Date: 2019-08-18 18:59:06
 -->
<template>
    <div class="testalarm">
        <div class="selectframe">
            <el-form :inline="true"  class="demo-form-inline">
                <el-form-item>
                    <el-select v-model="building"  clearable  placeholder="活动区域">
                        <el-option label="区域一" value="区域一"></el-option>
                        <el-option label="区域二" value="区域2"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-select v-model="floor" placeholder="活动区域">
                        <el-option label="区域一" value="区域3"></el-option>
                        <el-option label="区域二" value="区域4"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>

            </el-form>

        </div>
        <div class="checkbox" ref="imgs">
            <img :src="testimg.url? testimg.url:Imgs[0]">
        </div>
        <button @click="imgOnload">点击获取图片</button>
        <button @click="toDetail()">打开新页面</button>
        <button @click="toCurrent()">本页路由跳转</button>
    </div>
</template>
<script>
export default {
    name: 'SelectElement',
    data() {
        return {
            building: '我是建筑',
            floor: '我是楼层',
            testimg: {
            },
            Imgs: [
                require('../assets/img/testpre.png'),
                require('../assets/img/testlazy.png'),
            ],
        };
    },
    // created() {
    //     this.imgOnload();
    // },
    // watch: {
    //     testimg() {

    //     },
    // },
    computed: {

    },
    methods: {
        onSubmit() {
            // console.log(this.building, this.floor);
        },
        // 测试图片懒加载
        imgOnload() {
            this.testimg = {
            };
            // setTimeout(() => {
            const img = new Image();
            // 模拟接口返回数据
            this.testimg = {
                url: this.Imgs[1],
            };
            img.src = this.testimg.url;
            this.testimg.url = '';
            img.onload = () => {
                // console.log('加载完成');
                [, this.testimg.url] = this.Imgs;
            };
            // }, 1500);

            // // 模拟接口请求数据
            // setTimeout(() => {

            // }, 1000);
        },
        /**
        *@description: 测试路由跳转
        *@param{}
        *@return:
        */
        toDetail() {
            // 参数获取，params和query区别，query参数在地址栏显示，params的参数不在地址栏显示
            const test = this.$router.resolve({ name: 'about', query: { id: 2 } });
            window.open(test.href, '_blank');
        },
        // 本页路由跳转
        toCurrent() {
            this.$router.push('about');
        },
    },
};
</script>
<style lang="scss" scoped>
.testalarm {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 800px;
    height: 300px;
    background: rgba(0, 0, 0, 0.3);
}

.selectframe {
    position: absolute;
    top: 10%;
    left: 10%;
}

.checkbox {
    position: absolute;
    top: 30%;
    left: 10%;
    width: 80%;
    height: 70%;
    background: bisque;
}

</style>
