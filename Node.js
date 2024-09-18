class Node {
  constructor(pos) {
    this.connection = null;
    this.oldConnection = null;
    this.isParent = false;
    this.isLeftover = false;
    this.pos = pos;
    this.size = ELLIPSE_SIZE;
    this.strokeWeight = STROKE_WEIGHT;
    this.color = color(random(200, 250), 100, 50);
  }
  makeConnection() {
    if (this.connection) {
      return;
    }
    let openNodes = nodes.filter((newNode) => !newNode.connection && newNode !== this && !newNode.isParent);
    if (openNodes.length > 0) {
      this.isParent = true;
      this.connection = random(openNodes);
      this.connection.connection = this;
      this.connection.isParent = false;
    } else {
    }
  }
  drawNode() {
    push();
    fill(this.color);
    noStroke();
    dn.ellipse(this.pos, this.size);
    pop();
  }
  drawConnection(travel = 1) {
    if (!this.connection) {
      this.drawNode();
      return;
    }
    if (this.isParent) {
      push();
      let gradient = drawingContext.createLinearGradient(this.pos.x, this.pos.y, this.connection.pos.x, this.connection.pos.y);
      gradient.addColorStop(0, this.color.toString());
      gradient.addColorStop(1, this.connection.color.toString());
      drawingContext.strokeStyle = gradient;
      strokeWeight(this.strokeWeight);
      if (travel < 1) {
        dn.line(this.pos, p5.Vector.lerp(this.oldConnection.pos, this.connection.pos, travel));
      } else {
        dn.line(this.pos, this.connection.pos);
      }
      pop();
    }
  }
  clearConnection() {
    this.oldConnection = this.connection;
    this.connection = null;
  }
}
