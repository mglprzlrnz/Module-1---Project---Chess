var game ;

window.onload = function () {

  game = new Chess();
  game.renderPieces();
  game.renderBoard();
  game.turn = "white";

$(document).ready(function() {
$(document).on("click", ".piece", function(){
  game._clickListeners(this);
});

$(document).on("click", ".blue", function(){
  game._movementListeners(this);
});
});
};
