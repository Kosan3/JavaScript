var Triangle = function() {
  var _base;
  var _height;
  var checkArgs = function(val) {
    return (typeof val === 'number' && val > 0);
  }

  this.setBase = function(base) {
    if (checkArgs(base)) {
      _base = base;
    }
  }
  this.getBase = function() {
    return _base;
  }

  this.setHeight = function(height) {
    if (checkArgs(height)) {
      _height = height;
    }
  }
  this.getHeight = function() {
    return _height;
  }
}

Triangle.prototype.getArea = function() {
  return this.getBase() * this.getHeight() / 2;
}

var t = new Triangle();
t._base = 10;
t._height = 2;
console.log(t.getArea());

t.setBase(10);
t.setHeight(2);
console.log(t.getArea());