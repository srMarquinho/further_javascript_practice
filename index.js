function pageReady() {

  list = new List();

  document.getElementById('submittask').onclick = function () {
    list.add(document.getElementById('addtask').value);

    var view = { list: list._list };
    var output = Mustache.render("<ul>{{#list}}<li>{{.}}</li>{{/list}}</ul>", view);
    document.getElementById('listtask').innerHTML = output;
  };
}

window.onload = pageReady;
