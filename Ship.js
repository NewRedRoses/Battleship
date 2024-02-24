class Ship {
  constructor(length, hitCount) {
    this.length = length;
    this.hitCount = hitCount;
    this.isSunk = false;
  }
  hit() {
    // function that increases # of hits
    this.hit++;
  }
  isSunk() {
    // function that checks if ship is sunk.
    // determines it based on length and number of hits taken.
  }
}
