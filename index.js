function pageReady() {

  todo = new ToDo();

  document.getElementById('button').onclick = function () {
    todo.add(document.getElementById('text').value);

    var view = { list: todo.list() };
    var output = Mustache.render("<ul>{{#list}}<li>{{.}}</li>{{/list}}</ul>", view);
    document.getElementById('list').innerHTML = output;
  };
}

window.onload = pageReady;
