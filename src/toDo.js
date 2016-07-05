// var Mustache = require("mustache");

function toDo() {
  this._complete = true;
  this._list = [];
}

toDo.prototype = {

  list: function() {
    return this._list;
  },

  complete: function() {
    return true;
  },

  add: function(todo) {
    this._list.push(todo);
  },

};

// todo = new toDo();
// todo.add('Breakfast');
// var output = Mustache.render("{{todo.this_list()}} and {{todo.complete()}}");
// console.log(output);

// this exports the constructor toDo for testing
module.exports = toDo;
