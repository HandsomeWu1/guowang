<!--
 * @Description:标签页组件
 * @Author: wanggang
 * @Date: 2020-04-28 20:22:49
 -->
<template>
    <div class="right-content">
        <div class="content-item">
            <el-tabs v-model="activeTabsName" type="card" closable @tab-remove="removeTab"  @tab-click="tabClick">
                <el-tab-pane
                    v-for="(item) in tabList"
                    :key="item.path"
                    :label="item.name"
                    :name="item.name"
                >
                </el-tab-pane>
            </el-tabs>
        </div>
        <!-- 将路由放在标签内时 所有选择的内容都会被缓存,影响性能 -->
        <!-- <transition enter-active-class="animated fadeInLeft"
                    leave-active-class="animated fadeOut"
                    appear
                    appear-active-class="animated fadeInLeft"
        >
            <router-view></router-view>
        </transition> -->

        <transition enter-active-class="animated fadeInLeft"
                    leave-active-class="animated fadeOut"
                    appear
                    appear-active-class="animated fadeInLeft"
        >
            <keep-alive v-if="this.$route.meta.keepAlive">
                <router-view></router-view>
            </keep-alive>
            <router-view v-else></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'RightContent',
    components: {
    },
    computed: {
        // 标签路由栈
        tabList() {
            return this.$store.state.tabList;
        },
        // 当前被激活的tab标签
        activeTabsName: {
            get() {
                return this.$store.state.activeTabsName;
            },
            set(val) {
                this.$store.commit('activeTabsName', val);
            },
        },
        // 当前标签的下标
        activeIndex() {
            let temIndex = null;
            this.tabList.forEach((item, index) => {
                if (item.name === this.activeTabsName) {
                    temIndex = index;
                }
            });
            return temIndex;
        },
    },
    data() {
        return {
        };
    },
    methods: {
        /**
        *@description:移除标签的方法
        *@param{String} 要删除的标签
        *@return: null
        */
        removeTab(targetName) {
            const tabs = this.tabList;
            let activeName = this.activeTabsName;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        const nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
                this.$store.commit('activeTabsName', activeName);
                this.$store.commit('tabList', tabs.filter(tab => tab.name !== targetName));
                this.tabClick();
            } else {
                this.$store.commit('tabList', tabs.filter(tab => tab.name !== targetName));
            }
        },

        /**
        *@description: 标签页点击方法
        *@param{}
        *@return:
        */
        tabClick() {
            // 当前路由和被选中的路由不相等的时候触发
            const { path } = this.tabList[this.activeIndex];
            if (this.$route.path !== path) this.$router.push(path);
        },
    },
};
</script>

<style lang="scss">
.el-tabs {
    height: 100%;
}

.el-tabs__content {
    height: 90%;
}
// 设置第一个标签不能关闭
.el-tabs__nav .el-tabs__item:nth-child(1) span {
    display: none;
}
</style>
<style lang="scss" scoped>
.right-content {
    height: 100%;
    padding: 5px 10px;
    overflow: hidden;

    .content-item {
        width: 100%;
        // height: 100%;
    }
}
</style>
