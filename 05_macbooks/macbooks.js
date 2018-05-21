function Laptop(year, hd) {
  this.year = year;
  this.hd = hd;
}

Laptop.prototype.checkSpecs = function () {
  return `Year: ${this.year}, HD: ${this.hd}`
}

function Macbook(year, hd, color) {
  Laptop.apply(this, [year, hd]);
  this.color = color;
}

let extendWithObjectCreate = (con1, con2) => {
  con1.prototype = Object.create(con2.prototype);
}

let extendWithNewKeyword = (con1, con2) => {
  con1.prototype = new con2;
}