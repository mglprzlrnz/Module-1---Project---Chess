function Piece(color, positionX, positionY, image, alive) {
  this.color = color;
  this.positionX = positionX;
  this.positionY = positionY;
  this.alive = true;
  if (color === "white") {
    this.image = "js/" + image + 'w.png';
  } else {
    this.image = "js/" + image + 'b.png';
  }

}
