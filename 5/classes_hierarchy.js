// Using "_protected" fields to prevent direct field usage
// and force using getters/setters instead

// ShopProduct class
function ShopProduct(title, price) {
  this._title = title;
  this._price = price;
}

ShopProduct.prototype.getTitle = function() {
  return this._title;
}
ShopProduct.prototype.setTitle = function (title) {
  this._title = title;
}
ShopProduct.prototype.getPrice = function() {
  return this._price;
}
ShopProduct.prototype.setPrice = function (price) {
  this._price = price;
};
ShopProduct.prototype.getInfo = function() {
  return `Title: ${this._title}\nPrice: ${this._price}`;
}

// CDProduct class
function CDProduct(title, price, playLength) {
  this._playLength = playLength;
  ShopProduct.call(this, title, price);
}

CDProduct.prototype = Object.create(ShopProduct.prototype);
CDProduct.prototype.constructor = CDProduct;

CDProduct.prototype.getPlayLength = function() {
  return this._playLength;
}

// BookProduct class
function BookProduct(title, price, numPages) {
  this._numPages = numPages;
  ShopProduct.call(this, title, price);
}

BookProduct.prototype = Object.create(ShopProduct.prototype);
BookProduct.prototype.constructor = BookProduct;

BookProduct.prototype.getNumPages = function() {
  return this._numPages;
}
