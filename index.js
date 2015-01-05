/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-chess-board',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/chesslib/browser/chesslib.js', {
      exports: { chesslib: ['PGN', 'brands'] }
    });
  }
};
