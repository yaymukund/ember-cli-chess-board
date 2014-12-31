/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var app = new EmberAddon();

app.import(app.bowerDirectory + '/chesslib/browser/chesslib.js', {
  exports: { chesslib: ['PGN'] }
});

module.exports = app.toTree();
