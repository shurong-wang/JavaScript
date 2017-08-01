[] == false;        // true
!![] == true;       // true
![] == [];          // true
[0] == false;       // true
!![0] == true;      // true
[1] == 1;           // true
[1] == 2;           // false
/**
 * 核心：== 的比较规则，最后都是转换成 Number 来比较
 * 以 [] == false 为例：
     * 1. 当 == 一边是布尔值，先把该布尔值转换为数字：
     *      false --> 0
     * 2. 当 == 一边是字符串或数字，另一边是对象的时候（数组也是对象），先把对象值转换为原始值：
     *  2.1 对象调用 valueOf() 方法，如果返回的是原始值，则对象转为该值
     *      [].valueOf() --> []
     *  2.2 如果 valueOf() 返回的不是原始值，则调用 toString() 方法，如果返回的是原始值，则对象转为该值
     *      [].toString() --> ''
     *  2.3 如果 valueOf() 和 toString() 方法均没有返回原始值，则抛出 TypeError 异常
     *      [] == 0 --> '' == 0
     * 3. 当 == 一边是字符串，一边是数字时，先把字符串转为数字，再进行比较：
     *      '' == 0 --> 0 == 0 --> true
     *
 * 同理，[0] == false 转化如下：
     * 1. false --> 0
     * 2. [0] --> [0].valueOf() --> [0] --> [0].toString() --> '0'
     * 3. '0' == 0 --> 0 == 0 --> true
 */


null == 0;          // false
null < 0;           // false
null >= 0;          // true

undefined > 0;      // false
undefined == 0;     // false
undefined < 0;      // false

0 == undefined;     //false
0 == null;          //false
false == null;      //false
false == undefined; //false
'' == null;         //false
'' == undefined;    //false

null == undefined   // true
10 + null;          // 10
10 + undefined;     // NaN
null >= 0;          // true
undefined >= 0;     // false

/**
 * 比较相等性(==)时，不能将 null 和 undefined 转换成其他任何值
 * null < 0 操作，null 会转化为 number 类型，值为 0
 * >= 结果根据 < 结果推出(undefined 除外，会转化为 NaN)
 * >= 结果与 == 结果没有任何关系，>= 结果不是 > 和 == 的累和
 * undefined 只与 undefined 、null 具有 == 相等性，与其他任何值不等
 */
