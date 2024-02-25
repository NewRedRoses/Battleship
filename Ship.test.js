import Ship from "./Ship";

test("Create ship with 10 hits", () => {
  const object = new Ship(2, 10);
  expect(object.hitCount).toBe(10);
});
