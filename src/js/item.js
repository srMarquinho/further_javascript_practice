'use strict';

(function(exports) {

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

	Item.prototype.changeStatus = function() {
		return this._complete = !this._complete;
	}

	Item.prototype.printStatus = function() {
		return this._complete ? 'completed' : 'not completed';
	}

	exports.Item = Item;

})(this);

