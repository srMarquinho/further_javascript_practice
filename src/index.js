var list = new List();

list.addItem('phone grandma');
list.addItem('eat chocolate');

function stopDefAction(evt){
	evt.preventDefault();
}

window.onload = function() {
	document.getElementById('list-printed').innerHTML = printItems(list.list);
	document.getElementById('submit').addEventListener('click', stopDefAction, false)
}
