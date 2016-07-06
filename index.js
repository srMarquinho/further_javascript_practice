todo = new toDo();
todo.add('Eat Breakfast');

var view = {
  list: todo.list(),
  complete: todo.complete()
};

var output = Mustache.render("{{list}} and {{complete}}", view);

// console.log(output);
