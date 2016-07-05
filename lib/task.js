var Task = function(task)  {
  this._task = task;
  this._complete = false;
};

Task.prototype.get = function() {
  return this._task
};

Task.prototype.status = function() {
  return this._complete;
}

module.exports = Task;
