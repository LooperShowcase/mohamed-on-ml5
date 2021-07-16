class obstacle {
  constructor() {
    this.size = 90;
    this.x = width;
    this.y = height - this.size;
  }
  show() {
    image(obstacleimage, this.x, this.y, this.size, this.size);
  }
  move() {
    this.x = this.x - 10;
  }
}
