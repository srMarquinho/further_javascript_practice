(function(exports) {

  function ToDo(task) {
    this._task = task;
    this._complete = false;
  }

  ToDo.prototype = {

    complete: function() {
      this._complete = true;
    },
  };

  exports.ToDo = ToDo;
})(this);
