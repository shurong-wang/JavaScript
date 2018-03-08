// 实现方法 `render(tmpl, data)`，将模板 `tmpl` 中的占位符，替换填充为 `data` 数据

const tmpl = "I'm {{name}}. I'm {{age}} years old.";
const data = { name: "Lucy", age: "23" };
// --> const result = "I'm Lucy. I'm 23 years old.";


{
    function render(tmpl, data) {
        return tmpl.replace(/\{\{(.*?)\}\}/g, (match, key) => data[key.trim()]);
    }

    const result = render(tmpl, data);
    console.log(result);
}


{
    String.prototype.render = function (data) {
        return this.replace(/{{(.*?)}}/g, (match, key) => data[key.trim()]);
    };

    const result = tmpl.render(data);
	console.log(result);
}