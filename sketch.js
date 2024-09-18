const SUBDIVISIONS = 4;
const ELLIPSE_SIZE = 40;
const STROKE_WEIGHT = 25;
const ANIM_DURATION = 500;

let nodes = [];
let openNodes = [];
let animStart

function setup() {
  colorMode(HSL);
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas");
  background(95);
  createNodes(SUBDIVISIONS);
  shuffle(nodes, true);
  nodes.forEach((node) => node.makeConnection());
  nodes.forEach((node) => node.drawConnection());
}

function draw(){
  if (millis() < animStart + ANIM_DURATION) {
    clear()
    let travel = (millis() - animStart) / ANIM_DURATION
    nodes.forEach(node=>node.drawConnection(Ease.CubicInOut(travel)))
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createNodes(divs, edges = false) {
  let dx = width / divs;
  let dy = height / divs;
  let startX = edges ? 0 : 1;
  let startY = edges ? 0 : 1;
  let endX = edges ? divs : divs - 1;
  let endY = edges ? divs : divs - 1;
  for (let y = startY; y <= endY; y++) {
    for (let x = startX; x <= endX; x++) {
      nodes.push(new Node(createVector(x * dx, y * dy)));
    }
  }
}

function resetConnections() {
  clear();
  background(95);
  nodes.forEach((node) => node.clearConnection());
  nodes.filter((node) => node.isParent).forEach((node) => node.makeConnection());
  animStart = millis() ;
}

function easeInOutCubic(x){
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }