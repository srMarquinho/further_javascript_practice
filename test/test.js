var Task = require('../public/js/task.js');
var List = require('../public/js/list.js');
var expect = require('chai').expect;

describe('task', function() {

  describe('create a to do', function () {
    it('creates a new to do', function () {
      var task = new Task("Eat breakfast");
      expect(task.task).to.equal('Eat breakfast');

    });

    it('is incomplete on creation', function () {
      var task = new Task("Eat breakfast");
      expect(task).to.have.ownProperty('complete');
    });
  });

  describe('stores a list of to dos', function () {

    it('stores a single task', function () {
      var list = new List();
      list.newTask("Eat breakfast");
      expect(list.tasks[0].task).to.equal("Eat breakfast");
    });

    it('stores multiple tasks', function(){
      var list = new List();
      list.newTask("Eat breakfast");
      list.newTask("Eat lunch");
      expect(list.tasks[0].task).to.equal("Eat breakfast");
      expect(list.tasks[1].task).to.equal("Eat lunch");
    });
  });

});
