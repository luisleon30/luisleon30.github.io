function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  //head 
  fill ("tan");
  ellipse (200,200,300,300);
  
  
  
  //eyes
  fill('white');
  circle(130,150,60)
  circle(260,150,60)
  fill('lightblue')         
  circle(135,155,40)
  circle(270,155,40)
  
  
  //nose
  fill("white")
  triangle(193,164,219,228,180,180)
  
  
  
  
  
  //mouth
  fill('pink')
  arc(200,250,80,50,0,PI)
  
  
  
  //eyebrows 
  fill('pink')
  rect(120,90,50,10)
 rect    (240,90,50,10)
  
  
  
  //Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
  
}


