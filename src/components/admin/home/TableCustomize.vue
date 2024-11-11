
<template>
    <div class="customzie">
        <el-table
            :data="tableData"
            style="width: 100%;"
        >
            <el-table-column
                label="日期"
                align="center"
                width="180"
            >
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px;">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="姓名"
                align="center"
            >
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <ConfirmDialog  @confirm="confirm" :showMsg.sync="showMsg"></ConfirmDialog>
        <Pagination></Pagination>
    </div>
</template>

<script>
// 分页组件
import Pagination from '@/components/admin/common/Pagination.vue';
// 确认提示框组件
import ConfirmDialog from '@/components/admin/common/ConfirmDialog.vue';

export default {
    components: {
        Pagination,
        ConfirmDialog,
    },
    data() {
        return {
            // 显示提示框
            showMsg: false,
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            },
            ],
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
        handleEdit(index, row) {
            // this.$refs.dialog.visible = true;
            this.showMsg = true;
            // 显示确定编辑的弹窗
            console.log(index);
            console.log(row);
        },
        handleDelete(index, row) {
            // this.$refs.dialog.visible = true;
            this.showMsg = false;
            // 提示是否确认删除
            console.log(index);
            console.log(row);
        },
        /**
        *@description: 点击确定执行的方法
        */
        confirm() {
            // this.$refs.dialog.visible = false;
            console.log('执行确认方法');
        },
    },
};
</script>
<style lang='scss' scoped>
.customzie {
    // @import '@/assets/style/table.scss';

    width: 100%;
    height: vh(950);
}
</style>
