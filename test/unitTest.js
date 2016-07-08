var expect = require('chai').expect;
var Task = require('../src/task').Task;
var List = require('../src/list').List;

//INCOMPLETE:
// Needs module injection and stubs

describe('List', function() {
  var list = new List();

  xit('adds task and taks has name', function() {
    list.add('Eat Breakfast');
    expect(list._list[0]._taskName).to.equal('Eat Breakfast');
  });

  xit('adds task and task is incomplete by default', function() {
    list.add('Eat Breakfast');
    expect(list._list[0]._complete).to.equal(false);
  });

describe('Task', function() {
  var task = new Task('Eat Breakfast');

  it('changes itself incomplete to complete', function() {
    task.complete();
    expect(task._complete).to.equal(true);
  });
});
});
