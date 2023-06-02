let bubbleSize = 10;
let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER)
  textSize(50)
  fill(0)
  text("bubbles", width / 2, height / 2)

  for (let i = 0; i < 0; i++) {
    bubble = {
      x: random(0, width),
      y: random(0, height),
      color: color(random(2), random(2), random(255))
    };
    bubbles.push(bubble)
  }
}

function draw() {
  // background = "white";

  for (let bubble of bubbles){
    fill(bubble.color);
    circle(bubble.x, bubble.y, bubbleSize);
    bubble.x += random(-5, 5);
    bubble.y += random(-5, 5);
  }

  if (mouseIsPressed) {
    bubble = {
      x: mouseX,
      y: mouseY,
      color: color(random(2), random(255), random(2))
    };
    bubbles.push(bubble)
  }
}


  // function mouseClicked() {
  //   bubble = {
  //     x: mouseX,
  //     y: mouseY,
  //     color: color(random(2), random(255), random(255))
  //   };
  //   bubbles.push(bubble)
  // }
