function wAnimals(){
    var wild=createSprite(random(0,width),0,10,10);
    wild.shapeColor="red";
    wild.velocityY=6;
    wild.lifetime=300;
    wildGroup.add(wild);

  
}
function Animals(){
 
    var animal=createSprite(random(0,width),0,10,10);
    animal.shapeColor="green";
    animal.velocityY=6;
    animal.lifetime=300;
    animalGroup.add(animal);

  
}
function Fruits(){
  var fruits=createSprite(random(0,width),0,10,10);
  fruits.shapeColor="pink"
  fruits.velocityY=6;
  fruits.lifetime=300;
  fruitGroup.add(fruits);
}
function Net(){
  var net=createSprite(width/2,height-25,20,20);
  net.shapeColor="teal";
  net.x=hunter.x;
  net.y=hunter.y;
  net.velocityY=-5;
  net.lifetime=300;
  net.depth=hunter.depth;
  hunter.depth+=1;
}