function Rook (color, positionX, positionY, image, alive) {
    Piece.call(this, color, positionX, positionY, image);
}

Rook.prototype = Object.create(Piece.prototype);
