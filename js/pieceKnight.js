function Knight (color, positionX, positionY, image, board, alive) {
    Piece.call(this, color, positionX, positionY, image, board, alive);
}

Knight.prototype = Object.create(Piece.prototype);

Knight.prototype._possiblePositions = function () {
  var resultPossiblePositions = [];
  if ((this.positionX + 2) <= 7 && (this.positionY + 1) <= 7) {
      if (this.board[this.positionX + 2][this.positionY + 1] === null ||
    this.board[this.positionX + 2][this.positionY + 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX + 2, this.positionY + 1]);
    }
  }
  if ((this.positionX + 2) <= 7 && (this.positionY - 1) >= 0) {
      if (this.board[this.positionX + 2][this.positionY - 1] === null ||
    this.board[this.positionX + 2][this.positionY - 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX + 2, this.positionY - 1]);
    }
  }
  if ((this.positionX - 2) >= 0 && (this.positionY + 1) <= 7) {
      if (this.board[this.positionX - 2][this.positionY + 1] === null ||
    this.board[this.positionX - 2][this.positionY + 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX - 2, this.positionY + 1]);
    }
  }
  if ((this.positionX - 2) >= 0 && (this.positionY - 1) >= 0) {
      if (this.board[this.positionX - 2][this.positionY - 1] === null ||
    this.board[this.positionX - 2][this.positionY - 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX - 2, this.positionY - 1]);
    }
  }
  if ((this.positionX + 1) <= 7 && (this.positionY + 2) <= 7) {
      if (this.board[this.positionX + 1][this.positionY + 2] === null ||
    this.board[this.positionX + 1][this.positionY + 2].color !== this.color) {
    resultPossiblePositions.push([this.positionX + 1, this.positionY + 2]);
    }
  }
  if ((this.positionX - 1) >= 0 && (this.positionY + 2) <= 7) {
      if (this.board[this.positionX - 1][this.positionY + 2] === null ||
    this.board[this.positionX - 1][this.positionY + 2].color !== this.color) {
    resultPossiblePositions.push([this.positionX - 1, this.positionY + 2]);
    }
  }
  if ((this.positionX + 1) <= 7 && (this.positionY - 2) >= 0) {
      if (this.board[this.positionX + 1][this.positionY - 2] === null ||
    this.board[this.positionX + 1][this.positionY - 2].color !== this.color) {
    resultPossiblePositions.push([this.positionX + 1, this.positionY - 2]);
    }
  }
  if ((this.positionX - 1) >= 0 && (this.positionY - 2) >= 0) {
      if (this.board[this.positionX - 1][this.positionY - 2] === null ||
    this.board[this.positionX - 1][this.positionY - 2].color !== this.color) {
    resultPossiblePositions.push([this.positionX - 1, this.positionY - 2]);
    }
  }
  return resultPossiblePositions;
};
