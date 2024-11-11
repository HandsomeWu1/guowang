/**
*@author: wanggang
*@date: 2020-04-27 14:31:18
*@description: api接口请求文件
*/
import {
    get,
    post,
    // postJson,
    // postForm,
} from './http';

const api = {
    // 测试模块
    test: {
        // 测试普通get请求路径拼接
        testGet1(id, callback) {
            get(`/getTest1/${id}`).then((res) => {
                callback(res);
            });
        },
        // 测试post请求
        testPost1(params, callback) {
            post('/postTest1', params).then((res) => {
                callback(res);
            });
        },
    },
};
export default api;
