import Ember from 'ember';
import InclusionValidationMixin from 'ember-cli-chess-board/mixins/inclusion-validation';
import {
  toCssClass, toIcon,
  PIECE_KINDS, PIECE_COLORS
} from 'ember-cli-chess-board/utils/constants';

var _cache = {},
    _cacheKeyFor = function(color, kind) {
      return color+':'+kind;
    };

var Piece = Ember.Object.extend(InclusionValidationMixin, {
  kind: null,
  color: null,

  validations: {
    kind: { in: PIECE_KINDS },
    color: { in: PIECE_COLORS }
  },

  cssClass: function() {
    var color = this.get('color'),
        kind = this.get('kind');

    return toCssClass(color) + ' ' + toCssClass(kind);
  }.property('color', 'kind'),

  icon: function() {
    var color = this.get('color'),
        kind = this.get('kind');

    return toIcon(color, kind);
  }.property('color', 'kind'),

  _cachePiece: function() {
    var color = this.get('color'),
        kind = this.get('kind'),
        key = _cacheKeyFor(color, kind);
    _cache[key] = this;
  }.on('init')
});

Piece.reopenClass({
  find: function(color, kind) {
    var key = _cacheKeyFor(color, kind);
    return _cache[key];
  },

  findOrCreate: function(color, kind) {
    var piece = this.find(color, kind);
    return piece || this.create({ color: color, kind: kind });
  }
});

export default Piece;
