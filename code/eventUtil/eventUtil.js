var eventUtil = {
  getEvent: function(event) {
    return event || window.event;
  },

  getTarget: function(event) {
    return event.target || event.srcElement;
  },

  addListener: function(element, type, hander) {
    if (element.addEventListener) {
      element.addEventListener(type, hander, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, hander);
    } else {
      element['on' + type] = hander;
    }
  },

  removeListener: function(element, type, hander) {
    if (element.removeEventListener) {
      element.removeEventListener(type, hander, false);
    } else if (element.deattachEvent) {
      element.detachEvent(type, hander);
    } else {
      element['on' + type] = null;
    }
  },

  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },

  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
};
