var date = new Date();

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var weeks = date.getDay();

var weekdays = ['日','月','火','水','木','金','土'];
var weekday = weekdays[date.getDay()];

var str = '今日は' + year + '年' + month + '月' + day + '日(' + weekday + ')です。';
console.log(str);