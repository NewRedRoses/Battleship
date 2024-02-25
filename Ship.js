export default class Ship {
  constructor(length, hitCount) {
    this.length = length;
    this.hitCount = hitCount;
    this.isSunk = false;
  }
  hit() {
    this.hitCount++;
  }
  isSunk() {
    // function that checks if ship is sunk.
    // determines it based on length and number of hits taken.
    if (this.hitCount > length) {
      return true;
    } else return false;
  }
}
