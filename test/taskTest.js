var assert = require('chai').assert;
var expect = require('chai').expect;
var Task = require('../lib/task.js');


describe('Task', function() {
  // beforeEach(function() {
  //   var task = new Task('phone grandma');
  // });
  it('should store a task when constructed', function() {
    var task = new Task('phone grandma');
    expect(task.get()).to.equal('phone grandma');
  });

  it('task completion is set to false by default ', function() {
    var task = new Task('phone grandma');
    expect(task.status()).to.be.false;
  });
});
