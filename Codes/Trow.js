class Trow{
    constructor(x, y, width, height, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.baseImg = loadImage("Imgs/Base.png");
        this.trowImg = loadImage("Imgs/Throw.png");
      }
    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.trowImg, 0, 0, this.width, this.height);
        pop();
        image(this.baseImg, 70, 20, 20, 20);
        noFill();
    }
}