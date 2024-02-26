import GameBoard from "./GameBoard";

test("gameBoard is 10x10", () => {
  const gameBoard = new GameBoard();
  const grid10 = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ];
  expect(gameBoard.board).toStrictEqual(grid10);
});

test.skip("Place ship at cordinate: [1,3][2,1]", () => {
  const cordinates = [
    [0, 0],
    [0, 1],
  ];
  const gameBoard = new GameBoard();
  expect(gameBoard.placeShip("", cordinates[0][0], cordinates[0][1])).toBe(
    [0, 0],
    [0, 1],
  );
});
