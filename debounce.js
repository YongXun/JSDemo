// 函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，
// 又一次触发了事件，就重新开始延时。如下图，持续触发scroll事件时，并不执行handle函数，当1000毫秒内没有触发scroll事件时，才会延时触发scroll事件。
/**
 *
 * @param {function} fn  需要执行的函数
 * @param {number} wait 需要等待的时间
 */
var debounce = function (fn, wait) {
    var timeout = null;
    return function () {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        else {
            timeout = setTimeout(fn, wait);
        }
    };
};
var fn = function () {
    console.log('Hello');
};
debounce(fn, 5000);
debounce(fn, 5000);
