/////////// API Request ///////////
var xmlhttp = new XMLHttpRequest();
var url = "http://quiet-beach-24792.herokuapp.com/todos.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        addApi(xmlhttp.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.setTimeout = 40000;
////////////////////////////////////

var addApi = function(response) {
    var arr = JSON.parse(response);
    for (var i = 0; i < arr.length; i++) {
        list.addItem(arr[i].text, arr[i].completed, Item);
    }
};
