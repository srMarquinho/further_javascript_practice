todo = new toDo();
todo.add('Eat Breakfast');
todo.add('Brush Teeth');

var view = {
  list: todo.list()
};

var output = Mustache.render("<ul>{{#list}}<li>{{.}}</li>{{/list}}</ul>", view);
