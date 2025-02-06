function getValidMoves(x, y) {
   const moves = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
   ];

   return moves
      .map(([dx, dy]) => [x + dx, y + dy])
      .filter(([newX, newY]) => newX >= 0 && newX < 8 && newY >= 0 && newY < 8);
}

function knightMoves(start, end) {
   if (
      start[0] < 0 ||
      start[0] > 7 ||
      start[1] < 0 ||
      start[1] > 7 ||
      end[0] < 0 ||
      end[0] > 7 ||
      end[1] < 0 ||
      end[1] > 7
   ) {
      return "Invalid input: Coordinates must be within an 8x8 chessboard";
   }
   const queue = [[start, [start]]]; // Store [current position, path taken]
   const visited = new Set([`${start[0]}, ${start[1]}`]);

   while (queue.length > 0) {
      const [[x, y], path] = queue.shift(); // Dequeue next position

      if (x === end[0] && y === end[1]) {
         console.log(
            `You made it in ${path.length - 1} moves. Here's your path:`,
         );
         path.forEach((element) => {
            console.log(element);
         });
         return path;
      }

      // visited.add(`${x}, ${y}`);

      for (const [newX, newY] of getValidMoves(x, y)) {
         if (!visited.has(`${newX}, ${newY}`)) {
            queue.push([
               [newX, newY],
               [...path, [newX, newY]],
            ]);
         }
      }
   }

   return null;
}

knightMoves([0, 0], [3, 3]);
