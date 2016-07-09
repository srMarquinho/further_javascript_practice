process.env.NODE_ENV = 'test';

var server = require("http-server").createServer();
var Browser = require('zombie');
// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('home page', function() {

    before(function() {
        server.listen(3000);
        browser = new Browser({
            site: "http://localhost:3000"
        });
    });

    before(function(done) {
        browser.visit('/', done);
    });

    it('title attribute is To Do List', function() {
        assert.equal(browser.text('title'), 'To Do List');
    });

    it('contains some to dos', function() {
        browser.fill('task', 'phone grandma');
        browser.pressButton('Add to list');
        assert.include(browser.text('ul'), 'phone grandma');

        browser.fill('task', 'eat chocolate');
        browser.pressButton('Add to list');
        assert.include(browser.text('ul'), 'phone grandma');
        assert.include(browser.text('ul'), 'eat chocolate');
    });
});
