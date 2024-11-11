/**
*@author: wanggang
*@date: 2020-05-11 10:28:36
*@description: cookie 保存用户信息
*/

/**
*@description: 设置cookie
*@param{String,String,number} 缓存key,value,过期时间(天)
*@return:
*/
export function setCookie(name, value, exdays) {
    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1024));
    const expire = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expire}`;
}


/**
*@description:读取cookie方法
*@param{String} cname 缓存key
*@return: 缓存value
*/
export function getCookie(cname) {
    const name = `${cname}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
        const c = ca[i].trim();
        if (c.includes(name)) return c.substring(name.length, c.length);
    }
    return '';
}


/**
*@description: 删除cookie
*@param{String} 缓存key
*/
export function delCookie(cname) {
    setCookie(cname, '', -1);
}
