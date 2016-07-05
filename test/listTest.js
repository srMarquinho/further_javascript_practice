var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');
var List = require('../lib/list.js');


describe('List', function() {

  // sinon.stub(item, "phone grandma", function() {return 'phone grandma'});
  var Stub = sinon.stub();
  Stub.withArgs('phone grandma').returns({ _item: 'phone grandma', _complete: false });
  Stub.withArgs('eat chocolate').returns({ _item: 'eat chocolate', _complete: false });


  it('should print a list of items', function() {
    var todo = new List();
    todo.newItem('phone grandma', Stub);
    todo.newItem('eat chocolate', Stub);
    expect(todo.printItems()).to.contain('phone grandma');
  });



});
