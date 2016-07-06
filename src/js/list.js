var Item = require('./item.js');
var Printer = require('./printer.js');

var List = function()  {
  this._list = [];
};

List.prototype.addItem = function(item, itemConstructor = Item){
  this._list.push(createItem(item, itemConstructor));
  return this._list;
};

// Helpers //

function createItem(item, itemConstructor) {
  return new itemConstructor(item);
}

module.exports = List;
