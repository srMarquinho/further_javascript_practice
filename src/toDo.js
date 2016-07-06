(function(exports) {

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

  exports.toDo = toDo;
})(this);
