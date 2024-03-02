class Player {
  constructor(name) {
    this.name = name;
  }
  attack(enemyGameboard, x, y) {
    enemyGameboard.receiveAttack(x, y);
  }
}
