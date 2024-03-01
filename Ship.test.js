import Ship from "./Ship";
// Jest tests for Ship class
describe("Ship", () => {
  test("hit() should increase the number of hits", () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test("isSunk() should return true when all hits are equal to length", () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("isSunk() should return false when hits are less than length", () => {
    const ship = new Ship(4);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
});
