var toDo = require('../public/js/toDo.js');
var expect = require('chai').expect;

describe('toDo', function() {

  describe('create a to do', function () {
    it('creates a new to do', function () {
      var item = new toDo("Eat breakfast");
      expect(item.task).to.equal('Eat breakfast');

    });

    it('is incomplete on creation', function () {
      var item = new toDo("Eat breakfast");
      expect(item).to.have.ownProperty('complete');
    });
  });
});
