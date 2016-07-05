var app = require("http-server").createServer();
var assert = require('assert');
var Browser = require('zombie');

describe('contact page', function() {

  before(function() {
    this.server = app.listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  // load the contact page before each test
  beforeEach(function(done) {
    this.browser.visit('/', done);
  });

  it('has a index page', function() {
    assert.ok(this.browser.success);
  });

});
