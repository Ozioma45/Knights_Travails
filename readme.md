# Knight Moves

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Example Output](#example-output)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The `knightMoves` project calculates the shortest path a knight can take to get from one square to another on a chessboard. Given a starting and ending position, the function `knightMoves` will output all the squares the knight will stop on along the way.
This project is part of the JavaScript Full Stack Odin Project curriculum.

## Features

- Calculates the shortest path for a knight on a chessboard.
- Uses Breadth-First Search (BFS) algorithm to ensure the shortest path.
- Handles different starting and ending positions.
- Outputs the path taken by the knight.

## File Structure

```
knightMoves/
  ├── index.js
  ├── board.js
  ├── knight.js
  ├── bfs.js
  ├── helper.js
```

- `index.js`: Entry point that handles the main logic and calls other functions.
- `board.js`: Handles board-related operations such as validating positions.
- `knight.js`: Handles knight-related operations such as generating possible moves.
- `bfs.js`: Implements the BFS algorithm to find the shortest path.
- `helper.js`: Contains helper functions such as printing the path.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/knightMoves.git
   ```
2. Navigate to the project directory:
   ```bash
   cd knightMoves
   ```

## Usage

To calculate the knight's shortest path, run the `index.js` file with Node.js.

### Running the Example

Open a terminal in the project directory and run:

```bash
node index.js
```

You can modify the `main` function in `index.js` to test different start and end positions.

## Example Output

Example usage and output:

```javascript
main([0, 0], [1, 2]);
// Output:
// You made it in 1 moves! Here's your path:
// [0,0]
// [1,2]

main([0, 0], [3, 3]);
// Output:
// You made it in 2 moves! Here's your path:
// [0,0]
// [2,1]
// [3,3]

main([3, 3], [0, 0]);
// Output:
// You made it in 2 moves! Here's your path:
// [3,3]
// [1,2]
// [0,0]

main([0, 0], [7, 7]);
// Output:
// You made it in 6 moves! Here's your path:
// [0,0]
// [2,1]
// [4,2]
// [6,3]
// [4,4]
// [6,5]
// [7,7]

main([3, 3], [4, 3]);
// Output:
// You made it in 3 moves! Here's your path:
// [3,3]
// [4,5]
// [2,4]
// [4,3]
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
