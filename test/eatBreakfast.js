var expect = require('chai').expect;
var toDo = require('../src/toDo');


describe('To do List', function() {

  var todo;
  beforeEach(function() {
    todo = new toDo();
  });

  it('list includes Eat Breakfast', function() {
    todo.add('Eat Breakfast');
    expect(todo.list().pop()).to.equal('Eat Breakfast');
  });

  it('returs boolean when complete', function() {
    expect(todo.complete()).to.be.a('boolean');
  });
});
