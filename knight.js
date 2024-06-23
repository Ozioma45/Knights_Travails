const { isValidPosition } = require("./board");
const { bfs } = require("./bfs");

const KNIGHT_MOVES = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
];

function getKnightMoves([x, y]) {
  return KNIGHT_MOVES.map(([dx, dy]) => [x + dx, y + dy]).filter(
    isValidPosition
  );
}

function knightMoves(start, end) {
  return bfs(start, end, getKnightMoves);
}

module.exports = { knightMoves };
