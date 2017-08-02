/**
 * Thunk 函数
 * 将一个多参数函数，经过转换处理，变成了一个单参数函数，只接受回调函数作为参数
 * 这个单参数版本的函数，就叫做 Thunk 函数
 * @param {Function} fn
 */
var Thunk = function(fn) {
	return function() {
		var args = Array.prototype.slice.call(arguments);
		return function(callback) {
			args.push(callback);
			return fn.apply(this, args);
		}
	};
};

// var readFileThunk = Thunk(fs.readFile);
// readFileThunk(fileA)(callback);