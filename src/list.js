(function(exports) {

  function List() {
    this._list = [];
  }

  List.prototype = {

    add: function(taskName) {
      var task = new Task(taskName);
      this._list.push(task);
    }
  };

  exports.List = List;
})(this);
