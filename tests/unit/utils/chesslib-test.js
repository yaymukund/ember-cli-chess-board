import {
  parsePGN,
  parsePosition
} from 'ember-cli-chess-board/utils/chesslib';

import {
  WHITE,
  ROOK
} from 'ember-cli-chess-board/utils/constants';

var LINARES_MORELIA =
  '[Event "Linares-Morelia"]' + "\n" +
  '[Site "Morelia, Mexico"]' + "\n" +
  '[Date "2007.02.22"]' + "\n" +
  '[EventDate "2007.02.17"]' + "\n" +
  '[Round "5"]' + "\n" +
  '[Result "1-0"]' + "\n" +
  '[White "Levon Aronian"]' + "\n" +
  '[Black "Viswanathan Anand"]' + "\n" +
  '[ECO "D23"]' + "\n" +
  '[WhiteElo "?"]' + "\n" +
  '[BlackElo "?"]' + "\n" +
  '[PlyCount "95"]' + "\n" +
  "\n" +
  '1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Qc2 dxc4 5.Qxc4 Bf5 6.g3 Nbd7' + "\n" +
  '7.Nc3 e6 8.Bg2 Be7 9.O-O O-O 10.Re1 Ne4 11.Qb3 Qb6 12.Nh4 Bxh4' + "\n" +
  '13.gxh4 Nef6 14.e4 Bg6 15.Qxb6 axb6 16.Bf4 Rfe8 17.Rad1 b5' + "\n" +
  '18.Bd6 e5 19.d5 Nh5 20.Bf1 f6 21.b3 Nf4 22.a4 bxa4 23.bxa4 Bf7' + "\n" +
  '24.Rb1 Ra7 25.Red1 Rc8 26.Ne2 Nxe2+ 27.Bxe2 cxd5 28.exd5 Nf8' + "\n" +
  '29.Bb5 Raa8 30.Be7 Ng6 31.d6 Nxe7 32.Bd7 Nc6 33.Rxb7 Nd4' + "\n" +
  '34.Bxc8 Rxc8 35.Rdb1 Rf8 36.Rb8 Be8 37.a5 Nf3+ 38.Kf1 Nd2+' + "\n" +
  '39.Ke1 Nxb1 40.a6 Bc6 41.a7 Kf7 42.d7 Ke7 43.Rxf8 Kxd7 44.a8=Q' + "\n" +
  'Bxa8 45.Rxa8 h5 46.Ra7+ Ke6 47.Rxg7 Kf5 48.Rg3 1-0';

module('parsePGN - Linares-Morelia game PGN');

test('parses tags', function() {
  var game = parsePGN(LINARES_MORELIA);
  ok(game.tags.PlyCount === '95');
  ok(game.tags.Event === 'Linares-Morelia');
  ok(game.tags.Round === '5');
  ok(game.tags.Result === '1-0');
  ok(game.tags.Date === '2007.02.22');
  ok(game.tags.EventDate === '2007.02.17');
  ok(game.tags.ECO === 'D23');
});

module('parsePosition - Linares-Morelia game PGN');

test('returns a game board with pieces in correct positions', function() {
  var game = parsePGN(LINARES_MORELIA),
      position = parsePosition(game.position);

  ok(position[5][6].get('color') === WHITE, 'correctly places white rook');
  ok(position[5][6].get('kind') === ROOK, 'correctly places white rook');

  ok(position[4][7] === position[6][7], 'reuses Piece objects');
});
