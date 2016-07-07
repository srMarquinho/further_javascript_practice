(function(exports) {

  function ToDo(task) {
    this._complete = false;
    this._task = task;
  }

  ToDo.prototype = {

    complete: function() {
      this._complete = true;
    },
  };

  exports.ToDo = ToDo;
})(this);
