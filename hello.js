let data = {red: '赤色', yellow: '黄色'};
let proxy = new Proxy(data, {
  get(target, prop) {
    console.log(prop in target)
    return prop in target ? target[prop] :'?';
  }
});

console.log(proxy.red);
console.log(proxy.nhing);