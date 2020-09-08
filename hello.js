var storage = localStorage;
storage.first = 'first';
storage.second = 'second';
storage.therd = 'therd';
for (var i = 0, len = storage.length; i < len; i++) {
  var key = storage.key(i);
  console.log(storage.getItem(key));
}