var x = /http(s)?:\/\/([\w-]+\.)+(\/[\w- .\?%&=]*)?/g;
var str = 'サポートサイトはhttps://localkekeibo.workです';
str += 'こちらもお願いHTTP://www.web-dei.com';
var results = str.match(x);
console.log(results);
for (var result of results) {
  console.log(result);
}