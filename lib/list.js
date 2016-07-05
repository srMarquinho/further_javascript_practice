// var item = require('./item.js');

var List = function()  {
  this._list = [];
};

List.prototype.newItem = function(item, itemConstructor = Item){
  this._list.push(createItem(item, itemConstructor));
  return this._list;
};


List.prototype.printItems = function(){
  var array = this._list;
  var print = '';

  for (var i = 0; i < array.length; i++) {
    var print = print.concat(array[i]._item) + "\n";
  }
  return print;
};

// Helpers //

function createItem(item, itemConstructor) {
  return new itemConstructor(item);
}


module.exports = List;
