(function(exports) {

	function printItems(arrayList) {
	  var array = arrayList;
	  var print = '';

	  for (var i = 0; i < array.length; i++) {
	     print = print.concat('<li><div><button onclick="changeStatus(' + array[i].id + ')" ></button> ' +
       array[i]._item + ' - ' + printStatus(array[i]) + '</div></li>');
	  }
	  return '<ul>' + print + '</ul>';
	}

  function printStatus(array) {
    return array._complete ? 'completed' : 'not completed';
  }

	exports.printItems = printItems;

})(this);
