// Gameboard class
export default class GameBoard {
  constructor() {
    this.board = [];
    this.missedAttacks = [];
    this.ships = [];
  }

  placeShip(ship, x, y, isVertical) {
    const shipCoordinates = [];
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        this.board[x + i]
          ? (this.board[x + i][y] = ship)
          : (this.board[x + i] = [ship]);
        shipCoordinates.push([x + i, y]);
      } else {
        this.board[x]
          ? (this.board[x][y + i] = ship)
          : (this.board[x] = [ship]);
        shipCoordinates.push([x, y + i]);
      }
    }
    this.ships.push({ ship, coordinates: shipCoordinates });
  }

  receiveAttack(x, y) {
    let hitShip = null;
    this.ships.forEach((shipObj) => {
      if (
        shipObj.coordinates.some(([shipX, shipY]) => shipX === x && shipY === y)
      ) {
        hitShip = shipObj.ship;
        hitShip.hit();
      }
    });

    if (!hitShip) {
      this.missedAttacks.push([x, y]);
    }

    return hitShip;
  }

  allShipsSunk() {
    return this.ships.every((shipObj) => shipObj.ship.isSunk());
  }
}
