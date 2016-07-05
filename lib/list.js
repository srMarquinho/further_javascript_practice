var Task = require('./task.js');

var List = function()  {
  this._list = [];
};

List.prototype.newTask = function(task){
  this._list.push(new Task(task));
  return this._list;
};


List.prototype.printTasks = function(){
  var array = this._list;
  var print = '';

  for (var i = 0; i < array.length; i++) {
    var print = print.concat(array[i]._task) + "\n";
  }
  return print;
};

module.exports = List;
