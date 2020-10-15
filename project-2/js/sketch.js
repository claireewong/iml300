// fill (249, 241, 239)
//   noStroke ();
// rect (10, 150, 300, 20)

document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>')
let bubbles = [];
let x = 0;

function setup() {
  createCanvas(600, 700);
  var y = 100;
  var r = 10;
  
  for (i = 0; i <40; i++) {
    if (i % 5 == 0 && i != 0) { //so when i is 6, 12, 18, 24 , go in a new line   
      x = 0;
      y += 60;
    }   
   x += 40;   
    var b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function draw() {
  fill (249, 241, 239)
  noStroke ();
rect(0, 0, 250, 650, 30)
  
  fill (135, 121, 111)
  noStroke ();
rect(0, 550, 250, 70)
  
textSize(30);
  fill (135, 121, 111);
  noStroke();
  textFont('Georgia');
text('Coffee Counter', 19, 45);
  
  textSize(13);
  fill (135, 121, 111);
  noStroke();
text('Coffee Intake:', 20, 80);
  
  textSize(13);
  fill (135, 121, 111);
  noStroke();
text('Water Intake:', 20, 199);
  
  fill (249, 241, 239);
  noStroke();
  textSize(10);
text('**it is reccomended to drink no more than 5', 26, 573);
  
  fill (249, 241, 239);
  noStroke();
  textSize(10);
text('cups of coffee a day & to drink at least 2 cups', 27, 586);
  
  fill (249, 241, 239);
  noStroke();
  textSize(10);
text('of water oer cup of coffee**', 65, 600);
  
  
  
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = color(249, 241, 239);
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.col = color(135, 121, 111); // fill another color after clicking
    }
  }

  show() {
    stroke(135, 121, 111);
    strokeWeight(1.5);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }
}

//a=x, b=y, k=r, i=p, b=e



// fill (249, 241, 239)
//   noStroke ();
// rect (10, 150, 300, 20)





