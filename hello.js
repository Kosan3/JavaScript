document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("file").addEventListener('change', function(e) {
    var input = document.getElementById('file').files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function() {
      document.getElementById('resul').textContent = reader.result;
    }, true);
    reader.readAsText(input, 'UTF-8');
  }, true);
});