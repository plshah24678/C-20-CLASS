var fixrect,movingrect;



function setup() {
  createCanvas(1200,800);
  fixrect = createSprite(200,200,50,80);
fixrect.shapeColor = "green";
fixrect.debug=true;


  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor="green";
  movingrect.debug=true;
}

function draw() {
  background(255,255,255); 
 movingrect.x = World.mouseX;
 movingrect.y = World.mouseY;
 
 if(movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2
  && fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2
  && movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2
  && fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2
  ){
   movingrect.shapeColor="red";
   fixrect.shapeColor="red";
 }

 else{
  movingrect.shapeColor="green";
  fixrect.shapeColor="green";
 }
  
  drawSprites();
}