/**
  * @desc 函数防抖
  * @param func 函数
  * @param wait 延迟执行毫秒数
  * @param immediate true 表立即执行，false 表非立即执行
  */

function debounce(fn, delay = 300, immediate = false, ...args) {
    let timer = null;
    return () => {
        // clearTimeOut只是清除定时器 timer是指向这个定时器的变量 清除定时器但是timer还在
        if (timer) clearTimeout(timer);
        // 如果是立即执行
        if (immediate) {
            const callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, delay);
            if (callNow) fn(args);
        } else {
            // 非立即执行
            timer = setTimeout(() => {
                fn(args);
            }, delay);
        }
    };
}

/**
*@description: 防抖包装函数
*@param{}
*@return:
*/
function subDebounce(name, fn, delay, immediate, ...args) {
    if (!window.vm[name]) {
        window.vm[name] = debounce(fn, delay, immediate, ...args);
    }
    window.vm[name]();
}

export default subDebounce;
