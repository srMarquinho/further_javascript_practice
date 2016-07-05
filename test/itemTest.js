var assert = require('chai').assert;
var expect = require('chai').expect;
var Item = require('../lib/item.js');


describe('Item', function() {
  // beforeEach(function() {
  //   var item = new item('phone grandma');
  // });
  it('should store a item when constructed', function() {
    var item = new Item('phone grandma');
    expect(item.get()).to.equal('phone grandma');
  });

  it('Item completion is set to false by default ', function() {
    var item = new Item('phone grandma');
    expect(item.status()).to.be.false;
  });
});
