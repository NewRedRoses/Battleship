import GameBoard from "./GameBoard";
import Ship from "./Ship";

// Jest tests for Gameboard class
describe("Gameboard", () => {
  let gameboard;
  let battleship;

  beforeEach(() => {
    gameboard = new GameBoard();
    battleship = new Ship(4);
  });

  test("placeShip() should add the ship to the board", () => {
    gameboard.placeShip(battleship, 2, 3, false);
    expect(gameboard.ships.length).toBe(1);
  });

  test("receiveAttack() should register a hit on the correct ship", () => {
    gameboard.placeShip(battleship, 2, 3, false);
    gameboard.receiveAttack(2, 3);
    expect(battleship.hits).toBe(1);
  });

  test("receiveAttack() should register a missed attack", () => {
    gameboard.placeShip(battleship, 2, 3, false);
    gameboard.receiveAttack(0, 0);
    expect(gameboard.missedAttacks.length).toBe(1);
  });

  test("allShipsSunk() should return true when all ships are sunk", () => {
    gameboard.placeShip(battleship, 2, 3, false);
    battleship.hit();
    battleship.hit();
    battleship.hit();
    battleship.hit();
    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
