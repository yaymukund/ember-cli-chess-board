import Ember from 'ember';
import InclusionValidationMixin from 'ember-cli-chess-board/mixins/inclusion-validation';

module('InclusionValidationMixin');

var Klass = Ember.Object.extend(InclusionValidationMixin),
    Pet = Ember.Object.extend(InclusionValidationMixin, {
      validations: {
        kind: { in: ['dog', 'cat', 'snake', 'goldfish'] }
      }
    });

test('errors without `validations` attribute', function() {
  throws(function() {
    Klass.create();
  }, /You must set `validations`/);
});

test('passes with `validations` attribute', function() {
  Klass.create({ validations: {} });
  ok(true, 'does not error');
});

test("errors if your provided value isn't included in the list", function() {
  throws(function() {
    Pet.create({ kind: 'hamster' });
  }, /hamster is not a valid value for kind/);
});

test('passes if your value is in the list', function() {
  Pet.create({ kind: 'dog' });
  ok(true, 'does not error');
});
