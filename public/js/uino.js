/* eslint-disable linebreak-style */
import axios from 'axios';
import _ from 'lodash';
/**
 * 公司共用工具库
 * @author haaid <me@wanghaida.com>
 * @date 2019-01-15 14:38:08
 */
const uino = {
    test: 111,
};

/**
 * 远程接口
 * @author haaid <me@wanghaida.com>
 * @date 2019-01-22 13:41:56
 */
uino.remote = {
    testGet(callback) {
        axios.get('http://testget.com').then((res) => {
            if (_.isFunction(callback)) {
                callback(res.data);
            }
        });
    },
    testPost(callback) {
        axios.post('http://testpost.com').then((res) => {
            if (_.isFunction(callback)) {
                callback(res.data);
            }
        });
    },
};

/**
 * 验证工具
 * @author haaid <me@wanghaida.com>
 * @date 2019-02-01 14:10:43
 */
uino.utils = {
    /**
     * 验证：邮箱
     * @param {string} string - 待验证字符串
     * @param {number} min - 允许长度最小值
     * @param {number} max - 允许长度最大值
     * @returns {boolean}
     */
    isEmail(string, min = -Infinity, max = Infinity) {
        const pattern = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
        return pattern.test(string) && string.length >= min && string.length <= max;
    },
    /**
     * 验证：字母、数字
     * @param {string} string - 待验证字符串
     * @param {number} min - 允许长度最小值
     * @param {number} max - 允许长度最大值
     * @returns {boolean}
     */
    isAlphaNum(string, min = -Infinity, max = Infinity) {
        const pattern = /^[A-Za-z0-9]+$/;
        return pattern.test(string) && string.length >= min && string.length <= max;
    },
    /**
     * 验证：字母、数字、下划线、横线
     * @param {string} string - 待验证字符串
     * @param {number} min - 允许长度最小值
     * @param {number} max - 允许长度最大值
     * @returns {boolean}
     */
    isAlphaDash(string, min = -Infinity, max = Infinity) {
        const pattern = /^[A-Za-z0-9-_]+$/;
        return pattern.test(string) && string.length >= min && string.length <= max;
    },
    /**
     * 验证：汉字
     * @param {string} string - 待验证字符串
     * @param {number} min - 允许长度最小值
     * @param {number} max - 允许长度最大值
     * @returns {boolean}
     */
    isChs(string, min = -Infinity, max = Infinity) {
        const pattern = /^[\u4e00-\u9fa5]+$/;
        return pattern.test(string) && string.length >= min && string.length <= max;
    },
    /**
     * 验证：汉字、字母
     * @param {string} string - 待验证字符串
     * @param {number} min - 允许长度最小值
     * @param {number} max - 允许长度最大值
     * @returns {boolean}
     */
    isChsAlpha(string, min = -Infinity, max = Infinity) {
        const pattern = /^[\u4e00-\u9fa5A-Za-z]+$/;
        return pattern.test(string) && string.length >= min && string.length <= max;
    },
    /**
     * 验证：汉字、字母、数字
     * @param {string} string - 待验证字符串
     * @param {number} min - 允许长度最小值
     * @param {number} max - 允许长度最大值
     * @returns {boolean}
     */
    isChsAlphaNum(string, min = -Infinity, max = Infinity) {
        const pattern = /^[\u4e00-\u9fa5A-Za-z0-9]+$/;
        return pattern.test(string) && string.length >= min && string.length <= max;
    },
    /**
     * 验证：汉字、字母、数字、下划线、横线
     * @param {string} string - 待验证字符串
     * @param {number} min - 允许长度最小值
     * @param {number} max - 允许长度最大值
     * @returns {boolean}
     */
    isChsDash(string, min = -Infinity, max = Infinity) {
        const pattern = /^[\u4e00-\u9fa5A-Za-z0-9-_]+$/;
        return pattern.test(string) && string.length >= min && string.length <= max;
    },
};

export default uino;
