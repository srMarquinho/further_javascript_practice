var assert = require('chai').assert;
var expect = require('chai').expect;
var Item = require('../../src/js/item.js').Item;


describe('Item', function() {
  it('should store a item when constructed', function() {
    var item = new Item('phone grandma');
    expect(item.get()).to.equal('phone grandma');
  });

  it('Item completion is set to false by default ', function() {
    var item = new Item('phone grandma');
    expect(item.status()).to.be.false;
  });
});
