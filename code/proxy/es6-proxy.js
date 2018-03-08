/**
 * 代理 Proxy
 */
{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _no: 100
    };

    let monitor = new Proxy(obj, {

        // 拦截对象属性的读取
        get(target, key) {
            return target[key].replace('2017', '2018')
        },

        // 拦截对象设置属性
        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },

        // 拦截 key in object 操作
        has(target, key) {
            if (key === 'name') {
                return target[key]
            } else {
                return false;
            }
        },

        // 拦截 delete
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },

        // 拦截 Object.keys ,Object.getOwnPropertySymbols, Object.getOwnPropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time')
        }
    });

    console.log('get', monitor.time);

    monitor.time = '2018';
    monitor.name = 'Lucy';
    console.log('set', monitor.time, monitor);

    console.log('has', 'name' in monitor, 'time' in monitor);

    // delete monitor.time;
    // console.log('delete',monitor);

    delete monitor._no;
    console.log('delete',monitor);

    console.log('ownKeys', Object.keys(monitor));

}

/**
 * 反射 Reflect
 */
{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _no: 100
    };

    console.log('Reflect get', Reflect.get(obj, 'time'));

    Reflect.set(obj, 'name', 'Lucy');
    console.log(obj);

    console.log('has', Reflect.has(obj, 'name'));
}