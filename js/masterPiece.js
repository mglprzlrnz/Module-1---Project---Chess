function Piece(color, positionX, positionY, image, alive) {
  this.color = color;
  this.positionX = positionX;
  this.positionY = positionY;
  this.alive = true;
  if (color === "white") {
    this.image = "img/" + image + 'w.png';
  } else {
    this.image = "img/" + image + 'b.png';
  }

}
