//global vars
var brushSize, brushShape, paintColour;
var coloursArray = ['pink', 'green', 'blue'];

function setup() {
    var canvas = createCanvas(800, 450);
    canvas.parent("p5container");
    brushSize = 10;
    background(0,205,255);
    
    paintColour = coloursArray[0];

}

function draw() {
    
    if(paintColour == 'pink'){
        fill('rgb(255,192,203)');
    } else if(paintcolour == 'green'){
        fill('rgb(0,255,0)');
    } else if(paintColour == 'blue'){
        fill('rgb(0,0,255)');
    }

    noStroke();

    if(mouseIsPressed == true){
    ellipse(mouseX, mouseY, brushSize);
    };

}

function keyPressed(){ if (keyCode === UP_ARROW && brushSize <= 100) {
    brushSize += 5;
  } else if (keyCode === DOWN_ARROW && brushSize >= 10) {
      brushSize -= 5;
  } 

  if(keyCode === 80) {
      paintColour = coloursArray[0];
  }
  
  if(keyCode === 71) {
      paintColour = coloursArray[1];
  }

  if(keyCode === 66) {
      paintColour = coloursArray[2];
  }

 
}    

