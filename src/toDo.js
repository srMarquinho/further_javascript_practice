(function(exports) {

  function toDo() {
    this._complete = false;
    this._list = [];
  }

  toDo.prototype = {

    list: function() {
      return this._list;
    },

    complete: function(todo) {
      for (var i = 0; i < this._list.length; i++)
        {
          if(this._list[i][0] === todo)
          {
            this._list[i][1] = true;
          }
        }
    },

    add: function(todo) {
      this._list.push([todo, this._complete]);
    }
  };

  exports.toDo = toDo;
})(this);
