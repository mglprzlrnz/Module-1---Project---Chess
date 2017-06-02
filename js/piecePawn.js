function Pawn (color, positionX, positionY, image, board) {
    Piece.call(this, color, positionX, positionY, image);
}

Pawn.prototype = Object.create(Piece.prototype);

// Pawn.prototype._moveForward = function () {
//   if (this.color === "white") {
//     if (this.positionX <= 6) {
//       this.positionX = this.positionX - 1;
//     }
//   }
// };

Pawn.prototype._possiblePositions = function () {
  var step = this.color === "white" ? -1 : 1;
  var possiblePositions = [[this.positionX + step, this.positionY],[this.positionX + step,
                      this.positionY + 1],[this.positionX + step, this.positionY - 1]];
  var resultPossiblePositions = this._removeOutsidePositions(possiblePositions);
  return resultPossiblePositions;
};
