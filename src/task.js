(function(exports) {

  function Task(taskName) {
    this._taskName = taskName;
    this._complete = false;
  }

  Task.prototype = {

    complete: function() {
      this._complete = true;
    },
  };

  exports.Task = Task;
})(this);
