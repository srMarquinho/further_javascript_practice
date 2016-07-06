process.env.NODE_ENV = 'test';

var app = require('../../src/server');
var createServer = require("http-server").createServer;
var Browser = require('zombie');
var assert = require('assert');

describe('home page', function() {

	before(function() {
		this.server = createServer(app).listen(3000);
		this.browser = new Browser({ site: "http://localhost:3000"});
	});

	before(function(done) {
		this.browser.visit('/', done);
	});

	it('title attribute is To Do List', function() {
		assert.equal(this.browser.text('title'), 'To Do List');
	});

});

