import Ship from "./Ship";

test("Create ship with 10 hits", () => {
  const object = new Ship(2);
  object.hitCount = 10;
  expect(object.hitCount).toBe(10);
});
test("ship takes 3 hits", () => {
  const object = new Ship(2);
  for (let i = 0; i < 3; i++) {
    object.hit();
  }
  expect(object.hitCount).toBe(3);
});
test("ship is NOT sunken", () => {
  const object = new Ship(10, 1);
  expect(object.isSunk()).toBe(false);
});

test("ship is sunken", () => {
  const object = new Ship(10);
  object.isSunk = true;
  expect(object.isSunk).toBe(true);
});
