var Item = function(item)  {
  this._item = item;
  this._complete = false;
};

Item.prototype.get = function() {
  return this._item
};

Item.prototype.status = function() {
  return this._complete;
}

module.exports = Item;
