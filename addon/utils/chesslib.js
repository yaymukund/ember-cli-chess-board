/* global require */
import { PGN, brands } from 'chesslib';
import Piece from 'ember-cli-chess-board/models/piece';

import {
  WHITE, BLACK,
  PAWN, ROOK, KNIGHT, BISHOP, QUEEN, KING
} from 'ember-cli-chess-board/utils/constants';

var _getColor = function(chesslibPiece) {
  return chesslibPiece.isWhite ? WHITE : BLACK;
};

var _getKind = function(chesslibPiece) {
  switch (chesslibPiece.brand) {
    case brands.PAWN: return PAWN;
    case brands.ROOK: return ROOK;
    case brands.KNIGHT: return KNIGHT;
    case brands.BISHOP: return BISHOP;
    case brands.QUEEN: return QUEEN;
    case brands.KING: return KING;
  }
};

var _findPiece = function(chesslibPiece) {
  if (!chesslibPiece) { return null; }

  var color = _getColor(chesslibPiece),
      kind = _getKind(chesslibPiece);

  return Piece.findOrCreate(color, kind);
};

var parsePGN = function(pgn) {
  return PGN.parse(pgn)[0];
};

var parsePosition = function(position) {
  return position.board.storage.map(function(row) {
    return row.map(_findPiece);
  });
};

export { parsePGN, parsePosition };
