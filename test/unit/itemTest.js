var assert = require('chai').assert;
var expect = require('chai').expect;
var Item = require('../../src/js/item.js').Item;

describe('Item', function() {

    var item;

    before(function() {
        item = new Item('phone grandma');
    });

    it('should store a item when constructed', function() {
        expect(item.get()).to.equal('phone grandma');
    });

    it('Item completion is set to false by default ', function() {
        expect(item.status()).to.be.false;
    });

    it('id increments by 1', function() {
        expect(item.id).to.equal(0);
        var item2 = new Item('feed dog');
        expect(item2.id).to.equal(1);
    });

    // it('prints status of items completeness', function() {
    //   expect(item.status()).to.be.false;
    //   expect(printStatus(item)).to.equal('not completed');
    // });

    describe('task has been completed', function() {

        before(function() {
            item.changeStatus();
        });

        it('Changes status of item to complete', function() {
            expect(item.status()).to.be.true;
        });

        // it('prints status of items completeness', function() {
        //   expect(printStatus(item)).to.equal('completed');
        // });
    });
});
