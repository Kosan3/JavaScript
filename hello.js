document.addEventListener('DOMContentLoaded', function() {
  let list = document.getElementById('list');
  let del = document.getElementById('del');
  let result = document.getElementById('result');
  list.addEventListener('mouseover', function(e) {
    let target = e.target;
    let data = target.getAttribute('data-isbn');
    if (data) {
      let img = document.createElement('img');
      img.src = 'http://www.wings.msn.to/books/' + data + '/' + data + '.jpg';
      img.width = 150;
      img.height = 200;
      if (result.getElementsByTagName('img').length === 0) {
        result.appendChild(img);
        del.disabled = false;
      } else {
        result.replaceChild(img, result.firstChild);
      }
    }
  });
  del.addEventListener('click', function(e) {
    result.removeChild(result.firstChild);
    del.disabled = true;
  })
});