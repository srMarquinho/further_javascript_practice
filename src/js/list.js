(function(exports) {

	var List = function()  {
	  this.list = [];
	};

  	List.prototype = {
      addItem: function(item, itemConstructor){
  	  this.list.push(createItem(item, itemConstructor));
  	  return this.list;
  	},
      getItemById: function(itemId) {
      console.log(itemId);

      var lookup = {};
      for (var i = 0; i < this.list.length; i++) {
        lookup[this.list[i].id] = array[i];
      }
    }

  };

	// Helpers //

	function createItem(item, itemConstructor) {
	  return new itemConstructor(item);
	}

	exports.List = List;

})(this);
