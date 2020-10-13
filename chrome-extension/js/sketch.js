/* 
Face sketch adapted from Kayla Adams:
https://editor.p5js.org/kaylaada/sketches/HX8uZtynj
 */

document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

let img;
function preload() {
  img = loadImage('coffee_counter-01.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // image(img, 10, 10, 200,300);
}

let value = (170, 148, 133);
function draw(){
  image(img, 10, 10, 200,300);

//coffee beans
  fill(value)
  noStroke()
circle (39,95,19)
  
  fill(value)
  noStroke()
circle (75,95,19)
  
  fill(value)
  noStroke()
circle (111,95,19)
  
  fill(value)
  noStroke()
circle (147,95,19)
  
  fill(value)
  noStroke()
circle (183,95,19)

//second row coffee
  fill(value)
  noStroke()
circle (39,120,19)
  
   fill(value)
  noStroke()
circle (75,120,19)
  
   fill(value)
  noStroke()
circle (111,120,19)
  
  fill(value)
  noStroke()
circle (147,120,19)
  
  fill(value)
  noStroke()
circle (183,120,19)
  
//water drops
  fill(value)
  noStroke()
circle (37,165,16)
  
  fill(value)
  noStroke()
circle (60,165,16)
  
  fill(value)
  noStroke()
circle (81,165,16)
  
  fill(value)
  noStroke()
circle (103,165,16)
  
  fill(value)
  noStroke()
circle (125,165,16)
  
  fill(value)
  noStroke()
circle (147,165,16)
  
  fill(value)
  noStroke()
circle (169,165,16)
  
  fill(value)
  noStroke()
circle (191,165,16)
  
//water drops second row
  fill(value)
  noStroke()
circle (37,188,16)
  
   fill(value)
  noStroke()
circle (60,188,16)
  
  fill(value)
  noStroke()
circle (81,188,16)
  
  fill(value)
  noStroke()
circle (103,188,16)
  
  fill(value)
  noStroke()
circle (125,188,16)
  
  fill(value)
  noStroke()
circle (147,188,16)
  
  fill(value)
  noStroke()
circle (169,188,16)
  
  fill(value)
  noStroke()
circle (191,188,16)

}

function mouseClicked() {
  if (value === 0) {
    value = (170, 148, 133);
  } else {
    value = 0;
  }
}

//0=black, if is the before, else is the clicked on

//function draw() {
//  clear() //Make the background transparent
//
///* try the line of code below */
////  translate(mouseX, mouseY); //Make the face move with mouse
//
///* then try the line of code below */
//  // translate(mouseX-300, mouseY-240); //Make the face move with mouse
//
// img.src = "coffee_counter-01.png"; }
  