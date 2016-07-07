(function(exports) {

  function List() {
    this._list = [];
  }

  List.prototype = {

    add: function(todoName) {
      var todo = new ToDo(todoName);
      this._list.push(todo);
    }
  };

  exports.List = List;
})(this);
