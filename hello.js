class MyIterator {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    let current = 0;
    let that = this;
    return {
      next() {
        return current < that.data.length ? {value: that.data[current++], done: false} : {done: true};
      }
    };
  }
}

var ary = [0,1,2,3,4,5];
var i2 = 0;
for (var i = 0, len = ary.length; i < len; i++) {
  console.log(ary[i2++]);
}