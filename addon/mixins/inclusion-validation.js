import Ember from 'ember';

export default Ember.Mixin.create({
  validations: null,

  validateInclusion: function() {
    var validations = this.get('validations');

    if (!validations) {
      var msg = 'You must set `validations` property to use '+
                '`InclusionValidation` mixin';

      throw new Error(msg);
    }

    for (var k in validations) {
      if (!validations.hasOwnProperty(k)) {
        continue;
      }

      var v = this.get(k);

      if (!validations[k].in.contains(v)) {
        throw new Error('Error: %@ is not a valid value for %@.'.fmt(v, k));
      }
    }
  }.on('init')
});
