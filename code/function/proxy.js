// 代理请求拦截代理示例
(function() {
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var url = arguments[1];
        var serverNameRegex = /^http:\/\/api.test.com/;
        if (serverNameRegex.test(url)) {
            arguments[1] = url.replace(serverNameRegex, "http://localhost:8080");
        }
        return open.apply(this, arguments);
    }
})();
