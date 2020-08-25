var r = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = 'サイトはhttp://localkakeibo.workです';
var str2 = 'サイトは「ローカルカケイボワークをです」';
console.log(r.test(str1));
console.log(r.test(str2));