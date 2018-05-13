function watch (obj, prop, cb) {
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      return Reflect.get(target, key, receiver)
    },
    set: function (target, key, value, receiver) {
      const oldValue = target[key]
      const result = Reflect.set(target, key, value, receiver)
      
      if (prop === key) {
        cb(value, oldValue)
      }
      
      return result
    }
  })
}

let obj = watch({ a: 1 }, 'a', (newValue, oldValue) => {
  console.log('属性被修改: 新值:', newValue, ',旧值：', oldValue)
})

obj.a = 2
obj.a = 3
