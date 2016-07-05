var assert = require('chai').assert;
var expect = require('chai').expect;
var List = require('../lib/list.js');


describe('List', function() {

  it('should print a list of tasks', function() {

    var todo = new List();
    todo.newTask('phone grandma');
    todo.newTask('eat chocolate');

    expect(todo.printTasks()).to.contain('phone grandma')
    
  });

});
