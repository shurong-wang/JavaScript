var $ = function(el) {
  return new _$(el);
};
var _$ = function(el) {
  this.el = (el && el.nodeType == 1)? el: document;
};
_$.prototype = {
  constructor: this,
  addEvent: function(type, fn, capture) {
    var el = this.el;

    if (window.addEventListener) {
      el.addEventListener(type, fn, capture);

      var ev = document.createEvent("HTMLEvents");
      ev.initEvent(type, capture || false, false);
      // 在元素上存储创建的事件，方便自定义触发
      if (!el["ev" + type]) {
        el["ev" + type] = ev;
      }

    } else if (window.attachEvent) {
      el.attachEvent("on" + type, fn);
      if (isNaN(el["cu" + type])) {
        // 自定义属性，触发事件用
        el["cu" + type] = 0;
      }

      var fnEv = function(event) {
        if (event.propertyName == "cu" + type) {
          fn.call(el);
        }
      };

      el.attachEvent("onpropertychange", fnEv);

      // 在元素上存储绑定的propertychange事件，方便删除
      if (!el["ev" + type]) {
        el["ev" + type] = [fnEv];
      } else {
        el["ev" + type].push(fnEv);
      }
    }

    return this;
  },
  fireEvent: function(type) {
    var el = this.el;
    if (typeof type === "string") {
      if (document.dispatchEvent) {
        if (el["ev" + type]) {
          el.dispatchEvent(el["ev" + type]);
        }
      } else if (document.attachEvent) {
        // 改变对应自定义属性，触发自定义事件
        el["cu" + type]++;
      }
    }
    return this;
  },
  removeEvent: function(type, fn, capture) {
    var el = this.el;
    if (window.removeEventListener) {
      el.removeEventListener(type, fn, capture || false);
    } else if (document.attachEvent) {
      el.detachEvent("on" + type, fn);
      var arrEv = el["ev" + type];
      if (arrEv instanceof Array) {
        for (var i=0; i<arrEv.length; i+=1) {
          // 删除该方法名下所有绑定的propertychange事件
          el.detachEvent("onpropertychange", arrEv[i]);
        }
      }
    }
    return this;
  }
};


// ------------- 调用 ------------ //

var fnClick = function(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.nodeType === 1) {
    alert("点击类型：" +  e.type);
    $(target).fireEvent("alert");
  }
}, funAlert1 = function() {
  alert("自定义alert事件弹出！");
}, funAlert2 = function() {
  alert("自定义alert事件再次弹出！");
};

// 测试用的张小姐图片
var elImage = document.getElementById("image");
$(elImage)
  .addEvent("click", fnClick)
  .addEvent("alert", funAlert1)
  .addEvent("alert", funAlert2);

// 删除自定义事件按钮
var elButton = document.getElementById("button");
$(elButton).addEvent("click", function() {
  $(elImage)
    .removeEvent("alert", funAlert1)
    .removeEvent("alert", funAlert2);

  alert("清除成功！");
});