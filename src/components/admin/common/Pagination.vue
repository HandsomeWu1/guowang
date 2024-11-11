<!--
*@Description: 公共分页组件
*@Author: wanggang
*@Date: 2020-05-11 15:24:30
-->
<template>
    <div class="page">
        <!-- <span class="demonstration">完整功能</span> -->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    components: {},
    data() {
        return {
            currentPage4: 4,
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
        handleSizeChange(val) {
            // eslint-disable-next-line no-console
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            // eslint-disable-next-line no-console
            console.log(`当前页: ${val}`);
        },
    },
};
</script>
<style lang='scss' scoped>
.page {
    width: 100%;
    height: vh(30);
    margin: 0 0 0  auto;
    margin-top: vh(25);
    line-height: vh(30);
    text-align: right;
}
</style>
