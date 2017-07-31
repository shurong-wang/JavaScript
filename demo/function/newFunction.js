/**
 * 打印从 1 ~ 10 的整数
 * 不使用循环、跳转和递归
 * @type {Number}
 */
var i = 0;
new Function(new Array(11).join('console.log(++i);'))();
// eval(new Array(11).join('console.log(++i);'));


/**
 * 解析末尾含逗号的 JSON 字符串
 */
function parseJSON(data) {
    try {
        return JSON.parse(data);
    }
    catch (e) {
        console.warn(e.message);
        return (new Function('return ' + data))();
    }
}

var data = `{
    a: 1,
    b: 2,
    c: '3',
}`;
console.log(parseJSON(data));
