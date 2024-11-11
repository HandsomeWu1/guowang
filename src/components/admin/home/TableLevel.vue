<!--
*@Description: 多级表头组件
*@Author: wanggang
*@Date: 2020-05-11 15:40:57
-->
<template>
    <div class="three-menu">
        <div class="right-shade"></div>
        <!-- <el-scrollbar style="height: 100%;" wrapStyle="overflow-x: hidden;"> -->
        <!-- 隐藏表头 -->
        <el-table
            :data="tableData"
            style="width: 100%;"
            :height="tableHeight"
            border fit
        >
            <el-table-column
                prop="date"
                label="日期"
                align="center"
            >
            </el-table-column>
            <el-table-column label="配送信息"   align="center">
                <el-table-column
                    prop="name"
                    label="姓名"
                    align="center"
                >
                </el-table-column>
                <el-table-column label="地址" align="center">
                    <el-table-column
                        prop="province"
                        label="省份"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="city"
                        label="市区"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="zip"
                        label="邮编"
                        align="center"
                    >
                    </el-table-column>
                </el-table-column>
            </el-table-column>
        </el-table>
        <Pagination></Pagination>
    </div>
</template>

<script>
import Pagination from '@/components/admin/common/Pagination.vue';

export default {
    name: 'TableLevel',
    components: {
        Pagination,
    },
    data() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            }, {
                date: '2016-05-08',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            },
            ],
            // table列表高度
            tableHeight: 0,
        };
    },
    computed: {
        // 侧边导航栏是否打开
        isCollapse() {
            return this.$store.state.isCollapse;
        },
    },
    watch: {
    },
    created() {
        this.getTableHeight();
    },
    mounted() {
        window.onresize = () => {
            this.getTableHeight();
        };
    },
    destroyed() {},
    methods: {
        /**
        *@description: 改变高度方法
        *@param{}
        *@return:
        */
        getTableHeight() {
            this.tableHeight = window.innerHeight - 200;
        },
    },
};
</script>
<style lang="scss">
.three-menu {
    @import '@/assets/style/table.scss';
    // 表头固定时自定义滚动条的样式
    // 滚动条的宽度
    .el-table__body-wrapper::-webkit-scrollbar {
        width: vw(6);
        height: vh(10);
        background: rgba(144, 147, 153, 0);
    }
    //滚动条的滑块
    .el-table__body-wrapper::-webkit-scrollbar-thumb {
        border-radius: vw(5);
        background-color: rgba(144, 147, 153, 0.3);
        transition: 0.3s background-color;
        cursor: pointer;
    }

    .el-table__header-wrapper .el-table__header {
        width: 101.01% !important;
    }

    .el-table__body-wrapper .el-table__body {
        width: 100.36% !important;
    }
}

</style>
<style lang='scss' scoped>
.three-menu {
    width: 100%;
    height: vh(950);
    // overflow: auto;
}
</style>
