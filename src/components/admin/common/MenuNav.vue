<!--
*@Description: 左侧导航栏组件
*@Author: wanggang
*@Date: 2020-05-11 17:29:29
-->
<template>
    <fragment>
        <template v-for="(itemss,indexss) in menuData">
            <!-- 一级菜单 -->
            <el-submenu :index="itemss.path+''"  :key="indexss"  v-if="itemss.showMenu && itemss.children">
                <!-- 一级菜单标题 -->
                <template slot="title">
                    <i :class="itemss.meta.icon"></i>
                    <span slot="title">{{itemss.name}}</span>
                </template>
                <template v-for="(term,indext) in itemss.children">
                    <!-- 二级菜单没有子路由的时候 -->
                    <el-menu-item
                        :key="term.path+''+ term.name"
                        :index="term.path+''"
                        v-if="term.showMenu && !term.children"
                        :class="$route.path===term.path?'is-active':''">
                        <i :class="term.meta.icon"></i>
                        <span slot="title">{{term.name}}</span>
                    </el-menu-item>
                    <!-- 二级菜单有子路由的时候,递归循环自身 -->
                    <MenuNav v-else :key="indext" :menuData="[...term]"></MenuNav>
                </template>
            </el-submenu>
            <el-menu-item
                :key="indexss"
                :index="itemss.path+''"
                v-if="itemss.showMenu && !itemss.children"
                :class="$route.path===itemss.path?'is-active':''">
                <i :class="itemss.meta.icon"></i>
                <span slot="title">{{itemss.name}}</span>
            </el-menu-item>
        </template>
    </fragment>
</template>

<script>
export default {
    name: 'MenuNav',
    props: ['menuData'],
    components: {},
    data() {
        return {
        };
    },
    computed: {},
    watch: {
    },
    created() {},
    mounted() {
        // console.log(this.menuData);
    },
    destroyed() {},
    methods: {},
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
