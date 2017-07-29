const lightsEl = document.querySelector('#lights');

/**
 * 状态机
 */
function TrafficProtocol(el, isReset) {
    this.subject = el;
    this.isAutoReset = isReset;
    this.stateList = [];
}

TrafficProtocol.prototype.putState = function(fn) {
    this.stateList.push(fn);
}

TrafficProtocol.prototype.reset = function() {
    const subject = this.subject;
    this.statePromise = Promise.resolve();

    this.stateList.forEach((stateFn) => {
        this.statePromise = this.statePromise.then(() => {
            return new Promise(resolve => {
                stateFn(subject, resolve);
            });
        });
    });
    
    if (this.isAutoReset) {
        this.statePromise.then(this.reset.bind(this));
    }
}

TrafficProtocol.prototype.start = function() {
    this.reset();
}

// 实例化
const traffic = new TrafficProtocol(lightsEl, true);

traffic.putState(function(subject, next) {
    subject.className = 'stop';
    setTimeout(next, 2000);
});

traffic.putState(function(subject, next) {
    subject.className = 'wait';
    setTimeout(next, 1000);
});

traffic.putState(function(subject, next) {
    subject.className = 'pass';
    setTimeout(next, 3000);
});

traffic.start();
