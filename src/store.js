/* eslint no-param-reassign: "off" */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 测试全局属性
        test: '',
        // 左侧导航栏是否收起
        isCollapse: false,
        // 当前所在的菜单模块
        menuModule: 'home',
        // 当前选中的tab选项卡
        activeTabsName: '',
        // 当前选项卡的栈
        tabList: [],
    },
    mutations: {
        // 改变全局属性
        changeState(state, value) {
            state.test = value;
        },
        // 改变左侧菜单栏显示
        isCollapse(state, value) {
            state.isCollapse = value;
        },
        // 修改当前选中的标签
        activeTabsName(state, value) {
            state.activeTabsName = value;
        },
        // 修改标签栈
        tabList(state, value) {
            state.tabList = value;
        },
    },
    actions: {},
    getters: {},
});
