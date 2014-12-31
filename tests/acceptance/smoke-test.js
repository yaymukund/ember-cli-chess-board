import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Smoke', {
  setup: function() {
    application = startApp();
  },

  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('works', function() {
  ok(application.get('testing'));
});
