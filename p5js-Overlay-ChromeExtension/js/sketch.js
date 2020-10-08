/* 
Face sketch adapted from Kayla Adams:
https://editor.p5js.org/kaylaada/sketches/HX8uZtynj
 */

document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5Canvas');
}

function preLoad () {
    Image = loadImage ('p5js-Overlay-ChromeExtension/icon/coffee_counter-01.png')
}