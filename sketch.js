//Create variables here

var Dog, happydog
var Foods, Foodstock

function preload()
{
  //load images here
  
  Dog = LoadImage("dogImg.png");
  happydog = LoadImage ("dogImg1.png")

}

function setup() {
	createCanvas(500, 500);
  
  Dog = createSprite (250, 250);
  Dog.addImage ("Dog");

  var database;

  Foodstock = database.ref('Food');
  Foodstock.on("value", readStock);

}


function draw() {  

  background(46, 139, 87);

  if(KeyWentDown(UP_ARROW)){
    writeStock(Foods);
    Dog.addImage(happydog);
  }

  drawSprites();
  //add styles here
 
 function readStock(data){
   Foods = data.val();
 }

 function writeStock(x);

 if(x<=0){
   x=0
 } else{
   x=x-1;
 }

 database.ref('/'). update({
   food:x 
 })

}



