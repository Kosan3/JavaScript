document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('btn');
  var onoff = document.getElementById('onoff');
  btn.addEventListener('click', function() {
    if (onoff.checked) {
      console.log(onoff.value);
    } else {
      console.log('チェックされていません');
    }
  }, false);
}, false);