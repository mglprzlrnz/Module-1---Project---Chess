function Pawn (color, positionX, positionY, image, alive) {
    Piece.call(this, color, positionX, positionY, image);
}

Pawn.prototype = Object.create(Piece.prototype);

Pawn.prototype._moveForward = function () {
  if (this.color === "white") {
    if (this.positionX <= 6) {
      var x = this.positionX;
      var y = this.positionY;
      window.game.board[x][y] = null;
      this.positionX = this.positionX - 1;
      window.game._renderPieces ();
    }
  }
};
