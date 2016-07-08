function pageReady() {

  list = new List();

  document.getElementById('submittask').onclick = function () {
    list.add(document.getElementById('addtask').value);

    var view = {
      task: list._list
    };
    var output = Mustache.render("<ul>{{#task}}<li>{{.}}</li>{{/task}}</ul>", view);
    document.getElementById('listtask').innerHTML = output;
  };
}

window.onload = pageReady;
