function Piece(color, positionX, positionY, image, board, alive) {
  this.color = color;
  this.positionX = positionX;
  this.positionY = positionY;
  if (color === "white") {
    this.image = "img/" + image + 'w.png';
  } else {
    this.image = "img/" + image + 'b.png';
  }
  this.board = board;
  this.alive = true;
}
Piece.prototype.deadPiece = function(x,y) {
  this.alive = false;
};




//
// Piece.prototype._removeOutsidePositions = function(possiblePositions) {
//   var result = [];
//   for (i = 0; i < possiblePositions.length ; i++) {
//     var possiblePosition = possiblePositions[i];
//     if (possiblePosition[0] >= 0 && possiblePosition[0] <= 7 &&
//         possiblePosition[1] >= 0 && possiblePosition[1] <= 7) {
//           result.push(possiblePosition);
//       }
//     }
//   return result;
// };
