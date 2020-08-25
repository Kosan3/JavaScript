function arrayWalk(data,f) {
  for (var key in data) {
    f(data[key], key);  // function showElement(0, 1) {
  }                     //   console.log(0 + ':' + 1);
}                       // }

function showElement(value,key) {
  console.log(key + ':' + value);
}

var ary = [1,2,4,8,16];
arrayWalk(ary, showElement);