
<template>
    <div class="slot">
        <SlotChild>
            <template v-slot:slot1="slotProps">
                内容1
                {{slotProps.value.name}}
            </template>
            <template v-slot:slot2>内容2</template>
            <template v-slot:slot3>内容3</template>
        </SlotChild>
    </div>
</template>

<script>
import SlotChild from '@/components/SlotChild.vue';

export default {
    components: {
        SlotChild,
    },
    data() {
        return {

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
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
