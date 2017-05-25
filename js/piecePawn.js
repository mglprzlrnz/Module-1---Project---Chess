function Pawn (color, positionX, positionY, image, alive) {
    Piece.call(this, color, positionX, positionY, image);
}

Pawn.prototype = Object.create(Piece.prototype);
