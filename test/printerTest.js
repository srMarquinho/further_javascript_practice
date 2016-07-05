var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');
var printItems = require('../lib/printer.js');


describe('Printer', function() {

  it('should print a list of items in HTML', function() {
    var testArray = [{_item: 'phone grandma', _complete: false }, { _item: 'eat chocolate', _complete: false }];
    expect(printItems(testArray)).to.contain('<ul><li><div>phone grandma</div></li><li><div>eat chocolate</div></li></ul>');
  });
});
