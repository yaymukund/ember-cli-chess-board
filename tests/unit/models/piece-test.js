import Piece from 'ember-cli-chess-board/models/piece';
import {
  PAWN,
  KNIGHT,

  BLACK,
  WHITE
} from 'ember-cli-chess-board/utils/constants';

module('Piece model');

test('it requires a color', function() {
  throws(function() {
    Piece.create({ kind: PAWN });
  }, /is not a valid value for color/);
});

test('it requires a kind', function() {
  throws(function() {
    Piece.create({ color: BLACK });
  }, /is not a valid value for kind/);
});

test('it initializes when both are provided', function() {
  Piece.create({ kind: PAWN, color: BLACK });
  ok(true, 'does not error');
});

test('.cssClass returns the right values', function() {
  var piece = Piece.create({ kind: PAWN, color: BLACK });
  ok(piece.get('cssClass') === 'black pawn');
});

test('.icon returns the right character', function() {
  var piece = Piece.create({ kind: PAWN, color: BLACK });
  ok(piece.get('icon') === '♟');
});

test('.find looks up pieces in the cache', function() {
  ok(typeof Piece.find(BLACK, KNIGHT) === 'undefined');
  var piece = Piece.create({ kind: KNIGHT, color: BLACK });
  ok(Piece.find(BLACK, KNIGHT) === piece);
});

test('.findOrCreate returns cached object after the first call', function() {
  ok(typeof Piece.find(WHITE, PAWN) === 'undefined');
  var piece = Piece.findOrCreate(WHITE, PAWN);
  ok(piece);
  ok(Piece.findOrCreate(WHITE, PAWN) === piece);
});
