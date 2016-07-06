var list = new List();

list.addItem('phone grandma');
list.addItem('eat chocolate');


window.onload = function() {
	document.getElementById('list-printed').innerHTML = printItems(list.list);
}

	
