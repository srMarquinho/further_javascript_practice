'use strict';

(function(exports) {

	var List = function()  {
	  this.list = [];
	};

	List.prototype.addItem = function(item, itemConstructor = Item){
	  this.list.push(createItem(item, itemConstructor));
	  return this.list;
	};

	// Helpers //

	function createItem(item, itemConstructor) {
	  return new itemConstructor(item);
	}

	exports.List = List;

})(this);

