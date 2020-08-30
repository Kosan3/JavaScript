document.addEventListener('DOMContentLoaded', function() {
  let Counter = function(elem) {
    this.count = 0;
    this.elem = elem;
    elem.addEventListener('click', () => {
      this.count++;
      this.show();
    });
  };
  Counter.prototype.show = function() {
    console.log(this.elem.id + this.count + '回クリック');
  }
  let c = new Counter(document.getElementById('btn'));
})