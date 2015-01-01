export var WHITE = '__WHITE_PIECE_COLOR__';
export var BLACK = '__BLACK_PIECE_COLOR__';
export var PAWN = '__PAWN_PIECE_KIND__';
export var ROOK = '__ROOK_PIECE_KIND__';
export var KNIGHT = '__KNIGHT_PIECE_KIND__';
export var BISHOP = '__BISHOP_PIECE_KIND__';
export var QUEEN = '__QUEEN_PIECE_KIND__';
export var KING = '__KING_PIECE_KIND__';

export var PIECE_KINDS = Object.freeze([
  PAWN,
  ROOK,
  KNIGHT,
  BISHOP,
  QUEEN,
  KING
]);

export var PIECE_COLORS = Object.freeze([
  WHITE,
  BLACK
]);

export var toCssClass = function(c) {
  switch (c) {
    case WHITE: return 'white';
    case BLACK: return 'black';

    case PAWN: return 'pawn';
    case ROOK: return 'rook';
    case KNIGHT: return 'knight';
    case BISHOP: return 'bishop';
    case QUEEN: return 'queen';
    case KING: return 'king';
  }
};

export var toIcon = function(color, kind) {
  if (color === WHITE) {
    switch (kind) {
      case PAWN: return '♙';
      case ROOK: return '♖';
      case KNIGHT: return '♘';
      case BISHOP: return '♗';
      case QUEEN: return '♕';
      case KING: return '♔';
    }

  } else if (color === BLACK) {
    switch (kind) {
      case PAWN: return '♟';
      case ROOK: return '♜';
      case KNIGHT: return '♞';
      case BISHOP: return '♝';
      case QUEEN: return '♛';
      case KING: return '♚';
    }
  }

  throw new Error('Could not find icon for piece %@ and color %@'.fmt(kind, color));
};
