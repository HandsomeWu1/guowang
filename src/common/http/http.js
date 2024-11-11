/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import qs from 'qs';

// 设置请求的路径
axios.defaults.baseURL = CONFIG.remote;

/**
*一般的get请求
*/
export function get(url, params) {
    let par = {};
    if (params) {
        par = params;
    }
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: par,
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err.data);
        });
    });
}

/**
*一般post请求
*/
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err.data);
        });
    });
}

/**
* post请求参数为json字符串
*/
export function postJson(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, {
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err.data);
        });
    });
}

/**
*post请求 参数为form表单
*/
export function postForm(url, params) {
    let par = {};
    if (params) {
        par = params;
    }
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(par), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err.data);
        });
    });
}

/**
*delete 请求
*/
export function del(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, params).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err.data);
        });
    });
}
