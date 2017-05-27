function Pawn (color, positionX, positionY, image, alive) {
    Piece.call(this, color, positionX, positionY, image);
}

Pawn.prototype = Object.create(Piece.prototype);

Pawn.prototype._moveForward = function () {
  if (this.color === "white") {
    if (this.positionX <= 6) {
      this.positionX = this.positionX - 1;
    }
  }
};
