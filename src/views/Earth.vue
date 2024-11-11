/**
*@author: wanggang
*@date: 2020-04-22 11:04:07
*@description: 引入cesium组件
*/
<template>
    <div class="index">
        <div id="app" class="app"></div>
        <Index></Index>
    </div>
</template>

<script>
import Index from '@/components/index/Index.vue';

export default {
    components: {
        Index,
    },
    data() {
        return {

        };
    },
    computed: {
        test() {
            return this.$store.state.test;
        },
    },
    watch: {},
    created() {},
    mounted() {
        // this.init();
        // console.log(this.test);
        this.$store.commit('changeState', '我是test');
        setTimeout(() => {
            // console.log(this.test);
        }, 2000);
    },
    destroyed() {},
    methods: {
        init() {
            Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
            + 'eyJqdGkiOiIwZjZjMmE4Yi1mNDY2LTRlNDktOWRlMi0xNGZmMjM3ZTI3MTEiLCJpZCI6MjYyODQsInNjb3B'
            + 'lcyI6WyJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1ODc1MjU3MzR9.WF1uIaPV1LLIqaJs9uIpNMz6UGbsNJfTwQa7aND9Ev4';
            uino.app = new Cesium.Viewer('app', {
                // 地形数据
                // terrainProvider: Cesium.createWorldTerrain(
                //     {
                //         requestWaterMask: true, // required for water effects
                //         requestVertexNormals: true, // required for terrain lighting
                //     },
                // ),
                // 动画控件
                // animation: false,
                // // 显示图层选择控件
                // baseLayerPicker: false,
                // // 显示地名查找控件
                // geocoder: false,
                // // 显示时间线控件
                // timeline: false,
                // // 双屏模式 默认false
                // // vrButton: true,
                // // 主页按钮 默认true 控制主页视角
                // homeButton: false,
                // // 点击要素之后显示的信息, 默认true
                // infoBox: false,
                // // 选中元素显示:
                // selectionIndicator: true,

                infoBox: false,
                animation: false,
                baseLayerPicker: false,
                geocoder: false,
                fullscreenButton: false,
                sceneModePicker: false,
                timeline: false,
                selectionIndicator: false,
                homeButton: false,
                navigationHelpButton: false,
                imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
                    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
                }),
            });
            uino.app.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
                url: 'http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrix'
                + 'Set=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=7711a24780452f03bb7c02fba98183b9',
                layer: 'tdtImgAnnoLayer',
                style: 'default',
                format: 'image/jpeg',
                tileMatrixSetID: 'GoogleMapsCompatible',
                show: false,
            }));

            // eslint-disable-next-line no-underscore-dangle
            uino.app._cesiumWidget._creditContainer.style.display = 'none';
            uino.app.scene.globe.depthTestAgainstTerrain = true;
            const { scene } = uino.app;
            const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
            // 取消双击
            uino.app.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
            // 添加广告牌实体
            const pinBuilder = new Cesium.PinBuilder();
            const enetity = uino.app.entities.add({
                id: 'rain',
                name: '标点',
                position: Cesium.Cartesian3.fromDegrees(110, 40, 30),
                // billboard: {
                //     // image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                //     image: '../../static/svg/industry.svg',
                //     horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                //     verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                //     scale: 0.2,
                // },
                billboard: {
                    image: pinBuilder.fromUrl('../../static/svg/industry.svg', Cesium.Color.RED.withAlpha(1), 48),
                    // verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                },
                // label: {
                //     show: false,
                //     text: '测试名称',
                //     font: '14pt Source Han Sans CN', // 字体样式
                //     fillColor: Cesium.Color.BLACK, // 字体颜色
                //     backgroundColor: Cesium.Color.AQUA, // 背景颜色
                //     showBackground: true, // 是否显示背景颜色
                //     style: Cesium.LabelStyle.FILL, // label样式
                //     outlineWidth: 2,
                //     verticalOrigin: Cesium.VerticalOrigin.CENTER, // 垂直位置
                //     horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // 水平位置
                //     pixelOffset: new Cesium.Cartesian2(30, -30), // 偏移
                // },
            });
            uino.app.flyTo(enetity);
            // // uino.app.entities.getById('rain').label.text = 'drp';

            // // uino.app.entities.getById('rain').label.show = true;
            // let currentEntity = null;
            // let lastEntity = null;
            // uino.app.screenSpaceEventHandler.setInputAction((movement) => {
            //     const pickedFeature = uino.app.scene.pick(movement.endPosition);
            //     if (lastEntity != null && lastEntity.id !== undefined) {
            //         lastEntity.label.show = false;
            //     }
            //     if (Cesium.defined(pickedFeature)) {
            //         if (pickedFeature.id !== undefined) {
            //             currentEntity = uino.app.entities.getById('rain');
            //             lastEntity = currentEntity;
            //             currentEntity.label.show = true;
            //         }
            //     }
            // }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);


            const labelEntity = uino.app.entities.add({
                label: {
                    show: false,
                    showBackground: true,
                    font: '14px monospace',
                    horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
                    verticalOrigin: Cesium.VerticalOrigin.CENTER,
                    pixelOffset: new Cesium.Cartesian2(15, 0),
                },
            });

            // 鼠标移入labelEntity提示框
            handler.setInputAction((movement) => {
                let foundPosition = false;

                if (scene.mode !== Cesium.SceneMode.MORPHING) {
                    const pickedObject = scene.pick(movement.endPosition);
                    // console.log(pickedObject);
                    if (scene.pickPositionSupported && Cesium.defined(pickedObject) && pickedObject.id !== '') {
                        const cartesian = uino.app.scene.pickPosition(movement.endPosition);

                        if (Cesium.defined(cartesian)) {
                            const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                            // 点位替换图片
                            // cartographic
                            labelEntity.position = cartesian;
                            labelEntity.label.show = true;
                            // eslint-disable-next-line no-underscore-dangle
                            labelEntity.label.text = `监控点:${pickedObject.id._id}`;

                            labelEntity.label.eyeOffset = new Cesium.Cartesian3(0.1, 0.0, -cartographic.height * (scene.mode === Cesium.SceneMode.SCENE2D ? 1.5 : 1.0));
                            // 当前实体的样式更新
                            enetity.billboard.image = pinBuilder.fromUrl('../../static/svg/industry.svg', Cesium.Color.ORANGE.withAlpha(1), 48);
                            foundPosition = true;
                        }
                    }
                }

                if (!foundPosition) {
                    labelEntity.label.show = false;
                    enetity.billboard.image = pinBuilder.fromUrl('../../static/svg/industry.svg', Cesium.Color.RED.withAlpha(1), 48);
                }
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            // 注册点击事件
            handler.setInputAction((movement) => {
                const pick = uino.app.scene.pick(movement.position);
                // eslint-disable-next-line no-underscore-dangle
                if (Cesium.defined(pick) && (pick.id._id !== '')) {
                    // console.log(pick.id);
                    // TODO 打开弹窗 获取信息
                }
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        },
    },
};
</script>
<style lang='scss' scoped>
.index {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

    .app {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    // .panel {
    //     position: absolute;
    //     width: 200px;
    //     height: 500px;
    //     background: rgba(255, 255, 255, 0.6);
    // }
}

</style>
