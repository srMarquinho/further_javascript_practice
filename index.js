function pageReady() {

  todo = new toDo();

  document.getElementById('button').onclick = function () {
    todo.add(document.getElementById('text').value);

    var view = { list: todo.list() };
    var output = Mustache.render("<ul>{{#list}}<li>{{.}}<button type='submit' id='submit'>Complete</button></li>{{/list}}</ul>", view);
    document.getElementById('list').innerHTML = output;
  };
}

window.onload = pageReady;
