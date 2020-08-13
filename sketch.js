const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object1,object2,object3,object4,object5,object6,object7,object8,object9,object10;


function setup() {
  createCanvas(1200,800);
 engine=Engine.create();
world=engine.world;
object1=Bodies.rectangle(200,390,20,20);
World.add(world,object1);
object2=Bodies.rectangle(240,390,20,20);
World.add(world,object2);
object3=Bodies.rectangle(280,390,20,20);
World.add(world,object3);
object4=Bodies.rectangle(350,390,20,20);
World.add(world,object4);
object5=Bodies.rectangle(400,390,20,20);
World.add(world,object5);
object6=Bodies.rectangle(450,390,20,20);
World.add(world,object6);
object7=Bodies.rectangle(510,390,20,20);
World.add(world,object6);
object8=Bodies.rectangle(580,390,20,20);
World.add(world,object6);
object9=Bodies.rectangle(650,390,20,20);
World.add(world,object6);
object10=Bodies.rectangle(710,390,20,20);
World.add(world,object6);
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);  
  rectMode(CENTER);
  rect(object1.position.x,object1.position.y,20,20);
  rect(object2.position.x,object2.position.y,20,20);
  rect(object3.position.x,object3.position.y,20,20);
  rect(object4.position.x,object4.position.y,20,20);
  rect(object5.position.x,object5.position.y,20,20);
  rect(object6.position.x,object6.position.y,20,20);
  rect(object7.position.x,object7.position.y,20,20);
  rect(object8.position.x,object8.position.y,20,20);
  rect(object9.position.x,object9.position.y,20,20);
  rect(object10.position.x,object10.position.y,20,20);
  object1.velocityY=-3;
  object2.velocityY=-3;
  object3.velocityY=-3;
  object4.velocityY=-3;
  object5.velocityY=-3;
  object6.velocityY=-3;
  object7.velocityY=-3;
  object8.velocityY=-3;
  object9.velocityY=-3;
  object10.velocityY=-3;
  drawSprites();
}