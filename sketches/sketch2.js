
function setup() {


  createCanvas(windowWidth, windowHeight);
  background('lightblue');


}
function draw() {
  
  //The Ground                                          
  fill('green');                 
  rect(0,400,windowWidth,100);


  //The House
  fill('green');                                                       
  stroke('red');
  rect(50,200,220,200);

  //Windows                            
  fill('yellow');
  strokeWeight(10);
  stroke('pink');
  rect(80,250,50,50);
  rect(180,250,50,50);

  //Triangle                        
  fill('red');
  triangle(50,200, 100,100,270,200);



//pool                                

fill('blue');
rect(0,450,200,50);
fill('lightblue')
ellipse(100,450,200,30)

//the door                   
fill("yellow");
rect(125,325,50,75);


//sun 
fill('yellow')                        
strokeWeight(5);
circle(0,0,100); 
 line(50,50,75,75); 
  line(20,60,30,80);
line(60,20,90,45);







  
  
}
