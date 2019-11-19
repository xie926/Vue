class Watcher{
  constructor(opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = this.getBaseType(opts.data) === 'Object' ? opts.watch : {}
    for(let key in opts.data) {
      this.setData(key, opts.data[key])
    }
  }
  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target)
    return typeStr.slice(8, -1)
  }
  setData(_key, _data) {
    Object.defineProperty(this, _key, { //this指向上下文当前对象
      get: function () {
        return this.$data[_key]
      },
      set: function (val) {
        const oldValue = this.$data[_key]
        console.log(this)
        if(oldValue === val) return val
        // 数据发生改变，执行watch方法
        this.$data[_key] = val
        this.$watch[_key] && typeof this.$watch[_key] === 'function' &&(
          this.$watch[_key].call(this, val, oldValue)
        )
        return val
      }
    })
  }
}

const vm = new Watcher({
  data: {
    a: 1,
    b: 'hello'
  },
  watch: {
    a(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
})

setTimeout(() => {
  vm.a = 2
}, 4000);
