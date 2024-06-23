const { knightMoves } = require("./knight");
const { printPath } = require("./helper");

function main(start, end) {
  const path = knightMoves(start, end);
  if (path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    printPath(path);
  } else {
    console.log("No valid path found.");
  }
}

// Example Usage
main([0, 0], [1, 2]);
main([0, 0], [3, 3]);
main([3, 3], [0, 0]);
main([0, 0], [7, 7]);
main([3, 3], [4, 3]);
