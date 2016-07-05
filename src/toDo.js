var Mustache = require("mustache");

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


//////////// MUSTACHE TEST//////////
// todo = new toDo();
//
// var view = {
//   list: todo.list(),
//   complete: todo.complete()
// };
//
// todo.add('Breakfast');
//
// var output = Mustache.render("{{list}} and {{complete}}", view);
// console.log(output);
//////////////////////////////////////

// this exports the constructor toDo for testing
module.exports = toDo;
