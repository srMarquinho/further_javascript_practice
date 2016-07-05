process.env.NODE_ENV = 'test';

'use strict';

var app = require('http-server').createServer();
var Browser = require('zombie');
var assert = require('assert');

describe('Homepage', function() {
 before(function() {
   this.server = app.listen(8080);
   this.browser = new Browser({ site: 'http://localhost:8080' });
 });

 before(function(done) {
   this.browser.visit('/', done);
 });

 it('should show a title', function() {
   this.browser.assert.text('title', 'To Do List');
 });

 it('should show some to dos', function() {
  //  this.browser.fill('task', 'phone grandma').pressButton('Add Task');
   this.browser.assert.text('li', 'phone grandma');
 });

});
