function pageReady() {

  todo = new toDo();

  document.getElementById('button').onclick = function () {
    todo.add(document.getElementById('text').value);
    console.log(todo.list());

    var view = { list: todo.list() };
    var output = Mustache.render("<ul>{{#list}}<li>{{.}}</li>{{/list}}</ul>", view);
    document.getElementById('list').innerHTML = output;
  };

}

window.onload = pageReady;
