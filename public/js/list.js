'use strict';

var Task = require('./task.js');

function List(){
  this.tasks = [];
}

List.prototype.newTask = function(task){
  var task = new Task(task);
  this.tasks.push(task);
}

module.exports = List;
