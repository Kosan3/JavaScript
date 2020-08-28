document.addEventListener('DOMContentLoaded', function() {
  var list = document.getElementById('list');
  var del = document.getElementById('del');
  var result = document.getElementById('result');

  list.addEventListener('click', function(e) {
      var isbn = e.target.getAttribute('data-isbn');
      if (isbn) {
      var img = document.createElement('img');
      img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
      img.alt = e.target.textContent;
      img.height = 180;
      img.width = 100;
      if (result.getElementsByTagName('img').length > 0) {
        result.replaceChild(img, result.firstChild);
      } else {
        result.appendChild(img);
        del.disabled = false;
      }
    }
  });
  del.addEventListener('click', function() {
    if (result.getElementsByTagName('img').length > 0) {
      result.removeChild(result.firstChild);
      del.disabled = true;
    }
  });
});

