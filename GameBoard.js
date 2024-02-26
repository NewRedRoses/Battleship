import Ship from "./Ship";

export default class GameBoard {
  constructor() {
    this.board = [];
    this.ships = [];
    this.missedAttacks = [];
    this.initializeBoard();
  }
  initializeBoard() {
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(null);
      }
      this.board.push(row);
    }
  }
  placeShip(ship, row, col, orientation) {
    return row, col;
  }
  receivedAttack(row, col) {}
  allShipsSunk() {
    return this.ships.every((ship) => shink.isSunk());
  }
}
