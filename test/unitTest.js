var expect = require('chai').expect;
var Task = require('../src/task').Task;
var List = require('../src/list').List;

describe('Task', function() {
  task = new Task();

  xit('#_name', function() {
    expect(task.complete()).to.be.a('boolean');
  });

  xit('#.complete()', function() {
    task.add('Eat Breakfast');
    task.complete('Eat Breakfast,false');
    expect(task.list()[0][1]).to.equal(true);
  });
});

describe('List', function() {
  var list = new List();

  it('#.add()', function() {
    list.add('Eat Breakfast');
    expect(list._list[0]._taskName).to.equal('Eat Breakfast');
  });
});
