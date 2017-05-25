function Chess () {
  this.board = [
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
  ];

  // this.turn; // = Player.color (the turns change with the player's color)
  this.check  = false;
  this.checkMate = false;

}

Chess.prototype._getAvailablePosition = function () {
  var emptyTiles = [];

  this.board.forEach(function(row, rowIndex){
    row.forEach(function(elem, colIndex){
      if (!elem) emptyTiles.push([rowIndex,colIndex]);
    });
  });
  return emptyTiles;
};

Chess.prototype._renderBoard = function () {
  this.board.forEach(function(row){ console.log(row); });
};



// function Player (color) {
//   this.color = color;
// }


// function getAvailablePosition () {
//   var emptyTiles = [];
//   this.board.forEach(function(row, rowIndex){
//     row.forEach(function(elem, colIndex){
//       // if (!elem) emptyTiles.push({x:rowIndex,y:colIndex});
//       cosole.log("hola");
//     });
//   });
// }

// function pawn_piece () {
//   this.name = pawn;
//   this.x;
//   this.y;
//   this.color;
//   function pawnAvailablePosition {
//     var availablePosition = [];
//     if (this.color === "black") {
//       availablePosition = [this.x+=, this.y];
//     } else {
//       availablePosition = [this.x-=, this.y]
//     }
//   }
// }
//
//
//
// function rook () {
//   this.name = rook;
//   this.x;
//   this.y;
//   this.color;
//   function pawnAvailablePosition () {
//     var availablePosition = [];
//     for (var i = x; i < 6; i++) {
//       if (this.color === "black") {
//       availablePosition = [[this.x+= this.y]];
//       } else {
//       availablePosition = [this.x-= this.y]
//       }
//     }
//   }
// }
// function knight () {
//   this.name = knight;
//   this.x;
//   this.y;
//   this.color;
//   function pawnAvailablePosition {
//     var availablePosition = [];
//     if (this.color === "black") {
//       availablePosition = [this.x+=, this.y];
//     } else {
//       availablePosition = [this.x-=, this.y]
//     }
//   }
// }
