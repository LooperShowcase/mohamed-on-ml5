class Player {
  constructor() {
    this.size = 90;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 0.7;
  }
  show() {
    image(playerimg, this.x, this.y, this.size, this.size);
  }
  jump() {
    if (this.y == height - this.size) this.velocityY = -16;
  }
  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collied(currentObs) {
    let iscolliding = collideRectRect(
      this.x,
      this.y,
      this.size,
      this.size,
      currentObs.x,
      currentObs.y,
      currentObs.size,
      currentObs.size
    );
    return iscolliding;
  }
}
