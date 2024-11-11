
<template>
    <div class="confirm-dialog">
        <el-dialog
            title="提示"
            :visible.sync="showMsg"
            width="30%"
            center>
            <div>忽略此条信息</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="$emit('update:showMsg', false)">取 消</el-button>
                <el-button @click="$emit('update:showMsg', false)">取 消</el-button>
                <el-button type="primary" @click="dialogConfirm">确 定</el-button>
                <el-button type="primary" @click="dialogConfirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'ConfirmDialog',
    props: {
        showMsg: Boolean,
    },
    components: {},
    data() {
        return {
            // 是否同步展示
            // visible: false,
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
        /**
        *@description: 确定执行的方法
        *@param{}
        *@return:
        */
        dialogConfirm() {
            this.$emit('confirm');
            this.$emit('update:showMsg', false);
        },
    },
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
