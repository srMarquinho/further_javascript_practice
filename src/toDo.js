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


// this exports the constructor toDo for testing
// module.exports = toDo;
