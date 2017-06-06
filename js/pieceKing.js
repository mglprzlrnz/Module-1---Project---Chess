function King (color, positionX, positionY, image, board, alive) {
    Piece.call(this, color, positionX, positionY, image, board, alive);
}

King.prototype = Object.create(Piece.prototype);

King.prototype._possiblePositions = function () {
  var resultPossiblePositions = [];
  if ((this.positionX + 1) <= 7 && (this.positionY + 1) <= 7) {
      if (this.board[this.positionX + 1][this.positionY + 1] === null ||
          this.board[this.positionX + 1][this.positionY + 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX + 1, this.positionY + 1]);
    }
  }
  if ((this.positionX + 1) <= 7) {
      if (this.board[this.positionX + 1][this.positionY] === null ||
          this.board[this.positionX + 1][this.positionY].color !== this.color) {
    resultPossiblePositions.push([this.positionX + 1, this.positionY]);
    }
  }
  if ((this.positionY + 1) <= 7) {
      if (this.board[this.positionX][this.positionY + 1] === null ||
          this.board[this.positionX][this.positionY + 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX, this.positionY + 1]);
    }
  }
  if ((this.positionX + 1) <= 7 && (this.positionY - 1) >= 0) {
      if (this.board[this.positionX + 1][this.positionY - 1] === null ||
          this.board[this.positionX + 1][this.positionY - 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX + 1, this.positionY - 1]);
    }
  }
  if ((this.positionX - 1) >= 0 && (this.positionY + 1) <= 7) {
      if (this.board[this.positionX - 1][this.positionY + 1] === null ||
          this.board[this.positionX - 1][this.positionY + 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX - 1, this.positionY + 1]);
    }
  }
  if ((this.positionY - 1) <= 7) {
      if (this.board[this.positionX][this.positionY - 1] === null ||
          this.board[this.positionX][this.positionY - 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX, this.positionY - 1]);
    }
  }
  if ((this.positionX - 1) >= 0) {
      if (this.board[this.positionX - 1][this.positionY] === null ||
          this.board[this.positionX - 1][this.positionY].color !== this.color) {
    resultPossiblePositions.push([this.positionX - 1, this.positionY]);
    }
  }
  if ((this.positionX - 1) >= 0 && (this.positionY - 1) <= 7) {
      if (this.board[this.positionX - 1][this.positionY - 1] === null ||
          this.board[this.positionX - 1][this.positionY - 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX - 1, this.positionY - 1]);
    }
  }
  return resultPossiblePositions;
};
