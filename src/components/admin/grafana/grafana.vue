<template>

    <div class="index">
        <!-- <iframe src="http://localhost:3030" class="web"></iframe> -->
        <iframe src="http://localhost:3030/?from=now-6h&to=now&timezone=browser" frameborder="0" name="popup"  class="web" ></iframe>
    </div>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
        };
    },
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    destroyed() { },
    methods: {},
};
</script>
<style lang='css' scoped>
.web {
    display: inline;
    width: 100%;
    height: 700px;
}
</style>
